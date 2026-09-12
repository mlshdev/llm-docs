> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparse-iterative-solving-functions-vector-rhs](https://developer.apple.com/documentation/accelerate/sparse-iterative-solving-functions-vector-rhs)

# Sparse Iterative Solving Functions (Vector RHS) (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Solve a system with a right-hand-side dense vector using iterative methods.

## Topics

### Iterative sparse solve functions

- [SparseSolve(\_:\_:\_:\_:)](sparsesolve%28________%29-7f1sp.md): Solves the equation *Ax = b* for vectors of double-precision values using the specified iterative method.
- [SparseSolve(\_:\_:\_:\_:)](sparsesolve%28________%29-97k3a.md): Solves the equation *Ax = b* for vectors of single-precision values using the specified iterative method.
- [SparseSolve(\_:\_:\_:\_:)](sparsesolve%28________%29-26fae.md): Solves the equation *Ax = b* for vectors of double-precision values, treating *A* as an operator and using the specified iterative method.
- [SparseSolve(\_:\_:\_:\_:)](sparsesolve%28________%29-9yhgp.md): Solves the equation *Ax = b* for vectors of single-precision values, treating *A* as an operator and using the specified iterative method.

### Iterative sparse solve functions with preconditioner

- [SparseSolve(\_:\_:\_:\_:\_:)](sparsesolve%28__________%29-1qwax.md): Solves the equation *Ax = b* for vectors of double-precision values using the specified iterative method and opaque preconditioner.
- [SparseSolve(\_:\_:\_:\_:\_:)](sparsesolve%28__________%29-3aphv.md): Solves the equation *Ax = b* for vectors of single-precision values using the specified iterative method and opaque preconditioner.
- [SparseSolve(\_:\_:\_:\_:\_:)](sparsesolve%28__________%29-5vs11.md): Solves the equation *Ax = b* for vectors of double-precision values using the specified iterative method and preconditioner type.
- [SparseSolve(\_:\_:\_:\_:\_:)](sparsesolve%28__________%29-9nzvm.md): Solves the equation *Ax = b* for vectors of single-precision values using the specified iterative method and preconditioner type.
- [SparseSolve(\_:\_:\_:\_:\_:)](sparsesolve%28__________%29-6i1nx.md): Solves the equation *Ax = b* for vectors of double-precision values, treating *A* as an operator and using the specified iterative method and preconditioner.
- [SparseSolve(\_:\_:\_:\_:\_:)](sparsesolve%28__________%29-7wnum.md): Solves the equation *Ax = b* for vectors of single-precision values, treating *A* as an operator and using the specified iterative method and preconditioner.

### Iterative sparse solve functions for complex matrices

- [SparseSolve(\_:\_:\_:\_:)](sparsesolve%28________%29-2cenj.md): Solve `Ax=b` using the specified iterative method for complex float values.
- [SparseSolve(\_:\_:\_:\_:)](sparsesolve%28________%29-35kl2.md): Solve `Ax=b` using the specified iterative method for complex double values.
- [SparseSolve(\_:\_:\_:\_:\_:)](sparsesolve%28__________%29-1ogxn.md): Solve `Ax=b` using the specified iterative method for complex double values.
- [SparseSolve(\_:\_:\_:\_:\_:)](sparsesolve%28__________%29-2bm9r.md): Solve `Ax=b` using the specified iterative method for complex float values.
- [SparseSolve(\_:\_:\_:\_:\_:)](sparsesolve%28__________%29-2ygeh.md): Solve `Ax=b` using the specified iterative method for complex float values.
- [SparseSolve(\_:\_:\_:\_:\_:)](sparsesolve%28__________%29-7yfqx.md): Solve `Ax=b` using the specified iterative method for complex double values.

### Supporting types

- [SparseIterativeStatus_t](sparseiterativestatus_t.md): Constants that define the status of the iterative solve.

## See Also

### Solving systems with iterative sparse methods

- [Solving systems using iterative methods](solving-systems-using-iterative-methods.md): Use iterative methods to solve systems of equations where the coefficient matrix is sparse.
- [Sparse Iterative Solving Functions (Matrix RHS)](sparse-iterative-solving-functions-matrix-rhs.md): Solve a system with a right-hand-side dense matrix using iterative methods.
- [Sparse Iterate Functions](sparse-iterate-functions.md): Perform a single iteration of the specified iterative method.
- [Sparse Iterative Methods](sparse-iterative-methods.md): Select a suitable iterative method to solve a system.
- [Preconditioners](preconditioners.md): Create preconditioners for iterative solves.

# Sparse Iterative Solving Functions (Vector RHS) (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Solve a system with a right-hand-side dense vector using iterative methods.

## Topics

### Iterative sparse solve functions

- [SparseSolve](sparsesolve%28________%29-7f1sp.md): Solves the equation *Ax = b* for vectors of double-precision values using the specified iterative method.
- [SparseSolve](sparsesolve%28________%29-97k3a.md): Solves the equation *Ax = b* for vectors of single-precision values using the specified iterative method.
- [SparseSolve](sparsesolve%28________%29-26fae.md): Solves the equation *Ax = b* for vectors of double-precision values, treating *A* as an operator and using the specified iterative method.
- [SparseSolve](sparsesolve%28________%29-9yhgp.md): Solves the equation *Ax = b* for vectors of single-precision values, treating *A* as an operator and using the specified iterative method.

### Iterative sparse solve functions with preconditioner

- [SparseSolve](sparsesolve%28__________%29-1qwax.md): Solves the equation *Ax = b* for vectors of double-precision values using the specified iterative method and opaque preconditioner.
- [SparseSolve](sparsesolve%28__________%29-3aphv.md): Solves the equation *Ax = b* for vectors of single-precision values using the specified iterative method and opaque preconditioner.
- [SparseSolve](sparsesolve%28__________%29-5vs11.md): Solves the equation *Ax = b* for vectors of double-precision values using the specified iterative method and preconditioner type.
- [SparseSolve](sparsesolve%28__________%29-9nzvm.md): Solves the equation *Ax = b* for vectors of single-precision values using the specified iterative method and preconditioner type.
- [SparseSolve](sparsesolve%28__________%29-6i1nx.md): Solves the equation *Ax = b* for vectors of double-precision values, treating *A* as an operator and using the specified iterative method and preconditioner.
- [SparseSolve](sparsesolve%28__________%29-7wnum.md): Solves the equation *Ax = b* for vectors of single-precision values, treating *A* as an operator and using the specified iterative method and preconditioner.

### Iterative sparse solve functions for complex matrices

- [SparseSolve](sparsesolve%28________%29-2cenj.md): Solve `Ax=b` using the specified iterative method for complex float values.
- [SparseSolve](sparsesolve%28________%29-35kl2.md): Solve `Ax=b` using the specified iterative method for complex double values.
- [SparseSolve](sparsesolve%28__________%29-1ogxn.md): Solve `Ax=b` using the specified iterative method for complex double values.
- [SparseSolve](sparsesolve%28__________%29-2bm9r.md): Solve `Ax=b` using the specified iterative method for complex float values.
- [SparseSolve](sparsesolve%28__________%29-2ygeh.md): Solve `Ax=b` using the specified iterative method for complex float values.
- [SparseSolve](sparsesolve%28__________%29-7yfqx.md): Solve `Ax=b` using the specified iterative method for complex double values.

### Supporting types

- [SparseIterativeStatus_t](sparseiterativestatus_t.md): Constants that define the status of the iterative solve.

## See Also

### Solving systems with iterative sparse methods

- [Solving systems using iterative methods](solving-systems-using-iterative-methods.md): Use iterative methods to solve systems of equations where the coefficient matrix is sparse.
- [Sparse Iterative Solving Functions (Matrix RHS)](sparse-iterative-solving-functions-matrix-rhs.md): Solve a system with a right-hand-side dense matrix using iterative methods.
- [Sparse Iterate Functions](sparse-iterate-functions.md): Perform a single iteration of the specified iterative method.
- [Sparse Iterative Methods](sparse-iterative-methods.md): Select a suitable iterative method to solve a system.
- [Preconditioners](preconditioners.md): Create preconditioners for iterative solves.
