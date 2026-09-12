> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/objectcapturesession/pause()](https://developer.apple.com/documentation/realitykit/objectcapturesession/pause())

# pause()

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+

Pauses the automatic capture and other resource-intense algorithms.

## Declaration

```swift
@MainActor func pause()
```

<a id="discussion"></a>

## Discussion

Call this when object capture view is not visible, such as when a help screen is shown.

## See Also

### Controlling the session

- [cancel()](cancel%28%29.md): Requests that the capture session be canceled.
- [finish()](finish%28%29.md): Requests that the capture session be stopped and all data saved.
- [requestImageCapture()](requestimagecapture%28%29.md): Requests a manual image capture.
- [resume()](resume%28%29.md): Resumes object tracking algorithms after [pause()](pause%28%29.md) is called.
- [startCapturing()](startcapturing%28%29.md): Begins taking images for object capture.
