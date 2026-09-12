> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_float4x2/init(_:)-2e140](https://developer.apple.com/documentation/simd/simd_float4x2/init(_:)-2e140)

# init(\_:)

**Framework:** simd  
**Kind:** Initializer  
**Availability:** Swift  (deprecated in 4.0)

Creates a new matrix with the specified matrix.

> This conversion is no longer necessary; use `cmatrix` directly.

## Declaration

```swift
init(_ cmatrix: simd_float4x2)
```

## See Also

### Deprecated Symbols

- [matrix_equal(\_:\_:)](../matrix_equal%28____%29-1izln.md): Deprecated. Returns true if every element in a matrix is exactly equal to the corresponding element in a second matrix, and otherwise returns false.
- [matrix_from_columns(\_:\_:\_:\_:)](../matrix_from_columns%28________%29-2u92u.md): Deprecated. Returns a new matrix with the specified columns.
- [matrix_transpose(\_:)](../matrix_transpose%28__%29-260wn.md): Deprecated. Returns the transpose of a matrix.
- [cmatrix](cmatrix.md): Deprecated. Returns the matrix as the corresponding C matrix type.
