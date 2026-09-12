> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_equal(_:_:)-8nejo](https://developer.apple.com/documentation/simd/simd_equal(_:_:)-8nejo)

# simd_equal(\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

## Declaration

```swift
func simd_equal(_ x: simd_half8, _ y: simd_half8) -> simd_bool
```

## See Also

### Common functions

- [simd_abs(\_:)](simd_abs%28__%29-7p1mc.md): Returns the absolute value of each element in a vector.
- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-7a090.md): Returns each element in a vector clamped to a specified range.
- [simd_fract(\_:)](simd_fract%28__%29-3jdnl.md): Returns the fractional part of each element in a vector.
- [simd_sign(\_:)](simd_sign%28__%29-7hck3.md): Returns the sign of each element in a vector.
- [simd_step(\_:\_:)](simd_step%28____%29-5v3vi.md): Returns zero for each element in a vector less than a specified edge, and otherwise returns one.

# simd_equal (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

## Declaration

```objectivec
static simd_bool simd_equal(simd_half8 x, simd_half8 y);
```

## See Also

### Common functions

- [simd_abs](simd_abs%28__%29-7p1mc.md): Returns the absolute value of each element in a vector.
- [simd_clamp](simd_clamp%28______%29-7a090.md): Returns each element in a vector clamped to a specified range.
- [simd_fract](simd_fract%28__%29-3jdnl.md): Returns the fractional part of each element in a vector.
- [simd_sign](simd_sign%28__%29-7hck3.md): Returns the sign of each element in a vector.
- [simd_step](simd_step%28____%29-5v3vi.md): Returns zero for each element in a vector less than a specified edge, and otherwise returns one.
