> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/pushtotalk/ptchanneljoinreason](https://developer.apple.com/documentation/pushtotalk/ptchanneljoinreason)

# PTChannelJoinReason (Swift)

**Framework:** Push to Talk  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Identifies the type that indicates the join reason.

## Declaration

```swift
enum PTChannelJoinReason
```

## Topics

### Join reasons

- [PTChannelJoinReason.developerRequest](ptchanneljoinreason/developerrequest.md): A join reason that indicates the app calls the join channel method while in the foreground.
- [PTChannelJoinReason.channelRestoration](ptchanneljoinreason/channelrestoration.md): A join reason that indicates the app rejoined a channel through channel restoration.

### Initializers

- [init(rawValue:)](ptchanneljoinreason/init%28rawvalue_%29.md)

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
- [PTTransmissionMode](pttransmissionmode.md): Identifies the type of audio transmission modes.
- [PTServiceStatus](ptservicestatus.md): Identifies the type that indicates the status of the service.
- [PTChannelLeaveReason](ptchannelleavereason.md): Identifies the type that indicates the leave reason.
- [PTChannelTransmitRequestSource](ptchanneltransmitrequestsource.md): Identifies the type that indicates the transmission request source.

# PTChannelJoinReason (Objective-C)

**Framework:** Push to Talk  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Identifies the type that indicates the join reason.

## Declaration

```objectivec
enum PTChannelJoinReason : NSInteger;
```

## Topics

### Join reasons

- [PTChannelJoinReasonDeveloperRequest](ptchanneljoinreason/developerrequest.md): A join reason that indicates the app calls the join channel method while in the foreground.
- [PTChannelJoinReasonChannelRestoration](ptchanneljoinreason/channelrestoration.md): A join reason that indicates the app rejoined a channel through channel restoration.

## See Also

### Channel management

- [PTChannelManagerDelegate](ptchannelmanagerdelegate.md): A type that represents your life cycle of a channel manager.
- [PTTransmissionMode](pttransmissionmode.md): Identifies the type of audio transmission modes.
- [PTServiceStatus](ptservicestatus.md): Identifies the type that indicates the status of the service.
- [PTChannelLeaveReason](ptchannelleavereason.md): Identifies the type that indicates the leave reason.
- [PTChannelTransmitRequestSource](ptchanneltransmitrequestsource.md): Identifies the type that indicates the transmission request source.
