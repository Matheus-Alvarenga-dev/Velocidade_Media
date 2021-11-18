const calcular = document.getElementById('calcular');


function velocidade () {
    const nome = document.getElementById('nome').value;
    const distância = document.getElementById('distância').value;
    const peso = document.getElementById('peso').value;
    const tempo = document.getElementById('tempo').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && distância !== ''&& peso !== ''  && tempo!== '' ){

        const valorVm = (distância/(tempo)).toFixed(2);
        
        resultado.textContent = `Olá, ${nome}! Com ${peso}kg e percorreu ${distância}km, a sua velociade média foi ${valorVm}.`;

    }else {
        resultado.textContent = 'Para calcular a sua velocidade média, preencha todos os campos.';
    }

calcular.addEventListener('click', velocidade);}