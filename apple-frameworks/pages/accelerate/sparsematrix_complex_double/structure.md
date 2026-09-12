> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsematrix_complex_double/structure](https://developer.apple.com/documentation/accelerate/sparsematrix_complex_double/structure)

# structure (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A type representing the sparsity structure of a sparse complex matrix.

## Declaration

```swift
var structure: SparseMatrixStructureComplex
```

<a id="discussion"></a>

## Discussion

The sparsity structure is represented in *block compressed sparse column* (block CSC) format. The matrix is divided into a regular grid of `rowCount x columnCount` blocks each of size `blockSize x blockSize`, and only blocks containing a non-zero entry are stored. CSC format is used to store the locations of these blocks. For each block column, a list of block row indices for non-zero blocks are stored, and the lists for each column are stored contiguously one after the other. Hence the row indices for column j are given by rowIndices`[columnStarts[j]:columnStarts[j+1]]`, where `columnStarts[]` is storing the location of the first index in each column.

If the blockSize is `1`, then this format is exactly equivalent to standard CSC format.

CSR format data can be simulated by using a blockSize of `1` and setting the transpose attribute (strictly this is still a transposed CSC matrix, so `rowCount` and `columnCount` will be transposed compared to true CSR).

- **`rowCount`**: Number of (block) rows in matrix.
- **`columnCount`**: Number of (block) columns in matrix.
- **`columnStarts`**: Specifies where each (block) column starts in rowIndices array.
- **`rowIndices`**: Specifies the (block) row indices of the matrix.
- **`attributes`**: The attribute meta-data for the matrix, for example whether the matrix is symmetric (Hermitian) and only half the entries are stored.
- **`blockSize`**: The block size of the matrix.

# structure (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A type representing the sparsity structure of a sparse complex matrix.

## Declaration

```objectivec
SparseMatrixStructureComplex structure;
```

<a id="discussion"></a>

## Discussion

The sparsity structure is represented in *block compressed sparse column* (block CSC) format. The matrix is divided into a regular grid of `rowCount x columnCount` blocks each of size `blockSize x blockSize`, and only blocks containing a non-zero entry are stored. CSC format is used to store the locations of these blocks. For each block column, a list of block row indices for non-zero blocks are stored, and the lists for each column are stored contiguously one after the other. Hence the row indices for column j are given by rowIndices`[columnStarts[j]:columnStarts[j+1]]`, where `columnStarts[]` is storing the location of the first index in each column.

If the blockSize is `1`, then this format is exactly equivalent to standard CSC format.

CSR format data can be simulated by using a blockSize of `1` and setting the transpose attribute (strictly this is still a transposed CSC matrix, so `rowCount` and `columnCount` will be transposed compared to true CSR).

- **`rowCount`**: Number of (block) rows in matrix.
- **`columnCount`**: Number of (block) columns in matrix.
- **`columnStarts`**: Specifies where each (block) column starts in rowIndices array.
- **`rowIndices`**: Specifies the (block) row indices of the matrix.
- **`attributes`**: The attribute meta-data for the matrix, for example whether the matrix is symmetric (Hermitian) and only half the entries are stored.
- **`blockSize`**: The block size of the matrix.
