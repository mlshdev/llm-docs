> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sparsematrixstructure/rowindices](https://developer.apple.com/documentation/accelerate/sparsematrixstructure/rowindices)

# rowIndices (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The row indices of the matrix.

## Declaration

```swift
var rowIndices: UnsafeMutablePointer<Int32>
```

## See Also

### Inspecting the properties of a sparse matrix description

- [attributes](attributes.md): The attributes of the matrix, such as whether it’s symmetrical or triangular.
- [blockSize](blocksize.md): The block size of the matrix.
- [columnCount](columncount.md): The number of columns in the matrix.
- [columnStarts](columnstarts.md): The starting index for each column in the row indices array.
- [rowCount](rowcount.md): The number of rows in the matrix.

# rowIndices (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The row indices of the matrix.

## Declaration

```objectivec
int * rowIndices;
```

## See Also

### Inspecting the properties of a sparse matrix description

- [attributes](attributes.md): The attributes of the matrix, such as whether it’s symmetrical or triangular.
- [blockSize](blocksize.md): The block size of the matrix.
- [columnCount](columncount.md): The number of columns in the matrix.
- [columnStarts](columnstarts.md): The starting index for each column in the row indices array.
- [rowCount](rowcount.md): The number of rows in the matrix.
