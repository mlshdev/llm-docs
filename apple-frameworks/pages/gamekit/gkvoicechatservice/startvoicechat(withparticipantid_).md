> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkvoicechatservice/startvoicechat(withparticipantid:)](https://developer.apple.com/documentation/gamekit/gkvoicechatservice/startvoicechat(withparticipantid:))

# startVoiceChat(withParticipantID:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Sends a request to another participant to join the voice chat.

> Use SharePlay instead

## Declaration

```swift
func startVoiceChat(withParticipantID participantID: String!) throws
```

## Parameters

- `participantID`: A string that uniquely identifies the participant to connect to.

<a id="Discussion"></a>

## Discussion

The voice chat service calls the client’s [voiceChatService(\_:send:toParticipantID:)](../gkvoicechatclient/voicechatservice%28__send_toparticipantid_%29.md) method to send the connection request to the remote participant.

# startVoiceChatWithParticipantID:error: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Sends a request to another participant to join the voice chat.

> Use SharePlay instead

## Declaration

```objectivec
- (BOOL) startVoiceChatWithParticipantID:(NSString *) participantID error:(NSError **) error;
```

## Parameters

- `participantID`: A string that uniquely identifies the participant to connect to.
- `error`: If an error occurs, upon return contains an `NSError` object that describes the problem. Pass `NULL` if you do not want error information.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the connection was successfully created.

<a id="Discussion"></a>

## Discussion

The voice chat service calls the client’s [voiceChatService:sendData:toParticipantID:](../gkvoicechatclient/voicechatservice%28__send_toparticipantid_%29.md) method to send the connection request to the remote participant.
