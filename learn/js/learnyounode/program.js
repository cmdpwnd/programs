var fs = require('fs')
console.log('required')
var contents = fs.readFileSync('/home/cdunn/git/programs/learn/js/learnyounode/readFile').toString()
console.log('file read')
var len = contents.length - 2
console.log('counted: ' + len)
var num = contents.split('\n',len)
console.log(num)

