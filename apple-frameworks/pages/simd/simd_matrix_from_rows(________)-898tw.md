> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_matrix_from_rows(_:_:_:_:)-898tw](https://developer.apple.com/documentation/simd/simd_matrix_from_rows(_:_:_:_:)-898tw)

# simd_matrix_from_rows(\_:\_:\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns a new matrix with the specified rows.

## Declaration

```swift
func simd_matrix_from_rows(_ row0: simd_double4, _ row1: simd_double4, _ row2: simd_double4, _ row3: simd_double4) -> simd_double4x4
```

## See Also

### Matrix Creation Functions

- [simd_matrix(\_:\_:\_:\_:)](simd_matrix%28________%29-28at0.md): Returns a new matrix with the specified columns.
- [matrix_from_rows(\_:\_:\_:\_:)](matrix_from_rows%28________%29-37t0w.md): Returns a new matrix with the specified rows.
- [simd_matrix4x4(\_:)](simd_matrix4x4%28__%29-20mdz.md): Returns a new matrix with the specified quarternion.

# simd_matrix_from_rows (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns a new matrix with the specified rows.

## Declaration

```objectivec
static simd_double4x4 simd_matrix_from_rows(simd_double4 row0, simd_double4 row1, simd_double4 row2, simd_double4 row3);
```

## See Also

### Matrix Creation Functions

- [simd_matrix](simd_matrix%28________%29-28at0.md): Returns a new matrix with the specified columns.
- [simd_diagonal_matrix](simd_diagonal_matrix-2kzr8.md): Returns a new matrix with the specified vector on the main diagonal.
- [simd_matrix4x4](simd_matrix4x4%28__%29-20mdz.md): Returns a new matrix with the specified quarternion.
