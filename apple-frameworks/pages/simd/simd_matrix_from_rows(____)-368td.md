> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/simd/simd_matrix_from_rows(_:_:)-368td

# simd_matrix_from_rows(\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns a new matrix with the specified rows.

## Declaration

```swift
func simd_matrix_from_rows(_ row0: simd_double2, _ row1: simd_double2) -> simd_double2x2
```

## See Also

### Matrix Creation Functions

- [simd_matrix(\_:\_:)](simd_matrix%28____%29-938tb.md): Returns a new matrix with the specified columns.
- [matrix_from_rows(\_:\_:)](matrix_from_rows%28____%29-1w56v.md): Returns a new matrix with the specified vector on the main diagonal.

# simd_matrix_from_rows (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns a new matrix with the specified rows.

## Declaration

```objectivec
static simd_double2x2 simd_matrix_from_rows(simd_double2 row0, simd_double2 row1);
```

## See Also

### Matrix Creation Functions

- [simd_matrix](simd_matrix%28____%29-938tb.md): Returns a new matrix with the specified columns.
- [simd_diagonal_matrix](simd_diagonal_matrix-2rc7a.md): Returns a new matrix with the specified vector on the main diagonal.
