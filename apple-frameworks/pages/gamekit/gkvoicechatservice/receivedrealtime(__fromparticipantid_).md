> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkvoicechatservice/receivedrealtime(_:fromparticipantid:)](https://developer.apple.com/documentation/gamekit/gkvoicechatservice/receivedrealtime(_:fromparticipantid:))

# receivedRealTime(\_:fromParticipantID:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Called by the client to deliver voice data received from a remote participant..

> Use SharePlay instead

## Declaration

```swift
func receivedRealTime(_ audio: Data!, fromParticipantID participantID: String!)
```

## Parameters

- `audio`: The audio data that was received from the other participant.
- `participantID`: A string that uniquely identifies the speaking participant.

<a id="Discussion"></a>

## Discussion

The voice chat service uses a network connection provided by the client to exchange information between the participants. When the client receives information intended for the voice chat service, it should call this method to transfer it.

## See Also

### Related Documentation

- [voiceChatService(\_:sendRealTime:toParticipantID:)](../gkvoicechatclient/voicechatservice%28__sendrealtime_toparticipantid_%29.md): Deprecated. Asks the client to send data to a participant that must get there quickly.

### Methods Called by the Client

- [acceptCallID(\_:)](acceptcallid%28__%29.md): Deprecated. Accepts a request from a remote user to establish a voice chat.
- [denyCallID(\_:)](denycallid%28__%29.md): Deprecated. Rejects a request to establish a voice chat.
- [receivedData(\_:fromParticipantID:)](receiveddata%28__fromparticipantid_%29.md): Deprecated. Called by the client to deliver new data received from a remote participant.

# receivedRealTimeData:fromParticipantID: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Called by the client to deliver voice data received from a remote participant..

> Use SharePlay instead

## Declaration

```objectivec
- (void) receivedRealTimeData:(NSData *) audio fromParticipantID:(NSString *) participantID;
```

## Parameters

- `audio`: The audio data that was received from the other participant.
- `participantID`: A string that uniquely identifies the speaking participant.

<a id="Discussion"></a>

## Discussion

The voice chat service uses a network connection provided by the client to exchange information between the participants. When the client receives information intended for the voice chat service, it should call this method to transfer it.

## See Also

### Related Documentation

- [voiceChatService:sendRealTimeData:toParticipantID:](../gkvoicechatclient/voicechatservice%28__sendrealtime_toparticipantid_%29.md): Deprecated. Asks the client to send data to a participant that must get there quickly.

### Methods Called by the Client

- [acceptCallID:error:](acceptcallid%28__%29.md): Deprecated. Accepts a request from a remote user to establish a voice chat.
- [denyCallID:](denycallid%28__%29.md): Deprecated. Rejects a request to establish a voice chat.
- [receivedData:fromParticipantID:](receiveddata%28__fromparticipantid_%29.md): Deprecated. Called by the client to deliver new data received from a remote participant.
