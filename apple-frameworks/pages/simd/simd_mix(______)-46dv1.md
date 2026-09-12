> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_mix(_:_:_:)-46dv1](https://developer.apple.com/documentation/simd/simd_mix(_:_:_:)-46dv1)

# simd_mix(\_:\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns an element-wise linearly interpolated value between two vectors.

## Declaration

```swift
func simd_mix(_ x: simd_double3, _ y: simd_double3, _ t: simd_double3) -> simd_double3
```

## See Also

### Interpolation Functions

- [mix(\_:\_:t:)](mix%28____t_%29-1dp7m.md): Returns an element-wise linearly interpolated value between two vectors.
- [mix(\_:\_:t:)](mix%28____t_%29-5ifg3.md): Returns an element-wise linearly interpolated value between two vectors.
- [simd_smoothstep(\_:\_:\_:)](simd_smoothstep%28______%29-9hwr9.md): Returns an element-wise smoothly interpolated value between two vectors.
- [smoothstep(\_:edge0:edge1:)](smoothstep%28__edge0_edge1_%29-5ih1o.md): Returns an element-wise smoothly interpolated value between two vectors.

# simd_mix (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns an element-wise linearly interpolated value between two vectors.

## Declaration

```objectivec
static simd_double3 simd_mix(simd_double3 x, simd_double3 y, simd_double3 t);
```

## See Also

### Interpolation Functions

- [simd_smoothstep](simd_smoothstep%28______%29-9hwr9.md): Returns an element-wise smoothly interpolated value between two vectors.
