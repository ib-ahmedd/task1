const output = document.getElementById("output");

function show(name, code, callback, useResultAsAfter = false) {
  let arr = [1, 2, 3, 4, 5];
  let before = JSON.stringify(arr);

  let result = callback(arr);
  let after = useResultAsAfter ? JSON.stringify(result) : JSON.stringify(arr);

  const div = document.createElement("div");
  div.className = "method";
  div.innerHTML = `
    <strong>${name}</strong>
    <code>${code}</code>
    <p><strong>Before:</strong> ${before}</p>
    <p><strong>After:</strong> <span class="${
      before !== after ? "changed" : ""
    }">${after}</span></p>
  `;
  output.appendChild(div);
}

const methods = [
  { name: "push()", code: "arr.push(6)", fn: (arr) => arr.push(6) },
  { name: "pop()", code: "arr.pop()", fn: (arr) => arr.pop() },
  { name: "shift()", code: "arr.shift()", fn: (arr) => arr.shift() },
  { name: "unshift()", code: "arr.unshift(0)", fn: (arr) => arr.unshift(0) },
  { name: "splice()", code: "arr.splice(2,1)", fn: (arr) => arr.splice(2, 1) },
  {
    name: "slice()",
    code: "arr.slice(1,3)",
    fn: (arr) => arr.slice(1, 3),
    result: true,
  },
  {
    name: "map()",
    code: "arr.map(x => x * 2)",
    fn: (arr) => arr.map((x) => x * 2),
    result: true,
  },
  {
    name: "forEach()",
    code: "arr.forEach(x => x * 2)",
    fn: (arr) => arr.map((x) => x * 2),
    result: true,
  },
  {
    name: "sort()",
    code: "arr.sort((a,b)=>b-a)",
    fn: (arr) => arr.sort((a, b) => b - a),
  },
  { name: "reverse()", code: "arr.reverse()", fn: (arr) => arr.reverse() },
  { name: "fill()", code: "arr.fill(0,1,4)", fn: (arr) => arr.fill(0, 1, 4) },
  {
    name: "copyWithin()",
    code: "arr.copyWithin(0,3)",
    fn: (arr) => arr.copyWithin(0, 3),
  },
];

methods.forEach((m) => show(m.name, m.code, m.fn, m.result));
