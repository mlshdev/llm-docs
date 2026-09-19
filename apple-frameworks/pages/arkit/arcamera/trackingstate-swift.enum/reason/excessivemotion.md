> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/arcamera/trackingstate-swift.enum/reason/excessivemotion

# ARCamera.TrackingState.Reason.excessiveMotion

**Framework:** ARKit  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The device is moving too fast for accurate image-based position tracking.

## Declaration

```swift
case excessiveMotion
```

## See Also

### Inhibitors of Tracking Quality

- [ARCamera.TrackingState.Reason.initializing](initializing.md): The AR session has not gathered enough camera or motion data to provide tracking information.
- [ARCamera.TrackingState.Reason.relocalizing](relocalizing.md): The AR session is attempting to resume after an interruption.
- [ARCamera.TrackingState.Reason.insufficientFeatures](insufficientfeatures.md): The scene visible to the camera doesn’t contain enough distinguishable features for image-based position tracking.
