> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/simd/simd_equal-deo2

# simd_equal

**Interface language:** Objective-C

**Framework:** simd  
**Kind:** Function

Returns true if every element in a matrix is exactly equal to the corresponding element in a second matrix.

## Declaration

```objectivec
static simd_bool simd_equal(simd_double2x2 __x, simd_double2x2 __y);
```

## See Also

### Equality Functions

- [simd_almost_equal_elements](simd_almost_equal_elements-9536l.md): Returns true if every element in a matrix is within a specified tolerance to the corresponding element in a second matrix.
- [simd_almost_equal_elements_relative](simd_almost_equal_elements_relative-1lba2.md): Returns true if every element in a matrix is within a specified double-precision relative tolerance to the corresponding element in a second matrix.
