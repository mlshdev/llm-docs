> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_matrix(_:_:_:_:)-28at0](https://developer.apple.com/documentation/simd/simd_matrix(_:_:_:_:)-28at0)

# simd_matrix(\_:\_:\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns a new matrix with the specified columns.

## Declaration

```swift
func simd_matrix(_ col0: simd_double4, _ col1: simd_double4, _ col2: simd_double4, _ col3: simd_double4) -> simd_double4x4
```

## See Also

### Matrix Creation Functions

- [simd_matrix_from_rows(\_:\_:\_:\_:)](simd_matrix_from_rows%28________%29-898tw.md): Returns a new matrix with the specified rows.
- [matrix_from_rows(\_:\_:\_:\_:)](matrix_from_rows%28________%29-37t0w.md): Returns a new matrix with the specified rows.
- [simd_matrix4x4(\_:)](simd_matrix4x4%28__%29-20mdz.md): Returns a new matrix with the specified quarternion.

# simd_matrix (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns a new matrix with the specified columns.

## Declaration

```objectivec
static simd_double4x4 simd_matrix(simd_double4 col0, simd_double4 col1, simd_double4 col2, simd_double4 col3);
```

## See Also

### Matrix Creation Functions

- [simd_matrix_from_rows](simd_matrix_from_rows%28________%29-898tw.md): Returns a new matrix with the specified rows.
- [simd_diagonal_matrix](simd_diagonal_matrix-2kzr8.md): Returns a new matrix with the specified vector on the main diagonal.
- [simd_matrix4x4](simd_matrix4x4%28__%29-20mdz.md): Returns a new matrix with the specified quarternion.
