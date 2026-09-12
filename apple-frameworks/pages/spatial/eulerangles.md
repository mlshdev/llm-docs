> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/eulerangles](https://developer.apple.com/documentation/spatial/eulerangles)

# EulerAngles (Swift)

**Framework:** Spatial  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A vector that represents three Euler angles and specifies the angle ordering.

## Declaration

```swift
struct EulerAngles
```

## Topics

### Initializers

- [init()](eulerangles/init%28%29.md): Creates a new Euler angles structure.
- [init(angles:order:)](eulerangles/init%28angles_order_%29-44rv1.md): Creates a new Euler angles structure from the specified single-precision angles and order.
- [init(angles:order:)](eulerangles/init%28angles_order_%29-93mu1.md): Creates a new Euler angles structure from the specified double-precision angles and order.
- [init(x:y:z:order:)](eulerangles/init%28x_y_z_order_%29.md): Creates a new Euler angles structure from the specified angle structures and order.
- [init(\_:\_:\_:order:)](eulerangles/init%28______order_%29.md): Deprecated. Creates a new Euler angles structure from the specified angle structures and order.

### Instance properties

- [angles](eulerangles/angles.md): A three-element vector that specifies the Euler angles.
- [order](eulerangles/order-swift.property.md): The Euler angle order.
- [angles](eulerangles/angles.md): A three-element vector that specifies the Euler angles.
- [order](eulerangles/order-swift.property.md): The Euler angle order.

### Supporting types

- [EulerAngles.Order](eulerangles/order-swift.typealias.md): A type that specifies the order of the angles.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Creating a 3D rotation structure

- [init()](rotation3d/init%28%29-2uz53.md): Creates a rotation.
- [init()](rotation3d/init%28%29-krpj.md): Creates a rotation structure.
- [init(eulerAngles:)](rotation3d/init%28eulerangles_%29.md): Creates a rotation structure with the specified Euler angles.
- [init(eulerAngles:)](rotation3d/init%28eulerangles_%29.md): Creates a rotation structure with the specified Euler angles.
- [init(quaternion:)](rotation3d/init%28quaternion_%29-2c79y.md): Creates a rotation axis from the specified double-precision quaternion.
- [init(\_:)](rotation3d/init%28__%29-8z2bn.md): Creates a rotation from the specified double-precision quaternion.
- [init(\_:)](rotation3d/init%28__%29-829qb.md): Creates a rotation axis from the specified single-precision quaternion.
- [init(angle:axis:)](rotation3d/init%28angle_axis_%29.md): Creates a rotation structure with the specified axis and the specified angle from Spatial structures.
- [init(position:target:up:)](rotation3d/init%28position_target_up_%29.md): Creates a rotation structure that represents the look-at direction from a position to a target.
- [init(forward:)](rotation3d/init%28forward_%29.md): Creates a rotation with the specified forward vector.
- [init(forward:up:)](rotation3d/init%28forward_up_%29.md): Creates a rotation with the specified forward and up vectors.
- [init(forward:up:)](rotation3d/init%28forward_up_%29.md): Creates a rotation with the specified forward and up vectors.

# SPEulerAngles (Objective-C)

**Framework:** Spatial  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A vector that represents three Euler angles and specifies the angle ordering.

## Declaration

```objectivec
typedef struct { ... } SPEulerAngles;
```

## Topics

### Instance properties

- [angles](eulerangles/angles.md): A three-element vector that specifies the Euler angles.
- [order](eulerangles/order-swift.property.md): The Euler angle order.
- [angles](eulerangles/angles.md): A three-element vector that specifies the Euler angles.
- [order](eulerangles/order-swift.property.md): The Euler angle order.

### Supporting types

- [SPEulerAngleOrder](speulerangleorder.md): Constants that describe the order of Euler angles.

## See Also

### Creating a 3D rotation structure

- [SPRotation3DMakeWithEulerAngles](rotation3d/init%28eulerangles_%29.md): Creates a rotation structure with the specified Euler angles.
- [SPRotation3DMakeWithEulerAngles](rotation3d/init%28eulerangles_%29.md): Creates a rotation structure with the specified Euler angles.
- [SPRotation3DMake](rotation3d/init%28angle_axis_%29.md): Creates a rotation structure with the specified axis and the specified angle from Spatial structures.
- [SPRotation3DMakeLookAt](rotation3d/init%28forward_up_%29.md): Creates a rotation with the specified forward and up vectors.
- [SPRotation3DMakeWithQuaternion](sprotation3dmakewithquaternion.md)
- [SPRotation3DMake](sprotation3dmake-2i9jt.md): Deprecated. Creates a rotation structure.
- [SPRotation3DMakeLookAt](sprotation3dmakelookat-6ypo8.md): Creates a rotation structure that’s the look-at direction from a position to a target.
- [SPRotation3DMakeLookAt](sprotation3dmakelookat-4xrh6.md)
- [SPRotation3DMakeLookAt](rotation3d/init%28forward_up_%29.md): Creates a rotation with the specified forward and up vectors.
- [SPRotationAxis3DMakeWithVector](sprotationaxis3dmakewithvector-1n9ib.md): Creates a rotation axis from the specified double-precision vector.
- [SPRotationAxis3DMakeWithVector](sprotationaxis3dmakewithvector-kk1p.md)
