> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsematrix_double/init(structure:data:)](https://developer.apple.com/documentation/accelerate/sparsematrix_double/init(structure:data:))

# init(structure:data:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a sparse matrix with the specified structure that contains double-precision values.

## Declaration

```swift
init(structure: SparseMatrixStructure, data: UnsafeMutablePointer<Double>)
```

## Parameters

- `structure`: The sparsity structure of the matrix.
- `data`: The array of contiguous values in the nonzero blocks of the matrix. The matrix stores each block in column-major order. The number of elements in [data](data.md) must be equal to [blockSize](../sparsematrixstructure/blocksize.md) x [blockSize](../sparsematrixstructure/blocksize.md) x the number of nonzero blocks in the matrix.
