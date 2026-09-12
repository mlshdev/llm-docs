> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/objectcapturesession/cancel()](https://developer.apple.com/documentation/realitykit/objectcapturesession/cancel())

# cancel()

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+

Requests that the capture session be canceled.

## Declaration

```swift
@MainActor func cancel()
```

<a id="discussion"></a>

## Discussion

Call this when the user indicates they want to cancel the scan.  Calling this method eventually transitions the session to `.failed(Error)` Once the session enters the failed state  it is safe to tear down the session and create a new one if desired.

## See Also

### Controlling the session

- [finish()](finish%28%29.md): Requests that the capture session be stopped and all data saved.
- [pause()](pause%28%29.md): Pauses the automatic capture and other resource-intense algorithms.
- [requestImageCapture()](requestimagecapture%28%29.md): Requests a manual image capture.
- [resume()](resume%28%29.md): Resumes object tracking algorithms after [pause()](pause%28%29.md) is called.
- [startCapturing()](startcapturing%28%29.md): Begins taking images for object capture.
