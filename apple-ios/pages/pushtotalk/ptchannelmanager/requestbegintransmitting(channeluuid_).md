> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/pushtotalk/ptchannelmanager/requestbegintransmitting(channeluuid:)](https://developer.apple.com/documentation/pushtotalk/ptchannelmanager/requestbegintransmitting(channeluuid:))

# requestBeginTransmitting(channelUUID:) (Swift)

**Framework:** Push to Talk  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Begins an audio transmission with the channel identifer you specify.

## Declaration

```swift
func requestBeginTransmitting(channelUUID: UUID)
```

## Parameters

- `channelUUID`: The channel identifier.

## Mentioned In

- [Creating a Push to Talk app](../creating-a-push-to-talk-app.md)

<a id="Discussion"></a>

## Discussion

Your app can only begin a transmission when in the foreground, or following a [Core Bluetooth](https://developer.apple.com/documentation/corebluetooth) event, such as when a wireless accessory button triggers a [Core Bluetooth](https://developer.apple.com/documentation/corebluetooth) characteristic change. The user may also begin a transmission by using the Push to Talk system user interface.

If successful, you receive a callback from [channelManager(\_:channelUUID:didBeginTransmittingFrom:)](../ptchannelmanagerdelegate/channelmanager%28__channeluuid_didbegintransmittingfrom_%29.md) with `PTChannelTransmitRequestSource.programmaticRequest`; otherwise, you receive a failure reason through [channelManager(\_:failedToBeginTransmittingInChannel:error:)](../ptchannelmanagerdelegate/channelmanager%28__failedtobegintransmittinginchannel_error_%29.md).

## See Also

### Starting and stopping transmission

- [stopTransmitting(channelUUID:)](stoptransmitting%28channeluuid_%29.md): Stops an audio transmission with the channel identifer you specify.
- [setAccessoryButtonEventsEnabled(\_:channelUUID:completionHandler:)](setaccessorybuttoneventsenabled%28__channeluuid_completionhandler_%29.md): Maps supported accessory button events to actions that begin and end transmission.

# requestBeginTransmittingWithChannelUUID: (Objective-C)

**Framework:** Push to Talk  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Begins an audio transmission with the channel identifer you specify.

## Declaration

```objectivec
- (void) requestBeginTransmittingWithChannelUUID:(NSUUID *) channelUUID;
```

## Parameters

- `channelUUID`: The channel identifier.

## Mentioned In

- [Creating a Push to Talk app](../creating-a-push-to-talk-app.md)

<a id="Discussion"></a>

## Discussion

Your app can only begin a transmission when in the foreground, or following a [Core Bluetooth](https://developer.apple.com/documentation/corebluetooth) event, such as when a wireless accessory button triggers a [Core Bluetooth](https://developer.apple.com/documentation/corebluetooth) characteristic change. The user may also begin a transmission by using the Push to Talk system user interface.

If successful, you receive a callback from [channelManager:channelUUID:didBeginTransmittingFromSource:](../ptchannelmanagerdelegate/channelmanager%28__channeluuid_didbegintransmittingfrom_%29.md) with `PTChannelTransmitRequestSource.programmaticRequest`; otherwise, you receive a failure reason through [channelManager:failedToBeginTransmittingInChannelWithUUID:error:](../ptchannelmanagerdelegate/channelmanager%28__failedtobegintransmittinginchannel_error_%29.md).

## See Also

### Starting and stopping transmission

- [stopTransmittingWithChannelUUID:](stoptransmitting%28channeluuid_%29.md): Stops an audio transmission with the channel identifer you specify.
- [setAccessoryButtonEventsEnabled:forChannelUUID:completionHandler:](setaccessorybuttoneventsenabled%28__channeluuid_completionhandler_%29.md): Maps supported accessory button events to actions that begin and end transmission.
