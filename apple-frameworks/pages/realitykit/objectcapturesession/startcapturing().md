> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/objectcapturesession/startcapturing()](https://developer.apple.com/documentation/realitykit/objectcapturesession/startcapturing())

# startCapturing()

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+

Begins taking images for object capture.

## Declaration

```swift
@MainActor func startCapturing()
```

<a id="discussion"></a>

## Discussion

This call moves the session state from `.ready` or `.detecting` into `.capturing`. In object-centric scanning, this function is called after the user chooses the object selection bounding box and wishes to start the capture process. This call then moves the session state from `.detecting` into `.capturing`. In freeform scanning where the user skips the bounding box selection, this call moves the session state from `.ready` directly into `.capturing`.

## See Also

### Controlling the session

- [cancel()](cancel%28%29.md): Requests that the capture session be canceled.
- [finish()](finish%28%29.md): Requests that the capture session be stopped and all data saved.
- [pause()](pause%28%29.md): Pauses the automatic capture and other resource-intense algorithms.
- [requestImageCapture()](requestimagecapture%28%29.md): Requests a manual image capture.
- [resume()](resume%28%29.md): Resumes object tracking algorithms after [pause()](pause%28%29.md) is called.
