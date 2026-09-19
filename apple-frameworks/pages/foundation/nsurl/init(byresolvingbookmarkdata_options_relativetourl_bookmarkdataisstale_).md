> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsurl/init(byresolvingbookmarkdata:options:relativetourl:bookmarkdataisstale:)

# init(byResolvingBookmarkData:options:relativeToURL:bookmarkDataIsStale:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
convenience init(byResolvingBookmarkData bookmarkData: Data, options: NSURL.BookmarkResolutionOptions = [], relativeToURL relativeURL: URL?, bookmarkDataIsStale isStale: UnsafeMutablePointer<ObjCBool>?) throws
```
