> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/dockkit/dockaccessory/setangularvelocity(_:)](https://developer.apple.com/documentation/dockkit/dockaccessory/setangularvelocity(_:))

# setAngularVelocity(\_:)

**Framework:** DockKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

Sets the angular velocity of each axis of orientation.

## Declaration

```swift
final func setAngularVelocity(_ angularVelocity: Vector3D) async throws
```

## Parameters

- `angularVelocity`: A Vector3D object of the angular velocity to set, in axis/angle notation, corresponsing to radians per second for pitch, yaw, and roll axes.

## Mentioned In

- [Modify rotation and positioning programmatically](../modify-rotation-and-positioning-behavior-programmatically.md)

<a id="discussion"></a>

## Discussion

The angular velocity is expressed in radians per second for pitch, yaw, and roll. This method works only when you disable system tracking.

> **Throws**

> [DockKitError.notConnected](../dockkiterror/notconnected.md) if the accessory disconnects, or other errors if communication with the accessory fails.

## See Also

### Setting position and limits

- [setLimits(\_:)](setlimits%28__%29.md): Sets limits for the axes of rotation.
- [setOrientation(\_:duration:relative:)](setorientation%28__duration_relative_%29-2epe2.md): Deprecated. Sets the position of each axis of orientation to radians for pitch, yaw, and roll.
- [setOrientation(\_:duration:relative:)](setorientation%28__duration_relative_%29-6b0fl.md): Deprecated. Sets the position of each axis of orientation to radians for pitch, yaw, and roll.
