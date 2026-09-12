> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/objectcapturesession/tracking/reason](https://developer.apple.com/documentation/realitykit/objectcapturesession/tracking/reason)

# ObjectCaptureSession.Tracking.Reason

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+

The reason that tracking quality has degraded.

## Declaration

```swift
enum Reason
```

## Topics

### Enumeration Cases

- [ObjectCaptureSession.Tracking.Reason.excessiveMotion](reason/excessivemotion.md): The device is moving too fast for accurate tracking.
- [ObjectCaptureSession.Tracking.Reason.initializing](reason/initializing.md): Tracking is still initializing, usually at the start of a new session.
- [ObjectCaptureSession.Tracking.Reason.insufficientFeatures](reason/insufficientfeatures.md): The scene does not contain enough distinguishable features for accurate camera tracking.
- [ObjectCaptureSession.Tracking.Reason.relocalizing](reason/relocalizing.md): The session is attempting to resume tracking after an interruption, such as the app being paused.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
