> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/affinetransform3d/init(scale:rotation:translation:)-40dow](https://developer.apple.com/documentation/spatial/affinetransform3d/init(scale:rotation:translation:)-40dow)

# init(scale:rotation:translation:)

**Framework:** Spatial  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Creates an affine transform from the specified scale, rotate, and translate transforms.

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

- [init(\_:)](init%28__%29-41dx7.md): Deprecated. Creates an affine transform from the specified 4 x 4 single-precision matrix.
- [init(\_:)](init%28__%29-6bm4k.md): Deprecated. Creates an affine transform from the specified 4 x 4 double-precision matrix.
- [init(matrix:)](init%28matrix_%29-2tgp8.md): Deprecated. Creates an affine transform from the specified 4 x 4 double-precision matrix.
- [init(matrix:)](init%28matrix_%29-6icxq.md): Deprecated. Creates an affine transform from the specified single-precision matrix.
- [init(matrix:)](init%28matrix_%29-82rxz.md): Deprecated. Creates an affine transform from the specified 4 x 4 single-precision matrix.
- [init(projectiveTransform:)](init%28projectivetransform_%29.md): Deprecated. Creates an affine transform from the specified projective transform.
- [init(translation:)](init%28translation_%29.md): Deprecated.
- [inverted()](inverted%28%29.md): Deprecated. Returns a new transform that results from inverting an existing affine transform.
- [offset](offset.md): Deprecated. The affine transform’s translation.
