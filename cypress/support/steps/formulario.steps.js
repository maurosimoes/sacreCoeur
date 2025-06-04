import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import address from "../../config/address.json";
import { FormularioPage } from "../pages/formulario.page.js";
import { formularioElements } from "../elements/formulario.elements";

const formulario = new FormularioPage();

Given("que o usuário está na página inicial do formulário", () => {
  formulario.visit(address.formulario.url);
});

When(
  "o usuário preenche o campo Nome do estudante com {string}, sobrenome {string}",
  (nome, sobrenome) => {
    formulario.fillDataFields(formularioElements.nameInput, nome);
    formulario.fillDataFields(formularioElements.lastNameInput, sobrenome);
  }
);

And(
  "o usuário seleciona dia {string}, mês {string} e ano {string} no campo Data de preenchimento",
  (dia, mes, ano) => {
    formulario.selectOption(formularioElements.dayFormInput, dia);
    formulario.selectOption(formularioElements.monthFormInput, mes);
    formulario.selectOption(formularioElements.yearFormInput, ano);
  }
);

And("o usuário preenche o campo Série com {string}", (valor) => {
  formulario.fillDataFields(formularioElements.serieField, valor);
});

And(
  "o usuário preenche o campo Mãe responsável com {string}, sobrenome {string}",
  (nome, sobrenome) => {
    formulario.fillDataFields(formularioElements.nameMomInput, nome);
    formulario.fillDataFields(formularioElements.lastNameMomInput, sobrenome);
  }
);

And(
  "o usuário preenche o campo Pai responsável com {string}, sobrenome {string}",
  (nome, sobrenome) => {
    formulario.fillDataFields(formularioElements.nameDadInput, nome);
    formulario.fillDataFields(formularioElements.lastNameDadInput, sobrenome);
  }
);

And(
  "o usuário preenche o campo Telefone residencial com {string} e {string}",
  (ddd, numero) => {
    formulario.fillDataFields(formularioElements.phoneDDDResidencialInput, ddd);
    formulario.fillDataFields(
      formularioElements.phoneNumberResidencialInput,
      numero
    );
  }
);

And(
  "o usuário preenche o campo Celular com {string} e {string}",
  (ddd, numero) => {
    formulario.fillDataFields(formularioElements.phoneDDDCellInput, ddd);
    formulario.fillDataFields(formularioElements.phoneNumberCellInput, numero);
  }
);

And(
  "o usuário preenche o campo Telefone profissional com {string} e {string}",
  (ddd, numero) => {
    formulario.fillDataFields(
      formularioElements.phoneDDDProfissionalInput,
      ddd
    );
    formulario.fillDataFields(
      formularioElements.phoneNumberProfissionalInput,
      numero
    );
  }
);

And(
  "o usuário preenche o campo Endereço com {string}, Bairro {string}, Cidade {string}, Estado {string}, CEP {string} e País {string}",
  (rua, bairro, cidade, estado, cep, pais) => {
    formulario.fillDataFields(formularioElements.streetInput, rua);
    formulario.fillDataFields(formularioElements.districtInput, bairro);
    formulario.fillDataFields(formularioElements.cityInput, cidade);
    formulario.fillDataFields(formularioElements.stateInput, estado);
    formulario.fillDataFields(formularioElements.postalCodeInput, cep);
    formulario.selectOption(formularioElements.countryInput, pais);
  }
);

And("o usuário seleciona {string} no campo Área acadêmica", (valor) => {
  formulario.clickCheckbox(formularioElements.selectCheck, valor);
});

And("o usuário seleciona {string} no campo Comportamento", (valor) => {
  formulario.clickCheckbox(formularioElements.selectCheck, valor);
});

And(
  "o usuário preenche o campo Ano anterior: dias presentes com {string}",
  (valor) => {
    formulario.fillDataFields(formularioElements.attendanceDaysInput, valor);
  }
);

And(
  "o usuário preenche o campo Ano anterior: dias ausente com {string}",
  (valor) => {
    formulario.fillDataFields(formularioElements.absentDaysInput, valor);
  }
);

And(
  "o usuário preenche o campo Liste as escolas anteriores com {string}",
  (valor) => {
    formulario.fillDataFields(formularioElements.previousSchoolInput, valor);
  }
);

And("o usuário preenche o campo provas de Matemática com {string}", (valor) => {
  formulario.fillDataFields(formularioElements.mathExamInput, valor);
});

And("o usuário preenche o campo provas de Português com {string}", (valor) => {
  formulario.fillDataFields(formularioElements.portugueseExamInput, valor);
});

