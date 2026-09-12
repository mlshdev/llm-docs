> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_matrix(_:_:)-1w6b0](https://developer.apple.com/documentation/simd/simd_matrix(_:_:)-1w6b0)

# simd_matrix(\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns a new matrix with the specified columns.

## Declaration

```swift
func simd_matrix(_ col0: simd_half2, _ col1: simd_half2) -> simd_half2x2
```

## See Also

### Matrix creation functions

- [simd_matrix_from_rows(\_:\_:)](simd_matrix_from_rows%28____%29-9lrpr.md): Returns a new matrix with the specified rows.

# simd_matrix (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns a new matrix with the specified columns.

## Declaration

```objectivec
static simd_half2x2 simd_matrix(simd_half2 col0, simd_half2 col1);
```

## See Also

### Matrix creation functions

- [simd_matrix_from_rows](simd_matrix_from_rows%28____%29-9lrpr.md): Returns a new matrix with the specified rows.
- [simd_diagonal_matrix](simd_diagonal_matrix-2rg1i.md): Returns a new matrix with the specified vector on the main diagonal.
