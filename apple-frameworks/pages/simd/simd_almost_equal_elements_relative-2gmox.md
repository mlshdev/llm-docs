> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_almost_equal_elements_relative-2gmox](https://developer.apple.com/documentation/simd/simd_almost_equal_elements_relative-2gmox)

# simd_almost_equal_elements_relative

**Interface language:** Objective-C

**Framework:** simd  
**Kind:** Function

Returns true if every element in a matrix is within a specified double-precision relative tolerance to the corresponding element in a second matrix.

## Declaration

```objectivec
static simd_bool simd_almost_equal_elements_relative(simd_double2x3 __x, simd_double2x3 __y, double __tol);
```

## See Also

### Equality Functions

- [simd_equal](simd_equal-9ko75.md): Returns true if every element in a matrix is exactly equal to the corresponding element in a second matrix.
- [simd_almost_equal_elements](simd_almost_equal_elements-crvf.md): Returns true if every element in a matrix is within a specified tolerance to the corresponding element in a second matrix.
