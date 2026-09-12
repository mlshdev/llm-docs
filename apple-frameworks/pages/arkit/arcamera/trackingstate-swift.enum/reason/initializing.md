> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arcamera/trackingstate-swift.enum/reason/initializing](https://developer.apple.com/documentation/arkit/arcamera/trackingstate-swift.enum/reason/initializing)

# ARCamera.TrackingState.Reason.initializing

**Framework:** ARKit  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The AR session has not gathered enough camera or motion data to provide tracking information.

## Declaration

```swift
case initializing
```

## Mentioned In

- [Managing Session Life Cycle and Tracking Quality](../../../managing-session-life-cycle-and-tracking-quality.md)

<a id="Discussion"></a>

## Discussion

This value occurs temporarily after starting a new AR session or changing configurations.

## See Also

### Inhibitors of Tracking Quality

- [ARCamera.TrackingState.Reason.relocalizing](relocalizing.md): The AR session is attempting to resume after an interruption.
- [ARCamera.TrackingState.Reason.excessiveMotion](excessivemotion.md): The device is moving too fast for accurate image-based position tracking.
- [ARCamera.TrackingState.Reason.insufficientFeatures](insufficientfeatures.md): The scene visible to the camera doesn’t contain enough distinguishable features for image-based position tracking.
