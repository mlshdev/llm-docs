> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparse-symbolic-factorization-functions](https://developer.apple.com/documentation/accelerate/sparse-symbolic-factorization-functions)

# Sparse Symbolic Factorization Functions (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Calculate the symbolic factorization of a matrix, and solve systems using precalculated symbolic factorizations.

## Topics

### Matrix symbolic factorization functions

- [SparseFactor(\_:\_:)](sparsefactor%28____%29-3697o.md): Returns a symbolic factorization of the requested type for a specified sparsity structure.
- [SparseFactor(\_:\_:\_:)](sparsefactor%28______%29-45gsz.md): Returns a symbolic factorization of the requested type for a single-precision matrix with the specified structure.

### Matrix factorizations using precalculated symbolic factorization

- [SparseFactor(\_:\_:)](sparsefactor%28____%29-58oq8.md): Returns the factorization of a sparse matrix of double-precision values that corresponds to the supplied symbolic factorization.
- [SparseFactor(\_:\_:)](sparsefactor%28____%29-1p6im.md): Returns the factorization of a sparse matrix of single-precision values that corresponds to the supplied symbolic factorization.
- [SparseFactor(\_:\_:\_:)](sparsefactor%28______%29-3ddg.md): Returns the factorization of a sparse matrix of double-precision values that corresponds to the supplied symbolic factorization using specified options.
- [SparseFactor(\_:\_:\_:)](sparsefactor%28______%29-797fl.md): Returns the factorization of a sparse matrix of single-precision values that corresponds to the supplied symbolic factorization using specified options.

### Matrix factorizations using precalculated symbolic factorization with user-defined workspace

- [SparseFactor(\_:\_:\_:\_:\_:)](sparsefactor%28__________%29-68hki.md): Returns the factorization of a sparse matrix of double-precision values that corresponds to the supplied symbolic factorization using user-defined workspace and factor storage.
- [SparseFactor(\_:\_:\_:\_:\_:)](sparsefactor%28__________%29-8afz.md): Returns the factorization of a sparse matrix of single-precision values that corresponds to the supplied symbolic factorization using user-defined workspace and factor storage.

### Supporting types

- [SparseOpaqueSymbolicFactorization](sparseopaquesymbolicfactorization.md): A semi-opaque type that represents symbolic matrix factorization.
- [SparseFactorization_t](sparsefactorization_t.md): Constants that define the factorization type.
- [SparseSymbolicFactorOptions](sparsesymbolicfactoroptions.md): A structure that contains options that affect the symbolic stage of a sparse factorization.

### Complex factorization functions

- [SparseFactor(\_:\_:)](sparsefactor%28____%29-7a3l4.md): Returns the factorization of a sparse matrix of complex float values corresponding to the supplied symbolic factorization.
- [SparseFactor(\_:\_:\_:)](sparsefactor%28______%29-6s9g.md): Returns a symbolic factorization of the requested type for a complex matrix with the given structure, with the supplied options.
- [SparseFactor(\_:\_:\_:)](sparsefactor%28______%29-7kqvi.md): Returns the factorization of a sparse matrix of complex float values corresponding to the supplied symbolic factorization, using the specified options.
- [SparseFactor(\_:\_:\_:)](sparsefactor%28______%29-9ypz5.md): Returns the factorization of a sparse matrix of complex double values corresponding to the supplied symbolic factorization, using the specified options.
- [SparseFactor(\_:\_:\_:\_:)](sparsefactor%28________%29-6hqfp.md): Returns the specified factorization of a sparse matrix of complex double values, using the specified options.
- [SparseFactor(\_:\_:\_:\_:)](sparsefactor%28________%29-9ykfp.md): Returns the specified factorization of a sparse matrix of complex float values, using the specified options.
- [SparseFactor(\_:\_:\_:\_:\_:)](sparsefactor%28__________%29-2dqfv.md): Returns the factorization of a sparse matrix of complex float values corresponding to the supplied symbolic factorization, using the specified options and without any internal memory allocations.
- [SparseFactor(\_:\_:\_:\_:\_:)](sparsefactor%28__________%29-7j0dm.md): Returns the factorization of a sparse matrix of complex double values corresponding to the supplied symbolic factorization, using the specified options and without any internal memory allocations.

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
- [Sparse Refactor Functions](sparse-refactor-functions.md): Recompute a factorization using the numerical data from a matrix.
- [Subfactor Functions](subfactor-functions.md): Extract and work with subfactors.

# Sparse Symbolic Factorization Functions (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Calculate the symbolic factorization of a matrix, and solve systems using precalculated symbolic factorizations.

## Topics

### Matrix symbolic factorization functions

- [SparseFactor](sparsefactor%28____%29-3697o.md): Returns a symbolic factorization of the requested type for a specified sparsity structure.
- [SparseFactor](sparsefactor%28______%29-45gsz.md): Returns a symbolic factorization of the requested type for a single-precision matrix with the specified structure.

### Matrix factorizations using precalculated symbolic factorization

- [SparseFactor](sparsefactor%28____%29-58oq8.md): Returns the factorization of a sparse matrix of double-precision values that corresponds to the supplied symbolic factorization.
- [SparseFactor](sparsefactor%28____%29-1p6im.md): Returns the factorization of a sparse matrix of single-precision values that corresponds to the supplied symbolic factorization.
- [SparseFactor](sparsefactor%28______%29-3ddg.md): Returns the factorization of a sparse matrix of double-precision values that corresponds to the supplied symbolic factorization using specified options.
- [SparseFactor](sparsefactor%28______%29-797fl.md): Returns the factorization of a sparse matrix of single-precision values that corresponds to the supplied symbolic factorization using specified options.

### Matrix factorizations using precalculated symbolic factorization with user-defined workspace

- [SparseFactor](sparsefactor%28__________%29-68hki.md): Returns the factorization of a sparse matrix of double-precision values that corresponds to the supplied symbolic factorization using user-defined workspace and factor storage.
- [SparseFactor](sparsefactor%28__________%29-8afz.md): Returns the factorization of a sparse matrix of single-precision values that corresponds to the supplied symbolic factorization using user-defined workspace and factor storage.

### Supporting types

- [SparseOpaqueSymbolicFactorization](sparseopaquesymbolicfactorization.md): A semi-opaque type that represents symbolic matrix factorization.
- [SparseFactorization_t](sparsefactorization_t.md): Constants that define the factorization type.
- [SparseSymbolicFactorOptions](sparsesymbolicfactoroptions.md): A structure that contains options that affect the symbolic stage of a sparse factorization.

### Complex factorization functions

- [SparseFactor](sparsefactor%28____%29-7a3l4.md): Returns the factorization of a sparse matrix of complex float values corresponding to the supplied symbolic factorization.
- [SparseFactor](sparsefactor%28______%29-6s9g.md): Returns a symbolic factorization of the requested type for a complex matrix with the given structure, with the supplied options.
- [SparseFactor](sparsefactor%28______%29-7kqvi.md): Returns the factorization of a sparse matrix of complex float values corresponding to the supplied symbolic factorization, using the specified options.
- [SparseFactor](sparsefactor%28______%29-9ypz5.md): Returns the factorization of a sparse matrix of complex double values corresponding to the supplied symbolic factorization, using the specified options.
- [SparseFactor](sparsefactor%28________%29-6hqfp.md): Returns the specified factorization of a sparse matrix of complex double values, using the specified options.
- [SparseFactor](sparsefactor%28________%29-9ykfp.md): Returns the specified factorization of a sparse matrix of complex float values, using the specified options.
- [SparseFactor](sparsefactor%28__________%29-2dqfv.md): Returns the factorization of a sparse matrix of complex float values corresponding to the supplied symbolic factorization, using the specified options and without any internal memory allocations.
- [SparseFactor](sparsefactor%28__________%29-7j0dm.md): Returns the factorization of a sparse matrix of complex double values corresponding to the supplied symbolic factorization, using the specified options and without any internal memory allocations.

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
- [Sparse Refactor Functions](sparse-refactor-functions.md): Recompute a factorization using the numerical data from a matrix.
- [Subfactor Functions](subfactor-functions.md): Extract and work with subfactors.
