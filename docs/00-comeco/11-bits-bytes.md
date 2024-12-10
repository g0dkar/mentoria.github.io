---
sidebar_position: 11
title: 2 - Bits e Bytes
description: vamos conhecer o que são bits e bytes
---

# Bits e Bytes

Agora que sabemos sobre os sistemas decimal, binário e hexadecimal, vamos aprender sobre o que fazemos com eles.

## 1. Bit

> *Pronunciado: "bít"*

A menor unidade de informação que existe num computador é o Bit. Um bit é apenas um único número binário: `0` ou `1`. Por exemplo, o número binário `1011` tem **4 bits**.

## 2. Byte

> *Pronunciado: "báit"*

Um byte é simplesmente um conjunto de **8 bits**. Para facilitar a leitura, normalmente números binários são escritos em grupos de 4 dígitos, por exemplo: `1001 1010` - um byte que representa o número **154**.

Porque ***4 dígitos***? Como vimos anteriormente, 1 dígito hexadecimal consegue representar pefeitamente 4 bits!

Usando nosso exemplo de `1001 1010` podemos escrever ele em hexadecimal com apenas 2 dígitos: `0x9A`. Essa facilidade de conversão se dá tanto para converter binário em hexadecimal quanto o contrário!

:::tip[Desafio]
Como exercício, tente converter os seguintes números:

- `0x123`: hexa -> binário
- `1111 1010 0001 0101 1100 1010`: binário -> hexa
- `0xCAFE`: hexa -> binário
- `0x1010`: hexa -> binário
- `0001 0000`: binário -> hexa
:::

## 3. Antes de continuarmos...

Talvez você tenha notado que estamos usando números como 4, 8, 16.

Esses números são propositais: 4 = 2<sup>2</sup>, 8 = 2<sup>3</sup>, 16 = 2<sup>4</sup>, 32 = 2<sup>5</sup>, ...

O resumo da longa história sobre isso é que é mais fácil e cômodo usar potências de 2 (2 elevado a algum número): 1 byte é formado por 8 bits (2<sup>3</sup>), processadores atuais são conhecidos como "64 bits" (2<sup>6</sup>), memórias RAM vem em 4GB (2<sup>2</sup>), 6GB (2<sup>2</sup> + 2<sup>1</sup>), 8GB (2<sup>3</sup>), 16GB (2<sup>4</sup>), discos rígidos vem em 128GB (2<sup>7</sup>), 256GB (2<sup>8</sup>), 512GB (2<sup>8</sup>) e assim vai.

Caso queira compreender um pouco mais, tente converter 2<sup>2</sup>, 2<sup>3</sup>, 2<sup>4</sup> para binário 😉

## 4. Kilobytes, Megabytes, Gigabytes

asd
