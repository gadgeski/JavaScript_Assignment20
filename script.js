const filterInput = document.getElementById("filterInput");
const itemList = document.getElementById("itemList");
const listItems = document.querySelectorAll(".list-item");

filterInput.addEventListener("input", () => {
  const filterText = filterInput.value.toLowerCase(); // 入力値を小文字に変換

  listItems.forEach((item) => {
    const itemText = item.textContent.toLowerCase(); // リスト項目のテキストを小文字に変換

    if (itemText.includes(filterText)) {
      // キーワードが含まれている場合、表示する
      item.classList.remove("hidden");
      item.style.display = "block"; // アニメーションのためにdisplayも制御
    } else {
      // キーワードが含まれていない場合、非表示にする
      item.classList.add("hidden");
      // transition後にdisplay: none; にする（オプション）
      // これにより、DOMから完全に消える前にアニメーションが完了する
      item.addEventListener("transitionend", function handler() {
        if (item.classList.contains("hidden")) {
          item.style.display = "none";
        }
        item.removeEventListener("transitionend", handler);
      });
    }
  });
});
