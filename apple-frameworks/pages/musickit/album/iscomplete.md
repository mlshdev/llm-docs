> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/album/iscomplete](https://developer.apple.com/documentation/musickit/album/iscomplete)

# isComplete

**Framework:** MusicKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A Boolean value that indicates whether the album is complete.

## Declaration

```swift
var isComplete: Bool? { get }
```

<a id="discussion"></a>

## Discussion

If true, the album is complete; otherwise, it’s incomplete. An album is complete if it contains all its tracks and songs.
