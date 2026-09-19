> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/musickit/musicplayer/skiptonextentry()

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
