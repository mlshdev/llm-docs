> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/lockedcameracapture/lockedcameracaptureuiscene](https://developer.apple.com/documentation/lockedcameracapture/lockedcameracaptureuiscene)

# LockedCameraCaptureUIScene

**Framework:** LockedCameraCapture  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+

A structure that contains the session object and UI to display for the locked camera capture extension.

## Declaration

```swift
@MainActor struct LockedCameraCaptureUIScene<Content> where Content : View
```

## Topics

### Initializers

- [init(content:)](lockedcameracaptureuiscene/init%28content_%29.md): Creates a locked camera capture extension scene.

### Instance Properties

- [body](lockedcameracaptureuiscene/body.md): The content and behavior of the locked camera capture extension’s UI.
- [session](lockedcameracaptureuiscene/session.md): An object that can request to open the extension’s containing app and receives session configuration updates.

## Relationships

### Conforms To

- [AppExtensionScene](https://developer.apple.com/documentation/extensionkit/appextensionscene)
- [LockedCameraCaptureExtensionScene](lockedcameracaptureextensionscene.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Capture and launch

- [LockedCameraCaptureSession](lockedcameracapturesession.md): An object that can request to open the extension’s containing app and receives session configuration updates.
