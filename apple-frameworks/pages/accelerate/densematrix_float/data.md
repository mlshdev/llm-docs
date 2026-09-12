> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/densematrix_float/data](https://developer.apple.com/documentation/accelerate/densematrix_float/data)

# data (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The array of single-precision, floating-point values in column-major order.

## Declaration

```swift
var data: UnsafeMutablePointer<Float>
```

## See Also

### Inspecting a Matrix’s Structure and Data

- [rowCount](rowcount.md): The number of rows in the matrix.
- [columnCount](columncount.md): The number of columns in the matrix.
- [columnStride](columnstride.md): The stride between matrix columns, in elements.
- [attributes](attributes.md): The attributes of the matrix, such as whether it’s symmetrical or triangular.
- [SparseAttributes_t](../sparseattributes_t.md): A structure that represents the attributes of a matrix.

# data (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The array of single-precision, floating-point values in column-major order.

## Declaration

```objectivec
float * data;
```

## See Also

### Inspecting a Matrix’s Structure and Data

- [rowCount](rowcount.md): The number of rows in the matrix.
- [columnCount](columncount.md): The number of columns in the matrix.
- [columnStride](columnstride.md): The stride between matrix columns, in elements.
- [attributes](attributes.md): The attributes of the matrix, such as whether it’s symmetrical or triangular.
- [SparseAttributes_t](../sparseattributes_t.md): A structure that represents the attributes of a matrix.
