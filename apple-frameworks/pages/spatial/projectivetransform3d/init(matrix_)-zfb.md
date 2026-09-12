> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/projectivetransform3d/init(matrix:)-zfb](https://developer.apple.com/documentation/spatial/projectivetransform3d/init(matrix:)-zfb)

# init(matrix:)

**Framework:** Spatial  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Creates a projective transform from the specified 4 x 4 single-precision matrix.

## Declaration

```swift
init(matrix: simd_float4x4)
```

## Parameters

- `matrix`: The source single-precision matrix.

## See Also

### Deprecated symbols

- [offset](offset.md): Deprecated. The projective transform’s translation.
- [scale](scale.md): Deprecated. The projective transform’s scale.
- [inverted()](inverted%28%29.md): Deprecated. Returns a new transform that results from inverting an existing projective transform.
- [init(scale:rotation:translation:)](init%28scale_rotation_translation_%29-8qxxq.md): Deprecated. Creates a projective transform from the specified scale, rotate, and translate transforms.
- [init(fovyRadians:aspectRatio:nearZ:farZ:reverseZ:)](init%28fovyradians_aspectratio_nearz_farz_reversez_%29.md): Deprecated. Returns a projective transform with right-hand-side perspective and optional reverse-z.
- [init(translation:)](init%28translation_%29.md): Deprecated.
- [init(fovyRadians:aspectRatio:nearZ:farZ:)](init%28fovyradians_aspectratio_nearz_farz_%29.md): Deprecated.
