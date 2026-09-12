> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/matrix_invert(_:)-94e37](https://developer.apple.com/documentation/simd/matrix_invert(_:)-94e37)

# matrix_invert(\_:)

**Framework:** simd  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 10.0+ · watchOS 3.0+ · Swift  (deprecated in 4.0)

Returns the inverse of the specified matrix.

> Use the .inverse property instead.

## Declaration

```swift
func matrix_invert(_ x: simd_float2x2) -> simd_float2x2
```

## See Also

### Deprecated Symbols

- [matrix_transpose(\_:)](matrix_transpose%28__%29-77v7g.md): Deprecated. Returns the transpose of a matrix.
- [matrix_from_diagonal(\_:)](matrix_from_diagonal%28__%29-1v0zl.md): Deprecated. Returns a new matrix with the specified vector on the main diagonal.
- [matrix_from_columns(\_:\_:)](matrix_from_columns%28____%29-5urmx.md): Deprecated. Returns a new matrix with the specified columns.
- [matrix_determinant(\_:)](matrix_determinant%28__%29-30k4n.md): Deprecated. Returns the determinant of the specified matrix.
- [matrix_equal(\_:\_:)](matrix_equal%28____%29-88hz9.md): Deprecated. Returns true if every element in a matrix is exactly equal to the corresponding element in a second matrix, and otherwise returns false.
- [init(\_:)](simd_float2x2/init%28__%29-uyy7.md): Deprecated. Creates a new matrix with the specified matrix.
- [cmatrix](simd_float2x2/cmatrix.md): Deprecated. Returns the matrix as the corresponding C matrix type.
