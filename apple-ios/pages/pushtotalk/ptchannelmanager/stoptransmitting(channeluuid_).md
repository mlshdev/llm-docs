> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/pushtotalk/ptchannelmanager/stoptransmitting(channeluuid:)](https://developer.apple.com/documentation/pushtotalk/ptchannelmanager/stoptransmitting(channeluuid:))

# stopTransmitting(channelUUID:) (Swift)

**Framework:** Push to Talk  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Stops an audio transmission with the channel identifer you specify.

## Declaration

```swift
func stopTransmitting(channelUUID: UUID)
```

## Parameters

- `channelUUID`: The channel identifier.

## Mentioned In

- [Creating a Push to Talk app](../creating-a-push-to-talk-app.md)

<a id="Discussion"></a>

## Discussion

If successful, you receive a callback from [channelManager(\_:channelUUID:didEndTransmittingFrom:)](../ptchannelmanagerdelegate/channelmanager%28__channeluuid_didendtransmittingfrom_%29.md) with `PTChannelTransmitRequestSource.programmaticRequest`; otherwise, you receive a failure reason through [channelManager(\_:failedToStopTransmittingInChannel:error:)](../ptchannelmanagerdelegate/channelmanager%28__failedtostoptransmittinginchannel_error_%29.md).

## See Also

### Starting and stopping transmission

- [requestBeginTransmitting(channelUUID:)](requestbegintransmitting%28channeluuid_%29.md): Begins an audio transmission with the channel identifer you specify.
- [setAccessoryButtonEventsEnabled(\_:channelUUID:completionHandler:)](setaccessorybuttoneventsenabled%28__channeluuid_completionhandler_%29.md): Maps supported accessory button events to actions that begin and end transmission.

# stopTransmittingWithChannelUUID: (Objective-C)

**Framework:** Push to Talk  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Stops an audio transmission with the channel identifer you specify.

## Declaration

```objectivec
- (void) stopTransmittingWithChannelUUID:(NSUUID *) channelUUID;
```

## Parameters

- `channelUUID`: The channel identifier.

## Mentioned In

- [Creating a Push to Talk app](../creating-a-push-to-talk-app.md)

<a id="Discussion"></a>

## Discussion

If successful, you receive a callback from [channelManager:channelUUID:didEndTransmittingFromSource:](../ptchannelmanagerdelegate/channelmanager%28__channeluuid_didendtransmittingfrom_%29.md) with `PTChannelTransmitRequestSource.programmaticRequest`; otherwise, you receive a failure reason through [channelManager:failedToStopTransmittingInChannelWithUUID:error:](../ptchannelmanagerdelegate/channelmanager%28__failedtostoptransmittinginchannel_error_%29.md).

## See Also

### Starting and stopping transmission

- [requestBeginTransmittingWithChannelUUID:](requestbegintransmitting%28channeluuid_%29.md): Begins an audio transmission with the channel identifer you specify.
- [setAccessoryButtonEventsEnabled:forChannelUUID:completionHandler:](setaccessorybuttoneventsenabled%28__channeluuid_completionhandler_%29.md): Maps supported accessory button events to actions that begin and end transmission.
