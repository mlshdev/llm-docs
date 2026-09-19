> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/lockedcameracapture/lockedcameracapturemanager/invalidatesessioncontent(at:)

# invalidateSessionContent(at:)

**Framework:** LockedCameraCapture  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Tells the system that the app no longer needs the directory at the URL and it can be deleted.

## Declaration

```swift
final func invalidateSessionContent(at url: URL) async throws
```

## Parameters

- `url`: A URL from [sessionContentURLs](sessioncontenturls.md). The system ignores other URLs.

<a id="discussion"></a>

## Discussion

The directory at the `URL` contains captured content for a session. Store the captured content appropriately before calling this method, otherwise the system deletes it.
