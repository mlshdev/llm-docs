> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/affinetransform3d/inverted()](https://developer.apple.com/documentation/spatial/affinetransform3d/inverted())

# inverted()

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Returns a new transform that results from inverting an existing affine transform.

> Use `AffineTransform3D.getter:inverse` instead.

## Declaration

```swift
func inverted() -> AffineTransform3D?
```

<a id="return-value"></a>

## Return Value

The transform that results from inverting an existing affine transform. The method returns `nil` if the underlying matrix isn’t invertible.

## See Also

### Deprecated symbols

- [init(\_:)](init%28__%29-41dx7.md): Deprecated. Creates an affine transform from the specified 4 x 4 single-precision matrix.
- [init(\_:)](init%28__%29-6bm4k.md): Deprecated. Creates an affine transform from the specified 4 x 4 double-precision matrix.
- [init(matrix:)](init%28matrix_%29-2tgp8.md): Deprecated. Creates an affine transform from the specified 4 x 4 double-precision matrix.
- [init(matrix:)](init%28matrix_%29-6icxq.md): Deprecated. Creates an affine transform from the specified single-precision matrix.
- [init(matrix:)](init%28matrix_%29-82rxz.md): Deprecated. Creates an affine transform from the specified 4 x 4 single-precision matrix.
- [init(projectiveTransform:)](init%28projectivetransform_%29.md): Deprecated. Creates an affine transform from the specified projective transform.
- [init(scale:rotation:translation:)](init%28scale_rotation_translation_%29-40dow.md): Deprecated. Creates an affine transform from the specified scale, rotate, and translate transforms.
- [init(translation:)](init%28translation_%29.md): Deprecated.
- [offset](offset.md): Deprecated. The affine transform’s translation.
