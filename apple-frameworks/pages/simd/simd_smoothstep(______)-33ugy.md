> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_smoothstep(_:_:_:)-33ugy](https://developer.apple.com/documentation/simd/simd_smoothstep(_:_:_:)-33ugy)

# simd_smoothstep(\_:\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns an element-wise smoothly interpolated value between two vectors.

## Declaration

```swift
func simd_smoothstep(_ edge0: simd_float4, _ edge1: simd_float4, _ x: simd_float4) -> simd_float4
```

## See Also

### Interpolation Functions

- [simd_mix(\_:\_:\_:)](simd_mix%28______%29-5fpv1.md): Returns an element-wise linearly interpolated value between two vectors.
- [mix(\_:\_:t:)](mix%28____t_%29-2uufx.md): Returns an element-wise linearly interpolated value between two vectors.
- [mix(\_:\_:t:)](mix%28____t_%29-8qz2g.md): Returns an element-wise linearly interpolated value between two vectors.
- [smoothstep(\_:edge0:edge1:)](smoothstep%28__edge0_edge1_%29-3gx0q.md): Returns an element-wise smoothly interpolated value between two vectors.

# simd_smoothstep (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns an element-wise smoothly interpolated value between two vectors.

## Declaration

```objectivec
static simd_float4 simd_smoothstep(simd_float4 edge0, simd_float4 edge1, simd_float4 x);
```

## See Also

### Interpolation Functions

- [simd_mix](simd_mix%28______%29-5fpv1.md): Returns an element-wise linearly interpolated value between two vectors.
