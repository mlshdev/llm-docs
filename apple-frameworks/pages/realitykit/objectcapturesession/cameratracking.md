> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/objectcapturesession/cameratracking

# cameraTracking

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+

The current state of ARKit camera tracking.

## Declaration

```swift
@MainActor var cameraTracking: ObjectCaptureSession.Tracking { get }
```

<a id="discussion"></a>

## Discussion

The ARKit coaching overylay will be automatically show if this state moves away from `.normal` since the loss of ARKit tracking will cause many of the Object Capture algorithms to pause until the environmental tracking issue is resolved by the user. Also, the app may want to adjust its UI when this state is not `.normal` to allow proper visibility of the coaching overlay.

## See Also

### Configuring a session

- [feedback](feedback-swift.property.md): The current set of active `Feedback` states.
- [ObjectCaptureSession.Feedback](feedback-swift.enum.md): Provides information about possible problems with the capture session.
- [isPaused](ispaused.md): A Boolean value that indicates if the capture session is paused.
- [state](state.md): The current state of the capture session.
- [ObjectCaptureSession.Tracking](tracking.md): A data structure that describes the current tracking state for the camera.
