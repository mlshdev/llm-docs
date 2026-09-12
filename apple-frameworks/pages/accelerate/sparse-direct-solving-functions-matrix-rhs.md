> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparse-direct-solving-functions-matrix-rhs](https://developer.apple.com/documentation/accelerate/sparse-direct-solving-functions-matrix-rhs)

# Sparse Direct Solving Functions (Matrix RHS) (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Solve a system with a right-hand-side dense matrix using a factored sparse coefficient matrix.

## Topics

### In-place direct solving functions

- [SparseSolve(\_:\_:)](sparsesolve%28____%29-9j9rw.md): Solves the system *AX = B* using the supplied double-precision factorization of *A*, in place.
- [SparseSolve(\_:\_:)](sparsesolve%28____%29-1jp0k.md): Solves the system *AX = B* using the supplied single-precision factorization of *A*, in place.

### Out-of-place direct solving functions

- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-3iav7.md): Solves the system *AX = B* using the supplied double-precision factorization of *A*.
- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-2rxlq.md): Solves the system *AX = B* using the supplied single-precision factorization of *A*.

### In-place direct solving functions with user-defined workspace

- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-l2kw.md): Solves the system *AX = B* using the supplied double-precision factorization of *A*, in place and without any internal memory allocations.
- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-749fu.md): Solves the system *AX = B* using the supplied single-precision factorization of *A*, in place and without any internal memory allocations.

### Out-of-place direct solving functions with user-defined workspace

- [SparseSolve(\_:\_:\_:\_:)](sparsesolve%28________%29-7aj3g.md): Solves the system *AX = B* using the supplied double-precision factorization of *A*, without any internal memory allocations.
- [SparseSolve(\_:\_:\_:\_:)](sparsesolve%28________%29-8xma8.md): Solves the system *AX = B* using the supplied single-precision factorization of *A*, without any internal memory allocations.

### Complex matrix solving functions

- [SparseSolve(\_:\_:)](sparsesolve%28____%29-31yj7.md): Solves the system `AX=B` for `X`, using the supplied `SparseOpaqueFactorization_Complex_Double` of `A`, in place.
- [SparseSolve(\_:\_:)](sparsesolve%28____%29-3x0vj.md): Solve the equation `Subfactor * X = B` for the matrix `X` of complex double values, in place.
- [SparseSolve(\_:\_:)](sparsesolve%28____%29-4j17a.md): Solves the system `AX=B` for `X`, using the supplied `SparseOpaqueFactorization_Complex_Float` of `A`, in place.
- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-2qlwo.md): Solve the equation `Subfactor * X` = B for the matrix `X` of complex float values in place.
- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-2rk1c.md): Solves the system `AX=B` for `X`, using the supplied `SparseOpaqueFactorization_Complex_Double` of A`,` in place.
- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-34okt.md): Solves the system `AX=B` for `X`, using the supplied `SparseOpaqueFactorization_Complex_Double` of `A`, in place, and without any internal memory allocations.
- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-48njk.md): Solves the system `AX=B` for `X`, using the supplied `SparseOpaqueFactorization_Complex_Float` of A`,` in place.
- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-6pudz.md): Solve the equation `Subfactor * X` = B for the matrix `X` of complex double values in place.
- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-7krer.md): Solve the equation `Subfactor * X = B` for the matrix `X` of complex float values, in place.
- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-7qdpl.md): Solve the equation `Subfactor * X = B` for the matrix `X` of complex double values, in place.
- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-8ikjb.md): Solves the system `AX=B` for `X`, using the supplied `SparseOpaqueFactorization_Complex_Float` of `A`, in place, and without any internal memory allocations.
- [SparseSolve(\_:\_:\_:\_:)](sparsesolve%28________%29-5xn6p.md): Solves the system `AX=B` for `X`, using the supplied `SparseOpaqueFactorization_Complex_Double` of `A`, and without any internal memory allocations.
- [SparseSolve(\_:\_:\_:\_:)](sparsesolve%28________%29-6demt.md): Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Double` of `A`, in place.
- [SparseSolve(\_:\_:\_:\_:)](sparsesolve%28________%29-6od6k.md): Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Float` of `A`, in place.
- [SparseSolve(\_:\_:\_:\_:)](sparsesolve%28________%29-7mtyx.md): Solves the system `AX=B` for `X`, using the supplied `SparseOpaqueFactorization_Complex_Float` of `A`, and without any internal memory allocations.

