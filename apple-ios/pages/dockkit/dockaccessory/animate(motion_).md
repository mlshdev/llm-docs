> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/dockkit/dockaccessory/animate(motion:)](https://developer.apple.com/documentation/dockkit/dockaccessory/animate(motion:))

# animate(motion:)

**Framework:** DockKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

Starts an animation sequence.

## Declaration

```swift
final func animate(motion: DockAccessory.Animation) async throws -> Progress
```

## Parameters

- `motion`: The animation sequence to perform.

<a id="return-value"></a>

## Return Value

A progress object that reports the progress during execution of the animation sequence.

<a id="discussion"></a>

## Discussion

This method moves the dock accessory along a predefined trajectory to convey a characteristic. Do this only if you disable system tracking.

> **Throws**

> [DockKitError.notConnected](../dockkiterror/notconnected.md) if device isn’t connected, [DockKitError.frameRateTooHigh](../dockkiterror/frameratetoohigh.md) if calling the method too frequently, or [DockKitError.notSupported](../dockkiterror/notsupported.md) in macOS.

## See Also

### Performing animation

- [setRegionOfInterest(\_:)](setregionofinterest%28__%29.md): Sets the area in the video frame in which the dock accessory tracks a subject.
- [regionOfInterest](regionofinterest.md): The area in the video frame in which the dock accessory tracks a subject.
- [DockAccessory.Animation](animation.md): Character animations that describe how to move the dock accessory.
