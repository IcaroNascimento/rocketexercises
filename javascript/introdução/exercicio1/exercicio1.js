function executaEndereco() {
	const endereco = {
		rua: 'Rua dos Pinheiros',
		numero: 1293,
		bairro: 'Centro',
		cidade: 'São Paulo',
		uf: 'SP'
	};

	let result = `O usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro} na rua "${endereco.rua}" com n° ${endereco.numero}`;
	return result;
}
console.log(executaEndereco())

