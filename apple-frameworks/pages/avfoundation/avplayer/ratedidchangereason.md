> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayer/ratedidchangereason](https://developer.apple.com/documentation/avfoundation/avplayer/ratedidchangereason)

# AVPlayer.RateDidChangeReason (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that represents a rate change reason.

## Declaration

```swift
struct RateDidChangeReason
```

## Topics

### Initializers

- [init(rawValue:)](ratedidchangereason/init%28rawvalue_%29.md): Creates a reason with a string value.

### Rate change reasons

- [appBackgrounded](ratedidchangereason/appbackgrounded.md): An app transitions to the background.
- [audioSessionInterrupted](ratedidchangereason/audiosessioninterrupted.md): The system interrupts the app’s audio session.
- [setRateCalled](ratedidchangereason/setratecalled.md): An app makes a call to set the player’s rate.
- [setRateFailed](ratedidchangereason/setratefailed.md): An attempt to change the player’s rate fails.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### User information keys

- [rateDidChangeOriginatingParticipantKey](ratedidchangeoriginatingparticipantkey.md): A key to retrieve the identifier of the participant that originates the rate change.
- [rateDidChangeReasonKey](ratedidchangereasonkey.md): A key to retrieve the reason for the rate change.

# AVPlayerRateDidChangeReason (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that represents a rate change reason.

## Declaration

```objectivec
typedef NSString * AVPlayerRateDidChangeReason;
```

## Topics

### Rate change reasons

- [AVPlayerRateDidChangeReasonAppBackgrounded](ratedidchangereason/appbackgrounded.md): An app transitions to the background.
- [AVPlayerRateDidChangeReasonAudioSessionInterrupted](ratedidchangereason/audiosessioninterrupted.md): The system interrupts the app’s audio session.
- [AVPlayerRateDidChangeReasonSetRateCalled](ratedidchangereason/setratecalled.md): An app makes a call to set the player’s rate.
- [AVPlayerRateDidChangeReasonSetRateFailed](ratedidchangereason/setratefailed.md): An attempt to change the player’s rate fails.

## See Also

### User information keys

- [AVPlayerRateDidChangeOriginatingParticipantKey](ratedidchangeoriginatingparticipantkey.md): A key to retrieve the identifier of the participant that originates the rate change.
- [AVPlayerRateDidChangeReasonKey](ratedidchangereasonkey.md): A key to retrieve the reason for the rate change.
