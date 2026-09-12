> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/pushtotalk/ptchannelmanagerdelegate/incomingpushresult(channelmanager:channeluuid:pushpayload:)](https://developer.apple.com/documentation/pushtotalk/ptchannelmanagerdelegate/incomingpushresult(channelmanager:channeluuid:pushpayload:))

# incomingPushResult(channelManager:channelUUID:pushPayload:) (Swift)

**Framework:** Push to Talk  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Tells the observer that the app has a push available to handle.

## Declaration

```swift
func incomingPushResult(channelManager: PTChannelManager, channelUUID: UUID, pushPayload: [String : Any]) -> PTPushResult
```

## Parameters

- `channelManager`: The channel manager.
- `channelUUID`: The channel identifier.
- `pushPayload`: The push payload metadata.

## Mentioned In

- [Creating a Push to Talk app](../creating-a-push-to-talk-app.md)

<a id="Discussion"></a>

## Discussion

The system calls this method for each incoming push. Return a [PTPushResult](../ptpushresult.md) as soon as possible and don’t block the thread. Perform network tasks — like downloading a speaker’s image or setting up a streaming network connection to a server — on a separate thread.

If the PTT channel transmission mode is [PTTransmissionMode.halfDuplex](../pttransmissionmode/halfduplex.md), and the local participant is transmitting when the app receives a PTT notification, returning an active participant results in an error. End the local participant’s transmission by calling [stopTransmitting(channelUUID:)](../ptchannelmanager/stoptransmitting%28channeluuid_%29.md) before returning an active remote participant.

# incomingPushResultForChannelManager:channelUUID:pushPayload: (Objective-C)

**Framework:** Push to Talk  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Tells the observer that the app has a push available to handle.

## Declaration

```objectivec
- (PTPushResult *) incomingPushResultForChannelManager:(PTChannelManager *) channelManager channelUUID:(NSUUID *) channelUUID pushPayload:(NSDictionary<NSString *,id> *) pushPayload;
```

## Parameters

- `channelManager`: The channel manager.
- `channelUUID`: The channel identifier.
- `pushPayload`: The push payload metadata.

## Mentioned In

- [Creating a Push to Talk app](../creating-a-push-to-talk-app.md)

<a id="Discussion"></a>

## Discussion

The system calls this method for each incoming push. Return a [PTPushResult](../ptpushresult.md) as soon as possible and don’t block the thread. Perform network tasks — like downloading a speaker’s image or setting up a streaming network connection to a server — on a separate thread.

If the PTT channel transmission mode is [PTTransmissionModeHalfDuplex](../pttransmissionmode/halfduplex.md), and the local participant is transmitting when the app receives a PTT notification, returning an active participant results in an error. End the local participant’s transmission by calling [stopTransmittingWithChannelUUID:](../ptchannelmanager/stoptransmitting%28channeluuid_%29.md) before returning an active remote participant.
