> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rotation3d/eulerangles(order:)](https://developer.apple.com/documentation/spatial/rotation3d/eulerangles(order:))

# eulerAngles(order:) (Swift)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a rotation’s Euler angles.

## Declaration

```swift
func eulerAngles(order: __SPEulerAngleOrder) -> EulerAngles
```

## Parameters

- `order`: The Euler angle ordering.

<a id="return-value"></a>

## Return Value

A structure that represents Euler angles and ordering.

<a id="Discussion"></a>

## Discussion

> **Note**

> In Swift, use [EulerAngles.Order](https://developer.apple.com/documentation/spatial/eulerangles/order-swift.typealias) in place of `__SPEulerAngleOrder`.

## See Also

### Inspecting a 3D rotation’s properties

- [angle](angle.md): The angle of the rotation.
- [axis](axis.md): The axis of the rotation.
- [EulerAngles](../eulerangles.md): A vector that represents three Euler angles and specifies the angle ordering.
- [quaternion](quaternion.md): A quaternion that represents the rotation.
- [vector](vector.md): The underlying vector of the rotation.

# SPRotation3DGetEulerAngles (Objective-C)

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a rotation’s Euler angles.

## Declaration

```objectivec
static SPEulerAngles SPRotation3DGetEulerAngles(SPRotation3D rotation, SPEulerAngleOrder order);
```

## Parameters

- `rotation`: The rotation object to retrieve Euler angles for.
- `order`: The Euler angle ordering.

<a id="return-value"></a>

## Return Value

A structure that represents Euler angles and ordering.

<a id="Discussion"></a>

## Discussion

> **Note**

> In Swift, use [EulerAngles.Order](https://developer.apple.com/documentation/spatial/eulerangles/order-swift.typealias) in place of `__SPEulerAngleOrder`.

## See Also

### Inspecting a 3D rotation’s properties

- [SPRotation3DGetAngle](../sprotation3dgetangle.md): The angle of the rotation.
- [SPRotation3DGetAxis](../sprotation3dgetaxis.md): The axis of the rotation.
- [SPEulerAngles](../eulerangles.md): A vector that represents three Euler angles and specifies the angle ordering.
- [quaternion](quaternion.md): A quaternion that represents the rotation.
- [vector](../sprotation3d/vector.md): The underlying vector of the rotation.
- [SPRotation3DGetQuaternion](../sprotation3dgetquaternion.md): A quaternion that represents the rotation.
- [SPRotationAxis3DGetVector](../sprotationaxis3dgetvector.md): A simd three-element vector that contains the x-, y-, and z-coordinate values.
