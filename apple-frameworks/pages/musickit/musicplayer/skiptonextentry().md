> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musicplayer/skiptonextentry()](https://developer.apple.com/documentation/musickit/musicplayer/skiptonextentry())

# skipToNextEntry()

**Framework:** MusicKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 14.0+ · tvOS 15.0+ · visionOS 1.0+

Starts playback of the next entry in the playback queue.

## Declaration

```swift
func skipToNextEntry() async throws
```

<a id="discussion"></a>

## Discussion

If the music player isn’t playing, this method designates the next entry as the next to play.

When you call this method, playback ends if the music player is already at the last entry in the playback queue.
