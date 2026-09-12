> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_smoothstep(_:_:_:)-845yk](https://developer.apple.com/documentation/simd/simd_smoothstep(_:_:_:)-845yk)

# simd_smoothstep(\_:\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

Returns an element-wise smoothly interpolated value between two vectors.

## Declaration

```swift
func simd_smoothstep(_ edge0: simd_float8, _ edge1: simd_float8, _ x: simd_float8) -> simd_float8
```

## See Also

### Interpolation Functions

- [simd_mix(\_:\_:\_:)](simd_mix%28______%29-4c4kn.md): Returns an element-wise linearly interpolated value between two vectors.

# simd_smoothstep (Objective-C)

**Framework:** simd  
**Kind:** Function

Returns an element-wise smoothly interpolated value between two vectors.

## Declaration

```objectivec
static simd_float8 simd_smoothstep(simd_float8 edge0, simd_float8 edge1, simd_float8 x);
```

## See Also

### Interpolation Functions

- [simd_mix](simd_mix%28______%29-4c4kn.md): Returns an element-wise linearly interpolated value between two vectors.
