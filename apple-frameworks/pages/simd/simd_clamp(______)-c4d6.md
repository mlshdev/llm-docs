> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_clamp(_:_:_:)-c4d6](https://developer.apple.com/documentation/simd/simd_clamp(_:_:_:)-c4d6)

# simd_clamp(\_:\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns each element in a vector clamped to a specified range.

## Declaration

```swift
func simd_clamp(_ x: Float16, _ min: Float16, _ max: Float16) -> Float16
```

## See Also

### Common functions

- [simd_fract(\_:)](simd_fract%28__%29-1wwew.md): Returns the fractional part of each element in a vector.
- [simd_sign(\_:)](simd_sign%28__%29-9365i.md): Returns the sign of each element in a vector.
- [simd_step(\_:\_:)](simd_step%28____%29-u24h.md): Returns zero for each element in a vector less than a specified edge, and otherwise returns one.

# simd_clamp (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns each element in a vector clamped to a specified range.

## Declaration

```objectivec
static _Float16 simd_clamp(_Float16 x, _Float16 min, _Float16 max);
```

## See Also

### Common functions

- [simd_fract](simd_fract%28__%29-1wwew.md): Returns the fractional part of each element in a vector.
- [simd_sign](simd_sign%28__%29-9365i.md): Returns the sign of each element in a vector.
- [simd_step](simd_step%28____%29-u24h.md): Returns zero for each element in a vector less than a specified edge, and otherwise returns one.
