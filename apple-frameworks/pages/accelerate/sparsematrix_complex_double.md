> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsematrix_complex_double](https://developer.apple.com/documentation/accelerate/sparsematrix_complex_double)

# SparseMatrix_Complex_Double (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A type representing a sparse complex matrix.

## Declaration

```swift
struct SparseMatrix_Complex_Double
```

<a id="overview"></a>

## Overview

`data` is the array of values in the non-zero blocks of the matrix stored contiguously, each block in column-major order. If there are `N` structural non-zero blocks in the matrix, `data` holds `blockSize * blockSize * N` doubles.

- term  `structure` The symbolic structure of the matrix.
- term  `data` The numerical values of the matrix. If `structure.blockSize > 1`, blocks are stored contiguously in column-major format.

## Topics

### Initializers

- [init(structure:data:)](sparsematrix_complex_double/init%28structure_data_%29.md)

### Instance Properties

- [data](sparsematrix_complex_double/data.md)
- [structure](sparsematrix_complex_double/structure.md): A type representing the sparsity structure of a sparse complex matrix.

## See Also

### Creating sparse complex matrices

- [SparseMatrix_Complex_Float](sparsematrix_complex_float.md): A type representing a sparse complex matrix.
- [SparseAttributesComplex_t](sparseattributescomplex_t.md): A type representing the attributes of a matrix.
- [SparseMatrixStructureComplex](sparsematrixstructurecomplex.md): A type representing the sparsity structure of a sparse complex matrix.

# SparseMatrix_Complex_Double (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A type representing a sparse complex matrix.

## Declaration

```objectivec
typedef struct { ... } SparseMatrix_Complex_Double;
```

<a id="overview"></a>

## Overview

`data` is the array of values in the non-zero blocks of the matrix stored contiguously, each block in column-major order. If there are `N` structural non-zero blocks in the matrix, `data` holds `blockSize * blockSize * N` doubles.

- term  `structure` The symbolic structure of the matrix.
- term  `data` The numerical values of the matrix. If `structure.blockSize > 1`, blocks are stored contiguously in column-major format.

## Topics

### Instance Properties

- [data](sparsematrix_complex_double/data.md)
- [structure](sparsematrix_complex_double/structure.md): A type representing the sparsity structure of a sparse complex matrix.

## See Also

### Creating sparse complex matrices

- [SparseMatrix_Complex_Float](sparsematrix_complex_float.md): A type representing a sparse complex matrix.
- [SparseAttributesComplex_t](sparseattributescomplex_t.md): A type representing the attributes of a matrix.
- [SparseMatrixStructureComplex](sparsematrixstructurecomplex.md): A type representing the sparsity structure of a sparse complex matrix.
