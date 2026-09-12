> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sprotationaxis3dmakewithvector-1n9ib](https://developer.apple.com/documentation/spatial/sprotationaxis3dmakewithvector-1n9ib)

# SPRotationAxis3DMakeWithVector

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a rotation axis from the specified double-precision vector.

## Declaration

```objectivec
static SPRotationAxis3D SPRotationAxis3DMakeWithVector(simd_double3 xyz);
```

## See Also

### Creating a 3D rotation structure

- [SPRotation3DMakeWithEulerAngles](rotation3d/init%28eulerangles_%29.md): Creates a rotation structure with the specified Euler angles.
- [SPRotation3DMakeWithEulerAngles](rotation3d/init%28eulerangles_%29.md): Creates a rotation structure with the specified Euler angles.
- [SPEulerAngles](eulerangles.md): A vector that represents three Euler angles and specifies the angle ordering.
- [SPRotation3DMake](rotation3d/init%28angle_axis_%29.md): Creates a rotation structure with the specified axis and the specified angle from Spatial structures.
- [SPRotation3DMakeLookAt](rotation3d/init%28forward_up_%29.md): Creates a rotation with the specified forward and up vectors.
- [SPRotation3DMakeWithQuaternion](sprotation3dmakewithquaternion.md)
- [SPRotation3DMake](sprotation3dmake-2i9jt.md): Deprecated. Creates a rotation structure.
- [SPRotation3DMakeLookAt](sprotation3dmakelookat-6ypo8.md): Creates a rotation structure that’s the look-at direction from a position to a target.
- [SPRotation3DMakeLookAt](sprotation3dmakelookat-4xrh6.md)
- [SPRotation3DMakeLookAt](rotation3d/init%28forward_up_%29.md): Creates a rotation with the specified forward and up vectors.
- [SPRotationAxis3DMakeWithVector](sprotationaxis3dmakewithvector-kk1p.md)
