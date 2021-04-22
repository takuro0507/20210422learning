// DOM
const button = document.getElementById("addBtn");
const lists = document.getElementById("list");

// 関数（メソッド）
async function getUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    return users;
}
async function listUsers() {
    const users = await getUsers();
    users.forEach(addList);
    }

function addList (user) {
    // HTML要素の生成
 const list = document.createElement("li");
 list.innerText = user.name;
 // listの数を増やす
 lists.appendChild(list);
 }

// イベント
window.addEventListener("load",listUsers);
button.addEventListener("click", listUsers);
