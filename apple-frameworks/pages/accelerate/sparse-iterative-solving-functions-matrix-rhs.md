> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparse-iterative-solving-functions-matrix-rhs](https://developer.apple.com/documentation/accelerate/sparse-iterative-solving-functions-matrix-rhs)

# Sparse Iterative Solving Functions (Matrix RHS) (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Solve a system with a right-hand-side dense matrix using iterative methods.

## Topics

### Iterative sparse solve functions

- [SparseSolve(\_:\_:\_:\_:)](sparsesolve%28________%29-3ft19.md): Solves the equation *AX = B* for matrices of double-precision values using the specified iterative method.
- [SparseSolve(\_:\_:\_:\_:)](sparsesolve%28________%29-1f00y.md): Solves the equation *AX = B* for matrices of single-precision values using the specified iterative method.
- [SparseSolve(\_:\_:\_:\_:)](sparsesolve%28________%29-vewd.md): Solves the equation *AX = B* for matrices of double-precision values, treating *A* as an operator and using the specified iterative method.
- [SparseSolve(\_:\_:\_:\_:)](sparsesolve%28________%29-8mtxu.md): Solves the equation *AX = B* for matrices of single-precision values, treating *A* as an operator and using the specified iterative method.

### Iterative sparse solve functions with preconditioner

- [SparseSolve(\_:\_:\_:\_:\_:)](sparsesolve%28__________%29-5yh8m.md): Solves the equation *AX = B* for matrices of double-precision values using the specified iterative method and opaque preconditioner.
- [SparseSolve(\_:\_:\_:\_:\_:)](sparsesolve%28__________%29-7vrh0.md): Solves the equation *AX = B* for matrices of single-precision values using the specified iterative method and opaque preconditioner.
- [SparseSolve(\_:\_:\_:\_:\_:)](sparsesolve%28__________%29-5d7vf.md): Solves the equation *AX = B* for matrices of double-precision values using the specified iterative method and preconditioner type.
- [SparseSolve(\_:\_:\_:\_:\_:)](sparsesolve%28__________%29-7apig.md): Solves the equation *AX = B* for matrices of single-precision values using the specified iterative method and preconditioner type.
- [SparseSolve(\_:\_:\_:\_:\_:)](sparsesolve%28__________%29-8nfbc.md): Solves the equation *AX = B* for matrices of double-precision values, treating *A* as an operator and using the specified iterative method.
- [SparseSolve(\_:\_:\_:\_:\_:)](sparsesolve%28__________%29-80ri4.md): Solves the equation *AX = B* for matrices of single-precision values, treating *A* as an operator and using the specified iterative method.

### Iterative sparse solve functions for complex matrices

- [SparseSolve(\_:\_:\_:\_:)](sparsesolve%28________%29-41c6p.md): Solve `Ax=b` using the specified iterative method for complex double values.
- [SparseSolve(\_:\_:\_:\_:)](sparsesolve%28________%29-4xwsw.md): Solve `AX=B` using the specified iterative method for complex float values.
- [SparseSolve(\_:\_:\_:\_:\_:)](sparsesolve%28__________%29-155od.md): Solve `AX=B` using the specified iterative method for complex float values.
- [SparseSolve(\_:\_:\_:\_:\_:)](sparsesolve%28__________%29-1fw3p.md): Solve `Ax=b` using the specified iterative method for complex float values.
- [SparseSolve(\_:\_:\_:\_:\_:)](sparsesolve%28__________%29-1i6u8.md): Solve `AX=B` using the specified iterative method for complex float values.
- [SparseSolve(\_:\_:\_:\_:\_:)](sparsesolve%28__________%29-4fvqm.md): Solve `AX=B` using the specified iterative method for complex double values.
- [SparseSolve(\_:\_:\_:\_:\_:)](sparsesolve%28__________%29-4fvqm.md): Solve `AX=B` using the specified iterative method for complex double values.
- [SparseSolve(\_:\_:\_:\_:\_:)](sparsesolve%28__________%29-4fvqm.md): Solve `AX=B` using the specified iterative method for complex double values.
- [SparseSolve(\_:\_:\_:\_:\_:)](sparsesolve%28__________%29-655i9.md): Solve `AX=B` using the specified iterative method for complex float values.
- [SparseSolve(\_:\_:\_:\_:\_:)](sparsesolve%28__________%29-7hdp4.md): Solve `Ax=b` using the specified iterative method for complex double values.
- [SparseSolve(\_:\_:\_:\_:\_:)](sparsesolve%28__________%29-7m9vp.md): Solve `AX=B` using the specified iterative method for complex double values.
- [SparseSolve(\_:\_:\_:\_:)](sparsesolve%28________%29-6wjj9.md): Solve `AX=B` using the specified iterative method for complex float values.
- [SparseSolve(\_:\_:\_:\_:)](sparsesolve%28________%29-7zp1d.md): Solve `AX=B` using the specified iterative method for complex double values.
- [SparseSolve(\_:\_:\_:\_:)](sparsesolve%28________%29-8bndu.md): Solve `AX=B` using the specified iterative method for complex double values.
- [SparseSolve(\_:\_:\_:\_:)](sparsesolve%28________%29-8yld7.md): Solve `Ax=b` using the specified iterative method for complex float values.
- [SparseSolve(\_:\_:\_:\_:\_:)](sparsesolve%28__________%29-4xd4z.md): Solve `AX=B` using the specified iterative method for complex double values.

### Supporting types

- [SparseIterativeStatus_t](sparseiterativestatus_t.md): Constants that define the status of the iterative solve.

## See Also

### Solving systems with iterative sparse methods

- [Solving systems using iterative methods](solving-systems-using-iterative-methods.md): Use iterative methods to solve systems of equations where the coefficient matrix is sparse.
- [Sparse Iterative Solving Functions (Vector RHS)](sparse-iterative-solving-functions-vector-rhs.md): Solve a system with a right-hand-side dense vector using iterative methods.
- [Sparse Iterate Functions](sparse-iterate-functions.md): Perform a single iteration of the specified iterative method.
- [Sparse Iterative Methods](sparse-iterative-methods.md): Select a suitable iterative method to solve a system.
- [Preconditioners](preconditioners.md): Create preconditioners for iterative solves.

# Sparse Iterative Solving Functions (Matrix RHS) (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Solve a system with a right-hand-side dense matrix using iterative methods.

## Topics

### Iterative sparse solve functions

- [SparseSolve](sparsesolve%28________%29-3ft19.md): Solves the equation *AX = B* for matrices of double-precision values using the specified iterative method.
- [SparseSolve](sparsesolve%28________%29-1f00y.md): Solves the equation *AX = B* for matrices of single-precision values using the specified iterative method.
- [SparseSolve](sparsesolve%28________%29-vewd.md): Solves the equation *AX = B* for matrices of double-precision values, treating *A* as an operator and using the specified iterative method.
- [SparseSolve](sparsesolve%28________%29-8mtxu.md): Solves the equation *AX = B* for matrices of single-precision values, treating *A* as an operator and using the specified iterative method.

### Iterative sparse solve functions with preconditioner

- [SparseSolve](sparsesolve%28__________%29-5yh8m.md): Solves the equation *AX = B* for matrices of double-precision values using the specified iterative method and opaque preconditioner.
- [SparseSolve](sparsesolve%28__________%29-7vrh0.md): Solves the equation *AX = B* for matrices of single-precision values using the specified iterative method and opaque preconditioner.
- [SparseSolve](sparsesolve%28__________%29-5d7vf.md): Solves the equation *AX = B* for matrices of double-precision values using the specified iterative method and preconditioner type.
- [SparseSolve](sparsesolve%28__________%29-7apig.md): Solves the equation *AX = B* for matrices of single-precision values using the specified iterative method and preconditioner type.
- [SparseSolve](sparsesolve%28__________%29-8nfbc.md): Solves the equation *AX = B* for matrices of double-precision values, treating *A* as an operator and using the specified iterative method.
- [SparseSolve](sparsesolve%28__________%29-80ri4.md): Solves the equation *AX = B* for matrices of single-precision values, treating *A* as an operator and using the specified iterative method.

### Iterative sparse solve functions for complex matrices

- [SparseSolve](sparsesolve%28________%29-41c6p.md): Solve `Ax=b` using the specified iterative method for complex double values.
- [SparseSolve](sparsesolve%28________%29-4xwsw.md): Solve `AX=B` using the specified iterative method for complex float values.
- [SparseSolve](sparsesolve%28__________%29-155od.md): Solve `AX=B` using the specified iterative method for complex float values.
- [SparseSolve](sparsesolve%28__________%29-1fw3p.md): Solve `Ax=b` using the specified iterative method for complex float values.
- [SparseSolve](sparsesolve%28__________%29-1i6u8.md): Solve `AX=B` using the specified iterative method for complex float values.
- [SparseSolve](sparsesolve%28__________%29-4fvqm.md): Solve `AX=B` using the specified iterative method for complex double values.
- [SparseSolve](sparsesolve%28__________%29-4fvqm.md): Solve `AX=B` using the specified iterative method for complex double values.
- [SparseSolve](sparsesolve%28__________%29-4fvqm.md): Solve `AX=B` using the specified iterative method for complex double values.
- [SparseSolve](sparsesolve%28__________%29-655i9.md): Solve `AX=B` using the specified iterative method for complex float values.
- [SparseSolve](sparsesolve%28__________%29-7hdp4.md): Solve `Ax=b` using the specified iterative method for complex double values.
- [SparseSolve](sparsesolve%28__________%29-7m9vp.md): Solve `AX=B` using the specified iterative method for complex double values.
- [SparseSolve](sparsesolve%28________%29-6wjj9.md): Solve `AX=B` using the specified iterative method for complex float values.
- [SparseSolve](sparsesolve%28________%29-7zp1d.md): Solve `AX=B` using the specified iterative method for complex double values.
- [SparseSolve](sparsesolve%28________%29-8bndu.md): Solve `AX=B` using the specified iterative method for complex double values.
- [SparseSolve](sparsesolve%28________%29-8yld7.md): Solve `Ax=b` using the specified iterative method for complex float values.
- [SparseSolve](sparsesolve%28__________%29-4xd4z.md): Solve `AX=B` using the specified iterative method for complex double values.

### Supporting types

- [SparseIterativeStatus_t](sparseiterativestatus_t.md): Constants that define the status of the iterative solve.

## See Also

### Solving systems with iterative sparse methods

- [Solving systems using iterative methods](solving-systems-using-iterative-methods.md): Use iterative methods to solve systems of equations where the coefficient matrix is sparse.
- [Sparse Iterative Solving Functions (Vector RHS)](sparse-iterative-solving-functions-vector-rhs.md): Solve a system with a right-hand-side dense vector using iterative methods.
- [Sparse Iterate Functions](sparse-iterate-functions.md): Perform a single iteration of the specified iterative method.
- [Sparse Iterative Methods](sparse-iterative-methods.md): Select a suitable iterative method to solve a system.
- [Preconditioners](preconditioners.md): Create preconditioners for iterative solves.
