> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_smoothstep(_:_:_:)-e0ov](https://developer.apple.com/documentation/simd/simd_smoothstep(_:_:_:)-e0ov)

# simd_smoothstep(\_:\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns an element-wise smoothly interpolated value between two vectors.

## Declaration

```swift
func simd_smoothstep(_ edge0: simd_double2, _ edge1: simd_double2, _ x: simd_double2) -> simd_double2
```

## See Also

### Interpolation Functions

- [smoothstep(\_:edge0:edge1:)](smoothstep%28__edge0_edge1_%29-2wqo9.md): Returns an element-wise smoothly interpolated value between two vectors.
- [simd_mix(\_:\_:\_:)](simd_mix%28______%29-v083.md): Returns an element-wise linearly interpolated value between two vectors.
- [mix(\_:\_:t:)](mix%28____t_%29-7bjg5.md): Returns an element-wise linearly interpolated value between two vectors.
- [mix(\_:\_:t:)](mix%28____t_%29-3hfwb.md): Returns an element-wise linearly interpolated value between two vectors.

# simd_smoothstep (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns an element-wise smoothly interpolated value between two vectors.

## Declaration

```objectivec
static simd_double2 simd_smoothstep(simd_double2 edge0, simd_double2 edge1, simd_double2 x);
```

## See Also

### Interpolation Functions

- [simd_mix](simd_mix%28______%29-v083.md): Returns an element-wise linearly interpolated value between two vectors.
