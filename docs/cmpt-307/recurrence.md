# Recurrence

## The substitution method

- Guess the solution and prove it by induction

![1](../../static/cmpt-307/substitute-1.png)

![2](../../static/cmpt-307/substitute-2.png)

![3](../../static/cmpt-307/substitute-3.png)
## The recursion-tree method

$T(n) = 3T(n/4) + cn^2$

![tree-1](../../static/cmpt-307/recursion-tree-1.png)

$T(n) = 4T(n/2) + \Theta (nlogn)$

![tree-2](../../static/cmpt-307/recursion-tree-2.png)

- Height: log(n)
- Number of Nodes: $n^2$
- Work done at level i: a^i
## The master method

![master-method](../../static/cmpt-307/master-method.png)

![example](../../static/cmpt-307/master-example.png)