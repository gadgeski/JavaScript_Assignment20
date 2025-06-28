目的：今後 TypeScript や React にスケールする為の準備段階

使用技術： JavaScript/CSS/HTML

これはリストアイテムを検索・絞り込みできるシンプルな Web ページを作るコードです。

キーワードを入力すると、そのキーワードを含むリストの項目だけが表示され、含まないものは非表示になります。

各ファイルの役割を詳しく見ていきましょう。

<h1>HTML (index.html) の解説</h1>

このファイルは、Web ページの構造を定義しています。

<h3>!DOCTYPE html</h3> これは、このドキュメントがHTML5であることを宣言しています。

<h3>html lang="ja"</h3> Webページの言語が日本語であることを示します。

<h3>head</h3> Webページのメタ情報（表示には直接関係ない情報）を設定する部分です。

<h3>meta charset="UTF-8"</h3> 文字エンコーディングをUTF-8に設定しています。

これにより、日本語が正しく表示されます。

<h3>meta name="viewport" content="width=device-width, initial-scale=1.0"</h3> モバイルデバイスで表示したときに、画面の幅に合わせて適切に表示されるように設定しています。

<h3>title</h3> ブラウザのタブやウィンドウに表示されるページのタイトルです。

<h3>link rel="stylesheet" href="style.css"</h3> style.css という名前のCSSファイルを読み込んでいます。このファイルでページの見た目を整えます。

<h3>body</h3> Webページのコンテンツ（実際に表示される内容）を定義する部分です。

<h3>div class="box"</h3> 「アイテムフィルター」というテキストが表示されるボックスです。

これは、後で CSS で装飾されます。

<h3>br</h3> 改行タグです。

<h3>div class="filter-container"</h3> 検索入力欄を囲むコンテナです。

<h3>input type="text" id="filterInput" placeholder="キーワードで絞り込む..."</h3> テキストを入力するための入力欄です。

<h3>id="filterInput"</h3> JavaScript からこの要素にアクセスするための識別子です。

<h3>placeholder="キーワードで絞り込む..."</h3> 入力欄に何も入力されていないときに表示されるヒントのテキストです。

<h3>ul id="itemList"</h3> 順序なしリスト（箇条書き）です。

<h3>id="itemList"</h3> JavaScript からこの要素にアクセスするための識別子です。

<h3>li class="list-item"</h3> リストの各項目（リストアイテム）です。

<h3>class="list-item"</h3> CSS と JavaScript でこれらの要素に共通のスタイルや動作を適用するためのクラス名です。

- Apple、Banana など、さまざまな果物の名前がリストされています。

<h3>script src="script.js"</h3> script.js という名前のJavaScriptファイルを読み込んでいます。

このファイルでページのインタラクティブな動作（フィルター機能など）を実装します。

<h1>CSS (style.css) の解説</h1>

このファイルは、HTML 要素の見た目や配置を定義しています。

- body: ページ全体のスタイルを設定しています。

  - width: 100%;: 幅を 100%にします。

  - background: url(img/Tasty_Fruits2025.png) no-repeat;: 背景に画像を設定し、繰り返さないようにします。

  - background-size: cover;: 背景画像を要素全体に表示するように拡大縮小します。

  - font-family: "Inter", sans-serif;: フォントを設定します。

  - display: flex; flex-direction: column; align-items: center;: コンテンツを中央揃えにするために Flexbox を使っています。

  - min-height: 100vh;: 最小の高さをビューポート（表示領域）の高さに設定し、コンテンツが少ない場合でもページが短くならないようにします。

  - margin: 0; padding-top: 50px;: マージンと上部のパディングを設定します。

  - color: #333;: テキストの色を設定します。

<h3>Filterセクション</h3>

- .filter-container: フィルター入力欄を囲むコンテナのスタイルです。

  - margin-bottom: 30px;: 下部に余白を設定します。

  - width: 100%; max-width: 400px;: 幅を最大 400px に制限しつつ、それ以下なら 100%の幅を取るようにします。

  - box-shadow, border-radius, overflow: hidden;: シャドウ、角丸、はみ出した部分を隠す設定です。

