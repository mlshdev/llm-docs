> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/objectcapturesession/tracking/limited(reason:)](https://developer.apple.com/documentation/realitykit/objectcapturesession/tracking/limited(reason:))

# ObjectCaptureSession.Tracking.limited(reason:)

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+

Tracking is available but its quality is degraded. The ARKit coaching overlay will appear when [cameraTracking](../cameratracking.md) enters this state.

## Declaration

```swift
case limited(reason: ObjectCaptureSession.Tracking.Reason)
```

## Parameters

- `reason`: Why tracking is currently degraded.
