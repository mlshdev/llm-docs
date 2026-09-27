> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-d0d1b2f13e0d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/lockedcameracapture/lockedcameracaptureextensionscene

# LockedCameraCaptureExtensionScene

**Framework:** LockedCameraCapture  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+

A protocol that provides the UI for the locked camera capture extension.

## Declaration

```swift
@MainActor protocol LockedCameraCaptureExtensionScene : AppExtensionScene
```

<a id="overview"></a>

## Overview

Implement this protocol with the [LockedCameraCaptureUIScene](lockedcameracaptureuiscene.md) providing the UI.

## Relationships

### Inherits From

- [AppExtensionScene](https://developer.apple.com/documentation/extensionkit/appextensionscene)

### Conforming Types

- [LockedCameraCaptureUIScene](lockedcameracaptureuiscene.md)

## See Also

### Extension

- [LockedCameraCaptureExtension](lockedcameracaptureextension.md): A protocol that creates a locked camera capture extension.
