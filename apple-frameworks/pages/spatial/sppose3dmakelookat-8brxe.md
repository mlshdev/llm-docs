> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sppose3dmakelookat-8brxe](https://developer.apple.com/documentation/spatial/sppose3dmakelookat-8brxe)

# SPPose3DMakeLookAt

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```objectivec
static SPPose3D SPPose3DMakeLookAt(SPPoint3D target, SPVector3D up);
```

## Parameters

- `target`: The point that the pose orients towards.
- `up`: The up direction.

<a id="return-value"></a>

## Return Value

A new pose structure.

<a id="discussion"></a>

## Discussion

Returns a pose at the origin with the rotation towards the target.

## See Also

### Creating a 3D pose structure

- [SPPose3DMakeLookAt](sppose3dmakelookat-6y4bb.md): Returns a pose at the specified position with the rotation towards the target.
- [SPPose3DMakeLookAt](sppose3dmakelookat-dgpp.md)
- [SPPose3DMakeWith4x4Matrix](sppose3dmakewith4x4matrix.md): Creates a pose from the specified 4 x 4 double-precision matrix.
- [SPPose3DMakeWithAffineTransform](sppose3dmakewithaffinetransform.md): Returns a pose with a position and rotation that an affine transform defines.
- [SPPose3DMakeWithProjectiveTransform](sppose3dmakewithprojectivetransform.md): Returns a pose with a position and rotation that a projective transform defines.
- [SPPose3DMakeWithVector](sppose3dmakewithvector.md): Creates a pose with the specified position and rotation vectors.