- #filterInput: 検索入力欄のスタイルです。

  - width: calc(100% - 30px);: 親要素の幅からパディング分を引いた幅に設定します。

  - padding: 15px;: 内側の余白を設定します。

  - font-size: 1.1em;: フォントサイズを少し大きくします。

  - border: none; outline: none;: デフォルトのボーダーとアウトラインをなくします。

  - background-color: #ffffff; border: 1px solid #ddd; border-radius: 8px;: 背景色、ボーダー、角丸を設定します。

  - #filterInput:focus: 入力欄にフォーカスが当たったときのスタイルです。

    - border-color: #6c757d; box-shadow: 0 0 8px rgba(108, 117, 125, 0.2);: ボーダーの色とシャドウを変更し、フォーカスされていることを視覚的に示します。

<h3>Listセクション</h3>

- #itemList: リスト全体（<ul>要素）のスタイルです。

  - list-style: none;: リストの先頭の点（デフォルトの箇条書きマーク）をなくします。

  - padding: 0;: 内側の余白をなくします。

  - width: 100%; max-width: 400px;: 幅を最大 400px に制限します。

  - background-color, border-radius, box-shadow: 背景色、角丸、シャドウを設定します。

- .list-item: 各リスト項目（<li>要素）のスタイルです。

  - padding: 15px 20px;: 上下 15px、左右 20px の内側の余白を設定します。

  - border-bottom: 1px solid #eee;: 各項目の下に薄い線を追加します。

  - font-size: 1.1em; color: #495057;: フォントサイズと色を設定します。

  - transition: all 0.3s ease;: hidden クラスが追加・削除されたときに、すべてのプロパティが 0.3 秒かけてゆっくりと変化するように設定します。

  - display: block;: transition が適用されるように、display プロパティを block に設定します。

- .list-item:last-child: リストの最後の項目に対するスタイルです。

  - border-bottom: none;: 最後の項目の下線を取り除きます。

- .list-item.hidden: JavaScript で、表示したくないリスト項目に追加されるクラスです。

  - opacity: 0;: 透明度を 0 にして完全に透明にします。

  - height: 0;: 高さを 0 にして、スペースをなくします。

  - padding-top: 0; padding-bottom: 0; margin-top: 0; margin-bottom: 0;: 上下のパディングとマージンも 0 にして、完全にスペースをなくします。

  - overflow: hidden;: はみ出したコンテンツを隠します。

<h3>Boxセクション</h3>

- .box: 「アイテムフィルター」と表示されるボックスのスタイルです。

  - width, height, margin: 幅、高さ、マージンを設定します。

  - display: flex; align-items: center; justify-content: center;: Flexbox を使って、テキストをボックス内で中央揃えにします。

  - color, font-size, font-weight: テキストの色、サイズ、太さを設定します。

  - position: relative;: 疑似要素（::before, ::after）を配置するための基準になります。

  - transition: 0.4s;: ホバー時のアニメーションの時間を設定します。

- .box::before, .box::after: box クラスを持つ要素の前に、または後にコンテンツを挿入する疑似要素です。ここでは、ボックスの角に線を作成するために使われています。

  - content: "";: 疑似要素にコンテンツがないことを示します。

  - width: 50px; height: 50px;: 幅と高さを設定します。

  - border-top, border-left, border-bottom, border-right: それぞれの疑似要素に対して、上、左、下、右のボーダーを作成します。

  - position: absolute;: 親要素（.box）に対して絶対位置で配置します。

  - top: -1px; left: -1px; / bottom: -1px; right: -1px;: 親要素の角にぴったりと配置されるように調整します。

  - transition: 0.4s; transition-delay: 0.5s;: ホバー時のアニメーションの時間を設定し、遅延も設定します。

- .box:hover:before, .box:hover::after: .box にマウスが乗った（ホバー）ときに、疑似要素のスタイルが変化します。

  - width: 100%; height: 100%;: 疑似要素の幅と高さを親要素と同じにします。

  - border-color: rgba(255, 255, 255, 0.3);: ボーダーの色を変えます。

  - transition-delay: 0s;: 遅延をなくします。

  - border-radius: 10px;: 角丸にします。

