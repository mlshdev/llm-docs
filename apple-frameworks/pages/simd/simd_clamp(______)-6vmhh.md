> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_clamp(_:_:_:)-6vmhh](https://developer.apple.com/documentation/simd/simd_clamp(_:_:_:)-6vmhh)

# simd_clamp(\_:\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns each element in a vector clamped to a specified range.

## Declaration

```swift
func simd_clamp(_ x: simd_float4, _ min: simd_float4, _ max: simd_float4) -> simd_float4
```

## See Also

### Common Functions

- [simd_abs(\_:)](simd_abs%28__%29-81qo8.md): Returns the absolute value of each element in a vector.
- [abs(\_:)](abs%28__%29-1fzhv.md): Returns the absolute value of each element in a vector.
- [clamp(\_:min:max:)](clamp%28__min_max_%29-46ay6.md): Returns each element in a vector clamped to a specified range.
- [clamp(\_:min:max:)](clamp%28__min_max_%29-19q7w.md): Returns each element in a vector clamped to a specified range.
- [simd_equal(\_:\_:)](simd_equal%28____%29-6sa26.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.
- [simd_fract(\_:)](simd_fract%28__%29-3w2rh.md): Returns the fractional part of each element in a vector.
- [fract(\_:)](fract%28__%29-9s3df.md): Returns the fractional part of each element in a vector.
- [simd_sign(\_:)](simd_sign%28__%29-74zwz.md): Returns the sign of each element in a vector.
- [sign(\_:)](sign%28__%29-167c1.md): Returns the sign of each element in a vector.
- [simd_step(\_:\_:)](simd_step%28____%29-1fxwh.md): Returns zero for each element in a vector less than a specified edge, and otherwise returns one.
- [step(\_:edge:)](step%28__edge_%29-8we4c.md): Returns zero for each element in a vector less than a specified edge, and otherwise returns one.

# simd_clamp (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns each element in a vector clamped to a specified range.

## Declaration

```objectivec
static simd_float4 simd_clamp(simd_float4 x, simd_float4 min, simd_float4 max);
```

## See Also

### Common Functions

- [simd_abs](simd_abs%28__%29-81qo8.md): Returns the absolute value of each element in a vector.
- [simd_equal](simd_equal%28____%29-6sa26.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.
- [simd_fract](simd_fract%28__%29-3w2rh.md): Returns the fractional part of each element in a vector.
- [simd_sign](simd_sign%28__%29-74zwz.md): Returns the sign of each element in a vector.
- [simd_step](simd_step%28____%29-1fxwh.md): Returns zero for each element in a vector less than a specified edge, and otherwise returns one.
