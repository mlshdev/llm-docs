> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musicplayer/beginseekingforward()](https://developer.apple.com/documentation/musickit/musicplayer/beginseekingforward())

# beginSeekingForward()

**Framework:** MusicKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 14.0+ · tvOS 15.0+ · visionOS 1.0+

Begins seeking forward through the music content.

## Declaration

```swift
func beginSeekingForward()
```

<a id="discussion"></a>

## Discussion

Use this method to move the current playback position forward in time at an accelerated rate. Seeking begins when you call this method, and continues until you call the [endSeeking()](endseeking%28%29.md) method.

If the player is streaming the underlying content, this method has no effect.
