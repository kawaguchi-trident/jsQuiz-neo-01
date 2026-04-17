# jsQuiz-neo-01

「クリックイベントとクラス操作」の振り返りです。

## 課題内容

下記の「見本」のように、色名が書かれた list をクリックすると、`#trident`（トライデントコンピュータ専門学校）の文字色が変わる JavaScript を書いてください。

![jsQuiz01サンプル](./sample1.gif)

1. `students/{自分の番号}/index.html` を編集して解答してください。
2. 解答は、`<script></script>` 内だけで OK です。
3. jQuery 利用も可です。
4. jQuery を利用する場合は、`$(function(){})` 内に書きましょう。

### 仕様（採点条件）

- `li.red` をクリック → `#trident` に `colorRed` を付与し、`colorBlue` / `colorOrange` は外す
- `li.blue` をクリック → `#trident` に `colorBlue` を付与し、`colorRed` / `colorOrange` は外す
- `li.orange` をクリック → `#trident` に `colorOrange` を付与し、`colorRed` / `colorBlue` は外す

**他の色クラスを外し忘れると不合格**になるので注意。

---

## 提出方法

### ① Fork
このリポジトリを自分のアカウントに Fork してください。

### ② clone
自分の Fork を GitHub Desktop で clone します。

### ③ branch を作る
ブランチ名に「quiz1/自分の名前」を記入する（例：quiz1/kawaguchi）

### ④ コードを書く
`students/{自分の番号}/index.html` を編集して課題を完成させます。
（例：出席番号が 7 番なら `students/7/index.html`）

ルートの `index.html` を `students/{自分の番号}/index.html` にコピーしてから編集するのが簡単です。

### ⑤ commit / push
変更を commit して push してください。
- title：出席番号 名前
- message：提出します。

### ⑥ Pull Request を作成
元のリポジトリに向けて Pull Request を作成してください。

## 判定について

- Pull Request を出すと自動判定が実行されます
- 成功 → ✅ **合格！** のコメントが付きます
- 失敗 → ❌ **不合格** のコメントと確認ポイントが付きます

結果は PR のコメント欄と「Checks」タブで確認してください。

## ディレクトリ構成

```
jsQuiz-neo-01/
├── index.html              # 問題ファイル（参照・複製元）
├── sample1.gif             # 完成イメージ
├── students/               # 解答フォルダ ★ここに作業する
│   └── {自分の番号}/
│       └── index.html      # index.html を複製して解答を記述
├── .github/                # 自動判定の設定（触らない）
├── tests/                  # 自動判定の設定（触らない）
├── playwright.config.js    # 自動判定の設定（触らない）
└── README.md
```

## 注意

- `students/{自分の番号}/index.html` の `<script>` 内だけ編集してください
- HTML構造は変えないでください（`#trident`, `li.red`, `li.blue`, `li.orange` は固定）
- `students/` 以外のファイルは変更しないでください
- エラーが出たら修正して再度pushしてください

---

## 模範解答

授業資料の一番下に、リンクがあります。
