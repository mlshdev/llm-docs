> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/matrix_invert(_:)-7fevy](https://developer.apple.com/documentation/simd/matrix_invert(_:)-7fevy)

# matrix_invert(\_:)

**Framework:** simd  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 10.0+ · watchOS 3.0+ · Swift  (deprecated in 4.0)

Returns the inverse of the specified matrix.

> Use the .inverse property instead.

## Declaration

```swift
func matrix_invert(_ x: simd_float4x4) -> simd_float4x4
```

## See Also

### Deprecated Symbols

- [matrix_from_diagonal(\_:)](matrix_from_diagonal%28__%29-71pds.md): Deprecated. Returns a new matrix with the specified vector on the main diagonal.
- [matrix_determinant(\_:)](matrix_determinant%28__%29-4yqoy.md): Deprecated. Returns the determinant of the specified matrix.
- [matrix_equal(\_:\_:)](matrix_equal%28____%29-752xl.md): Deprecated. Returns true if every element in a matrix is exactly equal to the corresponding element in a second matrix, and otherwise returns false.
- [matrix_from_columns(\_:\_:\_:\_:)](matrix_from_columns%28________%29-5d0yw.md): Deprecated. Returns a new matrix with the specified columns.
- [matrix_transpose(\_:)](matrix_transpose%28__%29-8t44c.md): Deprecated. Returns the transpose of a matrix.
- [cmatrix](simd_float4x4/cmatrix.md): Deprecated. Returns the matrix as the corresponding C matrix type.
- [init(\_:)](simd_float4x4/init%28__%29-2ga0f.md): Deprecated. Creates a new matrix with the specified matrix.
