> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arcamera/trackingstate-swift.enum/limited(_:)](https://developer.apple.com/documentation/arkit/arcamera/trackingstate-swift.enum/limited(_:))

# ARCamera.TrackingState.limited(\_:)

**Framework:** ARKit  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Tracking is available, but the quality of results is questionable.

## Declaration

```swift
case limited(ARCamera.TrackingState.Reason)
```

## Mentioned In

- [Managing Session Life Cycle and Tracking Quality](../../managing-session-life-cycle-and-tracking-quality.md)

<a id="Discussion"></a>

## Discussion

In this state, the positions and transforms of anchors in the scene (especially detected planes) may not be accurate or consistent from one captured frame to the next.

See the associated [ARCamera.TrackingState.Reason](reason.md) value for information you can present to the user for improving tracking quality.

## See Also

### Determining the camera tracking status

- [ARCamera.TrackingState.notAvailable](notavailable.md): Camera position tracking is not available.
- [ARCamera.TrackingState.Reason](reason.md): Causes of limited position-tracking quality.
- [ARCamera.TrackingState.normal](normal.md): Camera position tracking is providing optimal results.
