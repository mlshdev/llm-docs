> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/dockkit/dockaccessory/setlimits(_:)](https://developer.apple.com/documentation/dockkit/dockaccessory/setlimits(_:))

# setLimits(\_:)

**Framework:** DockKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

Sets limits for the axes of rotation.

## Declaration

```swift
final func setLimits(_ limits: DockAccessory.Limits) throws
```

## Parameters

- `limits`: The upper and lower limit of orientation, in radians, for each of the supported axes.

<a id="discussion"></a>

## Discussion

Limits only apply to the current tracking session. Afterwards, the orientation specifications default to the manufacturer limits. This method impacts primarily subsequent calls to [setOrientation(\_:duration:relative:)](setorientation%28__duration_relative_%29-2epe2.md) and [setOrientation(\_:duration:relative:)](setorientation%28__duration_relative_%29-6b0fl.md). Limits only apply to the current tracking session. When the session ends, the orientation specifications default to the manufacturer limits.

This method only works when you disable system tracking.

> **Throws**

> An error if all parameters are `nil`, or if the dock accessory doesn’t support the given axis.

## See Also

### Setting position and limits

- [setOrientation(\_:duration:relative:)](setorientation%28__duration_relative_%29-2epe2.md): Deprecated. Sets the position of each axis of orientation to radians for pitch, yaw, and roll.
- [setOrientation(\_:duration:relative:)](setorientation%28__duration_relative_%29-6b0fl.md): Deprecated. Sets the position of each axis of orientation to radians for pitch, yaw, and roll.
- [setAngularVelocity(\_:)](setangularvelocity%28__%29.md): Sets the angular velocity of each axis of orientation.
