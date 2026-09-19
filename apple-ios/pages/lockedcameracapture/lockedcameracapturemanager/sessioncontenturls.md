> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/lockedcameracapture/lockedcameracapturemanager/sessioncontenturls

# sessionContentURLs

**Framework:** LockedCameraCapture  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+

An array of URLs that each point to a directory containing captured content.

## Declaration

```swift
final var sessionContentURLs: [URL] { get }
```

<a id="discussion"></a>

## Discussion

Content in the URLs is captured during a capture extension’s [LockedCameraCaptureSession](../lockedcameracapturesession.md). These directories are located within the capture extension’s containing app’s data container.
