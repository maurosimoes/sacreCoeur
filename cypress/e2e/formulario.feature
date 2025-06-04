Feature: Preencher Formulário

    Background:
        Given que o usuário está na página inicial do formulário "https://www.jotform.com/form/251535524251653"

    Scenario: Preencher o formulário
        #Formulário de Dados dos Alunos
        When o usuário preenche o campo Nome do estudante com "Pedro", sobrenome "Silva"
        And o usuário seleciona dia "23", mês "March" e ano "2025" no campo Data de preenchimento
        And o usuário preenche o campo Série com "3 Ano"
        And o usuário preenche o campo Mãe responsável com "Maria", sobrenome "Santos"
        And o usuário preenche o campo Pai responsável com "João", sobrenome "Silva"
        And o usuário preenche o campo Telefone residencial com "11" e "932921234"
        And o usuário preenche o campo Celular com "11" e "998987766"
        And o usuário preenche o campo Telefone profissional com "11" e "932924321"
        And o usuário preenche o campo Endereço com "Rua Dom Pedro II", Bairro "Centro", Cidade "Teixeira de Freitas", Estado "Bahia", CEP "45985-124" e País "Brazil"
        #Razões para referência
        And o usuário seleciona "Matemática" no campo Área acadêmica
        And o usuário seleciona "Extrovertido/Introvertido" no campo Comportamento
        #Presença
        And o usuário preenche o campo Ano anterior: dias presentes com "200"
        And o usuário preenche o campo Ano anterior: dias ausente com "5"
        And o usuário preenche o campo Liste as escolas anteriores com "Miguel Afonso"
        #Provas
        And o usuário preenche o campo provas de Matemática com "10"
        And o usuário preenche o campo provas de Português com "9"
        #Triagem do último ano
        And o usuário seleciona dia "10", mês "January" e ano "2025" no campo Data de triagem
        And o usuário preenche o campo Resultados com "Positivos"
        And o usuário seleciona "Não" no campo Necessita de reavaliação
        And o usuário seleciona dia "15", mês "August" e ano "1996" no campo Data de nascimento
        And o usuário seleciona dia "26", mês "March" e ano "2025" no campo Data de visão
        And o usuário preenche o campo Resultado com "Positivo"
        And o usuário seleciona "Sim" no campo Rechecagem
        And o usuário preenche o campo Necessidades especiais com "Não"
        #Disciplina
        And o usuário preenche o campo Quantidade de relatórios de disciplina com "10"
        And o usuário preenche o campo Quantidade de suspensões com "10"
        And o usuário preenche o campo Quantidade de suspensões na Escola com "10"
        And o usuário preenche o campo Número de suspensões fora da escola com "10"
        #Últimas notas escolares
        And o usuário preenche as notas "10" para Português, "9" para LEitura, "8" para Matemática, "7" para Ciências, "6" para Estudos osciais, "5" para Educação física e "4" para Outro
        #Retenções
        And o usuário preenche o campo Ano em Retenções com "2025"
        And o usuário preenche o campo Notas com "10, 9, 8"
        And o usuário preenche o campo Liste as Escola anteriores com "Miguel Afonso"
        And o usuário clique no botão Enviar
        Then o usuário deve ver a tela de confirmação com o reCAPTCHA