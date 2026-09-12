> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musicplayer/queue/affectslisteninghistory](https://developer.apple.com/documentation/musickit/musicplayer/queue/affectslisteninghistory)

# affectsListeningHistory

**Framework:** MusicKit  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · tvOS 26.4+ · visionOS 26.4+

A Boolean value that indicates whether this playing this queue will affect the user’s listening history. Defaults to `true`.

## Declaration

```swift
var affectsListeningHistory: Bool { get set }
```

<a id="discussion"></a>

## Discussion

If `false`, or the user has Settings \> Music \> Use Listening History set to off, this queue will not show up in the Music app’s Recently Played.
