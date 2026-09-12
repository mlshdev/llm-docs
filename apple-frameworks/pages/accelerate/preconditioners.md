> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/preconditioners](https://developer.apple.com/documentation/accelerate/preconditioners)

# Preconditioners (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Create preconditioners for iterative solves.

<a id="overview"></a>

## Overview

In many cases, applying a preconditioner to the coefficient matrix reduces the number of iterations necessary to solve the system. The Sparse Solvers library provides Jacobi and diagonal scaling preconditioners, and the functionality to create user-defined preconditioners.

## Topics

### Preconditioners

- [SparsePreconditioner_t](sparsepreconditioner_t.md): Constants that define the preconditioner type.
- [SparseOpaquePreconditioner_Complex_Double](sparseopaquepreconditioner_complex_double.md): Represents a preconditioner for matrices of complex double values .
- [SparseOpaquePreconditioner_Complex_Float](sparseopaquepreconditioner_complex_float.md): Represents a preconditioner for matrices of complex float values .

### Creating preconditioners

- [SparseCreatePreconditioner(\_:\_:)](sparsecreatepreconditioner%28____%29-4ysww.md): Creates a preconditioner for the specified matrix of double-precision values.
- [SparseCreatePreconditioner(\_:\_:)](sparsecreatepreconditioner%28____%29-59ql5.md): Creates a preconditioner for the specified matrix of single-precision values.
- [SparseOpaquePreconditioner_Double](sparseopaquepreconditioner_double.md): A structure that represents a double-precision preconditioner.
- [SparseOpaquePreconditioner_Float](sparseopaquepreconditioner_float.md): A structure that represents a single-precision preconditioner.
- [SparseCreatePreconditioner(\_:\_:)](sparsecreatepreconditioner%28____%29-1yp4n.md): Create a preconditioner for the given matrix of complex double values.
- [SparseCreatePreconditioner(\_:\_:)](sparsecreatepreconditioner%28____%29-95u9p.md): Create a preconditioner for the given matrix of complex float values.

## See Also

### Solving systems with iterative sparse methods

- [Solving systems using iterative methods](solving-systems-using-iterative-methods.md): Use iterative methods to solve systems of equations where the coefficient matrix is sparse.
- [Sparse Iterative Solving Functions (Matrix RHS)](sparse-iterative-solving-functions-matrix-rhs.md): Solve a system with a right-hand-side dense matrix using iterative methods.
- [Sparse Iterative Solving Functions (Vector RHS)](sparse-iterative-solving-functions-vector-rhs.md): Solve a system with a right-hand-side dense vector using iterative methods.
- [Sparse Iterate Functions](sparse-iterate-functions.md): Perform a single iteration of the specified iterative method.
- [Sparse Iterative Methods](sparse-iterative-methods.md): Select a suitable iterative method to solve a system.

# Preconditioners (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Create preconditioners for iterative solves.

<a id="overview"></a>

## Overview

In many cases, applying a preconditioner to the coefficient matrix reduces the number of iterations necessary to solve the system. The Sparse Solvers library provides Jacobi and diagonal scaling preconditioners, and the functionality to create user-defined preconditioners.

## Topics

### Preconditioners

- [SparsePreconditioner_t](sparsepreconditioner_t.md): Constants that define the preconditioner type.
- [SparseOpaquePreconditioner_Complex_Double](sparseopaquepreconditioner_complex_double.md): Represents a preconditioner for matrices of complex double values .
- [SparseOpaquePreconditioner_Complex_Float](sparseopaquepreconditioner_complex_float.md): Represents a preconditioner for matrices of complex float values .

### Creating preconditioners

- [SparseCreatePreconditioner](sparsecreatepreconditioner%28____%29-4ysww.md): Creates a preconditioner for the specified matrix of double-precision values.
- [SparseCreatePreconditioner](sparsecreatepreconditioner%28____%29-59ql5.md): Creates a preconditioner for the specified matrix of single-precision values.
- [SparseOpaquePreconditioner_Double](sparseopaquepreconditioner_double.md): A structure that represents a double-precision preconditioner.
- [SparseOpaquePreconditioner_Float](sparseopaquepreconditioner_float.md): A structure that represents a single-precision preconditioner.
- [SparseCreatePreconditioner](sparsecreatepreconditioner%28____%29-1yp4n.md): Create a preconditioner for the given matrix of complex double values.
- [SparseCreatePreconditioner](sparsecreatepreconditioner%28____%29-95u9p.md): Create a preconditioner for the given matrix of complex float values.

## See Also

### Solving systems with iterative sparse methods

- [Solving systems using iterative methods](solving-systems-using-iterative-methods.md): Use iterative methods to solve systems of equations where the coefficient matrix is sparse.
- [Sparse Iterative Solving Functions (Matrix RHS)](sparse-iterative-solving-functions-matrix-rhs.md): Solve a system with a right-hand-side dense matrix using iterative methods.
- [Sparse Iterative Solving Functions (Vector RHS)](sparse-iterative-solving-functions-vector-rhs.md): Solve a system with a right-hand-side dense vector using iterative methods.
- [Sparse Iterate Functions](sparse-iterate-functions.md): Perform a single iteration of the specified iterative method.
- [Sparse Iterative Methods](sparse-iterative-methods.md): Select a suitable iterative method to solve a system.
