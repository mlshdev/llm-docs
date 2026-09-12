> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/projectivetransform3d/init(matrix:)-8eg5x](https://developer.apple.com/documentation/spatial/projectivetransform3d/init(matrix:)-8eg5x)

# init(matrix:)

**Framework:** Spatial  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a projective transform from the specified 4 x 4 double-precision matrix.

## Declaration

```swift
init(matrix: simd_double4x4)
```

## Parameters

- `matrix`: The source double-precision matrix.

## See Also

### Creating a 3D projective transform structure

- [init()](init%28%29-1clia.md): Creates a projective transform.
- [init()](init%28%29-6c4f4.md): Returns a new identity projective transform.
- [init(\_:)](init%28__%29-7b2bq.md): Creates a projective transform from the specified 4 x 4 single-precision matrix.
- [init(\_:)](init%28__%29-6g88l.md): Creates a projective transform from the specified double-precision matrix.
- [init(\_:)](init%28__%29-9t2jh.md): Creates a projective transform from the specified affine transform.
- [init(pose:)](init%28pose_%29.md): Creates a projective transform from the specified pose structure.
- [init(scale:rotation:translation:)](init%28scale_rotation_translation_%29-4h5wm.md): Creates a projective transform from the specified scale, rotate, and translate transforms.
- [init(shear:)](init%28shear_%29.md): Creates a projective transform from the specified shear transform.
- [init(leftTangent:rightTangent:topTangent:bottomTangent:nearZ:farZ:reverseZ:)](init%28lefttangent_righttangent_toptangent_bottomtangent_nearz_farz_reversez_%29.md): Returns a projective transform from tangents for each side of its frustum.
- [init(fovY:aspectRatio:nearZ:farZ:)](init%28fovy_aspectratio_nearz_farz_%29.md): Returns a projective transform with right-hand side perspective.
- [init(fovY:aspectRatio:nearZ:farZ:reverseZ:)](init%28fovy_aspectratio_nearz_farz_reversez_%29.md)
- [init(scaledPose:)](init%28scaledpose_%29.md)
