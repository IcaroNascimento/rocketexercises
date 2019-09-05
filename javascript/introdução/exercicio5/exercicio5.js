function userSkills(usuarios) {
	let result = ''
	for (const iterator of usuarios) {
		result.push(`O ${usuarios[iterator].nome} possui as habilidades: \n${usuarios[iterator].habilidades}`)	
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

