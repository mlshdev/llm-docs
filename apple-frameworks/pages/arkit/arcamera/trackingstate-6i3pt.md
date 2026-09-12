> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arcamera/trackingstate-6i3pt](https://developer.apple.com/documentation/arkit/arcamera/trackingstate-6i3pt)

# trackingState

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The general quality of position tracking available when the camera captured a frame.

## Declaration

```swift
var trackingState: ARCamera.TrackingState { get }
```

<a id="Discussion"></a>

## Discussion

When this value is [ARCamera.TrackingState.limited(\_:)](trackingstate-swift.enum/limited%28__%29.md), see the associated [ARCamera.TrackingState.Reason](trackingstate-swift.enum/reason.md) value for a possible cause of low tracking quality.

## See Also

### Handling Tracking Status

- [ARCamera.TrackingState](trackingstate-swift.enum.md): Values for position tracking quality, with possible causes when tracking quality is limited.
