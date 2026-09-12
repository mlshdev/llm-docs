> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_step(_:_:)-14cn0](https://developer.apple.com/documentation/simd/simd_step(_:_:)-14cn0)

# simd_step(\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns zero for each element in a vector less than a specified edge, and otherwise returns one.

## Declaration

```swift
func simd_step(_ edge: simd_float16, _ x: simd_float16) -> simd_float16
```

## See Also

### Common Functions

- [simd_abs(\_:)](simd_abs%28__%29-47h6g.md): Returns the absolute value of each element in a vector.
- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-92son.md): Returns each element in a vector clamped to a specified range.
- [simd_equal(\_:\_:)](simd_equal%28____%29-376kl.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.
- [simd_fract(\_:)](simd_fract%28__%29-6v1ix.md): Returns the fractional part of each element in a vector.
- [simd_sign(\_:)](simd_sign%28__%29-tc2v.md): Returns the sign of each element in a vector.

# simd_step (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns zero for each element in a vector less than a specified edge, and otherwise returns one.

## Declaration

```objectivec
static simd_float16 simd_step(simd_float16 edge, simd_float16 x);
```

## See Also

### Common Functions

- [simd_abs](simd_abs%28__%29-47h6g.md): Returns the absolute value of each element in a vector.
- [simd_clamp](simd_clamp%28______%29-92son.md): Returns each element in a vector clamped to a specified range.
- [simd_equal](simd_equal%28____%29-376kl.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.
- [simd_fract](simd_fract%28__%29-6v1ix.md): Returns the fractional part of each element in a vector.
- [simd_sign](simd_sign%28__%29-tc2v.md): Returns the sign of each element in a vector.
