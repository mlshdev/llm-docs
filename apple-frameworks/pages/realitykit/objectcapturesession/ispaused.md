> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/objectcapturesession/ispaused

# isPaused

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+

A Boolean value that indicates if the capture session is paused.

## Declaration

```swift
@MainActor var isPaused: Bool { get }
```

## See Also

### Configuring a session

- [feedback](feedback-swift.property.md): The current set of active `Feedback` states.
- [ObjectCaptureSession.Feedback](feedback-swift.enum.md): Provides information about possible problems with the capture session.
- [state](state.md): The current state of the capture session.
- [cameraTracking](cameratracking.md): The current state of ARKit camera tracking.
- [ObjectCaptureSession.Tracking](tracking.md): A data structure that describes the current tracking state for the camera.
