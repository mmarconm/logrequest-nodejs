# Log Request integration with Help Desk

> Sistema de envio de logs integrado com soluções de chamado que solicitam para o cliente os arquivos de logs para serem analisado


## TODO List

- [x] 1 - Criação da pagina de envio de arquivos
- [x] 2 - Criação da função storage que trata o arquivo e renomea adicionando a hash para evitar duplicidade - multer
- [x] 3 - Pagina de redirecionamento que vai informar o usuário que o arquivo foi enviado.
- [x] 4 - Pagina de /upload que realizirá o tratamento do arquivo usando o multer
- [ ] 5 - Adicionar barra de progresso para informar o usuário o quanto foi realizado de upload.
- [ ] 6 - Bloquear pagina de envio para que não possa ser acessa ser ser enviado pela API externa. N do Chamado
- [ ] 7 - Adicionar axios para realizar a requisição e enviar o link do arquivo enviado e alteração do estado do chamado com as informações.
- [ ] 8 - configurar a soluçao de chamado para receber a requisição. token, api, envio, chamado.
- [ ] 9 - Subir para ambiente de homologação

### informações adicionais do TODO List.

- 6 - Essa a pagina inicial poderá ser acessada somente se for enviada por email pela soluçõs de help desk onde enviará
 um header com o numero do chamado. que será usado pelo axios para enviar os dados novamente com POST para a solução e assim alterar o estado do chamado
 e enviar um alerta para o suporte.
- 7 - Após o usuário clicar em enviar e os tudo estiver correto. o sistema irá enviar uma requisição post para a solução de chamado onde adicionará o link para download do log e o estado do chamado para ( aguardando analise do log ). assim como informações/observações.

## Author

👤 **Marcelo Marcon**

* Github: https://github.com/mmarconm
* Instagram: [@mmarconm](https://www.instagram.com/mmarconm/)