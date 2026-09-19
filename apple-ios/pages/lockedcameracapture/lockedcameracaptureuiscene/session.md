> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/lockedcameracapture/lockedcameracaptureuiscene/session

# session

**Framework:** LockedCameraCapture  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+

An object that can request to open the extension’s containing app and receives session configuration updates.

## Declaration

```swift
@MainActor let session: LockedCameraCaptureSession
```

<a id="discussion"></a>

## Discussion

Provided during the initialization of the [LockedCameraCaptureExtensionScene](../lockedcameracaptureextensionscene.md). Only the system can initialize this object.
