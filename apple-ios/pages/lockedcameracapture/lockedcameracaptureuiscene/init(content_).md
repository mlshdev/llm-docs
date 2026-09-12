> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/lockedcameracapture/lockedcameracaptureuiscene/init(content:)](https://developer.apple.com/documentation/lockedcameracapture/lockedcameracaptureuiscene/init(content:))

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
