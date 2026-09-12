> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/pushtotalk/ptservicestatus](https://developer.apple.com/documentation/pushtotalk/ptservicestatus)

# PTServiceStatus (Swift)

**Framework:** Push to Talk  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Identifies the type that indicates the status of the service.

## Declaration

```swift
enum PTServiceStatus
```

## Topics

### Statuses

- [PTServiceStatus.ready](ptservicestatus/ready.md): A type that indicates the service is available for use.
- [PTServiceStatus.connecting](ptservicestatus/connecting.md): A type that indicates the service is attempting to establish a connection.
- [PTServiceStatus.unavailable](ptservicestatus/unavailable.md): A type that indicates the service is unavailable and needs to be re-established.

### Initializers

- [init(rawValue:)](ptservicestatus/init%28rawvalue_%29.md)

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
- [PTChannelJoinReason](ptchanneljoinreason.md): Identifies the type that indicates the join reason.
- [PTChannelLeaveReason](ptchannelleavereason.md): Identifies the type that indicates the leave reason.
- [PTChannelTransmitRequestSource](ptchanneltransmitrequestsource.md): Identifies the type that indicates the transmission request source.

# PTServiceStatus (Objective-C)

**Framework:** Push to Talk  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Identifies the type that indicates the status of the service.

## Declaration

```objectivec
enum PTServiceStatus : NSInteger;
```

## Topics

### Statuses

- [PTServiceStatusReady](ptservicestatus/ready.md): A type that indicates the service is available for use.
- [PTServiceStatusConnecting](ptservicestatus/connecting.md): A type that indicates the service is attempting to establish a connection.
- [PTServiceStatusUnavailable](ptservicestatus/unavailable.md): A type that indicates the service is unavailable and needs to be re-established.

## See Also

### Channel management

- [PTChannelManagerDelegate](ptchannelmanagerdelegate.md): A type that represents your life cycle of a channel manager.
- [PTTransmissionMode](pttransmissionmode.md): Identifies the type of audio transmission modes.
- [PTChannelJoinReason](ptchanneljoinreason.md): Identifies the type that indicates the join reason.
- [PTChannelLeaveReason](ptchannelleavereason.md): Identifies the type that indicates the leave reason.
- [PTChannelTransmitRequestSource](ptchanneltransmitrequestsource.md): Identifies the type that indicates the transmission request source.
