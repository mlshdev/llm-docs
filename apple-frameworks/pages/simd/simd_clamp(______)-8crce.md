> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_clamp(_:_:_:)-8crce](https://developer.apple.com/documentation/simd/simd_clamp(_:_:_:)-8crce)

# simd_clamp(\_:\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns each element in a vector clamped to a specified range.

## Declaration

```swift
func simd_clamp(_ x: simd_half2, _ min: simd_half2, _ max: simd_half2) -> simd_half2
```

## See Also

### Common functions

- [simd_abs(\_:)](simd_abs%28__%29-889zu.md): Returns the absolute value of each element in a vector.
- [simd_equal(\_:\_:)](simd_equal%28____%29-6mu96.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.
- [simd_fract(\_:)](simd_fract%28__%29-42lx3.md): Returns the fractional part of each element in a vector.
- [simd_sign(\_:)](simd_sign%28__%29-6jn8t.md): Returns the sign of each element in a vector.
- [simd_step(\_:\_:)](simd_step%28____%29-4dqzp.md): Returns zero for each element in a vector less than a specified edge, and otherwise returns one.

# simd_clamp (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns each element in a vector clamped to a specified range.

## Declaration

```objectivec
static simd_half2 simd_clamp(simd_half2 x, simd_half2 min, simd_half2 max);
```

## See Also

### Common functions

- [simd_abs](simd_abs%28__%29-889zu.md): Returns the absolute value of each element in a vector.
- [simd_equal](simd_equal%28____%29-6mu96.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.
- [simd_fract](simd_fract%28__%29-42lx3.md): Returns the fractional part of each element in a vector.
- [simd_sign](simd_sign%28__%29-6jn8t.md): Returns the sign of each element in a vector.
- [simd_step](simd_step%28____%29-4dqzp.md): Returns zero for each element in a vector less than a specified edge, and otherwise returns one.
