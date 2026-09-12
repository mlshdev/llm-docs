> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkvoicechatservice/stopvoicechat(withparticipantid:)](https://developer.apple.com/documentation/gamekit/gkvoicechatservice/stopvoicechat(withparticipantid:))

# stopVoiceChat(withParticipantID:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Ends a previously established voice chat.

> Use SharePlay instead

## Declaration

```swift
func stopVoiceChat(withParticipantID participantID: String!)
```

## Parameters

- `participantID`: A string that uniquely identifies the participant in the chat.

<a id="Discussion"></a>

## Discussion

When this method is called, the client’s [voiceChatService(\_:didStopWithParticipantID:error:)](../gkvoicechatclient/voicechatservice%28__didstopwithparticipantid_error_%29.md) method is called.

# stopVoiceChatWithParticipantID: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Ends a previously established voice chat.

> Use SharePlay instead

## Declaration

```objectivec
- (void) stopVoiceChatWithParticipantID:(NSString *) participantID;
```

## Parameters

- `participantID`: A string that uniquely identifies the participant in the chat.

<a id="Discussion"></a>

## Discussion

When this method is called, the client’s [voiceChatService:didStopWithParticipantID:error:](../gkvoicechatclient/voicechatservice%28__didstopwithparticipantid_error_%29.md) method is called.
