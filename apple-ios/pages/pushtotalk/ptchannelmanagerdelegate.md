> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/pushtotalk/ptchannelmanagerdelegate](https://developer.apple.com/documentation/pushtotalk/ptchannelmanagerdelegate)

# PTChannelManagerDelegate (Swift)

**Framework:** Push to Talk  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

A type that represents your life cycle of a channel manager.

## Declaration

```swift
protocol PTChannelManagerDelegate : NSObjectProtocol
```

## Topics

### Beginning or ending transmission

- [channelManager(\_:channelUUID:didBeginTransmittingFrom:)](ptchannelmanagerdelegate/channelmanager%28__channeluuid_didbegintransmittingfrom_%29.md): Tells the observer that transmission began.
- [channelManager(\_:channelUUID:didEndTransmittingFrom:)](ptchannelmanagerdelegate/channelmanager%28__channeluuid_didendtransmittingfrom_%29.md): Tells the observer that transmission ended.
- [channelManager(\_:failedToBeginTransmittingInChannel:error:)](ptchannelmanagerdelegate/channelmanager%28__failedtobegintransmittinginchannel_error_%29.md): Tells the observer that transmission failed to begin.
- [channelManager(\_:failedToStopTransmittingInChannel:error:)](ptchannelmanagerdelegate/channelmanager%28__failedtostoptransmittinginchannel_error_%29.md): Tells the observer that transmission failed to stop.
- [incomingServiceUpdatePush(channelManager:channelUUID:pushPayload:isHighPriority:remainingHighPriorityBudget:completion:)](ptchannelmanagerdelegate/incomingserviceupdatepush%28channelmanager_channeluuid_pushpayload_ishighpriority_remaininghighprioritybudget_completion_%29.md): Extracts the service update data from the notification’s payload to perform the relevant task for that data.

### Activating and deactivating the audio session

- [channelManager(\_:didActivate:)](ptchannelmanagerdelegate/channelmanager%28__didactivate_%29.md): Tells the observer the audio session activated.
- [channelManager(\_:didDeactivate:)](ptchannelmanagerdelegate/channelmanager%28__diddeactivate_%29.md): Tells the observer the audio session deactivated.

### Joining and leaving a channel

- [channelManager(\_:didJoinChannel:reason:)](ptchannelmanagerdelegate/channelmanager%28__didjoinchannel_reason_%29.md): Tells the observer that the app successfully joined a Push to Talk channel.
- [channelManager(\_:didLeaveChannel:reason:)](ptchannelmanagerdelegate/channelmanager%28__didleavechannel_reason_%29.md): Tells the observer that the app left a Push to Talk channel.
- [channelManager(\_:failedToJoinChannel:error:)](ptchannelmanagerdelegate/channelmanager%28__failedtojoinchannel_error_%29.md): Tells the observer that the app failed to join a Push to Talk channel.
- [channelManager(\_:failedToLeaveChannel:error:)](ptchannelmanagerdelegate/channelmanager%28__failedtoleavechannel_error_%29.md): Tells the observer that the app failed to leave a Push to Talk channel.

### Getting a push token

- [channelManager(\_:receivedEphemeralPushToken:)](ptchannelmanagerdelegate/channelmanager%28__receivedephemeralpushtoken_%29.md): Tells the observer that the app received a push token after you create a channel manager.

### Handling the push result

- [incomingPushResult(channelManager:channelUUID:pushPayload:)](ptchannelmanagerdelegate/incomingpushresult%28channelmanager_channeluuid_pushpayload_%29.md): Tells the observer that the app has a push available to handle.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Channel management

- [PTTransmissionMode](pttransmissionmode.md): Identifies the type of audio transmission modes.
- [PTServiceStatus](ptservicestatus.md): Identifies the type that indicates the status of the service.
- [PTChannelJoinReason](ptchanneljoinreason.md): Identifies the type that indicates the join reason.
- [PTChannelLeaveReason](ptchannelleavereason.md): Identifies the type that indicates the leave reason.
- [PTChannelTransmitRequestSource](ptchanneltransmitrequestsource.md): Identifies the type that indicates the transmission request source.

# PTChannelManagerDelegate (Objective-C)

**Framework:** Push to Talk  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

A type that represents your life cycle of a channel manager.

## Declaration

```objectivec
@protocol PTChannelManagerDelegate <NSObject>
```

## Topics

### Beginning or ending transmission

- [channelManager:channelUUID:didBeginTransmittingFromSource:](ptchannelmanagerdelegate/channelmanager%28__channeluuid_didbegintransmittingfrom_%29.md): Tells the observer that transmission began.
- [channelManager:channelUUID:didEndTransmittingFromSource:](ptchannelmanagerdelegate/channelmanager%28__channeluuid_didendtransmittingfrom_%29.md): Tells the observer that transmission ended.
- [channelManager:failedToBeginTransmittingInChannelWithUUID:error:](ptchannelmanagerdelegate/channelmanager%28__failedtobegintransmittinginchannel_error_%29.md): Tells the observer that transmission failed to begin.
- [channelManager:failedToStopTransmittingInChannelWithUUID:error:](ptchannelmanagerdelegate/channelmanager%28__failedtostoptransmittinginchannel_error_%29.md): Tells the observer that transmission failed to stop.
- [incomingServiceUpdatePushForChannelManager:channelUUID:pushPayload:isHighPriority:remainingHighPriorityBudget:withCompletionHandler:](ptchannelmanagerdelegate/incomingserviceupdatepush%28channelmanager_channeluuid_pushpayload_ishighpriority_remaininghighprioritybudget_completion_%29.md): Extracts the service update data from the notification’s payload to perform the relevant task for that data.

### Activating and deactivating the audio session

- [channelManager:didActivateAudioSession:](ptchannelmanagerdelegate/channelmanager%28__didactivate_%29.md): Tells the observer the audio session activated.
- [channelManager:didDeactivateAudioSession:](ptchannelmanagerdelegate/channelmanager%28__diddeactivate_%29.md): Tells the observer the audio session deactivated.

### Joining and leaving a channel

- [channelManager:didJoinChannelWithUUID:reason:](ptchannelmanagerdelegate/channelmanager%28__didjoinchannel_reason_%29.md): Tells the observer that the app successfully joined a Push to Talk channel.
- [channelManager:didLeaveChannelWithUUID:reason:](ptchannelmanagerdelegate/channelmanager%28__didleavechannel_reason_%29.md): Tells the observer that the app left a Push to Talk channel.
- [channelManager:failedToJoinChannelWithUUID:error:](ptchannelmanagerdelegate/channelmanager%28__failedtojoinchannel_error_%29.md): Tells the observer that the app failed to join a Push to Talk channel.
- [channelManager:failedToLeaveChannelWithUUID:error:](ptchannelmanagerdelegate/channelmanager%28__failedtoleavechannel_error_%29.md): Tells the observer that the app failed to leave a Push to Talk channel.

### Getting a push token

- [channelManager:receivedEphemeralPushToken:](ptchannelmanagerdelegate/channelmanager%28__receivedephemeralpushtoken_%29.md): Tells the observer that the app received a push token after you create a channel manager.

### Handling the push result

- [incomingPushResultForChannelManager:channelUUID:pushPayload:](ptchannelmanagerdelegate/incomingpushresult%28channelmanager_channeluuid_pushpayload_%29.md): Tells the observer that the app has a push available to handle.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Channel management

- [PTTransmissionMode](pttransmissionmode.md): Identifies the type of audio transmission modes.
- [PTServiceStatus](ptservicestatus.md): Identifies the type that indicates the status of the service.
- [PTChannelJoinReason](ptchanneljoinreason.md): Identifies the type that indicates the join reason.
- [PTChannelLeaveReason](ptchannelleavereason.md): Identifies the type that indicates the leave reason.
- [PTChannelTransmitRequestSource](ptchanneltransmitrequestsource.md): Identifies the type that indicates the transmission request source.
