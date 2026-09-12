> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musicplayer/endseeking()](https://developer.apple.com/documentation/musickit/musicplayer/endseeking())

# endSeeking()

**Framework:** MusicKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 14.0+ · tvOS 15.0+ · visionOS 1.0+

Ends forward and backward seeking through the music content.

## Declaration

```swift
func endSeeking()
```

<a id="discussion"></a>

## Discussion

Call this method to end a seek operation that begins when you call either the [beginSeekingBackward()](beginseekingbackward%28%29.md) or [beginSeekingForward()](beginseekingforward%28%29.md) method. After calling this method, the player returns to its previous state. For example, if the entry is playing before seeking begins, it continues playing from the new playhead position after calling this method.
