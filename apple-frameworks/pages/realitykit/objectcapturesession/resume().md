> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/objectcapturesession/resume()](https://developer.apple.com/documentation/realitykit/objectcapturesession/resume())

# resume()

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+

Resumes object tracking algorithms after [pause()](pause%28%29.md) is called.

## Declaration

```swift
@MainActor func resume()
```

<a id="discussion"></a>

## Discussion

Call this method when the object capture view first appears on the screen, or after `pause()` is called to show another view temporarily.

## See Also

### Controlling the session

- [cancel()](cancel%28%29.md): Requests that the capture session be canceled.
- [finish()](finish%28%29.md): Requests that the capture session be stopped and all data saved.
- [pause()](pause%28%29.md): Pauses the automatic capture and other resource-intense algorithms.
- [requestImageCapture()](requestimagecapture%28%29.md): Requests a manual image capture.
- [startCapturing()](startcapturing%28%29.md): Begins taking images for object capture.
