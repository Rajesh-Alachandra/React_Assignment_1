// const api_url =
//   "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D";

// async function getData() {
//   const response = await fetch(api_url);
//   const data = await response.json();
//   console.log(data);
// }
// getData();

// fetching the data from API

fetch(
  "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D"
)
  .then((data) => {
    //console.log(data); json format
    return data.json();
  })
  .then((objData) => {
    console.log(objData);
    let tableData = "";
    objData.map((values) => {
      tableData += `<tr class="data-row">
      <td class="column1">${values.id}</td>
      <td class="column2">${values.firstName}</td>
      <td class="column3">${values.lastName}</td>
      <td class="column4">${values.email}</td>
      <td class="column5">${values.phone}</td>
 </tr>`;
    });
    document.getElementById("table_Body").innerHTML = tableData;
    //document.getElementById("info-content").innerHTML = tableData;
  })
  .catch((err) => {
    console.log(err);
  });

// search section

const searchBox = document.getElementById("search-box");
const searchElement = document.getElementsByClassName("data-row");

searchBox.addEventListener("input", function () {
  content = searchBox.value;
  for (let i = 0; i < searchElement.length; i++) {
    name = searchElement[i].getElementsByClassName("column2")[0].innerText;
    name = name.toLowerCase();
    if (!name.includes(content)) {
      searchElement[i].style.display = "none";
    } else {
      searchElement[i].style.display = "";
    }
  }
});
// onclick function
let infoDetail = document.getElementById("info-content");
for (var i = 0; i < 5; i++) {
  var table = document.getElementById("table_onclick");

  var tr = document.createElement("tr");
  tr.onclick = function () {
    alert("Hello World");
  };

  td1 = document.createElement("td");
  td1.classList.add("column1");
  td1.innerText = id;
  td2 = document.createElement("td");
  td2.classList.add("column2");
  td2.innerText = first;
  td3 = document.createElement("td");
  td3.classList.add("column3");
  td3.innerText = last;
  td4 = document.createElement("td");
  td4.classList.add("column4");
  td4.innerText = mail;
  td5 = document.createElement("td");
  td5.classList.add("column5");
  td5.innerText = phone;

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);

  table.appendChild(tr);
}
