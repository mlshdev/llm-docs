> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musicplayer/playbacktime](https://developer.apple.com/documentation/musickit/musicplayer/playbacktime)

# playbackTime

**Framework:** MusicKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 14.0+ · tvOS 15.0+ · visionOS 1.0+

The current playback time, in seconds, of the current entry.

## Declaration

```swift
var playbackTime: TimeInterval { get set }
```

<a id="discussion"></a>

## Discussion

Changing the value of this property moves the playhead to the new location. For content streaming live from a server, this value represents the time from the beginning of the playlist when it first loads. This property returns `NaN` if the [CMTime](../../coremedia/cmtime.md) is invalid or indefinite.
