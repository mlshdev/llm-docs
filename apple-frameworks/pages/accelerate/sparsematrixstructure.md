> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsematrixstructure](https://developer.apple.com/documentation/accelerate/sparsematrixstructure)

# SparseMatrixStructure (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A description of the sparsity structure of a sparse matrix.

## Declaration

```swift
struct SparseMatrixStructure
```

## Mentioned In

- [Creating sparse matrices](creating-sparse-matrices.md)

<a id="overview"></a>

## Overview

The sparsity structure is in a *block compressed sparse column* format. The matrix consists of [rowCount](sparsematrixstructure/rowcount.md) x [columnCount](sparsematrixstructure/columncount.md) blocks, each of which is a square matrix of some fixed size. The system stores this block size separately from the sparsity because the graph algorithms that operate on the structure don’t need it.

## Topics

### Creating a sparse matrix description

- [init(rowCount:columnCount:columnStarts:rowIndices:attributes:blockSize:)](sparsematrixstructure/init%28rowcount_columncount_columnstarts_rowindices_attributes_blocksize_%29.md): Creates a new structure that represents the sparsity structure of a sparse matrix.

### Inspecting the properties of a sparse matrix description

- [attributes](sparsematrixstructure/attributes.md): The attributes of the matrix, such as whether it’s symmetrical or triangular.
- [blockSize](sparsematrixstructure/blocksize.md): The block size of the matrix.
- [columnCount](sparsematrixstructure/columncount.md): The number of columns in the matrix.
- [columnStarts](sparsematrixstructure/columnstarts.md): The starting index for each column in the row indices array.
- [rowCount](sparsematrixstructure/rowcount.md): The number of rows in the matrix.
- [rowIndices](sparsematrixstructure/rowindices.md): The row indices of the matrix.

## See Also

### Related Documentation

- [Creating sparse matrices](creating-sparse-matrices.md): Create sparse matrices for factorization and solving systems.

### Specifying the Structure and Attributes of a Sparse Matrix

- [SparseAttributes_t](sparseattributes_t.md): A structure that represents the attributes of a matrix.

# SparseMatrixStructure (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A description of the sparsity structure of a sparse matrix.

## Declaration

```objectivec
typedef struct { ... } SparseMatrixStructure;
```

## Mentioned In

- [Creating sparse matrices](creating-sparse-matrices.md)

<a id="overview"></a>

## Overview

The sparsity structure is in a *block compressed sparse column* format. The matrix consists of [rowCount](sparsematrixstructure/rowcount.md) x [columnCount](sparsematrixstructure/columncount.md) blocks, each of which is a square matrix of some fixed size. The system stores this block size separately from the sparsity because the graph algorithms that operate on the structure don’t need it.

## Topics

### Inspecting the properties of a sparse matrix description

- [attributes](sparsematrixstructure/attributes.md): The attributes of the matrix, such as whether it’s symmetrical or triangular.
- [blockSize](sparsematrixstructure/blocksize.md): The block size of the matrix.
- [columnCount](sparsematrixstructure/columncount.md): The number of columns in the matrix.
- [columnStarts](sparsematrixstructure/columnstarts.md): The starting index for each column in the row indices array.
- [rowCount](sparsematrixstructure/rowcount.md): The number of rows in the matrix.
- [rowIndices](sparsematrixstructure/rowindices.md): The row indices of the matrix.

## See Also

### Related Documentation

- [Creating sparse matrices](creating-sparse-matrices.md): Create sparse matrices for factorization and solving systems.

### Specifying the Structure and Attributes of a Sparse Matrix

- [SparseAttributes_t](sparseattributes_t.md): A structure that represents the attributes of a matrix.
