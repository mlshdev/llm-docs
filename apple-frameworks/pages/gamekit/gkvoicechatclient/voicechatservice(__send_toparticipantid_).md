> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkvoicechatclient/voicechatservice(_:send:toparticipantid:)](https://developer.apple.com/documentation/gamekit/gkvoicechatclient/voicechatservice(_:send:toparticipantid:))

# voiceChatService(\_:send:toParticipantID:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

A request for the client to send data to a participant.

## Declaration

```swift
func voiceChatService(_ voiceChatService: GKVoiceChatService, send data: Data, toParticipantID participantID: String)
```

## Parameters

- `voiceChatService`: The service that requested the transmission.
- `data`: The data to send.
- `participantID`: A string that uniquely identifies the participant to send the data to.

<a id="Discussion"></a>

## Discussion

An implementation of this method must reliably transmit the data to the participant identified by `participantID`. When the client on the other end receives the data, it should forward it to the voice chat service by calling the service’s [receivedData(\_:fromParticipantID:)](../gkvoicechatservice/receiveddata%28__fromparticipantid_%29.md) method.

## See Also

### Sending data to other participants

- [voiceChatService(\_:sendRealTime:toParticipantID:)](voicechatservice%28__sendrealtime_toparticipantid_%29.md): Deprecated. Asks the client to send data to a participant that must get there quickly.

# voiceChatService:sendData:toParticipantID: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.6+ (deprecated in 10.8) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

A request for the client to send data to a participant.

## Declaration

```objectivec
- (void) voiceChatService:(GKVoiceChatService *) voiceChatService sendData:(NSData *) data toParticipantID:(NSString *) participantID;
```

## Parameters

- `voiceChatService`: The service that requested the transmission.
- `data`: The data to send.
- `participantID`: A string that uniquely identifies the participant to send the data to.

<a id="Discussion"></a>

## Discussion

An implementation of this method must reliably transmit the data to the participant identified by `participantID`. When the client on the other end receives the data, it should forward it to the voice chat service by calling the service’s [receivedData:fromParticipantID:](../gkvoicechatservice/receiveddata%28__fromparticipantid_%29.md) method.

## See Also

### Sending data to other participants

- [voiceChatService:sendRealTimeData:toParticipantID:](voicechatservice%28__sendrealtime_toparticipantid_%29.md): Deprecated. Asks the client to send data to a participant that must get there quickly.
