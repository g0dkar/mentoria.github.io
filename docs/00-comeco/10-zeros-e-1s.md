---
sidebar_position: 10
title: Zeros e 1s
description: Vamos aprender o que são os 0s e 1s que tanto vemos por aí
---

# Zeros e 1s

Vamos agora começar os primeiros passos de fato na nossa jornada! Para um computador, tudo são 0s e 1s!

## 1. Como _nós_ entendemos números

Nós, humanos, usamos o que se chama de **Sistema Decimal:** quase todos nós temos **10 dedos** e por esta razão o sistema decimal tem 10 números: 0, 1, 2, 3, 4, 5, 6, 7, 8 e 9.

Esse sistema também é conhecido como **Base 10**.

Apesar de ser natural depois de anos utilizando, vale lembrar que o sistema decimal funciona da seguinte forma:

1. Você começa com o primeiro número: 0 (zero)
2. Vamos somando 1 e indo ao próximo número...
3. Ao chegar no último número, 9 (nove), voltamos ao primeiro número (zero) e adicionamos +1 no número que vem antes dele:<br/>`9 + 1 = 10`, `19 + 1 = 20`, `29 + 1 = 30`, ..., `99 + 1 = 100`, ...

Com isso em mente, vamos ver como computadores entendem números.

## 10. O Sistema _Binário_

Diferente de nós, computadores não tem 10 dedos. Eles tem o que chamamos de transístores. São minúsculos componentes que tem a característica de poderem ser **ligados e desligados** e conseguem dizer a outros componentes se estão ligados e desligados.

Considerando que tudo que um computador consegue "contar" se resume a ligado e desligado... é daí que vem o Sistema Binário: um sistema de números igual ao decimal, mas com apenas dois (bi) números: `0` e `1`.

Esse sistema também é conhecido como **Base 2**.

Assim como o sistema decimal, quando "acabam" os números, adicionamos um novo:

```text
  0 + 1 = 1    -> 1 em decimal
  1 + 1 = 10   -> 2 em decimal
 10 + 1 = 11   -> 3 em decimal
 11 + 1 = 100  -> 4 em decimal
100 + 1 = 101  -> 5 em decimal
101 + 1 = 110  -> 6 em decimal
110 + 1 = 111  -> 7 em decimal
111 + 1 = 1000 -> 8 em decimal
...
```

E... é isso! Simples assim :)

:::info[Você já pode fazer parte do *outro* grupo...]
Tem uma velha piadoca de programadores que diz: **Existem apenas `10` tipos de pessoas no mundo. As que conhecem binário e as que não conhecem.**

Usando a cola acima... `10` em binário é qual número decimal? 😉
:::

## 11. Convertendo Binários em Decimais _(Opcional)_

:::note[Essa parte é **opcional mas muito recomendada**]
Se preferir ir para a próxima sem problema!
:::

Vamos falar brevemente da matemática para transformar um número binário em um número decimal.

Um efeito colateral bom do fato de computadores usarem números binários é que a conversão entre binários e decimais é simples:

Para cada dígito binário, vamos transformar ele em `(n * 2^p)` onde:

-   `n` é o próprio número: Se for `1` então `n = 1`. Se for `0` então `n = 0`;
-   `p` é a **_posição_** do número **menos 1**: É o **3o** número? Então `p = 2`. **Importante:** as posições são contadas da direita para esquerda (do final para o começo)! Ou seja, em `100` a primeira posição (`p = 0`) é `0`, a segunda posição (`p = 1`) é `0` e a terceira posição (`p = 2`) é `1`!

Com essas fórmulas para cada dígito basta **somar** tudo!

:::tip[Não entendeu a fórmula?]
Apesar do formato diferente, a fórmula é o jeito "normal" para um programador escrever: `n multiplicado por 2 elevado a p`.

Esse circunflexo é o sinal usado para indicar que um número está sendo elevado a outro. `2 ^ 3 = 2³`. Vamos ver mais sobre isso no futuro.

