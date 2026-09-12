> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/objectcapturesession/capturestate/capturing](https://developer.apple.com/documentation/realitykit/objectcapturesession/capturestate/capturing)

# ObjectCaptureSession.CaptureState.capturing

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+

Auto-capture is in progress.

## Declaration

```swift
case capturing
```

<a id="discussion"></a>

## Discussion

In this state the user is expected to orbit the device slowly and smoothly around the object in order to fully complete the capture dial.

In this state an app may also manually request captures with a call to [requestImageCapture()](../requestimagecapture%28%29.md).
