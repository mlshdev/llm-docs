> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/simd/simd_clamp(_:_:_:)-81cik

# simd_clamp(\_:\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns each element in a vector clamped to a specified range.

## Declaration

```swift
func simd_clamp(_ x: simd_ushort8, _ min: simd_ushort8, _ max: simd_ushort8) -> simd_ushort8
```

## See Also

### Common Functions

- [simd_equal(\_:\_:)](simd_equal%28____%29-3fkex.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

# simd_clamp (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns each element in a vector clamped to a specified range.

## Declaration

```objectivec
static simd_ushort8 simd_clamp(simd_ushort8 x, simd_ushort8 min, simd_ushort8 max);
```

## See Also

### Common Functions

- [simd_equal](simd_equal%28____%29-3fkex.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.
