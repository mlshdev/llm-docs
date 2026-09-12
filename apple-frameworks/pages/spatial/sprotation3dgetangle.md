> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sprotation3dgetangle](https://developer.apple.com/documentation/spatial/sprotation3dgetangle)

# SPRotation3DGetAngle

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The angle of the rotation.

## Declaration

```objectivec
static SPAngle SPRotation3DGetAngle(SPRotation3D rotation);
```

## See Also

### Inspecting a 3D rotation’s properties

- [SPRotation3DGetEulerAngles](rotation3d/eulerangles%28order_%29.md): Returns a rotation’s Euler angles.
- [SPRotation3DGetAxis](sprotation3dgetaxis.md): The axis of the rotation.
- [SPEulerAngles](eulerangles.md): A vector that represents three Euler angles and specifies the angle ordering.
- [quaternion](rotation3d/quaternion.md): A quaternion that represents the rotation.
- [vector](sprotation3d/vector.md): The underlying vector of the rotation.
- [SPRotation3DGetQuaternion](sprotation3dgetquaternion.md): A quaternion that represents the rotation.
- [SPRotationAxis3DGetVector](sprotationaxis3dgetvector.md): A simd three-element vector that contains the x-, y-, and z-coordinate values.
