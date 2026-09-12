> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/dockkit/dockaccessory/setorientation(_:duration:relative:)-2epe2](https://developer.apple.com/documentation/dockkit/dockaccessory/setorientation(_:duration:relative:)-2epe2)

# setOrientation(\_:duration:relative:)

**Framework:** DockKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ (deprecated in 18.0) · iPadOS 17.0+ (deprecated in 18.0) · Mac Catalyst 17.0+ (deprecated in 18.0) · macOS 14.0+ (deprecated in 15.0)

Sets the position of each axis of orientation to radians for pitch, yaw, and roll.

> please use async version of setOrientation

## Declaration

```swift
final func setOrientation(_ rotation: Vector3D, duration: Duration = .seconds(0), relative: Bool = false) throws -> Progress
```

## Parameters

- `rotation`: The spatial framework’s Vector3D with X, Y, and Z corresponding to radians of pitch, yaw, and roll axes.
- `duration`: The duration, in seconds, to reach the target orientation.
- `relative`: Calculate the relative-to-current positions, if set to  `true`; otherwise, move to an absolute position.

<a id="return-value"></a>

## Return Value

An object that reports progress during the animation sequence.

## Mentioned In

- [Modify rotation and positioning programmatically](../modify-rotation-and-positioning-behavior-programmatically.md)

<a id="discussion"></a>

## Discussion

This method works only when you disable system tracking.

> **Throws**

> [DockKitError.frameRateTooHigh](../dockkiterror/frameratetoohigh.md) if calling the method too frequently, or [DockKitError.notSupported](../dockkiterror/notsupported.md) in macOS.

## See Also

### Setting position and limits

- [setLimits(\_:)](setlimits%28__%29.md): Sets limits for the axes of rotation.
- [setOrientation(\_:duration:relative:)](setorientation%28__duration_relative_%29-6b0fl.md): Deprecated. Sets the position of each axis of orientation to radians for pitch, yaw, and roll.
- [setAngularVelocity(\_:)](setangularvelocity%28__%29.md): Sets the angular velocity of each axis of orientation.
