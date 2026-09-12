> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsematrix_float](https://developer.apple.com/documentation/accelerate/sparsematrix_float)

# SparseMatrix_Float (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains a sparse matrix of single-precision, floating-point values.

## Declaration

```swift
struct SparseMatrix_Float
```

<a id="overview"></a>

## Overview

You typically use sparse matrices to represent the sparse coefficient matrix in the matrix equation *Ax = b.* A [SparseMatrix_Float](sparsematrix_float.md) structure provides a pointer to its underlying data, and information about its structure and attributes.

The Accelerate framework uses the compressed sparse column (CSC) format to store sparse matrices. CSC stores the matrix as a series of column vectors that specifies only the nonzero entries as `(row-index, value)` pairs. For more information, see [Creating sparse matrices](creating-sparse-matrices.md).

After you finish using a sparse matrix, call [SparseCleanup(\_:)](sparsecleanup%28__%29-9f4vi.md) to release its references to any memory that the Sparse Solvers library allocates.

## Topics

### Creating a Sparse Matrix

- [init(structure:data:)](sparsematrix_float/init%28structure_data_%29.md): Creates a sparse matrix with the specified structure that contains single-precision values.

### Inspecting a Matrix’s Structure and Data

- [structure](sparsematrix_float/structure.md): The sparsity structure of the matrix.
- [data](sparsematrix_float/data.md): The array of contiguous values in the nonzero blocks of the matrix.

### Specifying the Structure and Attributes of a Sparse Matrix

- [SparseMatrixStructure](sparsematrixstructure.md): A description of the sparsity structure of a sparse matrix.
- [SparseAttributes_t](sparseattributes_t.md): A structure that represents the attributes of a matrix.

## See Also

### Creating sparse matrices

- [Creating sparse matrices](creating-sparse-matrices.md): Create sparse matrices for factorization and solving systems.
- [SparseMatrix_Double](sparsematrix_double.md): A structure that contains a sparse matrix of double-precision, floating-point values.
- [Conversion from Other Formats](conversion-from-other-formats.md): Create sparse matrices from coordinate format arrays and BLAS opaque matrices.

# SparseMatrix_Float (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains a sparse matrix of single-precision, floating-point values.

## Declaration

```objectivec
typedef struct { ... } SparseMatrix_Float;
```

<a id="overview"></a>

## Overview

You typically use sparse matrices to represent the sparse coefficient matrix in the matrix equation *Ax = b.* A [SparseMatrix_Float](sparsematrix_float.md) structure provides a pointer to its underlying data, and information about its structure and attributes.

The Accelerate framework uses the compressed sparse column (CSC) format to store sparse matrices. CSC stores the matrix as a series of column vectors that specifies only the nonzero entries as `(row-index, value)` pairs. For more information, see [Creating sparse matrices](creating-sparse-matrices.md).

After you finish using a sparse matrix, call [SparseCleanup](sparsecleanup%28__%29-9f4vi.md) to release its references to any memory that the Sparse Solvers library allocates.

## Topics

### Inspecting a Matrix’s Structure and Data

- [structure](sparsematrix_float/structure.md): The sparsity structure of the matrix.
- [data](sparsematrix_float/data.md): The array of contiguous values in the nonzero blocks of the matrix.

### Specifying the Structure and Attributes of a Sparse Matrix

- [SparseMatrixStructure](sparsematrixstructure.md): A description of the sparsity structure of a sparse matrix.
- [SparseAttributes_t](sparseattributes_t.md): A structure that represents the attributes of a matrix.

## See Also

### Creating sparse matrices

- [Creating sparse matrices](creating-sparse-matrices.md): Create sparse matrices for factorization and solving systems.
- [SparseMatrix_Double](sparsematrix_double.md): A structure that contains a sparse matrix of double-precision, floating-point values.
- [Conversion from Other Formats](conversion-from-other-formats.md): Create sparse matrices from coordinate format arrays and BLAS opaque matrices.
