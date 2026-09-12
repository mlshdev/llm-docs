> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_clamp(_:_:_:)-68p0z](https://developer.apple.com/documentation/simd/simd_clamp(_:_:_:)-68p0z)

# simd_clamp(\_:\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns each element in a vector clamped to a specified range.

## Declaration

```swift
func simd_clamp(_ x: simd_int3, _ min: simd_int3, _ max: simd_int3) -> simd_int3
```

## See Also

### Common Functions

- [simd_abs(\_:)](simd_abs%28__%29-8d4m3.md): Returns the absolute value of each element in a vector.
- [abs(\_:)](abs%28__%29-2m9bi.md): Returns the absolute value of each element in a vector.
- [clamp(\_:min:max:)](clamp%28__min_max_%29-7b2i.md): Returns each element in a vector clamped to a specified range.
- [clamp(\_:min:max:)](clamp%28__min_max_%29-cim1.md): Returns each element in a vector clamped to a specified scalar range.
- [simd_equal(\_:\_:)](simd_equal%28____%29-6i7q4.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.

# simd_clamp (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns each element in a vector clamped to a specified range.

## Declaration

```objectivec
static simd_int3 simd_clamp(simd_int3 x, simd_int3 min, simd_int3 max);
```

## See Also

### Common Functions

- [simd_abs](simd_abs%28__%29-8d4m3.md): Returns the absolute value of each element in a vector.
- [simd_equal](simd_equal%28____%29-6i7q4.md): Returns true if every element in a vector is exactly equal to the corresponding element in a second vector, and otherwise returns false.
