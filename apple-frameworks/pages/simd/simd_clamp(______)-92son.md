> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_clamp(_:_:_:)-92son](https://developer.apple.com/documentation/simd/simd_clamp(_:_:_:)-92son)

# simd_clamp(\_:\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns each element in a vector clamped to a specified range.

## Declaration

```swift
func simd_clamp(_ x: simd_float16, _ min: simd_float16, _ max: simd_float16) -> simd_float16
```

## See Also

### Common Functions

- [simd_abs(\_:)](simd_abs%28__%29-47h6g.md): Returns the absolute value of each element in a vector.
- [simd_equal(\_:\_:)](simd_equal%28____%29-376kl.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.
- [simd_fract(\_:)](simd_fract%28__%29-6v1ix.md): Returns the fractional part of each element in a vector.
- [simd_sign(\_:)](simd_sign%28__%29-tc2v.md): Returns the sign of each element in a vector.
- [simd_step(\_:\_:)](simd_step%28____%29-14cn0.md): Returns zero for each element in a vector less than a specified edge, and otherwise returns one.

# simd_clamp (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns each element in a vector clamped to a specified range.

## Declaration

```objectivec
static simd_float16 simd_clamp(simd_float16 x, simd_float16 min, simd_float16 max);
```

## See Also

### Common Functions

- [simd_abs](simd_abs%28__%29-47h6g.md): Returns the absolute value of each element in a vector.
- [simd_equal](simd_equal%28____%29-376kl.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.
- [simd_fract](simd_fract%28__%29-6v1ix.md): Returns the fractional part of each element in a vector.
- [simd_sign](simd_sign%28__%29-tc2v.md): Returns the sign of each element in a vector.
- [simd_step](simd_step%28____%29-14cn0.md): Returns zero for each element in a vector less than a specified edge, and otherwise returns one.
