> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/pushtotalk/ptchanneltransmitrequestsource](https://developer.apple.com/documentation/pushtotalk/ptchanneltransmitrequestsource)

# PTChannelTransmitRequestSource (Swift)

**Framework:** Push to Talk  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Identifies the type that indicates the transmission request source.

## Declaration

```swift
enum PTChannelTransmitRequestSource
```

## Topics

### Transmission sources

- [PTChannelTransmitRequestSource.userRequest](ptchanneltransmitrequestsource/userrequest.md): A transmission request that indicates the user pressed the transmit button in the system user interface.
- [PTChannelTransmitRequestSource.developerRequest](ptchanneltransmitrequestsource/developerrequest.md): A transmission request that indicates the app calls the begin transmission method.
- [PTChannelTransmitRequestSource.handsfreeButton](ptchanneltransmitrequestsource/handsfreebutton.md): A transmission request that indicates a user pressed a button on a hands-free device.
- [PTChannelTransmitRequestSource.unknown](ptchanneltransmitrequestsource/unknown.md): A transmission request that indicates an unknown reason.

### Initializers

- [init(rawValue:)](ptchanneltransmitrequestsource/init%28rawvalue_%29.md)

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
- [PTChannelLeaveReason](ptchannelleavereason.md): Identifies the type that indicates the leave reason.

# PTChannelTransmitRequestSource (Objective-C)

**Framework:** Push to Talk  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Identifies the type that indicates the transmission request source.

## Declaration

```objectivec
enum PTChannelTransmitRequestSource : NSInteger;
```

## Topics

### Transmission sources

- [PTChannelTransmitRequestSourceUserRequest](ptchanneltransmitrequestsource/userrequest.md): A transmission request that indicates the user pressed the transmit button in the system user interface.
- [PTChannelTransmitRequestSourceDeveloperRequest](ptchanneltransmitrequestsource/developerrequest.md): A transmission request that indicates the app calls the begin transmission method.
- [PTChannelTransmitRequestSourceHandsfreeButton](ptchanneltransmitrequestsource/handsfreebutton.md): A transmission request that indicates a user pressed a button on a hands-free device.
- [PTChannelTransmitRequestSourceUnknown](ptchanneltransmitrequestsource/unknown.md): A transmission request that indicates an unknown reason.

## See Also

### Channel management

- [PTChannelManagerDelegate](ptchannelmanagerdelegate.md): A type that represents your life cycle of a channel manager.
- [PTTransmissionMode](pttransmissionmode.md): Identifies the type of audio transmission modes.
- [PTServiceStatus](ptservicestatus.md): Identifies the type that indicates the status of the service.
- [PTChannelJoinReason](ptchanneljoinreason.md): Identifies the type that indicates the join reason.
- [PTChannelLeaveReason](ptchannelleavereason.md): Identifies the type that indicates the leave reason.
