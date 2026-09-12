> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_equal(_:_:)-6sa26](https://developer.apple.com/documentation/simd/simd_equal(_:_:)-6sa26)

# simd_equal(\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

## Declaration

```swift
func simd_equal(_ x: simd_float4, _ y: simd_float4) -> simd_bool
```

## See Also

### Common Functions

- [simd_abs(\_:)](simd_abs%28__%29-81qo8.md): Returns the absolute value of each element in a vector.
- [abs(\_:)](abs%28__%29-1fzhv.md): Returns the absolute value of each element in a vector.
- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-6vmhh.md): Returns each element in a vector clamped to a specified range.
- [clamp(\_:min:max:)](clamp%28__min_max_%29-46ay6.md): Returns each element in a vector clamped to a specified range.
- [clamp(\_:min:max:)](clamp%28__min_max_%29-19q7w.md): Returns each element in a vector clamped to a specified range.
- [simd_fract(\_:)](simd_fract%28__%29-3w2rh.md): Returns the fractional part of each element in a vector.
- [fract(\_:)](fract%28__%29-9s3df.md): Returns the fractional part of each element in a vector.
- [simd_sign(\_:)](simd_sign%28__%29-74zwz.md): Returns the sign of each element in a vector.
- [sign(\_:)](sign%28__%29-167c1.md): Returns the sign of each element in a vector.
- [simd_step(\_:\_:)](simd_step%28____%29-1fxwh.md): Returns zero for each element in a vector less than a specified edge, and otherwise returns one.
- [step(\_:edge:)](step%28__edge_%29-8we4c.md): Returns zero for each element in a vector less than a specified edge, and otherwise returns one.

# simd_equal (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

## Declaration

```objectivec
static simd_bool simd_equal(simd_float4 x, simd_float4 y);
```

## See Also

### Common Functions

- [simd_abs](simd_abs%28__%29-81qo8.md): Returns the absolute value of each element in a vector.
- [simd_clamp](simd_clamp%28______%29-6vmhh.md): Returns each element in a vector clamped to a specified range.
- [simd_fract](simd_fract%28__%29-3w2rh.md): Returns the fractional part of each element in a vector.
- [simd_sign](simd_sign%28__%29-74zwz.md): Returns the sign of each element in a vector.
- [simd_step](simd_step%28____%29-1fxwh.md): Returns zero for each element in a vector less than a specified edge, and otherwise returns one.
