> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkvoicechatclient/voicechatservice(_:sendrealtime:toparticipantid:)](https://developer.apple.com/documentation/gamekit/gkvoicechatclient/voicechatservice(_:sendrealtime:toparticipantid:))

# voiceChatService(\_:sendRealTime:toParticipantID:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Asks the client to send data to a participant that must get there quickly.

## Declaration

```swift
optional func voiceChatService(_ voiceChatService: GKVoiceChatService, sendRealTime data: Data, toParticipantID participantID: String)
```

## Parameters

- `voiceChatService`: The service that requested the transmission.
- `data`: The data to send.
- `participantID`: A string that uniquely identifies the participant to send the data to.

<a id="Discussion"></a>

## Discussion

An implementation of this method maps the `participantID` string to a known participant and transmits the data to them. Data transmitted by this method can be sent unreliably. When the client on the other end receives this data, it should forward it to the voice chat service by calling the service’s [receivedRealTime(\_:fromParticipantID:)](../gkvoicechatservice/receivedrealtime%28__fromparticipantid_%29.md) method.

## See Also

### Sending data to other participants

- [voiceChatService(\_:send:toParticipantID:)](voicechatservice%28__send_toparticipantid_%29.md): Deprecated. A request for the client to send data to a participant.

# voiceChatService:sendRealTimeData:toParticipantID: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.6+ (deprecated in 10.8) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Asks the client to send data to a participant that must get there quickly.

## Declaration

```objectivec
- (void) voiceChatService:(GKVoiceChatService *) voiceChatService sendRealTimeData:(NSData *) data toParticipantID:(NSString *) participantID;
```

## Parameters

- `voiceChatService`: The service that requested the transmission.
- `data`: The data to send.
- `participantID`: A string that uniquely identifies the participant to send the data to.

<a id="Discussion"></a>

## Discussion

An implementation of this method maps the `participantID` string to a known participant and transmits the data to them. Data transmitted by this method can be sent unreliably. When the client on the other end receives this data, it should forward it to the voice chat service by calling the service’s [receivedRealTimeData:fromParticipantID:](../gkvoicechatservice/receivedrealtime%28__fromparticipantid_%29.md) method.

## See Also

### Sending data to other participants

- [voiceChatService:sendData:toParticipantID:](voicechatservice%28__send_toparticipantid_%29.md): Deprecated. A request for the client to send data to a participant.
