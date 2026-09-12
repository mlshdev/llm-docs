> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/play()](https://developer.apple.com/documentation/avfoundation/avplayer/play())

# play() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Begins playback of the current item.

## Declaration

```swift
nonisolated func play()
```

## Mentioned In

- [Controlling the transport behavior of a player](../controlling-the-transport-behavior-of-a-player.md)

<a id="Discussion"></a>

## Discussion

Calling this method is the same as setting the [rate](rate.md) to `1.0`.

> **Note**

>  Before macOS 13, iOS 16, tvOS 16, and watchOS 9, you can only call this method on the main thread or queue.

## See Also

### Controlling playback

- [defaultRate](defaultrate.md): A default rate at which to begin playback.
- [pause()](pause%28%29.md): Pauses playback of the current item.
- [rate](rate.md): The current playback rate.
- [rateDidChangeNotification](ratedidchangenotification.md): A notification that a player posts when its rate changes.
- [playheadReachedLiveEdge](ratedidchangereason/playheadreachedliveedge.md): Indicates that the player automatically switched the playback rate from \> 1.0 back to 1.0 when the playhead reached the live edge during live streaming.
- [reversePlaybackReachedStartOfSeekableRange](ratedidchangereason/reverseplaybackreachedstartofseekablerange.md): Indicates that the player automatically switched rate to 1.0 when the reverse playback reached start of seekable range. only for live.

# play (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Begins playback of the current item.

## Declaration

```objectivec
- (void) play;
```

## Mentioned In

- [Controlling the transport behavior of a player](../controlling-the-transport-behavior-of-a-player.md)

<a id="Discussion"></a>

## Discussion

Calling this method is the same as setting the [rate](rate.md) to `1.0`.

> **Note**

>  Before macOS 13, iOS 16, tvOS 16, and watchOS 9, you can only call this method on the main thread or queue.

## See Also

### Controlling playback

- [defaultRate](defaultrate.md): A default rate at which to begin playback.
- [pause](pause%28%29.md): Pauses playback of the current item.
- [rate](rate.md): The current playback rate.
- [AVPlayerRateDidChangeNotification](ratedidchangenotification.md): A notification that a player posts when its rate changes.
- [AVPlayerRateDidChangeReasonPlayheadReachedLiveEdge](ratedidchangereason/playheadreachedliveedge.md): Indicates that the player automatically switched the playback rate from \> 1.0 back to 1.0 when the playhead reached the live edge during live streaming.
- [AVPlayerRateDidChangeReasonReversePlaybackReachedStartOfSeekableRange](ratedidchangereason/reverseplaybackreachedstartofseekablerange.md): Indicates that the player automatically switched rate to 1.0 when the reverse playback reached start of seekable range. only for live.
