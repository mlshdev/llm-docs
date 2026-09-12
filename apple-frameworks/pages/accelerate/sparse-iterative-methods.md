> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparse-iterative-methods](https://developer.apple.com/documentation/accelerate/sparse-iterative-methods)

# Sparse Iterative Methods (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Select a suitable iterative method to solve a system.

<a id="overview"></a>

## Overview

Sparse Iterative methods solve *Ax = b* through an iterative process that only requires multiplication by *A* or *A\__ᵀ*. However, if *A* is numerically difficult, the iterative process may fail to converge to a solution. Even for problems where the process converges, it may do so slowly. You can fix both of these issues through the application of a problem-specific preconditioner that approximates the inverse of *A*.

## Topics

### Sparse Iterative Methods for Symmetric Positive-Definite Coefficient Matrices

- [SparseConjugateGradient()](sparseconjugategradient%28%29.md): Returns a conjugate gradient (CG) method.
- [SparseConjugateGradient(\_:)](sparseconjugategradient%28__%29.md): Returns a conjugate gradient (CG) method with specified options.
- [SparseCGOptions](sparsecgoptions.md): Options for creating a conjugate gradient (CG) method.

### Sparse Iterative Methods for Symmetric Indefinite and Unsymmetric Coefficient Matrices

- [SparseGMRES()](sparsegmres%28%29.md): Returns a generalized minimal residual (GMRES) method.
- [SparseGMRES(\_:)](sparsegmres%28__%29.md): Returns a generalized minimal residual (GMRES) method with specified options.
- [SparseGMRESOptions](sparsegmresoptions.md): Options for creating a generalized minimal residual (GMRES) method.

### Sparse Iterative Methods for Overdetermined and Underdetermined Systems

- [SparseLSMR()](sparselsmr%28%29.md): Returns a default least squares minimum residual (LSMR) method.
- [SparseLSMR(\_:)](sparselsmr%28__%29.md): Returns a least squares minimum residual method with specified options.
- [SparseLSMROptions](sparselsmroptions.md): Options for creating a least squares minimum residual method.

### Iterative Method Structure

- [SparseIterativeMethod](sparseiterativemethod.md): The base type for all iterative methods.

## See Also

### Solving systems with iterative sparse methods

- [Solving systems using iterative methods](solving-systems-using-iterative-methods.md): Use iterative methods to solve systems of equations where the coefficient matrix is sparse.
- [Sparse Iterative Solving Functions (Matrix RHS)](sparse-iterative-solving-functions-matrix-rhs.md): Solve a system with a right-hand-side dense matrix using iterative methods.
- [Sparse Iterative Solving Functions (Vector RHS)](sparse-iterative-solving-functions-vector-rhs.md): Solve a system with a right-hand-side dense vector using iterative methods.
- [Sparse Iterate Functions](sparse-iterate-functions.md): Perform a single iteration of the specified iterative method.
- [Preconditioners](preconditioners.md): Create preconditioners for iterative solves.

# Sparse Iterative Methods (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Select a suitable iterative method to solve a system.

<a id="overview"></a>

## Overview

Sparse Iterative methods solve *Ax = b* through an iterative process that only requires multiplication by *A* or *A\__ᵀ*. However, if *A* is numerically difficult, the iterative process may fail to converge to a solution. Even for problems where the process converges, it may do so slowly. You can fix both of these issues through the application of a problem-specific preconditioner that approximates the inverse of *A*.

## Topics

### Sparse Iterative Methods for Symmetric Positive-Definite Coefficient Matrices

- [SparseConjugateGradient](sparseconjugategradient%28%29.md): Returns a conjugate gradient (CG) method.
- [SparseConjugateGradient](sparseconjugategradient%28__%29.md): Returns a conjugate gradient (CG) method with specified options.
- [SparseCGOptions](sparsecgoptions.md): Options for creating a conjugate gradient (CG) method.

### Sparse Iterative Methods for Symmetric Indefinite and Unsymmetric Coefficient Matrices

- [SparseGMRES](sparsegmres%28%29.md): Returns a generalized minimal residual (GMRES) method.
- [SparseGMRES](sparsegmres%28__%29.md): Returns a generalized minimal residual (GMRES) method with specified options.
- [SparseGMRESOptions](sparsegmresoptions.md): Options for creating a generalized minimal residual (GMRES) method.

### Sparse Iterative Methods for Overdetermined and Underdetermined Systems

- [SparseLSMR](sparselsmr%28%29.md): Returns a default least squares minimum residual (LSMR) method.
- [SparseLSMR](sparselsmr%28__%29.md): Returns a least squares minimum residual method with specified options.
- [SparseLSMROptions](sparselsmroptions.md): Options for creating a least squares minimum residual method.

### Iterative Method Structure

- [SparseIterativeMethod](sparseiterativemethod.md): The base type for all iterative methods.

## See Also

### Solving systems with iterative sparse methods

- [Solving systems using iterative methods](solving-systems-using-iterative-methods.md): Use iterative methods to solve systems of equations where the coefficient matrix is sparse.
- [Sparse Iterative Solving Functions (Matrix RHS)](sparse-iterative-solving-functions-matrix-rhs.md): Solve a system with a right-hand-side dense matrix using iterative methods.
- [Sparse Iterative Solving Functions (Vector RHS)](sparse-iterative-solving-functions-vector-rhs.md): Solve a system with a right-hand-side dense vector using iterative methods.
- [Sparse Iterate Functions](sparse-iterate-functions.md): Perform a single iteration of the specified iterative method.
- [Preconditioners](preconditioners.md): Create preconditioners for iterative solves.