Caso esteja lendo outros conteúdos, alguns preferem usar `pow(2, 3) = 2³` - significa a mesma coisa, só que escrito diferente. Esse `pow` vem de **pow**er, a palavra em inglês para "elevado a" (2³ em inglês se diz "2 to the **_power_** of 3")
:::

Vamos ver alguns exemplos:

```text
Vamos converter 11101 de binário para decimal.

Temos 5 posições. Lembrando que elas são contadas da direita (final) para esquerda (começo).

Aplicando a fórmula (n * 2^p) para cada um deles:
- 1a posição: (1 * 2^0) = 1 * 1 = 1
- 2a posição: (0 * 2^1) = 0 * 2 = 0
- 3a posição: (1 * 2^2) = 1 * 4 = 4
- 4a posição: (1 * 2^3) = 1 * 8 = 8
- 5a posição: (1 * 2^4) = 1 * 16 = 16

Agora basta somar:

1 + 0 + 4 + 8 + 16 = 29
```

Como diversão e desafio, deixo uma coincidência interessante: todo número decimal ímpar termina em 1 em binário, ou seja, ele também é ímpar em binário. Você consegue ver o porque? E quais outras "coincidências interessantes" você consegue achar?

## 100. Números hexadecimais

Por fim, vamos falar um pouco de números **_hexa_**decimais. O prefixo hexa significa "6" (seis). O sistema de números hexadecimais nada mais é que um que contém 16 números!

Esse sistema também é conhecido como **Base 16**.

Você deve se perguntar: o que vem depois do 9 então? E a resposta é meio intuitiva e engraçada: A. O sistema de números hexadecimal adota os 10 dígitos do decimal: `0` a `9` e complementa os 6 faltantes com `A, B, C, D, E, F`.

**Vale lembrar que não importa se você escreve com minúsculas ou maiúsculas: `1ab2` é o mesmo que `1AB2` 😉**

:::danger[Atenção!]
**Números hexadecimais na programação são sempre escritos e representados com o prefixo `0x` (zero + xis).**

Dessa forma é possível saber se `10` é o número decimal `10` ou na verdade é o número **_hexa_**decimal `10`, que é o número decimal **16**!

A partir desse ponto, nesse curso, eles ***sempre*** estarão prefixados com `0x` 👀
:::

Isso significa que, em hexadecimal, `9 + 1 = 0xA`, `0xA + 1 = 0xB`, `0xB + 1 = 0xC`, ..., `0xF + 1 = 0x10`

Como nós humanos usamos e entendemos números decimais, a conversão entre números binários e decimais acontece com muita frequencia durante o uso de um computador. Para facilitar a conversão entre eles, e diminuir o tanto que precisamos escrever, usamos os números hexadecimais.

A explicação vem de uma outra coincidência interessante:

| Binário | Decimal | Hexadecimal |
| ------- | ------- | ----------- |
| `0000`  | `0`     | `0x0`       |
| `0001`  | `1`     | `0x1`       |
| `0010`  | `2`     | `0x2`       |
| `0011`  | `3`     | `0x3`       |
| ...     | ...     | ...         |
| `1100`  | `12`    | `0xC`       |
| `1101`  | `13`    | `0xD`       |
| `1110`  | `14`    | `0xE`       |
| `1111`  | `15`    | `0xF`       |

**Cada dígito hexadecimal corresponde perfeitamente a 4 dígitos binários!**

nNas próximas aulas vamos entender o porque de 4 dígitos binários serem tão importantes.

## Resumo

Nessa página, vimos sobre:

* **Sistema decimal:** São os números que conhecemos e usamos no nosso dia-a-dia
* **Sistema binário:** São representações dos números decimais só que no sistema binário, que utiliza apenas `0` e `1`
* **Sistema hexadecimal:** Um sistema numérico que é bastante útil quando se precisa trabalhar com binários e converter em decimais. Composto de 16 números: `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `A`, `B`, `C`, `D`, `E`, `F` e sempre representado com `0x` antes do número, por exemplo: `0xC0FFEE`.
