> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sprotation3dmakewithquaternion](https://developer.apple.com/documentation/spatial/sprotation3dmakewithquaternion)

# SPRotation3DMakeWithQuaternion

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```objectivec
static SPRotation3D SPRotation3DMakeWithQuaternion(simd_quatd quaternion);
```

## Parameters

- `quaternion`: The source quaternion.

<a id="return-value"></a>

## Return Value

A new rotation stucture.

<a id="discussion"></a>

## Discussion

Returns a rotation from the specified quaternion.

## See Also

### Creating a 3D rotation structure

- [SPRotation3DMakeWithEulerAngles](rotation3d/init%28eulerangles_%29.md): Creates a rotation structure with the specified Euler angles.
- [SPRotation3DMakeWithEulerAngles](rotation3d/init%28eulerangles_%29.md): Creates a rotation structure with the specified Euler angles.
- [SPEulerAngles](eulerangles.md): A vector that represents three Euler angles and specifies the angle ordering.
- [SPRotation3DMake](rotation3d/init%28angle_axis_%29.md): Creates a rotation structure with the specified axis and the specified angle from Spatial structures.
- [SPRotation3DMakeLookAt](rotation3d/init%28forward_up_%29.md): Creates a rotation with the specified forward and up vectors.
- [SPRotation3DMake](sprotation3dmake-2i9jt.md): Deprecated. Creates a rotation structure.
- [SPRotation3DMakeLookAt](sprotation3dmakelookat-6ypo8.md): Creates a rotation structure that’s the look-at direction from a position to a target.
- [SPRotation3DMakeLookAt](sprotation3dmakelookat-4xrh6.md)
- [SPRotation3DMakeLookAt](rotation3d/init%28forward_up_%29.md): Creates a rotation with the specified forward and up vectors.
- [SPRotationAxis3DMakeWithVector](sprotationaxis3dmakewithvector-1n9ib.md): Creates a rotation axis from the specified double-precision vector.
- [SPRotationAxis3DMakeWithVector](sprotationaxis3dmakewithvector-kk1p.md)
