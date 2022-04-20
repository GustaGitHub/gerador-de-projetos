const fs = require('fs')

const htmlContent = require('./contents/html_content')
const cssContent = require('./contents/css_content')
const jsContent = require('./contents/js_content')

const projectGenerator = (path, nameProject = "project") => {
   if(path.length == 0){
      console.log("Insira um Caminho")
      return
   }

   fs.mkdir(`${path}/${nameProject}`,(err)=>{
      if(err){
         if(err.errno == -4075){
            console.log(`ERRO: Projeto com este mesmo nome já criado neste caminho: \n${err.path}`)
            return
         }
         else if(err.errno == -4058){
            console.log(`ERRO: Caminho Inválido`)
            return
         }
      
      }else{
         fs.appendFile(`${path}/${nameProject}/index.html`, htmlContent(nameProject), (err)=>{
            if(err){
               console.log("Erro ao gerar o arquivo .html")
            }else{
               console.log("Arquivo HTML gerado")
            }
         })
         fs.appendFile(`${path}/${nameProject}/style.css`, cssContent, (err)=>{
            if(err){ 
               console.log("Erro ao gerar o arquivo .css")
            }else{
               console.log("Arquivo CSS gerado")
            }
         })

         fs.appendFile(`${path}/${nameProject}/script.js`, jsContent, (err)=>{
            if(err){
               console.log("Erro ao gerar o arquivo .js")   
            }else{
               console.log("Arquivo Javascript gerado")
            }
         })

         console.log('projeto gerado')
         console.log(`Local do projeto: ${path}/${nameProject}`)
      }
   })
}


/* 
------------------------------------------------------------------------------------------------------------------------------
 ALERTAS: 
 - Não é recomendável alterar o código-fonte acima se você não possui conhecimento sobre esta linguagem !!!
 - Consulte o CMD / Console para saber a situação da operção
 - Encontrou erros ou falhas ?, Fale com o desenvolvedor -> https:github.com/GustaGitHub
 ------------------------------------------------------------------------------------------------------------------------------
*/

projectGenerator("C:/Users/G U SN/Desktop")




// Remova os números Acima e siga as instruções a seguir :
// Em 1 -> Caminho onde você deseja gerar o seu projeto | Ex: C:/Users/Alex/Desktop
// Em 2 -> Nome do seu projeto | Ex: Projeto Site
/*
   errno
   -4075 : Projeto com este mesmo já criado neste caminho ${err.path}
   -4058 : Caminho Inválido


   
*/
