> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_double2x2/init(_:)-9vxjx](https://developer.apple.com/documentation/simd/simd_double2x2/init(_:)-9vxjx)

# init(\_:)

**Framework:** simd  
**Kind:** Initializer  
**Availability:** Swift  (deprecated in 4.0)

Creates a new matrix with the specified matrix.

> This conversion is no longer necessary; use `cmatrix` directly.

## Declaration

```swift
init(_ cmatrix: simd_double2x2)
```

## See Also

### Deprecated Symbols

- [matrix_invert(\_:)](../matrix_invert%28__%29-nkj5.md): Deprecated. Returns the inverse of the specified matrix.
- [matrix_equal(\_:\_:)](../matrix_equal%28____%29-4claa.md): Deprecated. Returns true if every element in a matrix is exactly equal to the corresponding element in a second matrix, and otherwise returns false.
- [matrix_from_diagonal(\_:)](../matrix_from_diagonal%28__%29-7i8pm.md): Deprecated. Returns a new matrix with the specified vector on the main diagonal.
- [matrix_determinant(\_:)](../matrix_determinant%28__%29-7kglv.md): Deprecated. Returns the determinant of the specified matrix.
- [matrix_from_columns(\_:\_:)](../matrix_from_columns%28____%29-37jug.md): Deprecated. Returns a new matrix with the specified columns.
- [matrix_transpose(\_:)](../matrix_transpose%28__%29-6qaez.md): Deprecated. Returns the transpose of a matrix.
- [cmatrix](cmatrix.md): Deprecated. Returns the matrix as the corresponding C matrix type.
