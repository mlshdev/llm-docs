> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/pushtotalk/ptchannelmanagerdelegate/channelmanager(_:failedtostoptransmittinginchannel:error:)](https://developer.apple.com/documentation/pushtotalk/ptchannelmanagerdelegate/channelmanager(_:failedtostoptransmittinginchannel:error:))

# channelManager(\_:failedToStopTransmittingInChannel:error:) (Swift)

**Framework:** Push to Talk  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Tells the observer that transmission failed to stop.

## Declaration

```swift
optional func channelManager(_ channelManager: PTChannelManager, failedToStopTransmittingInChannel channelUUID: UUID, error: any Error)
```

## Parameters

- `channelManager`: The channel manager.
- `channelUUID`: The channel identifier.
- `error`: The error that indicates the failure reason.

## See Also

### Beginning or ending transmission

- [channelManager(\_:channelUUID:didBeginTransmittingFrom:)](channelmanager%28__channeluuid_didbegintransmittingfrom_%29.md): Tells the observer that transmission began.
- [channelManager(\_:channelUUID:didEndTransmittingFrom:)](channelmanager%28__channeluuid_didendtransmittingfrom_%29.md): Tells the observer that transmission ended.
- [channelManager(\_:failedToBeginTransmittingInChannel:error:)](channelmanager%28__failedtobegintransmittinginchannel_error_%29.md): Tells the observer that transmission failed to begin.
- [incomingServiceUpdatePush(channelManager:channelUUID:pushPayload:isHighPriority:remainingHighPriorityBudget:completion:)](incomingserviceupdatepush%28channelmanager_channeluuid_pushpayload_ishighpriority_remaininghighprioritybudget_completion_%29.md): Extracts the service update data from the notification’s payload to perform the relevant task for that data.

# channelManager:failedToStopTransmittingInChannelWithUUID:error: (Objective-C)

**Framework:** Push to Talk  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Tells the observer that transmission failed to stop.

## Declaration

```objectivec
- (void) channelManager:(PTChannelManager *) channelManager failedToStopTransmittingInChannelWithUUID:(NSUUID *) channelUUID error:(NSError *) error;
```

## Parameters

- `channelManager`: The channel manager.
- `channelUUID`: The channel identifier.
- `error`: The error that indicates the failure reason.

## See Also

### Beginning or ending transmission

- [channelManager:channelUUID:didBeginTransmittingFromSource:](channelmanager%28__channeluuid_didbegintransmittingfrom_%29.md): Tells the observer that transmission began.
- [channelManager:channelUUID:didEndTransmittingFromSource:](channelmanager%28__channeluuid_didendtransmittingfrom_%29.md): Tells the observer that transmission ended.
- [channelManager:failedToBeginTransmittingInChannelWithUUID:error:](channelmanager%28__failedtobegintransmittinginchannel_error_%29.md): Tells the observer that transmission failed to begin.
- [incomingServiceUpdatePushForChannelManager:channelUUID:pushPayload:isHighPriority:remainingHighPriorityBudget:withCompletionHandler:](incomingserviceupdatepush%28channelmanager_channeluuid_pushpayload_ishighpriority_remaininghighprioritybudget_completion_%29.md): Extracts the service update data from the notification’s payload to perform the relevant task for that data.
