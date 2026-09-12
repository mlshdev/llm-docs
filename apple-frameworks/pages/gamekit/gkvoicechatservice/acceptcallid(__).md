> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkvoicechatservice/acceptcallid(_:)](https://developer.apple.com/documentation/gamekit/gkvoicechatservice/acceptcallid(_:))

# acceptCallID(\_:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Accepts a request from a remote user to establish a voice chat.

> Use SharePlay instead

## Declaration

```swift
func acceptCallID(_ callID: Int) throws
```

## Parameters

- `callID`: An integer that identifies the connection request.

<a id="Discussion"></a>

## Discussion

When a remote user requests a voice chat, the voice chat service calls the client’s [voiceChatService(\_:didReceiveInvitationFromParticipantID:callID:)](../gkvoicechatclient/voicechatservice%28__didreceiveinvitationfromparticipantid_callid_%29.md) method. The client calls this method to accept the request or [denyCallID(\_:)](denycallid%28__%29.md) to reject it.

## See Also

### Methods Called by the Client

- [denyCallID(\_:)](denycallid%28__%29.md): Deprecated. Rejects a request to establish a voice chat.
- [receivedData(\_:fromParticipantID:)](receiveddata%28__fromparticipantid_%29.md): Deprecated. Called by the client to deliver new data received from a remote participant.
- [receivedRealTime(\_:fromParticipantID:)](receivedrealtime%28__fromparticipantid_%29.md): Deprecated. Called by the client to deliver voice data received from a remote participant..

# acceptCallID:error: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Accepts a request from a remote user to establish a voice chat.

> Use SharePlay instead

## Declaration

```objectivec
- (BOOL) acceptCallID:(NSInteger) callID error:(NSError **) error;
```

## Parameters

- `callID`: An integer that identifies the connection request.
- `error`: If an error occurs, upon return contains an `NSError` object that describes the problem. Pass `NULL` if you do not want error information.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the connection was established; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

When a remote user requests a voice chat, the voice chat service calls the client’s [voiceChatService:didReceiveInvitationFromParticipantID:callID:](../gkvoicechatclient/voicechatservice%28__didreceiveinvitationfromparticipantid_callid_%29.md) method. The client calls this method to accept the request or [denyCallID:](denycallid%28__%29.md) to reject it.

## See Also

### Methods Called by the Client

- [denyCallID:](denycallid%28__%29.md): Deprecated. Rejects a request to establish a voice chat.
- [receivedData:fromParticipantID:](receiveddata%28__fromparticipantid_%29.md): Deprecated. Called by the client to deliver new data received from a remote participant.
- [receivedRealTimeData:fromParticipantID:](receivedrealtime%28__fromparticipantid_%29.md): Deprecated. Called by the client to deliver voice data received from a remote participant..
