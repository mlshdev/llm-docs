> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spscaledpose3dmake-793r5](https://developer.apple.com/documentation/spatial/spscaledpose3dmake-793r5)

# SPScaledPose3DMake

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```objectivec
static SPScaledPose3D SPScaledPose3DMake(SPPose3D pose, double scale);
```

## Parameters

- `pose`: The pose structure.
- `scale`: The uniform scale.

<a id="return-value"></a>

## Return Value

A new scaled pose structure.

<a id="discussion"></a>

## Discussion

Returns a scaled pose with the specified pose and uniform scale.

## See Also

### Creating a 3D scaled-pose structure

- [SPScaledPose3DMake](spscaledpose3dmake-9dbop.md): Returns a scaled pose with the specified position, rotation, and scale.
- [SPScaledPose3DMakeLookAt](spscaledpose3dmakelookat-7bxnk.md): Returns a scaled pose at the specified position with the rotation towards the target.
- [SPScaledPose3DMakeLookAt](spscaledpose3dmakelookat-8yp17.md)
- [SPScaledPose3DMakeLookAt](spscaledpose3dmakelookat-gxlk.md)
- [SPScaledPose3DMakeWith4x4Matrix](spscaledpose3dmakewith4x4matrix.md): Returns a new scaled pose structure from the specified 4 x 4 matrix.
- [SPScaledPose3DMakeWithAffineTransform](spscaledpose3dmakewithaffinetransform.md): Returns a scaled pose with a position, rotation, and scale that the specified affine transform defines.
- [SPScaledPose3DMakeWithProjectiveTransform](spscaledpose3dmakewithprojectivetransform.md): Returns a scaled pose with a position, rotation, and scale that the specified projective transform defines.
- [SPScaledPose3DMakeWithVector](spscaledpose3dmakewithvector.md): Returns a scaled pose with the specified position, rotation, and scale.
- [SPScaledPose3DIdentity](spscaledpose3didentity.md): A structure that contains a position, rotation, and scale.
- [SPScaledPose3DInvalid](spscaledpose3dinvalid.md): A structure that contains a position, rotation, and scale.
