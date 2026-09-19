> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/simd/simd_matrix_from_rows(_:_:_:)-48v9h

# simd_matrix_from_rows(\_:\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns a new matrix with the specified rows.

## Declaration

```swift
func simd_matrix_from_rows(_ row0: simd_double3, _ row1: simd_double3, _ row2: simd_double3) -> simd_double3x3
```

## See Also

### Matrix Creation Functions

- [simd_matrix(\_:\_:\_:)](simd_matrix%28______%29-5h0nl.md): Returns a new matrix with the specified columns.
- [matrix_from_rows(\_:\_:\_:)](matrix_from_rows%28______%29-7a60t.md): Returns a new matrix with the specified rows.
- [simd_matrix3x3(\_:)](simd_matrix3x3%28__%29-60dhx.md): Returns a new matrix with the specified quarternion.

# simd_matrix_from_rows (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns a new matrix with the specified rows.

## Declaration

```objectivec
static simd_double3x3 simd_matrix_from_rows(simd_double3 row0, simd_double3 row1, simd_double3 row2);
```

## See Also

### Matrix Creation Functions

- [simd_matrix](simd_matrix%28______%29-5h0nl.md): Returns a new matrix with the specified columns.
- [simd_diagonal_matrix](simd_diagonal_matrix-2nuo5.md): Returns a new matrix with the specified vector on the main diagonal.
- [simd_matrix3x3](simd_matrix3x3%28__%29-60dhx.md): Returns a new matrix with the specified quarternion.
