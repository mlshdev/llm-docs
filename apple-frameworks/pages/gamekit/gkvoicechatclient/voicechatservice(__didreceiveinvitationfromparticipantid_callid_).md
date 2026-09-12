> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkvoicechatclient/voicechatservice(_:didreceiveinvitationfromparticipantid:callid:)](https://developer.apple.com/documentation/gamekit/gkvoicechatclient/voicechatservice(_:didreceiveinvitationfromparticipantid:callid:))

# voiceChatService(\_:didReceiveInvitationFromParticipantID:callID:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Asks the client to accept or reject an invitation from a remote participant.

## Declaration

```swift
optional func voiceChatService(_ voiceChatService: GKVoiceChatService, didReceiveInvitationFromParticipantID participantID: String, callID: Int)
```

## Parameters

- `voiceChatService`: The service that received the request.
- `participantID`: A string that uniquely identifies the other user.
- `callID`: An integer that uniquely identifies the request.

<a id="Discussion"></a>

## Discussion

If this method is not implemented by the client, the voice chat service automatically accept requests from other participants.

This method should call the service’s [acceptCallID(\_:)](../gkvoicechatservice/acceptcallid%28__%29.md) method if it wants to accept the request or the [denyCallID(\_:)](../gkvoicechatservice/denycallid%28__%29.md) to reject it.

# voiceChatService:didReceiveInvitationFromParticipantID:callID: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.6+ (deprecated in 10.8) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Asks the client to accept or reject an invitation from a remote participant.

## Declaration

```objectivec
- (void) voiceChatService:(GKVoiceChatService *) voiceChatService didReceiveInvitationFromParticipantID:(NSString *) participantID callID:(NSInteger) callID;
```

## Parameters

- `voiceChatService`: The service that received the request.
- `participantID`: A string that uniquely identifies the other user.
- `callID`: An integer that uniquely identifies the request.

<a id="Discussion"></a>

## Discussion

If this method is not implemented by the client, the voice chat service automatically accept requests from other participants.

This method should call the service’s [acceptCallID:error:](../gkvoicechatservice/acceptcallid%28__%29.md) method if it wants to accept the request or the [denyCallID:](../gkvoicechatservice/denycallid%28__%29.md) to reject it.
