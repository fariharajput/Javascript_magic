// task1
const task1 = document.getElementById("task1");
const task1list = document.getElementById("tasklist");
const btnTask1 = document.getElementById("btn-task1");
const txtTask1 = document.getElementById("txt-task1");
const btnlongestString = document.getElementById("btn-longestString");

let task1stringlist = new Array();

btnTask1.addEventListener("click", () => {
  if (txtTask1.value) {
    task1stringlist.push(txtTask1.value);
    const li = document.createElement("li");
    li.textContent = txtTask1.value;
    task1list.prepend(li);
    console.log(task1stringlist);
    txtTask1.value = "";
    if (task1stringlist.length > 0) {
      btnlongestString.disabled = false;
    }
  }
});

btnlongestString.addEventListener("click", () => {
  let longest = task1stringlist[0];
  task1stringlist.forEach((element) => {
    if (element.length > longest.length) {
      longest = element;
    }
  });
  const h3 = document.createElement("h3");
  h3.textContent = longest;
  task1.append(h3);
});

//task 2
const task2 = document.getElementById("task2");
const btnTask2 = document.getElementById("btn-task2");
const txtTask2 = document.getElementById("txt-task2");

btnTask2.addEventListener("click", () => {
  if (txtTask2.value) {
    // console.log(txtTask2.value);
    const h3 = document.createElement("h3");
    h3.textContent = mostlyUsedChar(txtTask2.value);
    task2.append(h3);
    txtTask2.value = "";
  }
});

const mostlyUsedChar = (s) => {
  let count = {};

  for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    // console.log(ch);
    count[ch] = isNaN(count[ch]) ? 1 : count[ch] + 1;
  }

//   console.log(count);

  let index, max = 0;

  for (const [key, value] of Object.entries(count)) {
    //   console.log([key, value])
    if (value > max) {
      max = value;
      index = key;
    }
  }

  return index;
};

//task3
const task3 = document.getElementById("task3");
const btnTask3 = document.getElementById("btn-task3");
const txtTask3 = document.getElementById("txt-task3");

btnTask3.addEventListener("click", () => {
  if (txtTask3.value) {
    // console.log(txtTask3.value);
    const h3 = document.createElement("h3");
    h3.textContent = palindrome(txtTask3.value);
    task3.append(h3);
    txtTask3.value = "";
  }
});

const palindrome = (num) => {
  let rev = "";
  for (let i = 0; i < num.length; i++) {
    rev = num[i] + rev;
  }

  if (rev === num) {
    return num + " is a palindrome";
  } else {
    return num + " is not a palindrome";
  }
};
