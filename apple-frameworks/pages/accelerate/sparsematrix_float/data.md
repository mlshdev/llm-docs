> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsematrix_float/data](https://developer.apple.com/documentation/accelerate/sparsematrix_float/data)

# data (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The array of contiguous values in the nonzero blocks of the matrix.

## Declaration

```swift
var data: UnsafeMutablePointer<Float>
```

<a id="Discussion"></a>

## Discussion

The matrix stores each block in column-major order. The number of elements in [data](../sparsematrix_double/data.md) must be equal to [blockSize](../sparsematrixstructure/blocksize.md) x [blockSize](../sparsematrixstructure/blocksize.md) x the number of nonzero blocks in the matrix.

## See Also

### Inspecting a Matrix’s Structure and Data

- [structure](structure.md): The sparsity structure of the matrix.

# data (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The array of contiguous values in the nonzero blocks of the matrix.

## Declaration

```objectivec
float * data;
```

<a id="Discussion"></a>

## Discussion

The matrix stores each block in column-major order. The number of elements in [data](../sparsematrix_double/data.md) must be equal to [blockSize](../sparsematrixstructure/blocksize.md) x [blockSize](../sparsematrixstructure/blocksize.md) x the number of nonzero blocks in the matrix.

## See Also

### Inspecting a Matrix’s Structure and Data

- [structure](structure.md): The sparsity structure of the matrix.
