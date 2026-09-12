> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/objectcapturesession/startdetecting()](https://developer.apple.com/documentation/realitykit/objectcapturesession/startdetecting())

# startDetecting()

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+

Requests that the session should start detecting the object in the center of the camera.

## Declaration

```swift
@MainActor func startDetecting() -> Bool
```

<a id="discussion"></a>

## Discussion

If success, the session state eventually transitions to [ObjectCaptureSession.CaptureState.detecting](capturestate/detecting.md) and switches to the bounding box selection mode UI.

This method needs be called in `.ready` state or the call will return false and the state will not change. If there is no horizontal plane detected along the ray originating at the center of the screen it will also return false immediately and remain in `.ready`.
