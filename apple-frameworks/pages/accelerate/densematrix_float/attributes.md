> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/densematrix_float/attributes

# attributes (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The attributes of the matrix, such as whether it’s symmetrical or triangular.

## Declaration

```swift
var attributes: SparseAttributes_t
```

## See Also

### Inspecting a Matrix’s Structure and Data

- [rowCount](rowcount.md): The number of rows in the matrix.
- [columnCount](columncount.md): The number of columns in the matrix.
- [columnStride](columnstride.md): The stride between matrix columns, in elements.
- [SparseAttributes_t](../sparseattributes_t.md): A structure that represents the attributes of a matrix.
- [data](data.md): The array of single-precision, floating-point values in column-major order.

# attributes (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The attributes of the matrix, such as whether it’s symmetrical or triangular.

## Declaration

```objectivec
SparseAttributes_t attributes;
```

## See Also

### Inspecting a Matrix’s Structure and Data

- [rowCount](rowcount.md): The number of rows in the matrix.
- [columnCount](columncount.md): The number of columns in the matrix.
- [columnStride](columnstride.md): The stride between matrix columns, in elements.
- [SparseAttributes_t](../sparseattributes_t.md): A structure that represents the attributes of a matrix.
- [data](data.md): The array of single-precision, floating-point values in column-major order.
