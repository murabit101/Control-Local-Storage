// DOM Elements
const input = document.querySelector("input");
const buttons = document.querySelector(".buttons");
const resultsContainer = document.querySelector(".results");
const results = document.querySelector(".results span");

// Events Listener
buttons.addEventListener("click", (e) => {
  // [1] Check Button
  if (e.target.classList.contains("check-btn")) {
    resultsContainer.innerHTML = "";
    checkItem();
  }
  // [2] Add Button
  if (e.target.classList.contains("add-btn")) {
    resultsContainer.innerHTML = "";
    addItem();
  }
  // [3] Delete Button
  if (e.target.classList.contains("delete-btn")) {
    resultsContainer.innerHTML = "";
    deleteItem();
  }
  // [4] Show Button
  if (e.target.classList.contains("show-btn")) {
    resultsContainer.innerHTML = "";
    showItem();
  }
});

// Create Empty Message Funcion
function emptyMsg() {
  let results = document.createElement("span");
  results.textContent = "Input Field Can't Be Empty!";
  resultsContainer.appendChild(results);
}

// Check Item Funcion
function checkItem() {
  let inputText = input.value.trim();
  let results = document.createElement("span");
  results.style.display = "block";
  if (inputText !== "") {
    if (localStorage.getItem(inputText)) {
      results.innerHTML = `Found Local Item Called <span>${inputText}</span>`;
      input.value = "";
    } else {
      results.innerHTML = `Not Found Local Item Called <span>${inputText}</span>`;
    }
    resultsContainer.appendChild(results);
  } else emptyMsg();
}

// Add Item Funcion
function addItem() {
  let inputText = input.value.trim();
  let results = document.createElement("span");
  if (inputText !== "") {
    if (!localStorage.getItem(inputText)) {
      localStorage.setItem(inputText, "T3$T");
      results.innerHTML = `Add Local Item Called <span>${inputText}</span>`;
      input.value = "";
    } else {
      results.innerHTML = `Local Item Called <span>${inputText}</span> Is Already Existed`;
    }
    resultsContainer.appendChild(results);
  } else emptyMsg();
}

// Delete Item Funcion
function deleteItem() {
  let inputText = input.value.trim();
  let results = document.createElement("span");
  if (inputText !== "") {
    if (localStorage.getItem(input.value.trim())) {
      localStorage.removeItem(inputText);
      results.innerHTML = `Local Item Called <span>${inputText}</span> Has Been Deleted`;
      input.value = "";
    } else {
      results.innerHTML = `Not Found Local Item Called <span>${inputText}</span>`;
    }
    resultsContainer.appendChild(results);
  } else emptyMsg();
}

// Show Items Funcion
function showItem() {
  if (localStorage.length) {
    let index = 1;
    for (let [key, value] of Object.entries(localStorage)) {
      let span = document.createElement("span");
      span.innerHTML = `${index++}. Key: <span>${key}</span>`;
      resultsContainer.appendChild(span);
    }
  } else {
    let results = document.createElement("span");
    results.innerHTML = "Local Storage Is Empty";
    resultsContainer.appendChild(results);
  }
}