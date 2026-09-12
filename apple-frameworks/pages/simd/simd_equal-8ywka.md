> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_equal-8ywka](https://developer.apple.com/documentation/simd/simd_equal-8ywka)

# simd_equal

**Interface language:** Objective-C

**Framework:** simd  
**Kind:** Function

Returns true if every element in a matrix is exactly equal to the corresponding element in a second matrix.

## Declaration

```objectivec
static simd_bool simd_equal(simd_float3x4 __x, simd_float3x4 __y);
```

## See Also

### Equality Functions

- [simd_almost_equal_elements](simd_almost_equal_elements-7vp0d.md): Returns true if every element in a matrix is within a specified tolerance to the corresponding element in a second matrix.
- [simd_almost_equal_elements_relative](simd_almost_equal_elements_relative-8ea8s.md): Returns true if every element in a matrix is within a specified single-precision relative tolerance to the corresponding element in a second matrix.
