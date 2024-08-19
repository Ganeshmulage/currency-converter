console.log("myMain.js working");

const populate = async (values, currency) => {
  let myStr = "";
  // url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json" + currency
  url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
  let response = await fetch(url);
  let rJson = await response.json();
  document.querySelector(".output").style.display = "block";
  console.log(rJson[currency]);
  let currencyData = rJson[currency];

  const tableBody = document.querySelector("#currencyTable tbody");
  tableBody.innerHTML = ""; // Clear existing data

  for (const [key, value] of Object.entries(currencyData)) {
    const row = document.createElement("tr");

    const currencyname = document.createElement("td");
    currencyname.textContent = currency;

    const currencycode = document.createElement("td");
    currencycode.textContent = key;

    const currencyvalue = document.createElement("td");
    currencyvalue.textContent = value.toFixed(8) * values; // Display 8 decimal places

    row.appendChild(currencyname);
    row.appendChild(currencycode);
    row.appendChild(currencyvalue);
    tableBody.appendChild(row);
  }
  //   const tableBody = document.querySelector("tbody");
  //   tableBody.innerHTML = myStr;
};
const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  const value = parseInt(
    document.querySelector("input[name='quantity']").value
  );
  const currency = document.querySelector("select[name='currency']").value;
  populate(value, currency);
});
