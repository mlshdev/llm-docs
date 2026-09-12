> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/lockedcameracapture/lockedcameracapturesession](https://developer.apple.com/documentation/lockedcameracapture/lockedcameracapturesession)

# LockedCameraCaptureSession

**Framework:** LockedCameraCapture  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+

An object that can request to open the extension’s containing app and receives session configuration updates.

## Declaration

```swift
final class LockedCameraCaptureSession
```

<a id="overview"></a>

## Overview

Provided during the initialization of the [LockedCameraCaptureExtensionScene](lockedcameracaptureextensionscene.md). Only the system can initialize this object.

## Topics

### Instance Properties

- [sessionContentURL](lockedcameracapturesession/sessioncontenturl.md): A temporary directory URL inside the extension’s data container.

### Instance Methods

- [invalidateSessionContent()](lockedcameracapturesession/invalidatesessioncontent%28%29.md): Invalidates the contents of the session contents URL, deleting them. Note this does not remove the contents directory itself. This is useful in case the extension has already ingested its contents via PhotoKit and wishes to not persist any data (but can still use this directory as a working directory to recover from an unexpected termination).
- [openApplication(for:)](lockedcameracapturesession/openapplication%28for_%29.md): Initiates a request to open the extension’s containing app.

### Enumerations

- [LockedCameraCaptureSession.ApplicationLaunchError](lockedcameracapturesession/applicationlauncherror.md): Indicates why launching the extension’s containing app failed.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Capture and launch

- [LockedCameraCaptureUIScene](lockedcameracaptureuiscene.md): A structure that contains the session object and UI to display for the locked camera capture extension.
