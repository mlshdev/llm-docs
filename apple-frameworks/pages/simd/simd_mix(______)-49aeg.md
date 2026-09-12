> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_mix(_:_:_:)-49aeg](https://developer.apple.com/documentation/simd/simd_mix(_:_:_:)-49aeg)

# simd_mix(\_:\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns an element-wise linearly interpolated value between two vectors.

## Declaration

```swift
func simd_mix(_ x: simd_double4, _ y: simd_double4, _ t: simd_double4) -> simd_double4
```

## See Also

### Interpolation Functions

- [simd_smoothstep(\_:\_:\_:)](simd_smoothstep%28______%29-6idlb.md): Returns an element-wise smoothly interpolated value between two vectors.
- [smoothstep(\_:edge0:edge1:)](smoothstep%28__edge0_edge1_%29-3gmrv.md): Returns an element-wise smoothly interpolated value between two vectors.
- [mix(\_:\_:t:)](mix%28____t_%29-9jxxl.md): Returns an element-wise linearly interpolated value between two vectors.
- [mix(\_:\_:t:)](mix%28____t_%29-92fbo.md): Returns an element-wise linearly interpolated value between two vectors.

# simd_mix (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns an element-wise linearly interpolated value between two vectors.

## Declaration

```objectivec
static simd_double4 simd_mix(simd_double4 x, simd_double4 y, simd_double4 t);
```

## See Also

### Interpolation Functions

- [simd_smoothstep](simd_smoothstep%28______%29-6idlb.md): Returns an element-wise smoothly interpolated value between two vectors.
