> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/defaultrate](https://developer.apple.com/documentation/avfoundation/avplayer/defaultrate)

# defaultRate (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A default rate at which to begin playback.

## Declaration

```swift
nonisolated var defaultRate: Float { get set }
```

## Mentioned In

- [Controlling the transport behavior of a player](../controlling-the-transport-behavior-of-a-player.md)

<a id="Discussion"></a>

## Discussion

This value represents the default playback rate the player uses when you call its [play()](play%28%29.md) method. After playback begins, the rate may differ from the default if you modify the player’s [rate](rate.md) value, such as by calling [pause()](pause%28%29.md).

> **Important**

>  Begin playback by calling the [play()](play%28%29.md) method. Don’t start playback by setting the [rate](rate.md) property value to `1.0`. Instead, use [rate](rate.md) to make immediate, temporary changes to the playback rate. The next time you call the [play()](play%28%29.md) method, the player restores the rate to the value of [defaultRate](defaultrate.md).

## See Also

### Controlling playback

- [play()](play%28%29.md): Begins playback of the current item.
- [pause()](pause%28%29.md): Pauses playback of the current item.
- [rate](rate.md): The current playback rate.
- [rateDidChangeNotification](ratedidchangenotification.md): A notification that a player posts when its rate changes.
- [playheadReachedLiveEdge](ratedidchangereason/playheadreachedliveedge.md): Indicates that the player automatically switched the playback rate from \> 1.0 back to 1.0 when the playhead reached the live edge during live streaming.
- [reversePlaybackReachedStartOfSeekableRange](ratedidchangereason/reverseplaybackreachedstartofseekablerange.md): Indicates that the player automatically switched rate to 1.0 when the reverse playback reached start of seekable range. only for live.

# defaultRate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A default rate at which to begin playback.

## Declaration

```objectivec
@property (nonatomic) float defaultRate;
```

## Mentioned In

- [Controlling the transport behavior of a player](../controlling-the-transport-behavior-of-a-player.md)

<a id="Discussion"></a>

## Discussion

This value represents the default playback rate the player uses when you call its [play](play%28%29.md) method. After playback begins, the rate may differ from the default if you modify the player’s [rate](rate.md) value, such as by calling [pause](pause%28%29.md).

> **Important**

>  Begin playback by calling the [play](play%28%29.md) method. Don’t start playback by setting the [rate](rate.md) property value to `1.0`. Instead, use [rate](rate.md) to make immediate, temporary changes to the playback rate. The next time you call the [play](play%28%29.md) method, the player restores the rate to the value of [defaultRate](defaultrate.md).

## See Also

### Controlling playback

- [play](play%28%29.md): Begins playback of the current item.
- [pause](pause%28%29.md): Pauses playback of the current item.
- [rate](rate.md): The current playback rate.
- [AVPlayerRateDidChangeNotification](ratedidchangenotification.md): A notification that a player posts when its rate changes.
- [AVPlayerRateDidChangeReasonPlayheadReachedLiveEdge](ratedidchangereason/playheadreachedliveedge.md): Indicates that the player automatically switched the playback rate from \> 1.0 back to 1.0 when the playhead reached the live edge during live streaming.
- [AVPlayerRateDidChangeReasonReversePlaybackReachedStartOfSeekableRange](ratedidchangereason/reverseplaybackreachedstartofseekablerange.md): Indicates that the player automatically switched rate to 1.0 when the reverse playback reached start of seekable range. only for live.
