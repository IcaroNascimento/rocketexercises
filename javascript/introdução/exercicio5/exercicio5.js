function userSkills(usuarios) {
	let result = ''
	for (let index = 0; index < usuarios.length; index++) {	
		skills = usuarios[index].habilidades.join(', ')
		result += (`O ${usuarios[index].nome} possui as habilidades: \n${skills}\n`)	
	} 
	return result
	
}

var usuarios = [
 {
 nome: "Diego",
 habilidades: ["Javascript", "ReactJS", "Redux"]
 },
 {
 nome: "Gabriel",
 habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
 }
];

console.log(userSkills(usuarios))

