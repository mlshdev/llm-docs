> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/affinetransform3d/init(scale:rotation:translation:)-3somu](https://developer.apple.com/documentation/spatial/affinetransform3d/init(scale:rotation:translation:)-3somu)

# init(scale:rotation:translation:)

**Framework:** Spatial  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Creates an affine transform from the specified scale, rotate, and translate transforms.

## Declaration

```swift
init(scale: Size3D = Size3D(width: 1.0, height: 1, depth: 1), rotation: Rotation3D = .zero, translation: Vector3D = .zero)
```

## Parameters

- `scale`: A size structure that specifies the scale.
- `rotation`: A rotation structure that specifies the rotation.
- `translation`: A vector that specifies the translation.

## See Also

### Creating a 3D affine transform structure

- [init()](init%28%29-2uqjl.md): Creates an affine transform.
- [init()](init%28%29-6ntm3.md): Returns a new identity affine transform.
- [init(\_:)](init%28__%29-52vpb.md): Creates an affine transform from the specified single-precision matrix.
- [init(\_:)](init%28__%29-722a2.md): Creates an affine transform from the specified 4 x 3 double-precision matrix.
- [init(\_:)](init%28__%29-e2xx.md): Creates an affine transform from the specified transform.
- [init(matrix:)](init%28matrix_%29-2inci.md): Creates an affine transform from the specified double-precision matrix.
- [init(pose:)](init%28pose_%29.md): Creates an affine transform from the specified pose structure.
- [init(scaledPose:)](init%28scaledpose_%29.md): Creates an affine transform from the specified scale pose structure.
- [init(shear:)](init%28shear_%29.md): Creates an affine transform from the specified shear transform.
- [init(truncating:)](init%28truncating_%29-40nzj.md): Returns a new affine transform structure from the specified projective transform.
- [init(truncating:)](init%28truncating_%29-5wjxy.md): Returns a new affine transform structure from the specified single-precision 4 x 4 matrix truncated to a 4 x 3 matrix.
- [init(truncating:)](init%28truncating_%29-9fd9g.md): Returns a new affine transform structure from the specified 4 x 4 matrix truncated to a 4 x 3 matrix.
