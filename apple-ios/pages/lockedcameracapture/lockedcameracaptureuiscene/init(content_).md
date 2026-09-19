> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/lockedcameracapture/lockedcameracaptureuiscene/init(content:)

# init(content:)

**Framework:** LockedCameraCapture  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Creates a locked camera capture extension scene.

## Declaration

```swift
@MainActor init(content: @escaping (LockedCameraCaptureSession) -> Content)
```

## Parameters

- `content`: The content of the locked camera capture extension using a [LockedCameraCaptureSession](../lockedcameracapturesession.md).
