---
sidebar_position: 20
title: 3 - Usando computadores como programadores
description: Aqui vamos aprender algumas formas mais avançadas de se usar e comunicar com um computador
---

# Usando computadores como programadores

Depois de toda essa conversa técnica, que tal começarmos algo mais mão-na-massa?

Vamos aprender aqui sobre como usar computadores como um programador. Mas o que tem de tão diferente?

Bom, como programadores nossa função é controlar a máquina para fazer com que ela faça exatamente o que queremos. Para isso, é bem útil termos formas mais diretas de nos comunicar e interagir com a máquina.

## 1. Nossas ferramentas

No geral, vamos utilizar bastante 2 ferramentas: a [**linha de comando**](https://pt.wikipedia.org/wiki/Interface_de_linha_de_comandos "Página da Wikipedia sobre Interfaces de Linha de Comando") e **monitores de processos**.

### 1.1. Linha de comando

A principal, mais importante e mais poderosa ferramenta a nossa disposição é o que chamamos de [Linha de Comando](https://pt.wikipedia.org/wiki/Interface_de_linha_de_comandos "Página da Wikipedia sobre Interfaces de Linha de Comando"), ou Interface de Linha de Comando - do inglês **CLI: Command Line Interface**.

Essa é a famosa "tela preta" do Microsoft Windows:

![Exemplo de um Prompt de Comando](img/20-prompt-de-comando.png "Aplicativo Windows Terminal executando o Prompt de Comando do Windows com a execução do comando ping a mostra")

A linha de comando - também chamada de Prompt de Comando no Windows - é a forma mais direta que temos de conversar com o Sistema Operacional e o computador em si. Com essa ferramenta enviamos comandos diretamente ao Sistema Operacional, muitas vezes da mesma forma como os programas fazem.

:::info[IMPORTANTE: Raramente vamos falar de "linha de comando"!]
Apesar de ser o nome da ferramenta, na maior parte do tempo ela é chamada de **Terminal, CLI ou Shell**.

- [**Terminal**](https://pt.wikipedia.org/wiki/Terminal_%28inform%C3%A1tica%29 "Página da Wikipedia sobre Terminal (computação)") é o nome do programa que o Sistema Operacional dá para que tenhamos acesso à Linha de Comando e, por isso, normalmente chamamos a "linha de comando" simplesmente de Terminal. A muuuuuuito tempo atrás, no tempo que computadores tomavam um andar inteiro de um prédio, "Terminal" era o nome do conjunto de Monitor + Teclado onde você podia ligá-lo a um desses computadores e dar comandos diretamente a ele. Semelhante a um controle de vídeo-game: qualquer controle de, por exemplo, Playstation 5 funciona em qualquer outro Playstation 5.
- **CLI** é a sigla do termo em inglês **C**ommand **L**ine **I**nterface - em português: Interface de Linha de Comando. É útil saber disso para buscar informações e ajuda: tente procurar "quantidade de espaço livre ***cli***" (sem aspas) no Google (ou clique [aqui](https://www.google.com/search?q=quantidade+de+espaço+livre+cli)) e veja :smile:
- [**Shell**](https://pt.wikipedia.org/wiki/Shell_%28computa%C3%A7%C3%A3o%29), assim como Terminal, vem do nome de um programa que nos dá acesso à linha de comando. No Linux e Mac, há programas como [**BASH**](https://pt.wikipedia.org/wiki/Bash) (**B**ourne **A**gain **Sh**ell), [**ZSH**](https://pt.wikipedia.org/wiki/Z_shell) (simplesmente "**Z**-**Sh**ell" mesmo) e outros. O importante é que eles são Shells *(em português: concha)*: apenas uma casca entre você e a máquina.
:::

Agora que sabemos que existe e mais-ou-menos o que é a linha de comando, vamos aprender como usá-la a seguir. Colocamos instruções nos 3 Sistemas Operacionais mais comuns em computadores e alternativas para Android e iOS.

Porém, antes de continuar, é extremamente importante frisar:

:::danger[Nunca execute nada que você não conhece!]
Nunca execute nada que você não conhece ou não confia em um Terminal!

Lembre-se que o Terminal é uma porta direta para se conversar com o Sistema Operacional e o Computador. É algo útil e poderoso, e por essa razão devemos ter bastante cuidado com isso.

Dica: você pode procurar por "(primeira-palavra-do-comando) cli" no Google para entender melhor o que essa ferramenta faz. Por exemplo, na imagem acima foi usado o comando `ping google.com` - tente procurar por "ping cli" para entender o que ele faz.
:::

### 1.2. Como usar uma linha de comando?

Como o nome deixa a entender, na interface de linha de *comando* vamos executar **comandos**.

A interface de um terminal nos permite digitar texto e, nos terminais mais modernos, copiar-e-colar texto. Nada mais.

Para dar comandos, basta digitar o nome do comando e pressionar enter. No vídeo abaixo vemos como executar um comando `ping`:

![Executando um comando ping](img/20-terminal-ping-vscode.gif "Terminal onde é digitado e executado o comando ping")

Digitamos uma linha, que é o comando, e damos enter.

#### 1.1.1. Microsoft Windows

Como o sistema operacional mais utilizado atualmente é o Microsoft Windows, vamos começar por ele.

:::tip[Dica]
Recomendo ***fortemente*** a instalação do programa [Windows Terminal](https://aka.ms/terminal "Link oficial da Microsoft para baixar o Windows Terminal"). Ele é beeeeeem melhor que o Terminal padrão do Windows e se tornou o verdadeiro padrão nas versões mais atualizadas do Windows 11.
:::


