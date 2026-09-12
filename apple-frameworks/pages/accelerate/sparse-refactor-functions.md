> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparse-refactor-functions](https://developer.apple.com/documentation/accelerate/sparse-refactor-functions)

# Sparse Refactor Functions (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Recompute a factorization using the numerical data from a matrix.

## Topics

### Matrix Refactorization Functions

- [SparseRefactor(\_:\_:)](sparserefactor%28____%29-8vrf5.md): Computes a factorization of the specified double-precision matrix using an existing factorization’s storage.
- [SparseRefactor(\_:\_:)](sparserefactor%28____%29-21q4x.md): Computes a factorization of the specified single-precision matrix using an existing factorization’s storage.
- [SparseRefactor(\_:\_:\_:)](sparserefactor%28______%29-6ttkd.md): Computes a factorization of the specified double-precision matrix using an existing factorization’s storage and specified options.
- [SparseRefactor(\_:\_:\_:)](sparserefactor%28______%29-2ovxs.md): Computes a factorization of the specified single-precision matrix using an existing factorization’s storage and specified options.
- [SparseRefactor(\_:\_:)](sparserefactor%28____%29-mgni.md): Reuses supplied factorization object’s storage to compute a new factorization of the supplied matrix of complex double values.
- [SparseRefactor(\_:\_:)](sparserefactor%28____%29-zegz.md): Reuses supplied factorization object’s storage to compute a new factorization of the supplied matrix of complex float values.
- [SparseRefactor(\_:\_:\_:)](sparserefactor%28______%29-4chx2.md): Reuses supplied factorization object’s storage to compute a new factorization of the supplied matrix of complex float values, using different options.
- [SparseRefactor(\_:\_:\_:)](sparserefactor%28______%29-q0va.md): Reuses supplied factorization object’s storage to compute a new factorization of the supplied matrix of complex double values, using different options.

### Matrix Refactorizations Functions with User-Defined Workspace

- [SparseRefactor(\_:\_:\_:)](sparserefactor%28______%29-9mqeq.md): Computes a factorization of the specified double-precision matrix using an existing factorization’s storage, without internal memory allocation.
- [SparseRefactor(\_:\_:\_:)](sparserefactor%28______%29-2dqt8.md): Computes a factorization of the specified single-precision matrix using an existing factorization’s storage, without internal memory allocation.
- [SparseRefactor(\_:\_:\_:\_:)](sparserefactor%28________%29-59ehf.md): Computes a factorization of the specified double-precision matrix using an existing factorization’s storage and specified options, and without internal memory allocation.
- [SparseRefactor(\_:\_:\_:\_:)](sparserefactor%28________%29-8i8vi.md): Computes a factorization of the specified single-precision matrix using an existing factorization’s storage and specified options, and without internal memory allocation.
- [SparseRefactor(\_:\_:\_:)](sparserefactor%28______%29-4ofvz.md): Reuses supplied factorization object’s storage to compute a new factorization of the supplied matrix of complex float values, without any internal allocations.
- [SparseRefactor(\_:\_:\_:)](sparserefactor%28______%29-593yb.md): Reuses supplied factorization object’s storage to compute a new factorization of the supplied matrix of complex double values, without any internal allocations.
- [SparseRefactor(\_:\_:\_:\_:)](sparserefactor%28________%29-201rh.md): Reuses supplied factorization object’s storage to compute a new factorization of the supplied matrix of complex float values, using updated options and without any internal allocations.
- [SparseRefactor(\_:\_:\_:\_:)](sparserefactor%28________%29-20xqc.md): Reuses supplied factorization object’s storage to compute a new factorization of the supplied matrix of complex double values, using updated options and without any internal allocations.

### Numeric Factorization Options

- [SparseNumericFactorOptions](sparsenumericfactoroptions.md): A structure that contains options that affect the numerical stage of a sparse factorization.

## See Also

### Solving systems with direct sparse methods

- [Solving systems using direct methods](solving-systems-using-direct-methods.md): Use direct methods to solve systems of equations where the coefficient matrix is sparse.
- [SparseOpaqueFactorization_Double](sparseopaquefactorization_double.md): A structure that represents the factorization of a matrix of double-precision, floating-point values.
- [SparseOpaqueFactorization_Float](sparseopaquefactorization_float.md): A structure that represents the factorization of a matrix of single-precision, floating-point values.
- [SparseOpaqueFactorization_Complex_Double](sparseopaquefactorization_complex_double.md): A semi-opaque type representing a matrix factorization in complex double.
- [SparseOpaqueFactorization_Complex_Float](sparseopaquefactorization_complex_float.md): A semi-opaque type representing a matrix factorization in complex float.
- [Sparse Matrix Factor Functions](sparse-matrix-factor-functions.md): Compute the factorization of a matrix.
- [Sparse Direct Solving Functions (Matrix RHS)](sparse-direct-solving-functions-matrix-rhs.md): Solve a system with a right-hand-side dense matrix using a factored sparse coefficient matrix.
- [Sparse Direct Solving Functions (Vector RHS)](sparse-direct-solving-functions-vector-rhs.md): Solve a system with a right-hand-side dense vector using a factored sparse coefficient matrix.
- [Sparse Symbolic Factorization Functions](sparse-symbolic-factorization-functions.md): Calculate the symbolic factorization of a matrix, and solve systems using precalculated symbolic factorizations.
- [Subfactor Functions](subfactor-functions.md): Extract and work with subfactors.

# Sparse Refactor Functions (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Recompute a factorization using the numerical data from a matrix.

## Topics

### Matrix Refactorization Functions

- [SparseRefactor](sparserefactor%28____%29-8vrf5.md): Computes a factorization of the specified double-precision matrix using an existing factorization’s storage.
- [SparseRefactor](sparserefactor%28____%29-21q4x.md): Computes a factorization of the specified single-precision matrix using an existing factorization’s storage.
- [SparseRefactor](sparserefactor%28______%29-6ttkd.md): Computes a factorization of the specified double-precision matrix using an existing factorization’s storage and specified options.
- [SparseRefactor](sparserefactor%28______%29-2ovxs.md): Computes a factorization of the specified single-precision matrix using an existing factorization’s storage and specified options.
- [SparseRefactor](sparserefactor%28____%29-mgni.md): Reuses supplied factorization object’s storage to compute a new factorization of the supplied matrix of complex double values.
- [SparseRefactor](sparserefactor%28____%29-zegz.md): Reuses supplied factorization object’s storage to compute a new factorization of the supplied matrix of complex float values.
- [SparseRefactor](sparserefactor%28______%29-4chx2.md): Reuses supplied factorization object’s storage to compute a new factorization of the supplied matrix of complex float values, using different options.
- [SparseRefactor](sparserefactor%28______%29-q0va.md): Reuses supplied factorization object’s storage to compute a new factorization of the supplied matrix of complex double values, using different options.

### Matrix Refactorizations Functions with User-Defined Workspace

- [SparseRefactor](sparserefactor%28______%29-9mqeq.md): Computes a factorization of the specified double-precision matrix using an existing factorization’s storage, without internal memory allocation.
- [SparseRefactor](sparserefactor%28______%29-2dqt8.md): Computes a factorization of the specified single-precision matrix using an existing factorization’s storage, without internal memory allocation.
- [SparseRefactor](sparserefactor%28________%29-59ehf.md): Computes a factorization of the specified double-precision matrix using an existing factorization’s storage and specified options, and without internal memory allocation.
- [SparseRefactor](sparserefactor%28________%29-8i8vi.md): Computes a factorization of the specified single-precision matrix using an existing factorization’s storage and specified options, and without internal memory allocation.
- [SparseRefactor](sparserefactor%28______%29-4ofvz.md): Reuses supplied factorization object’s storage to compute a new factorization of the supplied matrix of complex float values, without any internal allocations.
- [SparseRefactor](sparserefactor%28______%29-593yb.md): Reuses supplied factorization object’s storage to compute a new factorization of the supplied matrix of complex double values, without any internal allocations.
- [SparseRefactor](sparserefactor%28________%29-201rh.md): Reuses supplied factorization object’s storage to compute a new factorization of the supplied matrix of complex float values, using updated options and without any internal allocations.
- [SparseRefactor](sparserefactor%28________%29-20xqc.md): Reuses supplied factorization object’s storage to compute a new factorization of the supplied matrix of complex double values, using updated options and without any internal allocations.

### Numeric Factorization Options

- [SparseNumericFactorOptions](sparsenumericfactoroptions.md): A structure that contains options that affect the numerical stage of a sparse factorization.

## See Also

### Solving systems with direct sparse methods

- [Solving systems using direct methods](solving-systems-using-direct-methods.md): Use direct methods to solve systems of equations where the coefficient matrix is sparse.
- [SparseOpaqueFactorization_Double](sparseopaquefactorization_double.md): A structure that represents the factorization of a matrix of double-precision, floating-point values.
- [SparseOpaqueFactorization_Float](sparseopaquefactorization_float.md): A structure that represents the factorization of a matrix of single-precision, floating-point values.
- [SparseOpaqueFactorization_Complex_Double](sparseopaquefactorization_complex_double.md): A semi-opaque type representing a matrix factorization in complex double.
- [SparseOpaqueFactorization_Complex_Float](sparseopaquefactorization_complex_float.md): A semi-opaque type representing a matrix factorization in complex float.
- [Sparse Matrix Factor Functions](sparse-matrix-factor-functions.md): Compute the factorization of a matrix.
- [Sparse Direct Solving Functions (Matrix RHS)](sparse-direct-solving-functions-matrix-rhs.md): Solve a system with a right-hand-side dense matrix using a factored sparse coefficient matrix.
- [Sparse Direct Solving Functions (Vector RHS)](sparse-direct-solving-functions-vector-rhs.md): Solve a system with a right-hand-side dense vector using a factored sparse coefficient matrix.
- [Sparse Symbolic Factorization Functions](sparse-symbolic-factorization-functions.md): Calculate the symbolic factorization of a matrix, and solve systems using precalculated symbolic factorizations.
- [Subfactor Functions](subfactor-functions.md): Extract and work with subfactors.