## See Also

### Solving systems with direct sparse methods

- [Solving systems using direct methods](solving-systems-using-direct-methods.md): Use direct methods to solve systems of equations where the coefficient matrix is sparse.
- [SparseOpaqueFactorization_Double](sparseopaquefactorization_double.md): A structure that represents the factorization of a matrix of double-precision, floating-point values.
- [SparseOpaqueFactorization_Float](sparseopaquefactorization_float.md): A structure that represents the factorization of a matrix of single-precision, floating-point values.
- [SparseOpaqueFactorization_Complex_Double](sparseopaquefactorization_complex_double.md): A semi-opaque type representing a matrix factorization in complex double.
- [SparseOpaqueFactorization_Complex_Float](sparseopaquefactorization_complex_float.md): A semi-opaque type representing a matrix factorization in complex float.
- [Sparse Matrix Factor Functions](sparse-matrix-factor-functions.md): Compute the factorization of a matrix.
- [Sparse Direct Solving Functions (Vector RHS)](sparse-direct-solving-functions-vector-rhs.md): Solve a system with a right-hand-side dense vector using a factored sparse coefficient matrix.
- [Sparse Symbolic Factorization Functions](sparse-symbolic-factorization-functions.md): Calculate the symbolic factorization of a matrix, and solve systems using precalculated symbolic factorizations.
- [Sparse Refactor Functions](sparse-refactor-functions.md): Recompute a factorization using the numerical data from a matrix.
- [Subfactor Functions](subfactor-functions.md): Extract and work with subfactors.

# Sparse Direct Solving Functions (Matrix RHS) (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Solve a system with a right-hand-side dense matrix using a factored sparse coefficient matrix.

## Topics

### In-place direct solving functions

- [SparseSolve](sparsesolve%28____%29-9j9rw.md): Solves the system *AX = B* using the supplied double-precision factorization of *A*, in place.
- [SparseSolve](sparsesolve%28____%29-1jp0k.md): Solves the system *AX = B* using the supplied single-precision factorization of *A*, in place.

### Out-of-place direct solving functions

- [SparseSolve](sparsesolve%28______%29-3iav7.md): Solves the system *AX = B* using the supplied double-precision factorization of *A*.
- [SparseSolve](sparsesolve%28______%29-2rxlq.md): Solves the system *AX = B* using the supplied single-precision factorization of *A*.

### In-place direct solving functions with user-defined workspace

- [SparseSolve](sparsesolve%28______%29-l2kw.md): Solves the system *AX = B* using the supplied double-precision factorization of *A*, in place and without any internal memory allocations.
- [SparseSolve](sparsesolve%28______%29-749fu.md): Solves the system *AX = B* using the supplied single-precision factorization of *A*, in place and without any internal memory allocations.

### Out-of-place direct solving functions with user-defined workspace

- [SparseSolve](sparsesolve%28________%29-7aj3g.md): Solves the system *AX = B* using the supplied double-precision factorization of *A*, without any internal memory allocations.
- [SparseSolve](sparsesolve%28________%29-8xma8.md): Solves the system *AX = B* using the supplied single-precision factorization of *A*, without any internal memory allocations.

### Complex matrix solving functions

