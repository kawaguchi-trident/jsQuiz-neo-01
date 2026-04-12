const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const studentId = process.argv[2] || '00';
const filePath = path.join(process.cwd(), 'students', studentId, 'index.html');
const html = fs.readFileSync(filePath, 'utf-8');

// 学生ファイルから最後の <script> の中身だけを取り出す
const scriptMatches = [...html.matchAll(/<script(?:[^>]*)>([\s\S]*?)<\/script>/gi)];
const studentScript = scriptMatches.length > 0 ? scriptMatches[scriptMatches.length - 1][1] : '';

// DOM本体は script を除いた状態で作る
const htmlWithoutScripts = html.replace(/<script(?:[^>]*)>[\s\S]*?<\/script>/gi, '');

const dom = new JSDOM(htmlWithoutScripts, {
  runScripts: 'outside-only',
});

const { window } = dom;

global.window = window;
global.document = window.document;

const $ = require('jquery');

window.$ = $;
window.jQuery = $;

// 学生の JavaScript を、jQuery をセットした後で実行
window.eval(studentScript);

const target = window.document.querySelector('#trident');

function click(selector) {
  const el = window.document.querySelector(selector);

  if (!el) {
    throw new Error(`要素が見つかりません: ${selector}`);
  }

  el.dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
}

function expectOnlyClass(className) {
  const colorClasses = ['colorRed', 'colorBlue', 'colorOrange'];

  if (!target.classList.contains(className)) {
    throw new Error(`NG: ${className} が付いていません`);
  }

  colorClasses.forEach((item) => {
    if (item !== className && target.classList.contains(item)) {
      throw new Error(`NG: ${className} 以外の色クラスが残っています`);
    }
  });
}

try {
  click('li.red');
  expectOnlyClass('colorRed');

  click('li.blue');
  expectOnlyClass('colorBlue');

  click('li.orange');
  expectOnlyClass('colorOrange');

  console.log('OK');
} catch (error) {
  console.error(error.message.trim());
  process.exit(1);
}
