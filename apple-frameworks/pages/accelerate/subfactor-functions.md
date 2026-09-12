> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/subfactor-functions](https://developer.apple.com/documentation/accelerate/subfactor-functions)

# Subfactor Functions (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Extract and work with subfactors.

## Topics

### Subfactor Extraction

- [SparseSubfactor_t](sparsesubfactor_t.md): Constants that define the subfactor of a factorization.
- [SparseCreateSubfactor(\_:\_:)](sparsecreatesubfactor%28____%29-49d8w.md): Returns an opaque object that represents a subfactor of a factorization of a matrix of double-precision values.
- [SparseOpaqueFactorization_Double](sparseopaquefactorization_double.md): A structure that represents the factorization of a matrix of double-precision, floating-point values.
- [SparseCreateSubfactor(\_:\_:)](sparsecreatesubfactor%28____%29-4renf.md): Returns an opaque object that represents a subfactor of a factorization of a matrix of single-precision values.
- [SparseOpaqueFactorization_Float](sparseopaquefactorization_float.md): A structure that represents the factorization of a matrix of single-precision, floating-point values.
- [SparseCreateSubfactor(\_:\_:)](sparsecreatesubfactor%28____%29-39487.md): Returns an opaque object representing a sub-factor of a factorization in complex double.
- [SparseCreateSubfactor(\_:\_:)](sparsecreatesubfactor%28____%29-udwd.md): Returns an opaque object representing a sub-factor of a factorization in complex float.

### Structures

- [SparseOpaqueSubfactor_Double](sparseopaquesubfactor_double.md): Represents a sub-factor of the factorization (for example, `L` from `LDL^T`).
- [SparseOpaqueSubfactor_Float](sparseopaquesubfactor_float.md): Represents a sub-factor of the factorization (for example, `L` from `LDL^T`).
- [SparseOpaqueSubfactor_Complex_Double](sparseopaquesubfactor_complex_double.md): Represents a sub-factor of the factorization (for example, `L` from `LDL^T`).
- [SparseOpaqueSubfactor_Complex_Float](sparseopaquesubfactor_complex_float.md): Represents a sub-factor of the factorization (for example, `L` from `LDL^T`).

### Subfactor Solve and Operation Functions

- [Subfactor Solve Functions](subfactor-solve-functions.md): Solve systems with the equation *Subfactor \* X = B*.
- [Subfactor Multiplication Functions](subfactor-multiplication-functions.md): Multiply subfactors by matrices and vectors.

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
- [Sparse Refactor Functions](sparse-refactor-functions.md): Recompute a factorization using the numerical data from a matrix.

# Subfactor Functions (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Extract and work with subfactors.

## Topics

### Subfactor Extraction

- [SparseSubfactor_t](sparsesubfactor_t.md): Constants that define the subfactor of a factorization.
- [SparseCreateSubfactor](sparsecreatesubfactor%28____%29-49d8w.md): Returns an opaque object that represents a subfactor of a factorization of a matrix of double-precision values.
- [SparseOpaqueFactorization_Double](sparseopaquefactorization_double.md): A structure that represents the factorization of a matrix of double-precision, floating-point values.
- [SparseCreateSubfactor](sparsecreatesubfactor%28____%29-4renf.md): Returns an opaque object that represents a subfactor of a factorization of a matrix of single-precision values.
- [SparseOpaqueFactorization_Float](sparseopaquefactorization_float.md): A structure that represents the factorization of a matrix of single-precision, floating-point values.
- [SparseCreateSubfactor](sparsecreatesubfactor%28____%29-39487.md): Returns an opaque object representing a sub-factor of a factorization in complex double.
- [SparseCreateSubfactor](sparsecreatesubfactor%28____%29-udwd.md): Returns an opaque object representing a sub-factor of a factorization in complex float.

### Structures

- [SparseOpaqueSubfactor_Double](sparseopaquesubfactor_double.md): Represents a sub-factor of the factorization (for example, `L` from `LDL^T`).
- [SparseOpaqueSubfactor_Float](sparseopaquesubfactor_float.md): Represents a sub-factor of the factorization (for example, `L` from `LDL^T`).
- [SparseOpaqueSubfactor_Complex_Double](sparseopaquesubfactor_complex_double.md): Represents a sub-factor of the factorization (for example, `L` from `LDL^T`).
- [SparseOpaqueSubfactor_Complex_Float](sparseopaquesubfactor_complex_float.md): Represents a sub-factor of the factorization (for example, `L` from `LDL^T`).

### Subfactor Solve and Operation Functions

- [Subfactor Solve Functions](subfactor-solve-functions.md): Solve systems with the equation *Subfactor \* X = B*.
- [Subfactor Multiplication Functions](subfactor-multiplication-functions.md): Multiply subfactors by matrices and vectors.

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
- [Sparse Refactor Functions](sparse-refactor-functions.md): Recompute a factorization using the numerical data from a matrix.
