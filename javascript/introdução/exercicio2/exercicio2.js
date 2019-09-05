function pares(start, end) {
	let result = [];
	for (let index = start; index < end; index++) {
		let array = [];
		const element = index;
		if (element % 2 === 0) {
			result.push(element);
		}
	}
	return result;
}
console.log(pares(32, 321));
