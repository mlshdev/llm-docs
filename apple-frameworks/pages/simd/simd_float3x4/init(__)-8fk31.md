> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_float3x4/init(_:)-8fk31](https://developer.apple.com/documentation/simd/simd_float3x4/init(_:)-8fk31)

# init(\_:)

**Framework:** simd  
**Kind:** Initializer  
**Availability:** Swift  (deprecated in 4.0)

Creates a new matrix with the specified matrix.

> This conversion is no longer necessary; use `cmatrix` directly.

## Declaration

```swift
init(_ cmatrix: simd_float3x4)
```

## See Also

### Deprecated Symbols

- [matrix_equal(\_:\_:)](../matrix_equal%28____%29-6el88.md): Deprecated. Returns true if every element in a matrix is exactly equal to the corresponding element in a second matrix, and otherwise returns false.
- [matrix_from_columns(\_:\_:\_:)](../matrix_from_columns%28______%29-5nhl4.md): Deprecated. Returns a new matrix with the specified columns.
- [matrix_transpose(\_:)](../matrix_transpose%28__%29-6ygo1.md): Deprecated. Returns the transpose of a matrix.
- [cmatrix](cmatrix.md): Deprecated. Returns the matrix as the corresponding C matrix type.
