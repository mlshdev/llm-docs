> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparse-direct-solving-functions-vector-rhs](https://developer.apple.com/documentation/accelerate/sparse-direct-solving-functions-vector-rhs)

# Sparse Direct Solving Functions (Vector RHS) (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Solve a system with a right-hand-side dense vector using a factored sparse coefficient matrix.

## Topics

### In-place direct solving functions

- [SparseSolve(\_:\_:)](sparsesolve%28____%29-pofy.md): Solves the system *Ax = x* using the supplied double-precision factorization of *A*.
- [SparseSolve(\_:\_:)](sparsesolve%28____%29-60ngw.md): Solves the system *Ax = b* using the supplied single-precision factorization of *A*, in place.

### Out-of-place direct solving functions

- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-416bj.md): Solves the system *Ax = b* using the supplied double-precision factorization of *A*.
- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-666oh.md): Solves the system *Ax = b* using the supplied single-precision factorization of *A*.

### In-place direct solving functions with user-defined workspace

- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-14nj.md): Solves the system *Ax = b* using the supplied double-precision factorization of *A*, in place and without any internal memory allocations.
- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-9hs9y.md): Solves the system *Ax = b* using the supplied single-precision factorization of *A*, in place and without any internal memory allocations.

### Out-of-place direct solving functions with user-defined workspace

- [SparseSolve(\_:\_:\_:\_:)](sparsesolve%28________%29-7k9ll.md): Solves the system *Ax = b* using the supplied double-precision factorization of *A*, without any internal memory allocations.
- [SparseSolve(\_:\_:\_:\_:)](sparsesolve%28________%29-6bmr8.md): Solves the system *Ax = b* using the supplied single-precision factorization of *A*, without any internal memory allocations.

### Complex direct solving functions

- [SparseSolve(\_:\_:)](sparsesolve%28____%29-4fydu.md): Solve the equation `Subfactor * x = b` for the vector `x` of complex float values, in place.
- [SparseSolve(\_:\_:)](sparsesolve%28____%29-1psgz.md): Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Double` of `A`, in place.
- [SparseSolve(\_:\_:)](sparsesolve%28____%29-4fydu.md): Solve the equation `Subfactor * x = b` for the vector `x` of complex float values, in place.
- [SparseSolve(\_:\_:)](sparsesolve%28____%29-5apxy.md): Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Float` of `A`, in place.
- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-3482l.md): Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Float` of `A`, in place.
- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-3hev5.md): Solve the equation `Subfactor * x = b` for the vector `x` of complex float values.
- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-3qkkl.md): Solve the equation `Subfactor * x = b` for the vector `x` of complex float values, in place.
- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-76ge0.md): Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Float` of `A`.
- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-7day5.md): Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Double` of `A`.
- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-7ltk8.md): Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Double` of `A`, in place.
- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-85y2u.md): Solve the equation `Subfactor * x = b` for the vector `x` of complex double values.
- [SparseSolve(\_:\_:\_:)](sparsesolve%28______%29-90ojf.md): Solve the equation `Subfactor * x = b` for the vector `x` of complex double values, in place.

## See Also

### Solving systems with direct sparse methods

- [Solving systems using direct methods](solving-systems-using-direct-methods.md): Use direct methods to solve systems of equations where the coefficient matrix is sparse.
- [SparseOpaqueFactorization_Double](sparseopaquefactorization_double.md): A structure that represents the factorization of a matrix of double-precision, floating-point values.
- [SparseOpaqueFactorization_Float](sparseopaquefactorization_float.md): A structure that represents the factorization of a matrix of single-precision, floating-point values.
- [SparseOpaqueFactorization_Complex_Double](sparseopaquefactorization_complex_double.md): A semi-opaque type representing a matrix factorization in complex double.
- [SparseOpaqueFactorization_Complex_Float](sparseopaquefactorization_complex_float.md): A semi-opaque type representing a matrix factorization in complex float.
- [Sparse Matrix Factor Functions](sparse-matrix-factor-functions.md): Compute the factorization of a matrix.
- [Sparse Direct Solving Functions (Matrix RHS)](sparse-direct-solving-functions-matrix-rhs.md): Solve a system with a right-hand-side dense matrix using a factored sparse coefficient matrix.
- [Sparse Symbolic Factorization Functions](sparse-symbolic-factorization-functions.md): Calculate the symbolic factorization of a matrix, and solve systems using precalculated symbolic factorizations.
- [Sparse Refactor Functions](sparse-refactor-functions.md): Recompute a factorization using the numerical data from a matrix.
- [Subfactor Functions](subfactor-functions.md): Extract and work with subfactors.

# Sparse Direct Solving Functions (Vector RHS) (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Solve a system with a right-hand-side dense vector using a factored sparse coefficient matrix.

