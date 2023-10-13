const form = document.getElementById('form-atividade');
form.addEventListener('submit', function(e){
	e.preventDefault();

	const inputNomeAtividade = document.getElementById('nome-atividade');
	const inputNotaAtividade = document.getElementById('nota-atividade');

	let linha = '<tr>';
	let linha += `<td>${inputNomeAtividade.value}</td>`;
	let linha += `<td>${inputNotaAtividade.value}</td>`;
	let linha += `<td>${inputNotaAtividade.value >= 7 ? 'Aprovado' : 'Reprovado'}</td>`;
	let linha += '</tr>';

	const corpoTabela = document.querySelector('tbody');
	corpoTabela.innerHTML = linha;
})
