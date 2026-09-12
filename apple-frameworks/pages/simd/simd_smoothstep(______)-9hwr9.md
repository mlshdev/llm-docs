> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_smoothstep(_:_:_:)-9hwr9](https://developer.apple.com/documentation/simd/simd_smoothstep(_:_:_:)-9hwr9)

# simd_smoothstep(\_:\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns an element-wise smoothly interpolated value between two vectors.

## Declaration

```swift
func simd_smoothstep(_ edge0: simd_double3, _ edge1: simd_double3, _ x: simd_double3) -> simd_double3
```

## See Also

### Interpolation Functions

- [simd_mix(\_:\_:\_:)](simd_mix%28______%29-46dv1.md): Returns an element-wise linearly interpolated value between two vectors.
- [mix(\_:\_:t:)](mix%28____t_%29-1dp7m.md): Returns an element-wise linearly interpolated value between two vectors.
- [mix(\_:\_:t:)](mix%28____t_%29-5ifg3.md): Returns an element-wise linearly interpolated value between two vectors.
- [smoothstep(\_:edge0:edge1:)](smoothstep%28__edge0_edge1_%29-5ih1o.md): Returns an element-wise smoothly interpolated value between two vectors.

# simd_smoothstep (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns an element-wise smoothly interpolated value between two vectors.

## Declaration

```objectivec
static simd_double3 simd_smoothstep(simd_double3 edge0, simd_double3 edge1, simd_double3 x);
```

## See Also

### Interpolation Functions

- [simd_mix](simd_mix%28______%29-46dv1.md): Returns an element-wise linearly interpolated value between two vectors.
