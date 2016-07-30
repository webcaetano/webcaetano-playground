var fs = require('fs');
var _ = require('lodash');
console.log({
	a:3,
	b:{
		a:2,
		c:{
			b:[1,2,3,4,5]
		}
	}
})

// fs.writeFileSync('./ball'+_.random(0,10000)+'.js','hi')