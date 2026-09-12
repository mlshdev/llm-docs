> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_mix(_:_:_:)-v083](https://developer.apple.com/documentation/simd/simd_mix(_:_:_:)-v083)

# simd_mix(\_:\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns an element-wise linearly interpolated value between two vectors.

## Declaration

```swift
func simd_mix(_ x: simd_double2, _ y: simd_double2, _ t: simd_double2) -> simd_double2
```

## See Also

### Interpolation Functions

- [simd_smoothstep(\_:\_:\_:)](simd_smoothstep%28______%29-e0ov.md): Returns an element-wise smoothly interpolated value between two vectors.
- [smoothstep(\_:edge0:edge1:)](smoothstep%28__edge0_edge1_%29-2wqo9.md): Returns an element-wise smoothly interpolated value between two vectors.
- [mix(\_:\_:t:)](mix%28____t_%29-7bjg5.md): Returns an element-wise linearly interpolated value between two vectors.
- [mix(\_:\_:t:)](mix%28____t_%29-3hfwb.md): Returns an element-wise linearly interpolated value between two vectors.

# simd_mix (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns an element-wise linearly interpolated value between two vectors.

## Declaration

```objectivec
static simd_double2 simd_mix(simd_double2 x, simd_double2 y, simd_double2 t);
```

## See Also

### Interpolation Functions

- [simd_smoothstep](simd_smoothstep%28______%29-e0ov.md): Returns an element-wise smoothly interpolated value between two vectors.
