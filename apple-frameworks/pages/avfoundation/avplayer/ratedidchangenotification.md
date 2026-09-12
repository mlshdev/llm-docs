> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/ratedidchangenotification](https://developer.apple.com/documentation/avfoundation/avplayer/ratedidchangenotification)

# rateDidChangeNotification (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A notification that a player posts when its rate changes.

## Declaration

```swift
class let rateDidChangeNotification: NSNotification.Name
```

## Mentioned In

- [Controlling the transport behavior of a player](../controlling-the-transport-behavior-of-a-player.md)

<a id="Discussion"></a>

## Discussion

Observing this notification is similar to key-value observing the rate property, except the notification provides additional information about the rate change in the user information dictionary.

## Topics

### User information keys

- [rateDidChangeOriginatingParticipantKey](ratedidchangeoriginatingparticipantkey.md): A key to retrieve the identifier of the participant that originates the rate change.
- [rateDidChangeReasonKey](ratedidchangereasonkey.md): A key to retrieve the reason for the rate change.
- [AVPlayer.RateDidChangeReason](ratedidchangereason.md): A structure that represents a rate change reason.

## See Also

### Controlling playback

- [defaultRate](defaultrate.md): A default rate at which to begin playback.
- [play()](play%28%29.md): Begins playback of the current item.
- [pause()](pause%28%29.md): Pauses playback of the current item.
- [rate](rate.md): The current playback rate.
- [playheadReachedLiveEdge](ratedidchangereason/playheadreachedliveedge.md): Indicates that the player automatically switched the playback rate from \> 1.0 back to 1.0 when the playhead reached the live edge during live streaming.
- [reversePlaybackReachedStartOfSeekableRange](ratedidchangereason/reverseplaybackreachedstartofseekablerange.md): Indicates that the player automatically switched rate to 1.0 when the reverse playback reached start of seekable range. only for live.

# AVPlayerRateDidChangeNotification (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A notification that a player posts when its rate changes.

## Declaration

```objectivec
extern NSNotificationName const AVPlayerRateDidChangeNotification;
```

## Mentioned In

- [Controlling the transport behavior of a player](../controlling-the-transport-behavior-of-a-player.md)

<a id="Discussion"></a>

## Discussion

Observing this notification is similar to key-value observing the rate property, except the notification provides additional information about the rate change in the user information dictionary.

## Topics

### User information keys

- [AVPlayerRateDidChangeOriginatingParticipantKey](ratedidchangeoriginatingparticipantkey.md): A key to retrieve the identifier of the participant that originates the rate change.
- [AVPlayerRateDidChangeReasonKey](ratedidchangereasonkey.md): A key to retrieve the reason for the rate change.
- [AVPlayerRateDidChangeReason](ratedidchangereason.md): A structure that represents a rate change reason.

## See Also

### Controlling playback

- [defaultRate](defaultrate.md): A default rate at which to begin playback.
- [play](play%28%29.md): Begins playback of the current item.
- [pause](pause%28%29.md): Pauses playback of the current item.
- [rate](rate.md): The current playback rate.
- [AVPlayerRateDidChangeReasonPlayheadReachedLiveEdge](ratedidchangereason/playheadreachedliveedge.md): Indicates that the player automatically switched the playback rate from \> 1.0 back to 1.0 when the playhead reached the live edge during live streaming.
- [AVPlayerRateDidChangeReasonReversePlaybackReachedStartOfSeekableRange](ratedidchangereason/reverseplaybackreachedstartofseekablerange.md): Indicates that the player automatically switched rate to 1.0 when the reverse playback reached start of seekable range. only for live.
