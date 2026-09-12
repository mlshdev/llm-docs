> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/pause()](https://developer.apple.com/documentation/avfoundation/avplayer/pause())

# pause() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Pauses playback of the current item.

## Declaration

```swift
nonisolated func pause()
```

## Mentioned In

- [Controlling the transport behavior of a player](../controlling-the-transport-behavior-of-a-player.md)

<a id="Discussion"></a>

## Discussion

Calling this method is the same as setting the [rate](rate.md) to `0.0`.

## See Also

### Controlling playback

- [defaultRate](defaultrate.md): A default rate at which to begin playback.
- [play()](play%28%29.md): Begins playback of the current item.
- [rate](rate.md): The current playback rate.
- [rateDidChangeNotification](ratedidchangenotification.md): A notification that a player posts when its rate changes.
- [playheadReachedLiveEdge](ratedidchangereason/playheadreachedliveedge.md): Indicates that the player automatically switched the playback rate from \> 1.0 back to 1.0 when the playhead reached the live edge during live streaming.
- [reversePlaybackReachedStartOfSeekableRange](ratedidchangereason/reverseplaybackreachedstartofseekablerange.md): Indicates that the player automatically switched rate to 1.0 when the reverse playback reached start of seekable range. only for live.

# pause (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Pauses playback of the current item.

## Declaration

```objectivec
- (void) pause;
```

## Mentioned In

- [Controlling the transport behavior of a player](../controlling-the-transport-behavior-of-a-player.md)

<a id="Discussion"></a>

## Discussion

Calling this method is the same as setting the [rate](rate.md) to `0.0`.

## See Also

### Controlling playback

- [defaultRate](defaultrate.md): A default rate at which to begin playback.
- [play](play%28%29.md): Begins playback of the current item.
- [rate](rate.md): The current playback rate.
- [AVPlayerRateDidChangeNotification](ratedidchangenotification.md): A notification that a player posts when its rate changes.
- [AVPlayerRateDidChangeReasonPlayheadReachedLiveEdge](ratedidchangereason/playheadreachedliveedge.md): Indicates that the player automatically switched the playback rate from \> 1.0 back to 1.0 when the playhead reached the live edge during live streaming.
- [AVPlayerRateDidChangeReasonReversePlaybackReachedStartOfSeekableRange](ratedidchangereason/reverseplaybackreachedstartofseekablerange.md): Indicates that the player automatically switched rate to 1.0 when the reverse playback reached start of seekable range. only for live.
