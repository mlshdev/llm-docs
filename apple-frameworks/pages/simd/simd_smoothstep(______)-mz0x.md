> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_smoothstep(_:_:_:)-mz0x](https://developer.apple.com/documentation/simd/simd_smoothstep(_:_:_:)-mz0x)

# simd_smoothstep(\_:\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns an element-wise smoothly interpolated value between two vectors.

## Declaration

```swift
func simd_smoothstep(_ edge0: simd_float3, _ edge1: simd_float3, _ x: simd_float3) -> simd_float3
```

## See Also

### Interpolation Functions

- [simd_mix(\_:\_:\_:)](simd_mix%28______%29-6l1x8.md): Returns an element-wise linearly interpolated value between two vectors.
- [mix(\_:\_:t:)](mix%28____t_%29-9o58r.md): Returns an element-wise linearly interpolated value between two vectors.
- [mix(\_:\_:t:)](mix%28____t_%29-6c4d3.md): Returns an element-wise linearly interpolated value between two vectors.
- [smoothstep(\_:edge0:edge1:)](smoothstep%28__edge0_edge1_%29-6m76x.md): Returns an element-wise smoothly interpolated value between two vectors.

# simd_smoothstep (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns an element-wise smoothly interpolated value between two vectors.

## Declaration

```objectivec
static simd_float3 simd_smoothstep(simd_float3 edge0, simd_float3 edge1, simd_float3 x);
```

## See Also

### Interpolation Functions

- [simd_mix](simd_mix%28______%29-6l1x8.md): Returns an element-wise linearly interpolated value between two vectors.
