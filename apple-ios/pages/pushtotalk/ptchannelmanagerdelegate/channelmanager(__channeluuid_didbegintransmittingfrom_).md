> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/pushtotalk/ptchannelmanagerdelegate/channelmanager(_:channeluuid:didbegintransmittingfrom:)](https://developer.apple.com/documentation/pushtotalk/ptchannelmanagerdelegate/channelmanager(_:channeluuid:didbegintransmittingfrom:))

# channelManager(\_:channelUUID:didBeginTransmittingFrom:) (Swift)

**Framework:** Push to Talk  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Tells the observer that transmission began.

## Declaration

```swift
func channelManager(_ channelManager: PTChannelManager, channelUUID: UUID, didBeginTransmittingFrom source: PTChannelTransmitRequestSource)
```

## Parameters

- `channelManager`: The channel manager.
- `channelUUID`: The channel identifier.
- `source`: The transmission request source.

## Mentioned In

- [Creating a Push to Talk app](../creating-a-push-to-talk-app.md)

<a id="Discussion"></a>

## Discussion

The system calls this method when the user begins pressing the talk button in the user interface, a programmatic transmit starts, or transmission begins from a hands-free accessory button press.

> **Important**

>  Your app must wait for the system to call [channelManager(\_:didActivate:)](channelmanager%28__didactivate_%29.md) before you begin recording audio from the user.

## See Also

### Beginning or ending transmission

- [channelManager(\_:channelUUID:didEndTransmittingFrom:)](channelmanager%28__channeluuid_didendtransmittingfrom_%29.md): Tells the observer that transmission ended.
- [channelManager(\_:failedToBeginTransmittingInChannel:error:)](channelmanager%28__failedtobegintransmittinginchannel_error_%29.md): Tells the observer that transmission failed to begin.
- [channelManager(\_:failedToStopTransmittingInChannel:error:)](channelmanager%28__failedtostoptransmittinginchannel_error_%29.md): Tells the observer that transmission failed to stop.
- [incomingServiceUpdatePush(channelManager:channelUUID:pushPayload:isHighPriority:remainingHighPriorityBudget:completion:)](incomingserviceupdatepush%28channelmanager_channeluuid_pushpayload_ishighpriority_remaininghighprioritybudget_completion_%29.md): Extracts the service update data from the notification’s payload to perform the relevant task for that data.

# channelManager:channelUUID:didBeginTransmittingFromSource: (Objective-C)

**Framework:** Push to Talk  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Tells the observer that transmission began.

## Declaration

```objectivec
- (void) channelManager:(PTChannelManager *) channelManager channelUUID:(NSUUID *) channelUUID didBeginTransmittingFromSource:(PTChannelTransmitRequestSource) source;
```

## Parameters

- `channelManager`: The channel manager.
- `channelUUID`: The channel identifier.
- `source`: The transmission request source.

## Mentioned In

- [Creating a Push to Talk app](../creating-a-push-to-talk-app.md)

<a id="Discussion"></a>

## Discussion

The system calls this method when the user begins pressing the talk button in the user interface, a programmatic transmit starts, or transmission begins from a hands-free accessory button press.

> **Important**

>  Your app must wait for the system to call [channelManager:didActivateAudioSession:](channelmanager%28__didactivate_%29.md) before you begin recording audio from the user.

## See Also

### Beginning or ending transmission

- [channelManager:channelUUID:didEndTransmittingFromSource:](channelmanager%28__channeluuid_didendtransmittingfrom_%29.md): Tells the observer that transmission ended.
- [channelManager:failedToBeginTransmittingInChannelWithUUID:error:](channelmanager%28__failedtobegintransmittinginchannel_error_%29.md): Tells the observer that transmission failed to begin.
- [channelManager:failedToStopTransmittingInChannelWithUUID:error:](channelmanager%28__failedtostoptransmittinginchannel_error_%29.md): Tells the observer that transmission failed to stop.
- [incomingServiceUpdatePushForChannelManager:channelUUID:pushPayload:isHighPriority:remainingHighPriorityBudget:withCompletionHandler:](incomingserviceupdatepush%28channelmanager_channeluuid_pushpayload_ishighpriority_remaininghighprioritybudget_completion_%29.md): Extracts the service update data from the notification’s payload to perform the relevant task for that data.
