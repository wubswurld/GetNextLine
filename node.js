const fs = require('fs');

const contents = fs.readFileSync(process.argv[2], 'utf8');

const lol = contents.split('\n');
console.log(lol);
var elem = [];
var list = {};
list.line = lol[0];
lol.shift();
list.extra = lol;
elem.push(list);
console.log(elem);