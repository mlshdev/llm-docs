> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/objectcapturesession/requestimagecapture()](https://developer.apple.com/documentation/realitykit/objectcapturesession/requestimagecapture())

# requestImageCapture()

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+

Requests a manual image capture.

## Declaration

```swift
@MainActor func requestImageCapture()
```

<a id="discussion"></a>

## Discussion

If the session’s state is `.capturing`, call this method to request an image be manually captured at the current location. This function has no effect if the session is in any other state, or if [canRequestImageCapture](canrequestimagecapture.md) is `false`.

## See Also

### Controlling the session

- [cancel()](cancel%28%29.md): Requests that the capture session be canceled.
- [finish()](finish%28%29.md): Requests that the capture session be stopped and all data saved.
- [pause()](pause%28%29.md): Pauses the automatic capture and other resource-intense algorithms.
- [resume()](resume%28%29.md): Resumes object tracking algorithms after [pause()](pause%28%29.md) is called.
- [startCapturing()](startcapturing%28%29.md): Begins taking images for object capture.
