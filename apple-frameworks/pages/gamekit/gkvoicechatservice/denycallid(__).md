> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkvoicechatservice/denycallid(_:)](https://developer.apple.com/documentation/gamekit/gkvoicechatservice/denycallid(_:))

# denyCallID(\_:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Rejects a request to establish a voice chat.

> Use SharePlay instead

## Declaration

```swift
func denyCallID(_ callID: Int)
```

## Parameters

- `callID`: An integer that identifies the connection request.

<a id="Discussion"></a>

## Discussion

When a remote user requests a voice chat, the voice chat service calls the client’s [voiceChatService(\_:didReceiveInvitationFromParticipantID:callID:)](../gkvoicechatclient/voicechatservice%28__didreceiveinvitationfromparticipantid_callid_%29.md) method. The client calls this method to reject the request or [acceptCallID(\_:)](acceptcallid%28__%29.md) to accept it.

## See Also

### Methods Called by the Client

- [acceptCallID(\_:)](acceptcallid%28__%29.md): Deprecated. Accepts a request from a remote user to establish a voice chat.
- [receivedData(\_:fromParticipantID:)](receiveddata%28__fromparticipantid_%29.md): Deprecated. Called by the client to deliver new data received from a remote participant.
- [receivedRealTime(\_:fromParticipantID:)](receivedrealtime%28__fromparticipantid_%29.md): Deprecated. Called by the client to deliver voice data received from a remote participant..

# denyCallID: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Rejects a request to establish a voice chat.

> Use SharePlay instead

## Declaration

```objectivec
- (void) denyCallID:(NSInteger) callID;
```

## Parameters

- `callID`: An integer that identifies the connection request.

<a id="Discussion"></a>

## Discussion

When a remote user requests a voice chat, the voice chat service calls the client’s [voiceChatService:didReceiveInvitationFromParticipantID:callID:](../gkvoicechatclient/voicechatservice%28__didreceiveinvitationfromparticipantid_callid_%29.md) method. The client calls this method to reject the request or [acceptCallID:error:](acceptcallid%28__%29.md) to accept it.

## See Also

### Methods Called by the Client

- [acceptCallID:error:](acceptcallid%28__%29.md): Deprecated. Accepts a request from a remote user to establish a voice chat.
- [receivedData:fromParticipantID:](receiveddata%28__fromparticipantid_%29.md): Deprecated. Called by the client to deliver new data received from a remote participant.
- [receivedRealTimeData:fromParticipantID:](receivedrealtime%28__fromparticipantid_%29.md): Deprecated. Called by the client to deliver voice data received from a remote participant..
