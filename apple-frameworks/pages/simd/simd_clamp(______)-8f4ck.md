> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_clamp(_:_:_:)-8f4ck](https://developer.apple.com/documentation/simd/simd_clamp(_:_:_:)-8f4ck)

# simd_clamp(\_:\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns each element in a vector clamped to a specified range.

## Declaration

```swift
func simd_clamp(_ x: Float, _ min: Float, _ max: Float) -> Float
```

## See Also

### Common Functions

- [step(\_:edge:)](step%28__edge_%29-7md5f.md): Returns zero for each element in a vector less than a specified edge; one otherwise.
- [simd_step(\_:\_:)](simd_step%28____%29-7127e.md): Returns zero for each element in a vector less than a specified edge; one otherwise.
- [simd_fract(\_:)](simd_fract%28__%29-1ws2w.md): Returns the fractional part of each element in a vector.
- [sign(\_:)](sign%28__%29-iw0p.md): Returns the sign of each element in a vector.
- [simd_sign(\_:)](simd_sign%28__%29-9380i.md): Returns the sign of each element in a vector.

# simd_clamp (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns each element in a vector clamped to a specified range.

## Declaration

```objectivec
static float simd_clamp(float x, float min, float max);
```

## See Also

### Common Functions

- [simd_step](simd_step%28____%29-7127e.md): Returns zero for each element in a vector less than a specified edge; one otherwise.
- [simd_fract](simd_fract%28__%29-1ws2w.md): Returns the fractional part of each element in a vector.
- [simd_sign](simd_sign%28__%29-9380i.md): Returns the sign of each element in a vector.
