# Welcome to the Modular Exponentiation Calculator!
https://fa74x.github.io/modular-exponentiation-calculator/

This web app is designed to efficiently compute the result of raising a base number to an exponent, followed by taking the modulus. This operation, known as modular exponentiation, is crucial in various fields such as cryptography, computer science, and number theory.

## Algorithm
This web app uses the Right-to-Left Binary Method for calculating modular exponentiation. This algorithm is chosen for its efficiency and speed, particularly with large integers.  
To find $c = b^{e}$ mod $m$ first, it is required that the exponent $e$ be converted to binary notation.
That is, $e$ can be written as: $$e = \sum_{i = 0}^{n-1}a_{i}2^{i}$$
In such notation, the length of $e$ is $n$ bits. $a_{i}$ can take the value 0 or 1 for any i such that 0 ≤ i < n. By definition, $a_{n−1} = 1$.
The value be can then be written as: $$b^{e} = b^{\left(\sum\limits_{i=0}^{n-1}a_{i}2^{i}\right)} = \prod\limits_{i=0}^{n-1}b^{a_{i}2^{i}}$$
The solution $c$ is therefore: $$c = \prod_{i=0}^{n-1}b^{a_{i}2^{i}} (\text{mod }m)$$
