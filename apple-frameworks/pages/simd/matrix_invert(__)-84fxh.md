> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/matrix_invert(_:)-84fxh](https://developer.apple.com/documentation/simd/matrix_invert(_:)-84fxh)

# matrix_invert(\_:)

**Framework:** simd  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 10.0+ · watchOS 3.0+ · Swift  (deprecated in 4.0)

Returns the inverse of the specified matrix.

> Use the .inverse property instead.

## Declaration

```swift
func matrix_invert(_ x: simd_double4x4) -> simd_double4x4
```

## See Also

### Deprecated Symbols

- [matrix_from_columns(\_:\_:\_:\_:)](matrix_from_columns%28________%29-61q4l.md): Deprecated. Returns a new matrix with the specified columns.
- [matrix_from_diagonal(\_:)](matrix_from_diagonal%28__%29-2r6tr.md): Deprecated. Returns a new matrix with the specified vector on the main diagonal.
- [matrix_determinant(\_:)](matrix_determinant%28__%29-2n34p.md): Deprecated. Returns the determinant of the specified matrix.
- [matrix_equal(\_:\_:)](matrix_equal%28____%29-3jmfe.md): Deprecated. Returns true if every element in a matrix is exactly equal to the corresponding element in a second matrix, and otherwise returns false.
- [matrix_transpose(\_:)](matrix_transpose%28__%29-66ecl.md): Deprecated. Returns the transpose of a matrix.
- [init(\_:)](simd_double4x4/init%28__%29-4fie3.md): Deprecated. Creates a new matrix with the specified matrix.
- [cmatrix](simd_double4x4/cmatrix.md): Deprecated. Creates a new matrix with the specified matrix.
