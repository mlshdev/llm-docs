> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/pushtotalk/ptchannelmanagerdelegate/channelmanager(_:failedtobegintransmittinginchannel:error:)](https://developer.apple.com/documentation/pushtotalk/ptchannelmanagerdelegate/channelmanager(_:failedtobegintransmittinginchannel:error:))

# channelManager(\_:failedToBeginTransmittingInChannel:error:) (Swift)

**Framework:** Push to Talk  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Tells the observer that transmission failed to begin.

## Declaration

```swift
optional func channelManager(_ channelManager: PTChannelManager, failedToBeginTransmittingInChannel channelUUID: UUID, error: any Error)
```

## Parameters

- `channelManager`: The channel manager.
- `channelUUID`: The channel identifier.
- `error`: The error that indicates the failure reason.

## Mentioned In

- [Creating a Push to Talk app](../creating-a-push-to-talk-app.md)

## See Also

### Beginning or ending transmission

- [channelManager(\_:channelUUID:didBeginTransmittingFrom:)](channelmanager%28__channeluuid_didbegintransmittingfrom_%29.md): Tells the observer that transmission began.
- [channelManager(\_:channelUUID:didEndTransmittingFrom:)](channelmanager%28__channeluuid_didendtransmittingfrom_%29.md): Tells the observer that transmission ended.
- [channelManager(\_:failedToStopTransmittingInChannel:error:)](channelmanager%28__failedtostoptransmittinginchannel_error_%29.md): Tells the observer that transmission failed to stop.
- [incomingServiceUpdatePush(channelManager:channelUUID:pushPayload:isHighPriority:remainingHighPriorityBudget:completion:)](incomingserviceupdatepush%28channelmanager_channeluuid_pushpayload_ishighpriority_remaininghighprioritybudget_completion_%29.md): Extracts the service update data from the notification’s payload to perform the relevant task for that data.

# channelManager:failedToBeginTransmittingInChannelWithUUID:error: (Objective-C)

**Framework:** Push to Talk  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Tells the observer that transmission failed to begin.

## Declaration

```objectivec
- (void) channelManager:(PTChannelManager *) channelManager failedToBeginTransmittingInChannelWithUUID:(NSUUID *) channelUUID error:(NSError *) error;
```

## Parameters

- `channelManager`: The channel manager.
- `channelUUID`: The channel identifier.
- `error`: The error that indicates the failure reason.

## Mentioned In

- [Creating a Push to Talk app](../creating-a-push-to-talk-app.md)

## See Also

### Beginning or ending transmission

- [channelManager:channelUUID:didBeginTransmittingFromSource:](channelmanager%28__channeluuid_didbegintransmittingfrom_%29.md): Tells the observer that transmission began.
- [channelManager:channelUUID:didEndTransmittingFromSource:](channelmanager%28__channeluuid_didendtransmittingfrom_%29.md): Tells the observer that transmission ended.
- [channelManager:failedToStopTransmittingInChannelWithUUID:error:](channelmanager%28__failedtostoptransmittinginchannel_error_%29.md): Tells the observer that transmission failed to stop.
- [incomingServiceUpdatePushForChannelManager:channelUUID:pushPayload:isHighPriority:remainingHighPriorityBudget:withCompletionHandler:](incomingserviceupdatepush%28channelmanager_channeluuid_pushpayload_ishighpriority_remaininghighprioritybudget_completion_%29.md): Extracts the service update data from the notification’s payload to perform the relevant task for that data.
