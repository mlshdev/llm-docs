> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_matrix(_:_:_:)-2bbz7](https://developer.apple.com/documentation/simd/simd_matrix(_:_:_:)-2bbz7)

# simd_matrix(\_:\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns a new matrix with the specified columns.

## Declaration

```swift
func simd_matrix(_ col0: simd_half3, _ col1: simd_half3, _ col2: simd_half3) -> simd_half3x3
```

## See Also

### Matrix creation functions

- [simd_matrix_from_rows(\_:\_:\_:)](simd_matrix_from_rows%28______%29-60h5f.md): Returns a new matrix with the specified rows.

# simd_matrix (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns a new matrix with the specified columns.

## Declaration

```objectivec
static simd_half3x3 simd_matrix(simd_half3 col0, simd_half3 col1, simd_half3 col2);
```

## See Also

### Matrix creation functions

- [simd_matrix_from_rows](simd_matrix_from_rows%28______%29-60h5f.md): Returns a new matrix with the specified rows.
- [simd_diagonal_matrix](simd_diagonal_matrix-2nygl.md): Returns a new matrix with the specified vector on the main diagonal.
