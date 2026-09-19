> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/musickit/musicplayer/play()

# play()

**Framework:** MusicKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 14.0+ · tvOS 15.0+ · visionOS 1.0+

Initiates playback from the current queue.

## Declaration

```swift
func play() async throws
```

<a id="discussion"></a>

## Discussion

If playback isn’t underway, this method resumes playback from its paused location; otherwise, this method plays the first available entry from the beginning.

If a music player isn’t ready for playback when you call this method, this method prepares the music player and then starts playback.
