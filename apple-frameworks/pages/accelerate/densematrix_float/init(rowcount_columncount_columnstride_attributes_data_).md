> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/densematrix_float/init(rowcount:columncount:columnstride:attributes:data:)](https://developer.apple.com/documentation/accelerate/densematrix_float/init(rowcount:columncount:columnstride:attributes:data:))

# init(rowCount:columnCount:columnStride:attributes:data:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new matrix of single-precision values.

## Declaration

```swift
init(rowCount: Int32, columnCount: Int32, columnStride: Int32, attributes: SparseAttributes_t, data: UnsafeMutablePointer<Float>)
```

## Parameters

- `rowCount`: The number of rows in the matrix.
- `columnCount`: The number of columns in the matrix.
- `columnStride`: The column stride of the matrix.
- `attributes`: The attributes of the matrix, such as whether it’s symmetrical or triangular.
- `data`: The array of single-precision, floating-point values in column-major order.
