> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparseopaquesymbolicfactorization/factorsize_float](https://developer.apple.com/documentation/accelerate/sparseopaquesymbolicfactorization/factorsize_float)

# factorSize_Float (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Minimum size, in bytes, required to store numerical factors in float.

## Declaration

```swift
var factorSize_Float: Int
```

<a id="discussion"></a>

## Discussion

If numerical pivoting requires a pivot to be delayed, the actual size required may be larger.

## See Also

### Inspecting a Factorization’s Structure

- [attributes](attributes.md): The attributes of the factorization.
- [SparseAttributes_t](../sparseattributes_t.md): A structure that represents the attributes of a matrix.
- [blockSize](blocksize.md): The block size.
- [columnCount](columncount.md): The number of columns.
- [rowCount](rowcount.md): The number of rows.
- [workspaceSize_Double](workspacesize_double.md): Size, in bytes, of workspace required to perform numerical factorization in doubles.
- [workspaceSize_Float](workspacesize_float.md): Size, in bytes, of workspace required to perform numerical factorization in floats.
- [factorSize_Double](factorsize_double.md): Minimum size, in bytes, required to store numerical factors in doubles.

# factorSize_Float (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Minimum size, in bytes, required to store numerical factors in float.

## Declaration

```objectivec
size_t factorSize_Float;
```

<a id="discussion"></a>

## Discussion

If numerical pivoting requires a pivot to be delayed, the actual size required may be larger.

## See Also

### Inspecting a Factorization’s Structure

- [attributes](attributes.md): The attributes of the factorization.
- [SparseAttributes_t](../sparseattributes_t.md): A structure that represents the attributes of a matrix.
- [blockSize](blocksize.md): The block size.
- [columnCount](columncount.md): The number of columns.
- [rowCount](rowcount.md): The number of rows.
- [workspaceSize_Double](workspacesize_double.md): Size, in bytes, of workspace required to perform numerical factorization in doubles.
- [workspaceSize_Float](workspacesize_float.md): Size, in bytes, of workspace required to perform numerical factorization in floats.
- [factorSize_Double](factorsize_double.md): Minimum size, in bytes, required to store numerical factors in doubles.