And(
  "o usuário seleciona dia {string}, mês {string} e ano {string} no campo Data de triagem",
  (dia, mes, ano) => {
    formulario.selectOption(formularioElements.dayTriageInput, dia);
    formulario.selectOption(formularioElements.monthTriageInput, mes);
    formulario.selectOption(formularioElements.yearTriageInput, ano);
  }
);

And("o usuário preenche o campo Resultados com {string}", (valor) => {
  formulario.fillDataFields(formularioElements.resultsInput, valor);
});

And(
  "o usuário seleciona {string} no campo Necessita de reavaliação",
  (valor) => {
    formulario.markCheckbox(
      formularioElements.selectReavaliationRadioCheck,
      valor
    );
  }
);

And(
  "o usuário seleciona dia {string}, mês {string} e ano {string} no campo Data de nascimento",
  (dia, mes, ano) => {
    formulario.selectOption(formularioElements.dayBiirthInput, dia);
    formulario.selectOption(formularioElements.monthBiirthInput, mes);
    formulario.selectOption(formularioElements.yearBiirthInput, ano);
  }
);

And(
  "o usuário seleciona dia {string}, mês {string} e ano {string} no campo Data de visão",
  (dia, mes, ano) => {
    formulario.selectOption(formularioElements.dayVisionInput, dia);
    formulario.selectOption(formularioElements.monthVisionInput, mes);
    formulario.selectOption(formularioElements.yearVisionInput, ano);
  }
);

And("o usuário preenche o campo Resultado com {string}", (valor) => {
  formulario.fillDataFields(formularioElements.resultInput, valor);
});

And("o usuário seleciona {string} no campo Rechecagem", (valor) => {
  formulario.markCheckbox(
    formularioElements.selectRecheckNeedRadioCheck,
    valor
  );
});

And(
  "o usuário preenche o campo Necessidades especiais com {string}",
  (valor) => {
    formulario.fillDataFields(formularioElements.specialNeedsInput, valor);
  }
);

And(
  "o usuário preenche o campo Quantidade de relatórios de disciplina com {string}",
  (valor) => {
    formulario.fillDataFields(
      formularioElements.suspensionsReportsInput,
      valor
    );
  }
);

And(
  "o usuário preenche o campo Quantidade de suspensões com {string}",
  (valor) => {
    formulario.fillDataFields(formularioElements.suspensionsQtdInput, valor);
  }
);

And(
  "o usuário preenche o campo Quantidade de suspensões na Escola com {string}",
  (valor) => {
    formulario.fillDataFields(formularioElements.schoolSuspensionsInput, valor);
  }
);

And(
  "o usuário preenche o campo Número de suspensões fora da escola com {string}",
  (valor) => {
    formulario.fillDataFields(
      formularioElements.outSchoolSuspensionsInput,
      valor
    );
  }
);

And(
  "o usuário preenche as notas {string} para Português, {string} para LEitura, {string} para Matemática, {string} para Ciências, {string} para Estudos osciais, {string} para Educação física e {string} para Outro",
  (port, leitura, mat, ciencias, sociais, edf, outro) => {
    formulario.fillDataFields(
      formularioElements.reportCardsInputPortuguese,
      port
    );
    formulario.fillDataFields(
      formularioElements.reportCardsInputLiterature,
      leitura
    );
    formulario.fillDataFields(formularioElements.reportCardsInputMath, mat);
    formulario.fillDataFields(
      formularioElements.reportCardsInputScience,
      ciencias
    );
    formulario.fillDataFields(
      formularioElements.reportCardsInputSocial,
      sociais
    );
    formulario.fillDataFields(formularioElements.reportCardsInputEdf, edf);
    formulario.fillDataFields(formularioElements.reportCardsInputOther, outro);
  }
);

And("o usuário preenche o campo Ano em Retenções com {string}", (valor) => {
  formulario.fillDataFields(formularioElements.yearRetentionInput, valor);
});

And("o usuário preenche o campo Notas com {string}", (valor) => {
  formulario.fillDataFields(formularioElements.reportCardsInput, valor);
});

And(
  "o usuário preenche o campo Liste as Escola anteriores com {string}",
  (valor) => {
    formulario.fillDataFields(
      formularioElements.secondPreviousSchoolInput,
      valor
    );
  }
);

And("o usuário clique no botão Enviar", () => {
  formulario.clickButton(formularioElements.sendButton);
});

Then("o usuário deve ver a tela de confirmação com o reCAPTCHA", () => {
  formulario.validateElement(formularioElements.submitButton);
});
