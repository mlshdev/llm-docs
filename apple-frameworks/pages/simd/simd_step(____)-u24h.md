> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_step(_:_:)-u24h](https://developer.apple.com/documentation/simd/simd_step(_:_:)-u24h)

# simd_step(\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns zero for each element in a vector less than a specified edge, and otherwise returns one.

## Declaration

```swift
func simd_step(_ edge: Float16, _ x: Float16) -> Float16
```

## See Also

### Common functions

- [simd_clamp(\_:\_:\_:)](simd_clamp%28______%29-c4d6.md): Returns each element in a vector clamped to a specified range.
- [simd_fract(\_:)](simd_fract%28__%29-1wwew.md): Returns the fractional part of each element in a vector.
- [simd_sign(\_:)](simd_sign%28__%29-9365i.md): Returns the sign of each element in a vector.

# simd_step (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns zero for each element in a vector less than a specified edge, and otherwise returns one.

## Declaration

```objectivec
static _Float16 simd_step(_Float16 edge, _Float16 x);
```

## See Also

### Common functions

- [simd_clamp](simd_clamp%28______%29-c4d6.md): Returns each element in a vector clamped to a specified range.
- [simd_fract](simd_fract%28__%29-1wwew.md): Returns the fractional part of each element in a vector.
- [simd_sign](simd_sign%28__%29-9365i.md): Returns the sign of each element in a vector.
