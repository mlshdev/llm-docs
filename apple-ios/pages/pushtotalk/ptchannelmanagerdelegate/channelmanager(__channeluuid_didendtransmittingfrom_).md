> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/pushtotalk/ptchannelmanagerdelegate/channelmanager(_:channeluuid:didendtransmittingfrom:)](https://developer.apple.com/documentation/pushtotalk/ptchannelmanagerdelegate/channelmanager(_:channeluuid:didendtransmittingfrom:))

# channelManager(\_:channelUUID:didEndTransmittingFrom:) (Swift)

**Framework:** Push to Talk  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Tells the observer that transmission ended.

## Declaration

```swift
func channelManager(_ channelManager: PTChannelManager, channelUUID: UUID, didEndTransmittingFrom source: PTChannelTransmitRequestSource)
```

## Parameters

- `channelManager`: The channel manager.
- `channelUUID`: The channel identifier.
- `source`: The transmission request source.

## Mentioned In

- [Creating a Push to Talk app](../creating-a-push-to-talk-app.md)

<a id="Discussion"></a>

## Discussion

The system calls this method when the user stops pressing the talk button in the user interface, a programmatic transmit ends, or transmission ends from a hands-free accessory button release.

## See Also

### Beginning or ending transmission

- [channelManager(\_:channelUUID:didBeginTransmittingFrom:)](channelmanager%28__channeluuid_didbegintransmittingfrom_%29.md): Tells the observer that transmission began.
- [channelManager(\_:failedToBeginTransmittingInChannel:error:)](channelmanager%28__failedtobegintransmittinginchannel_error_%29.md): Tells the observer that transmission failed to begin.
- [channelManager(\_:failedToStopTransmittingInChannel:error:)](channelmanager%28__failedtostoptransmittinginchannel_error_%29.md): Tells the observer that transmission failed to stop.
- [incomingServiceUpdatePush(channelManager:channelUUID:pushPayload:isHighPriority:remainingHighPriorityBudget:completion:)](incomingserviceupdatepush%28channelmanager_channeluuid_pushpayload_ishighpriority_remaininghighprioritybudget_completion_%29.md): Extracts the service update data from the notification’s payload to perform the relevant task for that data.

# channelManager:channelUUID:didEndTransmittingFromSource: (Objective-C)

**Framework:** Push to Talk  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Tells the observer that transmission ended.

## Declaration

```objectivec
- (void) channelManager:(PTChannelManager *) channelManager channelUUID:(NSUUID *) channelUUID didEndTransmittingFromSource:(PTChannelTransmitRequestSource) source;
```

## Parameters

- `channelManager`: The channel manager.
- `channelUUID`: The channel identifier.
- `source`: The transmission request source.

## Mentioned In

- [Creating a Push to Talk app](../creating-a-push-to-talk-app.md)

<a id="Discussion"></a>

## Discussion

The system calls this method when the user stops pressing the talk button in the user interface, a programmatic transmit ends, or transmission ends from a hands-free accessory button release.

## See Also

### Beginning or ending transmission

- [channelManager:channelUUID:didBeginTransmittingFromSource:](channelmanager%28__channeluuid_didbegintransmittingfrom_%29.md): Tells the observer that transmission began.
- [channelManager:failedToBeginTransmittingInChannelWithUUID:error:](channelmanager%28__failedtobegintransmittinginchannel_error_%29.md): Tells the observer that transmission failed to begin.
- [channelManager:failedToStopTransmittingInChannelWithUUID:error:](channelmanager%28__failedtostoptransmittinginchannel_error_%29.md): Tells the observer that transmission failed to stop.
- [incomingServiceUpdatePushForChannelManager:channelUUID:pushPayload:isHighPriority:remainingHighPriorityBudget:withCompletionHandler:](incomingserviceupdatepush%28channelmanager_channeluuid_pushpayload_ishighpriority_remaininghighprioritybudget_completion_%29.md): Extracts the service update data from the notification’s payload to perform the relevant task for that data.
