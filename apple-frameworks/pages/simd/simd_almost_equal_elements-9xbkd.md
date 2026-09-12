> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_almost_equal_elements-9xbkd](https://developer.apple.com/documentation/simd/simd_almost_equal_elements-9xbkd)

# simd_almost_equal_elements

**Interface language:** Objective-C

**Framework:** simd  
**Kind:** Function

Returns true if every element in a matrix is within a specified tolerance to the corresponding element in a second matrix.

## Declaration

```objectivec
static simd_bool simd_almost_equal_elements(simd_half4x2 __x, simd_half4x2 __y, _Float16 __tol);
```

## See Also

### Equality functions

- [simd_equal](simd_equal-1u248.md): Returns true if every element in a matrix is exactly equal to the corresponding element in a second matrix.
- [simd_almost_equal_elements_relative](simd_almost_equal_elements_relative-7hff8.md): Returns true if every element in a matrix is within a specified single-precision relative tolerance to the corresponding element in a second matrix.
