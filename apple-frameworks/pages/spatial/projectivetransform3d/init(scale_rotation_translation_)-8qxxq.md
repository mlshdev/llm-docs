> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/projectivetransform3d/init(scale:rotation:translation:)-8qxxq](https://developer.apple.com/documentation/spatial/projectivetransform3d/init(scale:rotation:translation:)-8qxxq)

# init(scale:rotation:translation:)

**Framework:** Spatial  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Creates a projective transform from the specified scale, rotate, and translate transforms.

> Use `Vector3D` variant.

## Declaration

```swift
init(scale: Size3D = Size3D(width: 1.0, height: 1, depth: 1), rotation: Rotation3D = .zero, translation: Size3D)
```

## Parameters

- `scale`: A size structure that specifies the scale.
- `rotation`: A rotation structure that specifies the rotation.
- `translation`: A size structure that specifies the translation.

## See Also

### Deprecated symbols

- [offset](offset.md): Deprecated. The projective transform’s translation.
- [scale](scale.md): Deprecated. The projective transform’s scale.
- [inverted()](inverted%28%29.md): Deprecated. Returns a new transform that results from inverting an existing projective transform.
- [init(matrix:)](init%28matrix_%29-zfb.md): Deprecated. Creates a projective transform from the specified 4 x 4 single-precision matrix.
- [init(fovyRadians:aspectRatio:nearZ:farZ:reverseZ:)](init%28fovyradians_aspectratio_nearz_farz_reversez_%29.md): Deprecated. Returns a projective transform with right-hand-side perspective and optional reverse-z.
- [init(translation:)](init%28translation_%29.md): Deprecated.
- [init(fovyRadians:aspectRatio:nearZ:farZ:)](init%28fovyradians_aspectratio_nearz_farz_%29.md): Deprecated.