- .box:hover: .box にマウスが乗ったときに、box 自体のスタイルが変化します。

  - background: rgba(255, 255, 255, 0.1);: 背景色を透明度のある白にします。

  - backdrop-filter: blur(15px);: 背景にある要素をぼかします。

  - transition-delay: 0.3s;: 遅延を設定します。

  - border-radius: 10px;: 角丸にします。

<h1>JavaScript (script.js) の解説</h1>

このファイルは、ユーザーの操作に応じて Web ページの動作を制御するロジックを記述しています。

- const filterInput = document.getElementById("filterInput");: id が filterInput の HTML 要素（検索入力欄）を取得し、filterInput という定数に格納します。

- const itemList = document.getElementById("itemList");: id が itemList の HTML 要素（リスト全体）を取得し、itemList という定数に格納します。

- const listItems = document.querySelectorAll(".list-item");: class が list-item の HTML 要素（各リスト項目）をすべて取得し、listItems という定数に配列のような形式で格納します。

- filterInput.addEventListener("input", () => { ... });:

  - filterInput（検索入力欄）に input イベントリスナーを追加しています。これは、入力欄の値が変更されるたびに（文字が入力されたり削除されたりするたびに）、指定された関数が実行されるようにするものです。

  - () => { ... } は、イベントが発生したときに実行される無名関数（アロー関数）です。

<h3>関数の中身</h3>

- const filterText = filterInput.value.toLowerCase();:

  - ユーザーが入力したテキスト（filterInput.value）を取得し、すべての文字を小文字に変換（toLowerCase()）して filterText に格納します。これにより、大文字と小文字を区別しない検索が可能になります（例: "apple"と入力しても"Apple"がヒットする）。

- listItems.forEach((item) => { ... });:

  - listItems（すべてのリスト項目）を 1 つずつ繰り返し処理します。それぞれのリスト項目は item という変数でアクセスできます。

<h3>ループの中身</h3>

- const itemText = item.textContent.toLowerCase();:

- 現在のリスト項目（item）のテキスト内容（textContent）を取得し、それを小文字に変換して itemText に格納します。

- if (itemText.includes(filterText)) { ... } else { ... }:

- itemText.includes(filterText): リスト項目のテキスト（itemText）が、ユーザーが入力したキーワード（filterText）を含んでいるかどうかをチェックします。true であれば含まれている、false であれば含まれていません。

- キーワードが含まれている場合 (if ブロック):

- item.classList.remove("hidden");: hidden クラスを削除します。これにより、CSS で設定された非表示のスタイル（透明度 0、高さ 0 など）が解除され、項目が表示されます。

- item.style.display = "block";: アニメーション（transition）が正しく適用されるように、明示的に display プロパティを block に設定します。

- キーワードが含まれていない場合 (else ブロック):

- item.classList.add("hidden");: hidden クラスを追加します。これにより、CSS で設定された非表示のスタイルが適用され、項目がゆっくりと消えていきます。

- item.addEventListener("transitionend", function handler() { ... });:

- これは少し高度な部分です。CSS の transition（アニメーション）が完全に終了したときに実行されるイベントリスナーを設定しています。

- if (item.classList.contains("hidden")) { item.style.display = "none"; }: もし hidden クラスがまだ付いている（つまり、非表示になった状態が続いている）なら、完全に display: none;を設定します。

これにより、その項目はレイアウトから完全に消え、スペースを占有しなくなります。

item.removeEventListener("transitionend", handler);: イベントが一度処理されたら、このイベントリスナーを削除します。こうすることで、不要な処理が繰り返されるのを防ぎます。

<h1>【まとめ】</h1>

- HTML で、入力欄とリストの基本構造を作っています。

- CSS で、ページの背景、入力欄、リスト項目、そして box の見た目を整えています。特に、リスト項目を非表示にするための.hidden クラスや、ホバー時のアニメーションが特徴的です。

- JavaScript で、入力欄に文字が入力されるたびに、リストの各項目をチェックし、キーワードが含まれていれば表示、含まれていなければ非表示にするという動的なフィルター機能を実現しています。

非表示にするときは、アニメーションの後に完全にレイアウトから取り除く処理も含まれています。
