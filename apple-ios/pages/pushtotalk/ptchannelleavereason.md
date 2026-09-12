> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/pushtotalk/ptchannelleavereason](https://developer.apple.com/documentation/pushtotalk/ptchannelleavereason)

# PTChannelLeaveReason (Swift)

**Framework:** Push to Talk  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Identifies the type that indicates the leave reason.

## Declaration

```swift
enum PTChannelLeaveReason
```

## Topics

### Leave reasons

- [PTChannelLeaveReason.userRequest](ptchannelleavereason/userrequest.md): A leave reason that indicates a user pressed the leave button in the user interface.
- [PTChannelLeaveReason.developerRequest](ptchannelleavereason/developerrequest.md): A leave reason that indicates the app calls the leave channel method.
- [PTChannelLeaveReason.systemPolicy](ptchannelleavereason/systempolicy.md): A leave reason that indicates a new device restriction is in effect.
- [PTChannelLeaveReason.unknown](ptchannelleavereason/unknown.md): A leave reason that indicates an unknown reason.

### Initializers

- [init(rawValue:)](ptchannelleavereason/init%28rawvalue_%29.md)

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
- [PTChannelJoinReason](ptchanneljoinreason.md): Identifies the type that indicates the join reason.
- [PTChannelTransmitRequestSource](ptchanneltransmitrequestsource.md): Identifies the type that indicates the transmission request source.

# PTChannelLeaveReason (Objective-C)

**Framework:** Push to Talk  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Identifies the type that indicates the leave reason.

## Declaration

```objectivec
enum PTChannelLeaveReason : NSInteger;
```

## Topics

### Leave reasons

- [PTChannelLeaveReasonUserRequest](ptchannelleavereason/userrequest.md): A leave reason that indicates a user pressed the leave button in the user interface.
- [PTChannelLeaveReasonDeveloperRequest](ptchannelleavereason/developerrequest.md): A leave reason that indicates the app calls the leave channel method.
- [PTChannelLeaveReasonSystemPolicy](ptchannelleavereason/systempolicy.md): A leave reason that indicates a new device restriction is in effect.
- [PTChannelLeaveReasonUnknown](ptchannelleavereason/unknown.md): A leave reason that indicates an unknown reason.

## See Also

### Channel management

- [PTChannelManagerDelegate](ptchannelmanagerdelegate.md): A type that represents your life cycle of a channel manager.
- [PTTransmissionMode](pttransmissionmode.md): Identifies the type of audio transmission modes.
- [PTServiceStatus](ptservicestatus.md): Identifies the type that indicates the status of the service.
- [PTChannelJoinReason](ptchanneljoinreason.md): Identifies the type that indicates the join reason.
- [PTChannelTransmitRequestSource](ptchanneltransmitrequestsource.md): Identifies the type that indicates the transmission request source.
