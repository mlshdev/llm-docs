> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_smoothstep(_:_:_:)-6nnf0](https://developer.apple.com/documentation/simd/simd_smoothstep(_:_:_:)-6nnf0)

# simd_smoothstep(\_:\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns an element-wise smoothly interpolated value between two vectors.

## Declaration

```swift
func simd_smoothstep(_ edge0: simd_half32, _ edge1: simd_half32, _ x: simd_half32) -> simd_half32
```

## See Also

### Interpolation functions

- [simd_mix(\_:\_:\_:)](simd_mix%28______%29-4qwly.md): Returns an element-wise linearly interpolated value between two vectors.

# simd_smoothstep (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns an element-wise smoothly interpolated value between two vectors.

## Declaration

```objectivec
static simd_half32 simd_smoothstep(simd_half32 edge0, simd_half32 edge1, simd_half32 x);
```

## See Also

### Interpolation functions

- [simd_mix](simd_mix%28______%29-4qwly.md): Returns an element-wise linearly interpolated value between two vectors.
