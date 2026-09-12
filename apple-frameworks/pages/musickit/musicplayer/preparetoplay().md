> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musicplayer/preparetoplay()](https://developer.apple.com/documentation/musickit/musicplayer/preparetoplay())

# prepareToPlay()

**Framework:** MusicKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 14.0+ · tvOS 15.0+ · visionOS 1.0+

Prepares the current queue for playback, interrupting any active (nonmixable) audio sessions.

## Declaration

```swift
func prepareToPlay() async throws
```

<a id="discussion"></a>

## Discussion

Call this function to ensure that the player buffers the starting entry in the queue and that the entry is ready to play.
