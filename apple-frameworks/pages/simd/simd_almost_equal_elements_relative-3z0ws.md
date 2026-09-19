> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/simd/simd_almost_equal_elements_relative-3z0ws

# simd_almost_equal_elements_relative

**Interface language:** Objective-C

**Framework:** simd  
**Kind:** Function

Returns true if every element in a matrix is within a specified single-precision relative tolerance to the corresponding element in a second matrix.

## Declaration

```objectivec
static simd_bool simd_almost_equal_elements_relative(simd_half2x4 __x, simd_half2x4 __y, _Float16 __tol);
```

## See Also

### Equality functions

- [simd_equal](simd_equal-9j31j.md): Returns true if every element in a matrix is exactly equal to the corresponding element in a second matrix.
- [simd_almost_equal_elements](simd_almost_equal_elements-3lsy1.md): Returns true if every element in a matrix is within a specified tolerance to the corresponding element in a second matrix.
