> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/dockkit/dockaccessory/setorientation(_:duration:relative:)-84z7i](https://developer.apple.com/documentation/dockkit/dockaccessory/setorientation(_:duration:relative:)-84z7i)

# setOrientation(\_:duration:relative:)

**Framework:** DockKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

Sets the position of each axis of orientation to radians for pitch, yaw, and roll.

## Declaration

```swift
final func setOrientation(_ rotation: Vector3D, duration: Duration = .seconds(0), relative: Bool = false) async throws -> Progress
```

## Parameters

- `rotation`: The spatial framework’s Vector3D with X, Y, and Z corresponding to radians of pitch, yaw, and roll axes.
- `duration`: The duration, in seconds, to reach the target orientation.
- `relative`: Calculate the relative-to-current positions, if set to  `true`; otherwise, move to an absolute position.

<a id="return-value"></a>

## Return Value

An object that reports progress during the animation sequence.

<a id="discussion"></a>

## Discussion

This method works only when you disable system tracking.

> **Throws**

> [DockKitError.frameRateTooHigh](../dockkiterror/frameratetoohigh.md) if calling the method too frequently, or [DockKitError.notSupported](../dockkiterror/notsupported.md) in macOS.
