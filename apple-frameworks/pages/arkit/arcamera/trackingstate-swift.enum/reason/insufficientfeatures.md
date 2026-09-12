> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arcamera/trackingstate-swift.enum/reason/insufficientfeatures](https://developer.apple.com/documentation/arkit/arcamera/trackingstate-swift.enum/reason/insufficientfeatures)

# ARCamera.TrackingState.Reason.insufficientFeatures

**Framework:** ARKit  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The scene visible to the camera doesn’t contain enough distinguishable features for image-based position tracking.

## Declaration

```swift
case insufficientFeatures
```

## Mentioned In

- [Managing Session Life Cycle and Tracking Quality](../../../managing-session-life-cycle-and-tracking-quality.md)

## See Also

### Inhibitors of Tracking Quality

- [ARCamera.TrackingState.Reason.initializing](initializing.md): The AR session has not gathered enough camera or motion data to provide tracking information.
- [ARCamera.TrackingState.Reason.relocalizing](relocalizing.md): The AR session is attempting to resume after an interruption.
- [ARCamera.TrackingState.Reason.excessiveMotion](excessivemotion.md): The device is moving too fast for accurate image-based position tracking.
