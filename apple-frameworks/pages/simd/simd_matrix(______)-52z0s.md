> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_matrix(_:_:_:)-52z0s](https://developer.apple.com/documentation/simd/simd_matrix(_:_:_:)-52z0s)

# simd_matrix(\_:\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns a new matrix with the specified columns.

## Declaration

```swift
func simd_matrix(_ col0: simd_float3, _ col1: simd_float3, _ col2: simd_float3) -> simd_float3x3
```

## See Also

### Matrix Creation Functions

- [simd_matrix_from_rows(\_:\_:\_:)](simd_matrix_from_rows%28______%29-1tn2x.md): Returns a new matrix with the specified rows.
- [matrix_from_rows(\_:\_:\_:)](matrix_from_rows%28______%29-15v2l.md): Returns a new matrix with the specified rows.
- [simd_matrix3x3(\_:)](simd_matrix3x3%28__%29-60cx9.md): Returns a new matrix with the specified quarternion.

# simd_matrix (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns a new matrix with the specified columns.

## Declaration

```objectivec
static simd_float3x3 simd_matrix(simd_float3 col0, simd_float3 col1, simd_float3 col2);
```

## See Also

### Matrix Creation Functions

- [simd_matrix_from_rows](simd_matrix_from_rows%28______%29-1tn2x.md): Returns a new matrix with the specified rows.
- [simd_diagonal_matrix](simd_diagonal_matrix-2nvn1.md): Returns a new matrix with the specified vector on the main diagonal.
- [simd_matrix3x3](simd_matrix3x3%28__%29-60cx9.md): Returns a new matrix with the specified quarternion.
