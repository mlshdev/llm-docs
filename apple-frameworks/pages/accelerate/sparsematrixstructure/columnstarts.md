> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsematrixstructure/columnstarts](https://developer.apple.com/documentation/accelerate/sparsematrixstructure/columnstarts)

# columnStarts (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The starting index for each column in the row indices array.

## Declaration

```swift
var columnStarts: UnsafeMutablePointer<Int>
```

<a id="Discussion"></a>

## Discussion

This array requires an additional, final entry that defines the final column’s length.

## See Also

### Inspecting the properties of a sparse matrix description

- [attributes](attributes.md): The attributes of the matrix, such as whether it’s symmetrical or triangular.
- [blockSize](blocksize.md): The block size of the matrix.
- [columnCount](columncount.md): The number of columns in the matrix.
- [rowCount](rowcount.md): The number of rows in the matrix.
- [rowIndices](rowindices.md): The row indices of the matrix.

# columnStarts (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The starting index for each column in the row indices array.

## Declaration

```objectivec
long * columnStarts;
```

<a id="Discussion"></a>

## Discussion

This array requires an additional, final entry that defines the final column’s length.

## See Also

### Inspecting the properties of a sparse matrix description

- [attributes](attributes.md): The attributes of the matrix, such as whether it’s symmetrical or triangular.
- [blockSize](blocksize.md): The block size of the matrix.
- [columnCount](columncount.md): The number of columns in the matrix.
- [rowCount](rowcount.md): The number of rows in the matrix.
- [rowIndices](rowindices.md): The row indices of the matrix.
