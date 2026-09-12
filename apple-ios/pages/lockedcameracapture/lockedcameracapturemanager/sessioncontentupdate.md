> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/lockedcameracapture/lockedcameracapturemanager/sessioncontentupdate](https://developer.apple.com/documentation/lockedcameracapture/lockedcameracapturemanager/sessioncontentupdate)

# LockedCameraCaptureManager.SessionContentUpdate

**Framework:** LockedCameraCapture  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+

URLs provided by the [sessionContentUpdates](sessioncontentupdates.md) `AsyncSequence`.

## Declaration

```swift
enum SessionContentUpdate
```

## Topics

### Enumeration Cases

- [LockedCameraCaptureManager.SessionContentUpdate.added(url:)](sessioncontentupdate/added%28url_%29.md): A URL to a directory of added session content.
- [LockedCameraCaptureManager.SessionContentUpdate.initial(urls:)](sessioncontentupdate/initial%28urls_%29.md): URLs to directories of the current session content available when beginning observation of [sessionContentUpdates](sessioncontentupdates.md).
- [LockedCameraCaptureManager.SessionContentUpdate.removed(url:)](sessioncontentupdate/removed%28url_%29.md): A URL to a directory of removed session content.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
