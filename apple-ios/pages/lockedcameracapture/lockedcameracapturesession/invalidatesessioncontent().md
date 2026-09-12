> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/lockedcameracapture/lockedcameracapturesession/invalidatesessioncontent()](https://developer.apple.com/documentation/lockedcameracapture/lockedcameracapturesession/invalidatesessioncontent())

# invalidateSessionContent()

**Framework:** LockedCameraCapture  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Invalidates the contents of the session contents URL, deleting them. Note this does not remove the contents directory itself. This is useful in case the extension has already ingested its contents via PhotoKit and wishes to not persist any data (but can still use this directory as a working directory to recover from an unexpected termination).

## Declaration

```swift
final func invalidateSessionContent() async throws
```
