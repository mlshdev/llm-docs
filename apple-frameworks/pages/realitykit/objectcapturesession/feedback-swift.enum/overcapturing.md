> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/objectcapturesession/feedback-swift.enum/overcapturing](https://developer.apple.com/documentation/realitykit/objectcapturesession/feedback-swift.enum/overcapturing)

# ObjectCaptureSession.Feedback.overCapturing

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+

If the `numberOfShotsTaken > maximumNumberOfInputImages` then any additional shots will not be used in an on-device reconstruction and reconstruction is recommended to be done on a Mac that can support a greater number of images.

## Declaration

```swift
case overCapturing
```

<a id="discussion"></a>

## Discussion

Note: this will only occur if `isOverCaptureEnabled` was set to true in the `Configuration` used to start the session – otherwise, the session will simply stop capturing once the device limit is reached.
