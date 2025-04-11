# Amortized Analysis

An amortized analysis guarantees the average performance of each operation in the worst case.

The average cost per operation is then T(n) / n. You take the average cost as the amortized cost of each operation, so that all operations have the same amortized cost.

## Aggregate Analysis

In aggregate analysis, you show that for all n, a sequence of n operations take T(n) worst case time in total. In the worst wcase, the average cost, or amortized cost, per operation is therefore T(n) / n. This amortized cost applies to each operation, even when there are several types of operations in the sequence.

### Stack Operation
- PUSH(S, x) pushes object x onto stack S
- POP(S) pops the top of the stack S and returns the popped object.

- T(n) = total cost of poping nth element

    - = n pops

    - = n

- T(n) / n = O(n) / n = 1 = O(1)

### Binary counter

Bit i flips every $2^i$ increment
$$
T(n) = \sum_{i=0}^{log_2n}(\frac{n}{2^i}) \leq n \sum_{i=0}^{\infty}{\frac{1}{2^i}} = n \times 2 = 2n
$$

$$
\frac{T(n)}{n} = \frac{2n}{n} = 2 =O(1)
$$
## The Accounting method

The amount that you charge an operation is its amortized cost. 

When an operation's amortized cost exceeds its actual cost, you assign the difference to specific object in the data structure as credit.

Credit can help pay for later operations whose amortized cost is less than their actual cost. 

Let
- the actual cost of the ith operation by $c_i$ 
- the amortized cost of the ith operation by $\hat{c_i}$

$$
\sum_{i = 1}^{n} \hat{c_i} \geq \sum_{i = 1}^{n} c_i \\
$$

The total credit stored in the data structure is the difference between the total amortized cost and the total actual cost
$$
\sum_{i = 1}^{n} \hat{c_i} - \sum_{i = 1}^{n} c_i
$$

### Stack operation

Use 1 to pay the actual cost of the push, leaving a credit 1 (out of 2 charged).
The 1 stored on the plate serves to prepay the cost of popping the plate from the stack.
Thus, by charging the push operation a little more, we can view pop operation as free.

### Binary counter

The amortized cost to set a 0-bit to 1 is 2. When a bit is set to 1, 1 of the 2 pays to actually set the bit. The second 1 resides on the bit as credit to be used later if and when the bit is reset to 0.

## The Potential method

The potential method of amortized analysis represents the prepaid work as potential energy or just potential which can be released to pay for future operations

Starting with the inital data structure $D_0$, a sequence of n operations occurs. 

- $c_i$ = actual cost of operation i
- $\Phi(D_i)$ = potential after operation i
- $\Phi(D_{i - 1})$ = potential before operation i

$$
\hat{c_i} = c_i + \Phi(D_i) + \Phi(D_{i - 1})
$$

The amortized cost of each operation is therefore its actual cost plus the change in potential due to the operation.

$$
\sum_{i = 1}^{n} \hat{c_i} = \sum_{i = 1}^{n} (c_i + \Phi(D_i) - \Phi(D_{i - 1})) \\
= \sum_{i = 1}^{n} c_i + \Phi(D_n) - \Phi(D_0)
$$

### Stack operation
- Push
$$
\hat{c_i} = c_i + \Phi(D_i) + \Phi(D_{i - 1}) \\
= 1 + 1 \\
= 2
$$

- Pop or Multipop
$$
\hat{c_i} = c_i + \Phi(D_i) + \Phi(D_{i - 1}) \\
= k^{'} - k^{'} \\
= 0
$$

### Binary counter
- Increment
    - suppose that the ith increment operation resets $t_i$ bits to 0. The actual cost $c_i$ of the operation is therefore at most $t_i + 1$, since in addition to resetting $t_i$ bits, it sets at most one bit to 1

    $$
    \Phi(D_i) + \Phi(D_{i - 1}) \leq (b_{i - 1} - t_i + 1) - b_{i - 1} = 1 - t_i
    $$
    - The amortized cost is therefore
    $$
    \hat{c_i} = c_i + \Phi(D_i) + \Phi(D_{i - 1}) \\
    \leq (t_i + 1) + (1 - t_i) = 2
    $$

    $$
    \sum_{i = 1}^{n} \hat{c_i} = \sum_{i = 1}^{n} c_i + \Phi(D_i) - \Phi(D_{i - 1}) \\
    \sum_{i = 1}^{n} c_i \leq \sum_{i = 1}^{n} 2 - b_n + b_0 \\
    = 2n - b_n + b_0
    $$

## Dynamic Table

### Table insert

Imagine a dynamic array that:
- Doubles its size when full
- Inserts element in $O(1)$ time normally
- Occasionally performs and expensive copy when resizing

Each insert might cost:
- 1 if the table is not full
- i if the table is full and you must copy i items into a new table of size 2i
$$
\sum_{i=1}^{n} c_i \leq n + \sum_{j=0}^{\lfloor \log n \rfloor} 2^j \\
< n + 2n = 3n
$$
- $c_i$ = cost of the ith insert
- n simple inserts of cost 1
- sum of $2^j$ accounts for the costs when the array doubles and copies existing elements