## Topics

### In-place direct solving functions

- [SparseSolve](sparsesolve%28____%29-pofy.md): Solves the system *Ax = x* using the supplied double-precision factorization of *A*.
- [SparseSolve](sparsesolve%28____%29-60ngw.md): Solves the system *Ax = b* using the supplied single-precision factorization of *A*, in place.

### Out-of-place direct solving functions

- [SparseSolve](sparsesolve%28______%29-416bj.md): Solves the system *Ax = b* using the supplied double-precision factorization of *A*.
- [SparseSolve](sparsesolve%28______%29-666oh.md): Solves the system *Ax = b* using the supplied single-precision factorization of *A*.

### In-place direct solving functions with user-defined workspace

- [SparseSolve](sparsesolve%28______%29-14nj.md): Solves the system *Ax = b* using the supplied double-precision factorization of *A*, in place and without any internal memory allocations.
- [SparseSolve](sparsesolve%28______%29-9hs9y.md): Solves the system *Ax = b* using the supplied single-precision factorization of *A*, in place and without any internal memory allocations.

### Out-of-place direct solving functions with user-defined workspace

- [SparseSolve](sparsesolve%28________%29-7k9ll.md): Solves the system *Ax = b* using the supplied double-precision factorization of *A*, without any internal memory allocations.
- [SparseSolve](sparsesolve%28________%29-6bmr8.md): Solves the system *Ax = b* using the supplied single-precision factorization of *A*, without any internal memory allocations.

### Complex direct solving functions

- [SparseSolve](sparsesolve%28____%29-4fydu.md): Solve the equation `Subfactor * x = b` for the vector `x` of complex float values, in place.
- [SparseSolve](sparsesolve%28____%29-1psgz.md): Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Double` of `A`, in place.
- [SparseSolve](sparsesolve%28____%29-4fydu.md): Solve the equation `Subfactor * x = b` for the vector `x` of complex float values, in place.
- [SparseSolve](sparsesolve%28____%29-5apxy.md): Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Float` of `A`, in place.
- [SparseSolve](sparsesolve%28______%29-3482l.md): Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Float` of `A`, in place.
- [SparseSolve](sparsesolve%28______%29-3hev5.md): Solve the equation `Subfactor * x = b` for the vector `x` of complex float values.
- [SparseSolve](sparsesolve%28______%29-3qkkl.md): Solve the equation `Subfactor * x = b` for the vector `x` of complex float values, in place.
- [SparseSolve](sparsesolve%28______%29-76ge0.md): Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Float` of `A`.
- [SparseSolve](sparsesolve%28______%29-7day5.md): Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Double` of `A`.
- [SparseSolve](sparsesolve%28______%29-7ltk8.md): Solves the system `Ax=b` for `x`, using the supplied `SparseOpaqueFactorization_Complex_Double` of `A`, in place.
- [SparseSolve](sparsesolve%28______%29-85y2u.md): Solve the equation `Subfactor * x = b` for the vector `x` of complex double values.
- [SparseSolve](sparsesolve%28______%29-90ojf.md): Solve the equation `Subfactor * x = b` for the vector `x` of complex double values, in place.

## See Also

### Solving systems with direct sparse methods

- [Solving systems using direct methods](solving-systems-using-direct-methods.md): Use direct methods to solve systems of equations where the coefficient matrix is sparse.
- [SparseOpaqueFactorization_Double](sparseopaquefactorization_double.md): A structure that represents the factorization of a matrix of double-precision, floating-point values.
- [SparseOpaqueFactorization_Float](sparseopaquefactorization_float.md): A structure that represents the factorization of a matrix of single-precision, floating-point values.
- [SparseOpaqueFactorization_Complex_Double](sparseopaquefactorization_complex_double.md): A semi-opaque type representing a matrix factorization in complex double.
- [SparseOpaqueFactorization_Complex_Float](sparseopaquefactorization_complex_float.md): A semi-opaque type representing a matrix factorization in complex float.
- [Sparse Matrix Factor Functions](sparse-matrix-factor-functions.md): Compute the factorization of a matrix.
- [Sparse Direct Solving Functions (Matrix RHS)](sparse-direct-solving-functions-matrix-rhs.md): Solve a system with a right-hand-side dense matrix using a factored sparse coefficient matrix.
- [Sparse Symbolic Factorization Functions](sparse-symbolic-factorization-functions.md): Calculate the symbolic factorization of a matrix, and solve systems using precalculated symbolic factorizations.
- [Sparse Refactor Functions](sparse-refactor-functions.md): Recompute a factorization using the numerical data from a matrix.
- [Subfactor Functions](subfactor-functions.md): Extract and work with subfactors.
