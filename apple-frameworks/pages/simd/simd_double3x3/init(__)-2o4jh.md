> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_double3x3/init(_:)-2o4jh](https://developer.apple.com/documentation/simd/simd_double3x3/init(_:)-2o4jh)

# init(\_:)

**Framework:** simd  
**Kind:** Initializer  
**Availability:** Swift  (deprecated in 4.0)

Creates a new matrix with the specified matrix.

> This conversion is no longer necessary; use `cmatrix` directly.

## Declaration

```swift
init(_ cmatrix: simd_double3x3)
```

## See Also

### Deprecated Symbols

- [matrix_invert(\_:)](../matrix_invert%28__%29-2lv98.md): Deprecated. Returns the inverse of the specified matrix.
- [matrix_from_columns(\_:\_:\_:)](../matrix_from_columns%28______%29-4bc62.md): Deprecated. Returns a new matrix with the specified columns.
- [matrix_from_diagonal(\_:)](../matrix_from_diagonal%28__%29-3jtgg.md): Deprecated. Returns a new matrix with the specified vector on the main diagonal.
- [matrix_determinant(\_:)](../matrix_determinant%28__%29-4bxkm.md): Deprecated. Returns the determinant of the specified matrix.
- [matrix_equal(\_:\_:)](../matrix_equal%28____%29-9tdua.md): Deprecated. Returns true if every element in a matrix is exactly equal to the corresponding element in a second matrix, and otherwise returns false.
- [matrix_transpose(\_:)](../matrix_transpose%28__%29-3ectl.md): Deprecated. Returns the transpose of a matrix.
- [cmatrix](cmatrix.md): Deprecated. Returns the matrix as the corresponding C matrix type.
