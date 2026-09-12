> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/pushtotalk/pttransmissionmode](https://developer.apple.com/documentation/pushtotalk/pttransmissionmode)

# PTTransmissionMode (Swift)

**Framework:** Push to Talk  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Identifies the type of audio transmission modes.

## Declaration

```swift
enum PTTransmissionMode
```

## Topics

### Modes

- [PTTransmissionMode.fullDuplex](pttransmissionmode/fullduplex.md): A type that indicates a participant can simultaneously receive and transmit audio.
- [PTTransmissionMode.halfDuplex](pttransmissionmode/halfduplex.md): A type that indicates a participant can’t simultaneously receive and transmit audio.
- [PTTransmissionMode.listenOnly](pttransmissionmode/listenonly.md): A type that indicates a participant can only receive audio.

### Initializers

- [init(rawValue:)](pttransmissionmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Channel management

- [PTChannelManagerDelegate](ptchannelmanagerdelegate.md): A type that represents your life cycle of a channel manager.
- [PTServiceStatus](ptservicestatus.md): Identifies the type that indicates the status of the service.
- [PTChannelJoinReason](ptchanneljoinreason.md): Identifies the type that indicates the join reason.
- [PTChannelLeaveReason](ptchannelleavereason.md): Identifies the type that indicates the leave reason.
- [PTChannelTransmitRequestSource](ptchanneltransmitrequestsource.md): Identifies the type that indicates the transmission request source.

# PTTransmissionMode (Objective-C)

**Framework:** Push to Talk  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Identifies the type of audio transmission modes.

## Declaration

```objectivec
enum PTTransmissionMode : NSInteger;
```

## Topics

### Modes

- [PTTransmissionModeFullDuplex](pttransmissionmode/fullduplex.md): A type that indicates a participant can simultaneously receive and transmit audio.
- [PTTransmissionModeHalfDuplex](pttransmissionmode/halfduplex.md): A type that indicates a participant can’t simultaneously receive and transmit audio.
- [PTTransmissionModeListenOnly](pttransmissionmode/listenonly.md): A type that indicates a participant can only receive audio.

## See Also

### Channel management

- [PTChannelManagerDelegate](ptchannelmanagerdelegate.md): A type that represents your life cycle of a channel manager.
- [PTServiceStatus](ptservicestatus.md): Identifies the type that indicates the status of the service.
- [PTChannelJoinReason](ptchanneljoinreason.md): Identifies the type that indicates the join reason.
- [PTChannelLeaveReason](ptchannelleavereason.md): Identifies the type that indicates the leave reason.
- [PTChannelTransmitRequestSource](ptchanneltransmitrequestsource.md): Identifies the type that indicates the transmission request source.
