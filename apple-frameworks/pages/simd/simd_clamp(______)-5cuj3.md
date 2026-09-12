> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_clamp(_:_:_:)-5cuj3](https://developer.apple.com/documentation/simd/simd_clamp(_:_:_:)-5cuj3)

# simd_clamp(\_:\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns each element in a vector clamped to a specified range.

## Declaration

```swift
func simd_clamp(_ x: simd_ulong4, _ min: simd_ulong4, _ max: simd_ulong4) -> simd_ulong4
```

## See Also

### Common Functions

- [simd_equal(\_:\_:)](simd_equal%28____%29-8d8x.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

# simd_clamp (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns each element in a vector clamped to a specified range.

## Declaration

```objectivec
static simd_ulong4 simd_clamp(simd_ulong4 x, simd_ulong4 min, simd_ulong4 max);
```

## See Also

### Common Functions

- [simd_equal](simd_equal%28____%29-8d8x.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.
