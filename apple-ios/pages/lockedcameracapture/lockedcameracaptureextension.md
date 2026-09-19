> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/lockedcameracapture/lockedcameracaptureextension

# LockedCameraCaptureExtension

**Framework:** LockedCameraCapture  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+

A protocol that creates a locked camera capture extension.

## Declaration

```swift
@MainActor protocol LockedCameraCaptureExtension : AppExtension
```

## Topics

### Associated Types

- [Body](lockedcameracaptureextension/body-swift.associatedtype.md)

### Instance Properties

- [body](lockedcameracaptureextension/body-swift.property.md): The content for the locked camera capture extension.

## Relationships

### Inherits From

- [AppExtension](https://developer.apple.com/documentation/extensionfoundation/appextension)

## See Also

### Extension

- [LockedCameraCaptureExtensionScene](lockedcameracaptureextensionscene.md): A protocol that provides the UI for the locked camera capture extension.
