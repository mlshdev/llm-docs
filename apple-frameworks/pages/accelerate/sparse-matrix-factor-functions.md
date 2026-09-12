> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparse-matrix-factor-functions](https://developer.apple.com/documentation/accelerate/sparse-matrix-factor-functions)

# Sparse Matrix Factor Functions (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Compute the factorization of a matrix.

## Topics

### Matrix factorization functions

- [SparseFactor(\_:\_:)](sparsefactor%28____%29-8gl6j.md): Returns the specified factorization of a sparse matrix of double-precision values.
- [SparseFactor(\_:\_:)](sparsefactor%28____%29-38shj.md): Returns the specified factorization of a sparse matrix of single-precision values.
- [SparseFactor(\_:\_:\_:\_:)](sparsefactor%28________%29-88xmk.md): Returns the specified factorization of a sparse matrix of double-precision values using the specified options.
- [SparseFactor(\_:\_:\_:\_:)](sparsefactor%28________%29-8apyz.md): Returns the specified factorization of a sparse matrix of single-precision values using the specified options.

### Complex matrix factorization functions

- [SparseFactor(\_:\_:)](sparsefactor%28____%29-1avkp.md): Returns the specified factorization of a sparse matrix of complex double values.
- [SparseFactor(\_:\_:)](sparsefactor%28____%29-55tzk.md): Returns a symbolic factorization of the requested type for a complex matrix with the given structure.
- [SparseFactor(\_:\_:)](sparsefactor%28____%29-5zzpu.md): Returns the factorization of a sparse matrix of complex double values corresponding to the supplied symbolic factorization.
- [SparseFactor(\_:\_:)](sparsefactor%28____%29-73n38.md): Returns the specified factorization of a sparse matrix of complex float values.

### Factorization inertia functions

- [SparseGetInertia(\_:\_:\_:\_:)](sparsegetinertia%28________%29-6r90r.md): Returns the inertia of a single-precision *LDLᵀ* factorization.
- [SparseGetInertia(\_:\_:\_:\_:)](sparsegetinertia%28________%29-2ykzq.md): Returns the inertia of a double-precision *LDLᵀ* factorization.
- [SparseGetInertia(\_:\_:\_:\_:)](sparsegetinertia%28________%29-2gc7f.md): Returns the inertia of an LDLT factorization in complex double.
- [SparseGetInertia(\_:\_:\_:\_:)](sparsegetinertia%28________%29-6ca5h.md): Returns the inertia of an LDLT factorization in complex float.
- [SparseUpdate_t](sparseupdate_t.md): Low-rank update algorithm selector
- [SparseUpdatePartialRefactor](sparseupdatepartialrefactor.md): Low-rank update algorithm selector

### Factorization update functions

- [SparseUpdateFactor(\_:\_:\_:\_:\_:)](sparseupdatefactor%28__________%29-1n2be.md): Apply a low-rank update to an existing factorization of a matrix of complex float values.
- [SparseUpdateFactor(\_:\_:\_:\_:\_:)](sparseupdatefactor%28__________%29-9h956.md): Apply a low-rank update to an existing factorization of a matrix of complex double values.
- [SparseUpdateFactor(\_:\_:\_:\_:\_:)](sparseupdatefactor%28__________%29-9qg54.md): Apply a low-rank update to an existing factorization of a matrix of float values.
- [SparseUpdateFactor(\_:\_:\_:\_:\_:)](sparseupdatefactor%28__________%29-wrqg.md): Apply a low-rank update to an existing factorization of a matrix of double values.

### Structures that specify factorization type and factorization options

- [SparseFactorization_t](sparsefactorization_t.md): Constants that define the factorization type.
- [SparseSymbolicFactorOptions](sparsesymbolicfactoroptions.md): A structure that contains options that affect the symbolic stage of a sparse factorization.
- [SparseNumericFactorOptions](sparsenumericfactoroptions.md): A structure that contains options that affect the numerical stage of a sparse factorization.

## See Also

### Solving systems with direct sparse methods

- [Solving systems using direct methods](solving-systems-using-direct-methods.md): Use direct methods to solve systems of equations where the coefficient matrix is sparse.
- [SparseOpaqueFactorization_Double](sparseopaquefactorization_double.md): A structure that represents the factorization of a matrix of double-precision, floating-point values.
- [SparseOpaqueFactorization_Float](sparseopaquefactorization_float.md): A structure that represents the factorization of a matrix of single-precision, floating-point values.
- [SparseOpaqueFactorization_Complex_Double](sparseopaquefactorization_complex_double.md): A semi-opaque type representing a matrix factorization in complex double.
- [SparseOpaqueFactorization_Complex_Float](sparseopaquefactorization_complex_float.md): A semi-opaque type representing a matrix factorization in complex float.
- [Sparse Direct Solving Functions (Matrix RHS)](sparse-direct-solving-functions-matrix-rhs.md): Solve a system with a right-hand-side dense matrix using a factored sparse coefficient matrix.
- [Sparse Direct Solving Functions (Vector RHS)](sparse-direct-solving-functions-vector-rhs.md): Solve a system with a right-hand-side dense vector using a factored sparse coefficient matrix.
- [Sparse Symbolic Factorization Functions](sparse-symbolic-factorization-functions.md): Calculate the symbolic factorization of a matrix, and solve systems using precalculated symbolic factorizations.
- [Sparse Refactor Functions](sparse-refactor-functions.md): Recompute a factorization using the numerical data from a matrix.
- [Subfactor Functions](subfactor-functions.md): Extract and work with subfactors.

# Sparse Matrix Factor Functions (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Compute the factorization of a matrix.

## Topics

### Matrix factorization functions

- [SparseFactor](sparsefactor%28____%29-8gl6j.md): Returns the specified factorization of a sparse matrix of double-precision values.
- [SparseFactor](sparsefactor%28____%29-38shj.md): Returns the specified factorization of a sparse matrix of single-precision values.
- [SparseFactor](sparsefactor%28________%29-88xmk.md): Returns the specified factorization of a sparse matrix of double-precision values using the specified options.
- [SparseFactor](sparsefactor%28________%29-8apyz.md): Returns the specified factorization of a sparse matrix of single-precision values using the specified options.

### Complex matrix factorization functions

- [SparseFactor](sparsefactor%28____%29-1avkp.md): Returns the specified factorization of a sparse matrix of complex double values.
- [SparseFactor](sparsefactor%28____%29-55tzk.md): Returns a symbolic factorization of the requested type for a complex matrix with the given structure.
- [SparseFactor](sparsefactor%28____%29-5zzpu.md): Returns the factorization of a sparse matrix of complex double values corresponding to the supplied symbolic factorization.
- [SparseFactor](sparsefactor%28____%29-73n38.md): Returns the specified factorization of a sparse matrix of complex float values.

### Factorization inertia functions

- [SparseGetInertia](sparsegetinertia%28________%29-6r90r.md): Returns the inertia of a single-precision *LDLᵀ* factorization.
- [SparseGetInertia](sparsegetinertia%28________%29-2ykzq.md): Returns the inertia of a double-precision *LDLᵀ* factorization.
- [SparseGetInertia](sparsegetinertia%28________%29-2gc7f.md): Returns the inertia of an LDLT factorization in complex double.
- [SparseGetInertia](sparsegetinertia%28________%29-6ca5h.md): Returns the inertia of an LDLT factorization in complex float.
- [SparseUpdate_t](sparseupdate_t.md): Low-rank update algorithm selector
- [SparseUpdatePartialRefactor](sparseupdatepartialrefactor.md): Low-rank update algorithm selector

### Factorization update functions

- [SparseUpdateFactor](sparseupdatefactor%28__________%29-1n2be.md): Apply a low-rank update to an existing factorization of a matrix of complex float values.
- [SparseUpdateFactor](sparseupdatefactor%28__________%29-9h956.md): Apply a low-rank update to an existing factorization of a matrix of complex double values.
- [SparseUpdateFactor](sparseupdatefactor%28__________%29-9qg54.md): Apply a low-rank update to an existing factorization of a matrix of float values.
- [SparseUpdateFactor](sparseupdatefactor%28__________%29-wrqg.md): Apply a low-rank update to an existing factorization of a matrix of double values.

### Structures that specify factorization type and factorization options

- [SparseFactorization_t](sparsefactorization_t.md): Constants that define the factorization type.
- [SparseSymbolicFactorOptions](sparsesymbolicfactoroptions.md): A structure that contains options that affect the symbolic stage of a sparse factorization.
- [SparseNumericFactorOptions](sparsenumericfactoroptions.md): A structure that contains options that affect the numerical stage of a sparse factorization.

## See Also

### Solving systems with direct sparse methods

- [Solving systems using direct methods](solving-systems-using-direct-methods.md): Use direct methods to solve systems of equations where the coefficient matrix is sparse.
- [SparseOpaqueFactorization_Double](sparseopaquefactorization_double.md): A structure that represents the factorization of a matrix of double-precision, floating-point values.
- [SparseOpaqueFactorization_Float](sparseopaquefactorization_float.md): A structure that represents the factorization of a matrix of single-precision, floating-point values.
- [SparseOpaqueFactorization_Complex_Double](sparseopaquefactorization_complex_double.md): A semi-opaque type representing a matrix factorization in complex double.
- [SparseOpaqueFactorization_Complex_Float](sparseopaquefactorization_complex_float.md): A semi-opaque type representing a matrix factorization in complex float.
- [Sparse Direct Solving Functions (Matrix RHS)](sparse-direct-solving-functions-matrix-rhs.md): Solve a system with a right-hand-side dense matrix using a factored sparse coefficient matrix.
- [Sparse Direct Solving Functions (Vector RHS)](sparse-direct-solving-functions-vector-rhs.md): Solve a system with a right-hand-side dense vector using a factored sparse coefficient matrix.
- [Sparse Symbolic Factorization Functions](sparse-symbolic-factorization-functions.md): Calculate the symbolic factorization of a matrix, and solve systems using precalculated symbolic factorizations.
- [Sparse Refactor Functions](sparse-refactor-functions.md): Recompute a factorization using the numerical data from a matrix.
- [Subfactor Functions](subfactor-functions.md): Extract and work with subfactors.
