> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_matrix(_:_:_:_:)-7ltt0](https://developer.apple.com/documentation/simd/simd_matrix(_:_:_:_:)-7ltt0)

# simd_matrix(\_:\_:\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns a new matrix with the specified columns.

## Declaration

```swift
func simd_matrix(_ col0: simd_half4, _ col1: simd_half4, _ col2: simd_half4, _ col3: simd_half4) -> simd_half4x4
```

## See Also

### Matrix creation functions

- [simd_matrix_from_rows(\_:\_:\_:\_:)](simd_matrix_from_rows%28________%29-31gpp.md): Returns a new matrix with the specified rows.

# simd_matrix (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns a new matrix with the specified columns.

## Declaration

```objectivec
static simd_half4x4 simd_matrix(simd_half4 col0, simd_half4 col1, simd_half4 col2, simd_half4 col3);
```

## See Also

### Matrix creation functions

- [simd_matrix_from_rows](simd_matrix_from_rows%28________%29-31gpp.md): Returns a new matrix with the specified rows.
- [simd_diagonal_matrix](simd_diagonal_matrix-2l1as.md): Returns a new matrix with the specified vector on the main diagonal.
