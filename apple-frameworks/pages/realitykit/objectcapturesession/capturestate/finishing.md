> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/objectcapturesession/capturestate/finishing](https://developer.apple.com/documentation/realitykit/objectcapturesession/capturestate/finishing)

# ObjectCaptureSession.CaptureState.finishing

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+

The session is saving outstanding data and finishing up.

## Declaration

```swift
case finishing
```

<a id="discussion"></a>

## Discussion

This state occurs  after your app calls [finish()](../finish%28%29.md). The app should keep the session alive until it reaches `.completed` state to ensure all data has been saved.  The session will automatically move to `.completed` once all data is saved.
