var adiciona = document.querySelector('#adicionar-paciente');
var form = document.querySelector('#form-adiciona');

adiciona.addEventListener("click", function(event) {
    event.preventDefault();

    var paciente = obtemPaciente(form);

    
    if(!validaPaciente(paciente)){
        console.log('paciente inválido')
        return;
    } 

    var novaTr = montaTr(paciente);  
    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(novaTr);

    adicionaPacienteNaTabela(paciente)

    form.reset()

});

function obtemPaciente(form) {
    var paciente = {
        nome : form.nome.value,
        peso : Number(form.peso.value),
        altura : Number(form.altura.value),
        gordura : form.gordura.value,
        imc : calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){
    var novaTr = document.createElement('tr');
    novaTr.classList.add("paciente");

    novaTr.appendChild(montaTd(paciente.nome, 'info-nome'));
    novaTr.appendChild(montaTd(paciente.peso, 'info-peso'));
    novaTr.appendChild(montaTd(paciente.altura, 'info-altura'));
    novaTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
    novaTr.appendChild(montaTd(paciente.imc, 'info-imc'));
    return novaTr;
}

function montaTd(dado, classe){
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente){
    if(validaPeso(paciente.peso)){
        return true;
    } else {
        return false;
    }
}

function adicionaPacienteNaTabela(paciente){
    var novaTr = montaTr(paciente);  
    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(novaTr);
}

