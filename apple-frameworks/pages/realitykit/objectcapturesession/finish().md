> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/objectcapturesession/finish()](https://developer.apple.com/documentation/realitykit/objectcapturesession/finish())

# finish()

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+

Requests that the capture session be stopped and all data saved.

## Declaration

```swift
@MainActor func finish()
```

<a id="discussion"></a>

## Discussion

Call this method when the user has completed the scan successfully.  The session switches to state `.finishing` while it saves all data and ultimately switches the state to `.completed`. The session ignores this method call if the current state is any value other than `.capturing`.

## See Also

### Controlling the session

- [cancel()](cancel%28%29.md): Requests that the capture session be canceled.
- [pause()](pause%28%29.md): Pauses the automatic capture and other resource-intense algorithms.
- [requestImageCapture()](requestimagecapture%28%29.md): Requests a manual image capture.
- [resume()](resume%28%29.md): Resumes object tracking algorithms after [pause()](pause%28%29.md) is called.
- [startCapturing()](startcapturing%28%29.md): Begins taking images for object capture.
