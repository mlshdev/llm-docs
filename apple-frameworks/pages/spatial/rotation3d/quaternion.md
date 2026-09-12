> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rotation3d/quaternion](https://developer.apple.com/documentation/spatial/rotation3d/quaternion)

# quaternion (Swift)

**Framework:** Spatial  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A quaternion that represents the rotation.

## Declaration

```swift
var quaternion: simd_quatd { get set }
```

## See Also

### Inspecting a 3D rotation’s properties

- [angle](angle.md): The angle of the rotation.
- [axis](axis.md): The axis of the rotation.
- [eulerAngles(order:)](eulerangles%28order_%29.md): Returns a rotation’s Euler angles.
- [EulerAngles](../eulerangles.md): A vector that represents three Euler angles and specifies the angle ordering.
- [vector](vector.md): The underlying vector of the rotation.

# quaternion (Objective-C)

**Framework:** Spatial  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A quaternion that represents the rotation.

## Declaration

```objectivec
simd_quatd quaternion;
```

## See Also

### Inspecting a 3D rotation’s properties

- [SPRotation3DGetEulerAngles](eulerangles%28order_%29.md): Returns a rotation’s Euler angles.
- [SPRotation3DGetAngle](../sprotation3dgetangle.md): The angle of the rotation.
- [SPRotation3DGetAxis](../sprotation3dgetaxis.md): The axis of the rotation.
- [SPEulerAngles](../eulerangles.md): A vector that represents three Euler angles and specifies the angle ordering.
- [vector](../sprotation3d/vector.md): The underlying vector of the rotation.
- [SPRotation3DGetQuaternion](../sprotation3dgetquaternion.md): A quaternion that represents the rotation.
- [SPRotationAxis3DGetVector](../sprotationaxis3dgetvector.md): A simd three-element vector that contains the x-, y-, and z-coordinate values.
