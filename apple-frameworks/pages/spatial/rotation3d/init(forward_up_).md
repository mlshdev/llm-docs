> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rotation3d/init(forward:up:)](https://developer.apple.com/documentation/spatial/rotation3d/init(forward:up:))

# init(forward:up:) (Swift)

**Framework:** Spatial  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a rotation with the specified forward and up vectors.

## Declaration

```swift
init(forward: Vector3D, up: Vector3D)
```

## Parameters

- `forward`: The forward vector.
- `up`: The up vector.

## See Also

### Creating a 3D rotation structure

- [init()](init%28%29-2uz53.md): Creates a rotation.
- [init()](init%28%29-krpj.md): Creates a rotation structure.
- [init(eulerAngles:)](init%28eulerangles_%29.md): Creates a rotation structure with the specified Euler angles.
- [init(eulerAngles:)](init%28eulerangles_%29.md): Creates a rotation structure with the specified Euler angles.
- [EulerAngles](../eulerangles.md): A vector that represents three Euler angles and specifies the angle ordering.
- [init(quaternion:)](init%28quaternion_%29-2c79y.md): Creates a rotation axis from the specified double-precision quaternion.
- [init(\_:)](init%28__%29-8z2bn.md): Creates a rotation from the specified double-precision quaternion.
- [init(\_:)](init%28__%29-829qb.md): Creates a rotation axis from the specified single-precision quaternion.
- [init(angle:axis:)](init%28angle_axis_%29.md): Creates a rotation structure with the specified axis and the specified angle from Spatial structures.
- [init(position:target:up:)](init%28position_target_up_%29.md): Creates a rotation structure that represents the look-at direction from a position to a target.
- [init(forward:)](init%28forward_%29.md): Creates a rotation with the specified forward vector.

# SPRotation3DMakeLookAt (Objective-C)

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a rotation with the specified forward and up vectors.

## Declaration

```objectivec
static SPRotation3D SPRotation3DMakeLookAt(SPVector3D forward, SPVector3D up);
```

## Parameters

- `forward`: The forward vector.
- `up`: The up vector.

## See Also

### Creating a 3D rotation structure

- [SPRotation3DMakeWithEulerAngles](init%28eulerangles_%29.md): Creates a rotation structure with the specified Euler angles.
- [SPRotation3DMakeWithEulerAngles](init%28eulerangles_%29.md): Creates a rotation structure with the specified Euler angles.
- [SPEulerAngles](../eulerangles.md): A vector that represents three Euler angles and specifies the angle ordering.
- [SPRotation3DMake](init%28angle_axis_%29.md): Creates a rotation structure with the specified axis and the specified angle from Spatial structures.
- [SPRotation3DMakeWithQuaternion](../sprotation3dmakewithquaternion.md)
- [SPRotation3DMake](../sprotation3dmake-2i9jt.md): Deprecated. Creates a rotation structure.
- [SPRotation3DMakeLookAt](../sprotation3dmakelookat-6ypo8.md): Creates a rotation structure that’s the look-at direction from a position to a target.
- [SPRotation3DMakeLookAt](../sprotation3dmakelookat-4xrh6.md)
- [SPRotationAxis3DMakeWithVector](../sprotationaxis3dmakewithvector-1n9ib.md): Creates a rotation axis from the specified double-precision vector.
- [SPRotationAxis3DMakeWithVector](../sprotationaxis3dmakewithvector-kk1p.md)
