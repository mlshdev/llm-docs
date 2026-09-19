> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/simd/simd_almost_equal_elements_relative-8f55s

# simd_almost_equal_elements_relative

**Interface language:** Objective-C

**Framework:** simd  
**Kind:** Function

Returns true if every element in a matrix is within a specified single-precision relative tolerance to the corresponding element in a second matrix.

## Declaration

```objectivec
static simd_bool simd_almost_equal_elements_relative(simd_float4x4 __x, simd_float4x4 __y, float __tol);
```

## See Also

### Equality Functions

- [simd_equal](simd_equal-cge0.md): Returns true if every element in a matrix is exactly equal to the corresponding element in a second matrix.
- [simd_almost_equal_elements](simd_almost_equal_elements-9kkrw.md): Returns true if every element in a matrix is within a specified tolerance to the corresponding element in a second matrix.
