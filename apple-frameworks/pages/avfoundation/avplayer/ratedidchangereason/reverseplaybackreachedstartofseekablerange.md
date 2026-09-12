> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/ratedidchangereason/reverseplaybackreachedstartofseekablerange](https://developer.apple.com/documentation/avfoundation/avplayer/ratedidchangereason/reverseplaybackreachedstartofseekablerange)

# reversePlaybackReachedStartOfSeekableRange (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · tvOS 26.4+ · visionOS 26.4+ · watchOS 26.4+

Indicates that the player automatically switched rate to 1.0 when the reverse playback reached start of seekable range. only for live.

## Declaration

```swift
static let reversePlaybackReachedStartOfSeekableRange: AVPlayer.RateDidChangeReason
```

## See Also

### Controlling playback

- [defaultRate](../defaultrate.md): A default rate at which to begin playback.
- [play()](../play%28%29.md): Begins playback of the current item.
- [pause()](../pause%28%29.md): Pauses playback of the current item.
- [rate](../rate.md): The current playback rate.
- [rateDidChangeNotification](../ratedidchangenotification.md): A notification that a player posts when its rate changes.
- [playheadReachedLiveEdge](playheadreachedliveedge.md): Indicates that the player automatically switched the playback rate from \> 1.0 back to 1.0 when the playhead reached the live edge during live streaming.

# AVPlayerRateDidChangeReasonReversePlaybackReachedStartOfSeekableRange (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · tvOS 26.4+ · visionOS 26.4+ · watchOS 26.4+

Indicates that the player automatically switched rate to 1.0 when the reverse playback reached start of seekable range. only for live.

## Declaration

```objectivec
extern AVPlayerRateDidChangeReason const AVPlayerRateDidChangeReasonReversePlaybackReachedStartOfSeekableRange;
```

## See Also

### Controlling playback

- [defaultRate](../defaultrate.md): A default rate at which to begin playback.
- [play](../play%28%29.md): Begins playback of the current item.
- [pause](../pause%28%29.md): Pauses playback of the current item.
- [rate](../rate.md): The current playback rate.
- [AVPlayerRateDidChangeNotification](../ratedidchangenotification.md): A notification that a player posts when its rate changes.
- [AVPlayerRateDidChangeReasonPlayheadReachedLiveEdge](playheadreachedliveedge.md): Indicates that the player automatically switched the playback rate from \> 1.0 back to 1.0 when the playhead reached the live edge during live streaming.
