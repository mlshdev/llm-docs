> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/lockedcameracapture/lockedcameracapturemanager/sessioncontentupdates](https://developer.apple.com/documentation/lockedcameracapture/lockedcameracapturemanager/sessioncontentupdates)

# sessionContentUpdates

**Framework:** LockedCameraCapture  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+

An `AsyncSequence` to process captured content from your capture extension.

## Declaration

```swift
final var sessionContentUpdates: some AsyncSequence<LockedCameraCaptureManager.SessionContentUpdate, Never> { get }
```

<a id="discussion"></a>

## Discussion

Use this to process captured content as soon as it is available after your app launches.
