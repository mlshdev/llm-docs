> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_matrix(_:_:)-1ftcm](https://developer.apple.com/documentation/simd/simd_matrix(_:_:)-1ftcm)

# simd_matrix(\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns a new matrix with the specified columns.

## Declaration

```swift
func simd_matrix(_ col0: simd_float2, _ col1: simd_float2) -> simd_float2x2
```

## See Also

### Matrix Creation Functions

- [simd_matrix_from_rows(\_:\_:)](simd_matrix_from_rows%28____%29-3mqrr.md): Returns a new matrix with the specified rows.
- [matrix_from_rows(\_:\_:)](matrix_from_rows%28____%29-2pi8i.md): Returns a new matrix with the specified rows.

# simd_matrix (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns a new matrix with the specified columns.

## Declaration

```objectivec
static simd_float2x2 simd_matrix(simd_float2 col0, simd_float2 col1);
```

## See Also

### Matrix Creation Functions

- [simd_matrix_from_rows](simd_matrix_from_rows%28____%29-3mqrr.md): Returns a new matrix with the specified rows.
- [simd_diagonal_matrix](simd_diagonal_matrix-2rboq.md): Returns a new matrix with the specified vector on the main diagonal.
