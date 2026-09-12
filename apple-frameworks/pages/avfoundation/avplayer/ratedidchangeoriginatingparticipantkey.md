> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/ratedidchangeoriginatingparticipantkey](https://developer.apple.com/documentation/avfoundation/avplayer/ratedidchangeoriginatingparticipantkey)

# rateDidChangeOriginatingParticipantKey (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A key to retrieve the identifier of the participant that originates the rate change.

## Declaration

```swift
class let rateDidChangeOriginatingParticipantKey: String
```

<a id="Discussion"></a>

## Discussion

The associated value is a UUID of a participant in the playback coordinator’s [otherParticipants](../avplaybackcoordinator/otherparticipants.md) array.

## See Also

### User information keys

- [rateDidChangeReasonKey](ratedidchangereasonkey.md): A key to retrieve the reason for the rate change.
- [AVPlayer.RateDidChangeReason](ratedidchangereason.md): A structure that represents a rate change reason.

# AVPlayerRateDidChangeOriginatingParticipantKey (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A key to retrieve the identifier of the participant that originates the rate change.

## Declaration

```objectivec
extern NSString * const AVPlayerRateDidChangeOriginatingParticipantKey;
```

<a id="Discussion"></a>

## Discussion

The associated value is a UUID of a participant in the playback coordinator’s [otherParticipants](../avplaybackcoordinator/otherparticipants.md) array.

## See Also

### User information keys

- [AVPlayerRateDidChangeReasonKey](ratedidchangereasonkey.md): A key to retrieve the reason for the rate change.
- [AVPlayerRateDidChangeReason](ratedidchangereason.md): A structure that represents a rate change reason.
