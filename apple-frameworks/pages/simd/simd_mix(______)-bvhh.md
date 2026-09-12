> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_mix(_:_:_:)-bvhh](https://developer.apple.com/documentation/simd/simd_mix(_:_:_:)-bvhh)

# simd_mix(\_:\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns an element-wise linearly interpolated value between two vectors.

## Declaration

```swift
func simd_mix(_ x: simd_float2, _ y: simd_float2, _ t: simd_float2) -> simd_float2
```

## See Also

### Interpolation Functions

- [mix(\_:\_:t:)](mix%28____t_%29-2z3yo.md): Returns an element-wise linearly interpolated value between two vectors.
- [mix(\_:\_:t:)](mix%28____t_%29-14tli.md): Returns an element-wise linearly interpolated value between two vectors.
- [simd_smoothstep(\_:\_:\_:)](simd_smoothstep%28______%29-7iziv.md): Returns an element-wise smoothly interpolated value between two vectors.
- [smoothstep(\_:edge0:edge1:)](smoothstep%28__edge0_edge1_%29-43udr.md): Returns an element-wise smoothly interpolated value between two vectors.

# simd_mix (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns an element-wise linearly interpolated value between two vectors.

## Declaration

```objectivec
static simd_float2 simd_mix(simd_float2 x, simd_float2 y, simd_float2 t);
```

## See Also

### Interpolation Functions

- [simd_smoothstep](simd_smoothstep%28______%29-7iziv.md): Returns an element-wise smoothly interpolated value between two vectors.
