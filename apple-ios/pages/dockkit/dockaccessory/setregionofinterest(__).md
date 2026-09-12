> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/dockkit/dockaccessory/setregionofinterest(_:)](https://developer.apple.com/documentation/dockkit/dockaccessory/setregionofinterest(_:))

# setRegionOfInterest(\_:)

**Framework:** DockKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

Sets the area in the video frame in which the dock accessory tracks a subject.

## Declaration

```swift
final func setRegionOfInterest(_ region: CGRect) async throws
```

## Parameters

- `region`: The area in the video frame in which the dock accessory tracks a subject.

<a id="discussion"></a>

## Discussion

The region of interest is an limited area within the video frame that DockKit tracks a subject in. The default value is `(0,0,1,1)`, which indicates that the whole frame is of interest.

If you disable system tracking, this configuration change applies to any custom tracking for this dock accessory. The configuration applies to any camera stream the app has open if system tracking is enabled.

The region of interest doesn’t persist; it resets to the entire video frame any time an app exits, backgrounds, or stops tracking.

> **Throws**

> [DockKitError.notConnected](../dockkiterror/notconnected.md) if device isn’t connected, or [DockKitError.notSupported](../dockkiterror/notsupported.md) if called on macOS.

## See Also

### Performing animation

- [animate(motion:)](animate%28motion_%29.md): Starts an animation sequence.
- [regionOfInterest](regionofinterest.md): The area in the video frame in which the dock accessory tracks a subject.
- [DockAccessory.Animation](animation.md): Character animations that describe how to move the dock accessory.
