> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/lockedcameracapture/lockedcameracapturemanager/sessioncontentupdates

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
