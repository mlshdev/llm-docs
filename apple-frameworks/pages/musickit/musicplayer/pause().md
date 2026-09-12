> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musicplayer/pause()](https://developer.apple.com/documentation/musickit/musicplayer/pause())

# pause()

**Framework:** MusicKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 14.0+ · tvOS 15.0+ · visionOS 1.0+

Pauses playback of the current entry.

## Declaration

```swift
func pause()
```

<a id="discussion"></a>

## Discussion

If playback isn’t currently underway, this method has no effect. To resume playback of the current entry from the pause point, call the [play()](play%28%29.md) method.
