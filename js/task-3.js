function getElementWidth(content, padding, border) {
  return Number.parseFloat(content) + Number.parseFloat(padding) + Number.parseFloat(border);
}

console.log(getElementWidth('50px', '8px', '4px')); // 62
console.log(getElementWidth('60px', '12px', '8.5px')); // 80.5
console.log(getElementWidth('200px', '0px', '0px')); // 200
