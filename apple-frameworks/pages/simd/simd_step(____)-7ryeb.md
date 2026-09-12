> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_step(_:_:)-7ryeb](https://developer.apple.com/documentation/simd/simd_step(_:_:)-7ryeb)

# simd_step(\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns zero for each element in a vector less than a specified edge, and otherwise returns one.

## Declaration

```swift
func simd_step(_ edge: simd_half16, _ x: simd_half16) -> simd_half16
```

## See Also

### Common functions

- [simd_abs(\_:)](simd_abs%28__%29-47hrc.md): Returns the absolute value of each element in a vector.
- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-5xcny.md): Returns each element in a vector clamped to a specified range.
- [simd_equal(\_:\_:)](simd_equal%28____%29-9ijsx.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.
- [simd_fract(\_:)](simd_fract%28__%29-6v27d.md): Returns the fractional part of each element in a vector.
- [simd_sign(\_:)](simd_sign%28__%29-tcn7.md): Returns the sign of each element in a vector.

# simd_step (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns zero for each element in a vector less than a specified edge, and otherwise returns one.

## Declaration

```objectivec
static simd_half16 simd_step(simd_half16 edge, simd_half16 x);
```

## See Also

### Common functions

- [simd_abs](simd_abs%28__%29-47hrc.md): Returns the absolute value of each element in a vector.
- [simd_clamp](simd_clamp%28______%29-5xcny.md): Returns each element in a vector clamped to a specified range.
- [simd_equal](simd_equal%28____%29-9ijsx.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.
- [simd_fract](simd_fract%28__%29-6v27d.md): Returns the fractional part of each element in a vector.
- [simd_sign](simd_sign%28__%29-tcn7.md): Returns the sign of each element in a vector.
