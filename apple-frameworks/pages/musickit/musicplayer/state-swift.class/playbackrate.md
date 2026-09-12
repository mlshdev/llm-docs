> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musicplayer/state-swift.class/playbackrate](https://developer.apple.com/documentation/musickit/musicplayer/state-swift.class/playbackrate)

# playbackRate

**Framework:** MusicKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 14.0+ · tvOS 15.0+ · visionOS 1.0+

The current playback rate for the player.

## Declaration

```swift
var playbackRate: Float { get set }
```

<a id="discussion"></a>

## Discussion

This value represents a multiplier for the default playback rate of the current entry. A value of `0.0` indicates that the entry isn’t playing, and a value of `1.0` indicates that it’s playing at normal speed. Positive values indicate forward playback, and negative values indicate reverse playback.

Setting the value of this property changes the playback rate accordingly.
