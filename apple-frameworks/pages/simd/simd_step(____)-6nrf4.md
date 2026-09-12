> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_step(_:_:)-6nrf4](https://developer.apple.com/documentation/simd/simd_step(_:_:)-6nrf4)

# simd_step(\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns zero for each element in a vector less than a specified edge, and otherwise returns one.

## Declaration

```swift
func simd_step(_ edge: simd_double4, _ x: simd_double4) -> simd_double4
```

## See Also

### Common Functions

- [simd_abs(\_:)](simd_abs%28__%29-81rjc.md): Returns the absolute value of each element in a vector.
- [abs(\_:)](abs%28__%29-63bb7.md): Returns the absolute value of each element in a vector.
- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-8skia.md): Returns each element in a vector clamped to a specified range.
- [clamp(\_:min:max:)](clamp%28__min_max_%29-3iua3.md): Returns each element in a vector clamped to a specified range.
- [clamp(\_:min:max:)](clamp%28__min_max_%29-51jkt.md): Returns each element in a vector clamped to a specified range.
- [simd_fract(\_:)](simd_fract%28__%29-3w3dh.md): Returns the fractional part of each element in a vector.
- [fract(\_:)](fract%28__%29-8mowg.md): Returns the fractional part of each element in a vector.
- [simd_equal(\_:\_:)](simd_equal%28____%29-6lpka.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.
- [simd_sign(\_:)](simd_sign%28__%29-74z7b.md): Returns the sign of each element in a vector.
- [sign(\_:)](sign%28__%29-86tur.md): Returns the sign of each element in a vector.
- [step(\_:edge:)](step%28__edge_%29-641e1.md): Returns zero for each element in a vector less than a specified edge, and otherwise returns one.

# simd_step (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns zero for each element in a vector less than a specified edge, and otherwise returns one.

## Declaration

```objectivec
static simd_double4 simd_step(simd_double4 edge, simd_double4 x);
```

## See Also

### Common Functions

- [simd_abs](simd_abs%28__%29-81rjc.md): Returns the absolute value of each element in a vector.
- [simd_clamp](simd_clamp%28______%29-8skia.md): Returns each element in a vector clamped to a specified range.
- [simd_fract](simd_fract%28__%29-3w3dh.md): Returns the fractional part of each element in a vector.
- [simd_equal](simd_equal%28____%29-6lpka.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.
- [simd_sign](simd_sign%28__%29-74z7b.md): Returns the sign of each element in a vector.
