> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/objectcapturesession/capturestate/detecting

# ObjectCaptureSession.CaptureState.detecting

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+

The object selection box is being detected / manipulated and is not yet complete. A call to `startCapturing()` in this state will move the session to `.capturing` to begin capturing the object indicated within the currently specified bounding box.

## Declaration

```swift
case detecting
```
