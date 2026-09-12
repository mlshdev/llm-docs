> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/rate](https://developer.apple.com/documentation/avfoundation/avplayer/rate)

# rate (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The current playback rate.

## Declaration

```swift
nonisolated var rate: Float { get set }
```

## Mentioned In

- [Controlling the transport behavior of a player](../controlling-the-transport-behavior-of-a-player.md)
- [Observing playback state in SwiftUI](../observing-playback-state-in-swiftui.md)

## See Also

### Controlling playback

- [defaultRate](defaultrate.md): A default rate at which to begin playback.
- [play()](play%28%29.md): Begins playback of the current item.
- [pause()](pause%28%29.md): Pauses playback of the current item.
- [rateDidChangeNotification](ratedidchangenotification.md): A notification that a player posts when its rate changes.
- [playheadReachedLiveEdge](ratedidchangereason/playheadreachedliveedge.md): Indicates that the player automatically switched the playback rate from \> 1.0 back to 1.0 when the playhead reached the live edge during live streaming.
- [reversePlaybackReachedStartOfSeekableRange](ratedidchangereason/reverseplaybackreachedstartofseekablerange.md): Indicates that the player automatically switched rate to 1.0 when the reverse playback reached start of seekable range. only for live.

# rate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The current playback rate.

## Declaration

```objectivec
@property float rate;
```

## Mentioned In

- [Controlling the transport behavior of a player](../controlling-the-transport-behavior-of-a-player.md)
- [Observing playback state in SwiftUI](../observing-playback-state-in-swiftui.md)

## See Also

### Controlling playback

- [defaultRate](defaultrate.md): A default rate at which to begin playback.
- [play](play%28%29.md): Begins playback of the current item.
- [pause](pause%28%29.md): Pauses playback of the current item.
- [AVPlayerRateDidChangeNotification](ratedidchangenotification.md): A notification that a player posts when its rate changes.
- [AVPlayerRateDidChangeReasonPlayheadReachedLiveEdge](ratedidchangereason/playheadreachedliveedge.md): Indicates that the player automatically switched the playback rate from \> 1.0 back to 1.0 when the playhead reached the live edge during live streaming.
- [AVPlayerRateDidChangeReasonReversePlaybackReachedStartOfSeekableRange](ratedidchangereason/reverseplaybackreachedstartofseekablerange.md): Indicates that the player automatically switched rate to 1.0 when the reverse playback reached start of seekable range. only for live.