- [SparseSolve](sparsesolve%28____%29-31yj7.md): Solves the system `AX=B` for `X`, using the supplied `SparseOpaqueFactorization_Complex_Double` of `A`, in place.
- [SparseSolve](sparsesolve%28____%29-3x0vj.md): Solve the equation `Subfactor * X = B` for the matrix `X` of complex double values, in place.
- [SparseSolve](sparsesolve%28____%29-4j17a.md): Solves the system `AX=B` for `X`, using the supplied `SparseOpaqueFactorization_Complex_Float` of `A`, in place.
- [SparseSolve](sparsesolve%28______%29-2qlwo.md): Solve the equation `Subfactor * X` = B for the matrix `X` of complex float values in place.
- [SparseSolve](sparsesolve%28______%29-2rk1c.md): Solves the system `AX=B` for `X`, using the supplied `SparseOpaqueFactorization_Complex_Double` of A`,` in place.
- [SparseSolve](sparsesolve%28______%29-34okt.md): Solves the system `AX=B` for `X`, using the supplied `SparseOpaqueFactorization_Complex_Double` of `A`, in place, and without any internal memory allocations.
- [SparseSolve](sparsesolve%28______%29-48njk.md): Solves the system `AX=B` for `X`, using the supplied `SparseOpaqueFactorization_Complex_Float` of A`,` in place.
- [SparseSolve](sparsesolve%28______%29-6pudz.md): Solve the equation `Subfactor * X` = B for the matrix `X` of complex double values in place.
- [SparseSolve](sparsesolve%28______%29-7krer.md): Solve the equation `Subfactor * X = B` for the matrix `X` of complex float values, in place.
- [SparseSolve](sparsesolve%28______%29-7qdpl.md): Solve the equation `Subfactor * X = B` for the matrix `X` of complex double values, in place.
- [SparseSolve](sparsesolve%28______%29-8ikjb.md): Solves the system `AX=B` for `X`, using the supplied `SparseOpaqueFactorization_Complex_Float` of `A`, in place, and without any internal memory allocations.
- [SparseSolve](sparsesolve%28________%29-5xn6p.md): Solves the system `AX=B` for `X`, using the supplied `SparseOpaqueFactorization_Complex_Double` of `A`, and without any internal memory allocations.
- [SparseSolve](sparsesolve%28________%29-6demt.md): Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Double` of `A`, in place.
- [SparseSolve](sparsesolve%28________%29-6od6k.md): Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Float` of `A`, in place.
- [SparseSolve](sparsesolve%28________%29-7mtyx.md): Solves the system `AX=B` for `X`, using the supplied `SparseOpaqueFactorization_Complex_Float` of `A`, and without any internal memory allocations.

## See Also

### Solving systems with direct sparse methods

- [Solving systems using direct methods](solving-systems-using-direct-methods.md): Use direct methods to solve systems of equations where the coefficient matrix is sparse.
- [SparseOpaqueFactorization_Double](sparseopaquefactorization_double.md): A structure that represents the factorization of a matrix of double-precision, floating-point values.
- [SparseOpaqueFactorization_Float](sparseopaquefactorization_float.md): A structure that represents the factorization of a matrix of single-precision, floating-point values.
- [SparseOpaqueFactorization_Complex_Double](sparseopaquefactorization_complex_double.md): A semi-opaque type representing a matrix factorization in complex double.
- [SparseOpaqueFactorization_Complex_Float](sparseopaquefactorization_complex_float.md): A semi-opaque type representing a matrix factorization in complex float.
- [Sparse Matrix Factor Functions](sparse-matrix-factor-functions.md): Compute the factorization of a matrix.
- [Sparse Direct Solving Functions (Vector RHS)](sparse-direct-solving-functions-vector-rhs.md): Solve a system with a right-hand-side dense vector using a factored sparse coefficient matrix.
- [Sparse Symbolic Factorization Functions](sparse-symbolic-factorization-functions.md): Calculate the symbolic factorization of a matrix, and solve systems using precalculated symbolic factorizations.
- [Sparse Refactor Functions](sparse-refactor-functions.md): Recompute a factorization using the numerical data from a matrix.
- [Subfactor Functions](subfactor-functions.md): Extract and work with subfactors.
