> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_step(_:_:)-2gbx7](https://developer.apple.com/documentation/simd/simd_step(_:_:)-2gbx7)

# simd_step(\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns zero for each element in a vector less than a specified edge, and otherwise returns one.

## Declaration

```swift
func simd_step(_ edge: simd_double3, _ x: simd_double3) -> simd_double3
```

## See Also

### Common Functions

- [simd_abs(\_:)](simd_abs%28__%29-8db3x.md): Returns the absolute value of each element in a vector.
- [abs(\_:)](abs%28__%29-8miv.md): Returns the absolute value of each element in a vector.
- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-2jao.md): Returns each element in a vector clamped to a specified range.
- [clamp(\_:min:max:)](clamp%28__min_max_%29-5otf7.md): Returns each element in a vector clamped to a specified range.
- [clamp(\_:min:max:)](clamp%28__min_max_%29-6m2so.md): Returns each element in a vector clamped to a specified range.
- [simd_equal(\_:\_:)](simd_equal%28____%29-4v2cb.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.
- [simd_fract(\_:)](simd_fract%28__%29-47n4w.md): Returns the fractional part of each element in a vector.
- [fract(\_:)](fract%28__%29-swov.md): Returns the fractional part of each element in a vector.
- [simd_sign(\_:)](simd_sign%28__%29-6goju.md): Returns the sign of each element in a vector.
- [sign(\_:)](sign%28__%29-2qtea.md): Returns the sign of each element in a vector.
- [step(\_:edge:)](step%28__edge_%29-4azct.md): Returns zero for each element in a vector less than a specified edge, and otherwise returns one.

# simd_step (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns zero for each element in a vector less than a specified edge, and otherwise returns one.

## Declaration

```objectivec
static simd_double3 simd_step(simd_double3 edge, simd_double3 x);
```

## See Also

### Common Functions

- [simd_abs](simd_abs%28__%29-8db3x.md): Returns the absolute value of each element in a vector.
- [simd_clamp](simd_clamp%28______%29-2jao.md): Returns each element in a vector clamped to a specified range.
- [simd_equal](simd_equal%28____%29-4v2cb.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.
- [simd_fract](simd_fract%28__%29-47n4w.md): Returns the fractional part of each element in a vector.
- [simd_sign](simd_sign%28__%29-6goju.md): Returns the sign of each element in a vector.
