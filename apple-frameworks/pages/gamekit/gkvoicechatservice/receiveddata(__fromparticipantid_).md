> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkvoicechatservice/receiveddata(_:fromparticipantid:)](https://developer.apple.com/documentation/gamekit/gkvoicechatservice/receiveddata(_:fromparticipantid:))

# receivedData(\_:fromParticipantID:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Called by the client to deliver new data received from a remote participant.

> Use SharePlay instead

## Declaration

```swift
func receivedData(_ arbitraryData: Data!, fromParticipantID participantID: String!)
```

## Parameters

- `arbitraryData`: The data received from a participant.
- `participantID`: A string that uniquely identifies the participant who sent the data.

<a id="Discussion"></a>

## Discussion

The voice chat service uses a network connection provided by the client to exchange information between the participants. When the client receives information intended for the voice chat service, it should call this method to transfer it.

## See Also

### Related Documentation

- [voiceChatService(\_:send:toParticipantID:)](../gkvoicechatclient/voicechatservice%28__send_toparticipantid_%29.md): Deprecated. A request for the client to send data to a participant.

### Methods Called by the Client

- [acceptCallID(\_:)](acceptcallid%28__%29.md): Deprecated. Accepts a request from a remote user to establish a voice chat.
- [denyCallID(\_:)](denycallid%28__%29.md): Deprecated. Rejects a request to establish a voice chat.
- [receivedRealTime(\_:fromParticipantID:)](receivedrealtime%28__fromparticipantid_%29.md): Deprecated. Called by the client to deliver voice data received from a remote participant..

# receivedData:fromParticipantID: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Called by the client to deliver new data received from a remote participant.

> Use SharePlay instead

## Declaration

```objectivec
- (void) receivedData:(NSData *) arbitraryData fromParticipantID:(NSString *) participantID;
```

## Parameters

- `arbitraryData`: The data received from a participant.
- `participantID`: A string that uniquely identifies the participant who sent the data.

<a id="Discussion"></a>

## Discussion

The voice chat service uses a network connection provided by the client to exchange information between the participants. When the client receives information intended for the voice chat service, it should call this method to transfer it.

## See Also

### Related Documentation

- [voiceChatService:sendData:toParticipantID:](../gkvoicechatclient/voicechatservice%28__send_toparticipantid_%29.md): Deprecated. A request for the client to send data to a participant.

### Methods Called by the Client

- [acceptCallID:error:](acceptcallid%28__%29.md): Deprecated. Accepts a request from a remote user to establish a voice chat.
- [denyCallID:](denycallid%28__%29.md): Deprecated. Rejects a request to establish a voice chat.
- [receivedRealTimeData:fromParticipantID:](receivedrealtime%28__fromparticipantid_%29.md): Deprecated. Called by the client to deliver voice data received from a remote participant..
