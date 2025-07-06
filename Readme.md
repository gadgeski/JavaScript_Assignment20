# リストフィルタリング機能 - 学習用 README

## 概要

フルーツリストをリアルタイムで絞り込み検索できる Web アプリケーションです。

## 主な機能

- テキスト入力による即座のフィルタリング
- 大文字小文字を区別しない検索
- スムーズなアニメーション付きの表示/非表示切り替え

## 学習のポイント

### 1. DOM 操作の基本

```javascript
// 要素の取得
const filterInput = document.getElementById("filterInput");
const listItems = document.querySelectorAll(".list-item");
```

- `getElementById()` - 単一要素の取得
- `querySelectorAll()` - 複数要素の取得

### 2. イベントリスナーの活用

```javascript
filterInput.addEventListener("input", () => {
  // 入力値が変更されるたびに実行
});
```

- `input` イベントでリアルタイム検索を実現

### 3. 文字列操作とフィルタリング

```javascript
const filterText = filterInput.value.toLowerCase();
const itemText = item.textContent.toLowerCase();
if (itemText.includes(filterText)) {
  // マッチした場合の処理
}
```

- `toLowerCase()` で大文字小文字を統一
- `includes()` で部分一致検索

### 4. CSS クラスの動的制御

```javascript
item.classList.remove("hidden"); // 表示
item.classList.add("hidden"); // 非表示
```

- `classList` API でクラスの追加・削除

### 5. CSS アニメーション

```css
.list-item {
  transition: all 0.3s ease;
}
.list-item.hidden {
  opacity: 0;
  height: 0;
  padding: 0;
}
```

- `transition` プロパティでスムーズな変化
- `opacity` と `height` の組み合わせで自然な非表示効果

### 6. 高度なアニメーション制御

```javascript
item.addEventListener("transitionend", function handler() {
  if (item.classList.contains("hidden")) {
    item.style.display = "none";
  }
  item.removeEventListener("transitionend", handler);
});
```

- `transitionend` イベントでアニメーション完了を検知
- メモリリークを防ぐためのイベントリスナー削除

## 技術スタック

- **HTML**: 基本構造
- **CSS**: スタイリング・アニメーション
- **JavaScript**: DOM 操作・イベント処理

## 学習効果

- DOM 操作の基本パターンを習得
- イベントドリブンプログラミングの理解
- CSS アニメーションと JavaScript の連携
- ユーザーインターフェースの基本設計

## 応用可能な場面

- 商品検索機能
- 連絡先フィルタリング
- タスク管理アプリの絞り込み
- データテーブルの検索機能
