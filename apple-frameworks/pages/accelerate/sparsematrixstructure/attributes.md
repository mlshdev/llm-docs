> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsematrixstructure/attributes](https://developer.apple.com/documentation/accelerate/sparsematrixstructure/attributes)

# attributes (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The attributes of the matrix, such as whether it’s symmetrical or triangular.

## Declaration

```swift
var attributes: SparseAttributes_t
```

## Mentioned In

- [Creating sparse matrices](../creating-sparse-matrices.md)

## See Also

### Inspecting the properties of a sparse matrix description

- [blockSize](blocksize.md): The block size of the matrix.
- [columnCount](columncount.md): The number of columns in the matrix.
- [columnStarts](columnstarts.md): The starting index for each column in the row indices array.
- [rowCount](rowcount.md): The number of rows in the matrix.
- [rowIndices](rowindices.md): The row indices of the matrix.

# attributes (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The attributes of the matrix, such as whether it’s symmetrical or triangular.

## Declaration

```objectivec
SparseAttributes_t attributes;
```

## Mentioned In

- [Creating sparse matrices](../creating-sparse-matrices.md)

## See Also

### Inspecting the properties of a sparse matrix description

- [blockSize](blocksize.md): The block size of the matrix.
- [columnCount](columncount.md): The number of columns in the matrix.
- [columnStarts](columnstarts.md): The starting index for each column in the row indices array.
- [rowCount](rowcount.md): The number of rows in the matrix.
- [rowIndices](rowindices.md): The row indices of the matrix.
