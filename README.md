# O que tem nesse arquivo

<!--  -->

## Server-json para criar server local

yarn json-server server.json -p 3030

<!--  -->

## Componente 'use client' (componente AddTagClient)

- 'Use client' -> hidratação
- Interface criada no servidor mas é hidratado, ou seja, o Js que o componente precisa para funcionar ai ser enviado do servidor para o cliente e sera injetado(hidratado) para que os eventos funcionem
- Sempre que o componente for ouvir alguma evento do usuário preciso usar o use cliente exemplo um handleSubmit de um forms
<!--  -->

## Componente 'use server' com Servert action e revalidateTag (componente AddTagServer)

<!--  -->

## hook useFormStatus em botao para feedback ao usuário (componente AddTagButton)
