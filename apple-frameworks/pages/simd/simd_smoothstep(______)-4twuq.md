> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_smoothstep(_:_:_:)-4twuq](https://developer.apple.com/documentation/simd/simd_smoothstep(_:_:_:)-4twuq)

# simd_smoothstep(\_:\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns an element-wise smoothly interpolated value between two vectors.

## Declaration

```swift
func simd_smoothstep(_ edge0: simd_half16, _ edge1: simd_half16, _ x: simd_half16) -> simd_half16
```

## See Also

### Interpolation functions

- [simd_mix(\_:\_:\_:)](simd_mix%28______%29-7hbla.md): Returns an element-wise linearly interpolated value between two vectors.

# simd_smoothstep (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns an element-wise smoothly interpolated value between two vectors.

## Declaration

```objectivec
static simd_half16 simd_smoothstep(simd_half16 edge0, simd_half16 edge1, simd_half16 x);
```

## See Also

### Interpolation functions

- [simd_mix](simd_mix%28______%29-7hbla.md): Returns an element-wise linearly interpolated value between two vectors.
