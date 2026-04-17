const { test, expect } = require('@playwright/test');
const path = require('path');

test('3色クリックで #trident の色クラスが切り替わる', async ({ page }) => {
  const studentFile = process.env.STUDENT_FILE;
  if (!studentFile) throw new Error('STUDENT_FILE 環境変数が設定されていません');

  const filePath = `file://${path.resolve(__dirname, '..', studentFile)}`;
  await page.goto(filePath);

  const target = page.locator('#trident');

  // 赤クリック → colorRed のみ
  await page.locator('li.red').click();
  await expect(target).toHaveClass(/(^|\s)colorRed(\s|$)/);
  await expect(target).not.toHaveClass(/colorBlue/);
  await expect(target).not.toHaveClass(/colorOrange/);

  // 青クリック → colorBlue のみ
  await page.locator('li.blue').click();
  await expect(target).toHaveClass(/(^|\s)colorBlue(\s|$)/);
  await expect(target).not.toHaveClass(/colorRed/);
  await expect(target).not.toHaveClass(/colorOrange/);

  // オレンジクリック → colorOrange のみ
  await page.locator('li.orange').click();
  await expect(target).toHaveClass(/(^|\s)colorOrange(\s|$)/);
  await expect(target).not.toHaveClass(/colorRed/);
  await expect(target).not.toHaveClass(/colorBlue/);
});
