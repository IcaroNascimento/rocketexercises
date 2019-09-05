function temHabilidade(skills) {
	if (skills.indexOf('Javascript') === 0) {
		return true;
	}
}

var skills = [ 'Javascript', 'ReactJS', 'React Native' ];
temHabilidade(skills);
console.log(temHabilidade(skills));
