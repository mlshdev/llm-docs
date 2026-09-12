> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/lockedcameracapture/lockedcameracapturemanager](https://developer.apple.com/documentation/lockedcameracapture/lockedcameracapturemanager)

# LockedCameraCaptureManager

**Framework:** LockedCameraCapture  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+

An object that provides handling of captured content and transitioning to the extension’s containing app.

## Declaration

```swift
final class LockedCameraCaptureManager
```

## Topics

### Instance Properties

- [sessionContentURLs](lockedcameracapturemanager/sessioncontenturls.md): An array of URLs that each point to a directory containing captured content.
- [sessionContentUpdates](lockedcameracapturemanager/sessioncontentupdates.md): An `AsyncSequence` to process captured content from your capture extension.

### Instance Methods

- [beginDelayingAppearance()](lockedcameracapturemanager/begindelayingappearance%28%29.md): Tells the system that the application wants to delay the application launch during a transition between the extension and the application
- [endDelayingAppearance()](lockedcameracapturemanager/enddelayingappearance%28%29.md): Tells the system that the application is ready to appear after delaying the appearance during a transition between the extension and the application
- [invalidateSessionContent(at:)](lockedcameracapturemanager/invalidatesessioncontent%28at_%29.md): Tells the system that the app no longer needs the directory at the URL and it can be deleted.

### Type Properties

- [shared](lockedcameracapturemanager/shared.md): The shared instance of the manager.

### Enumerations

- [LockedCameraCaptureManager.SessionContentUpdate](lockedcameracapturemanager/sessioncontentupdate.md): URLs provided by the [sessionContentUpdates](lockedcameracapturemanager/sessioncontentupdates.md) `AsyncSequence`.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### App integration

- [NSUserActivityTypeLockedCameraCapture](nsuseractivitytypelockedcameracapture.md): A type to use when opening your app from the capture extension.
