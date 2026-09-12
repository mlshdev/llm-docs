> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkvoicechatclient/voicechatservice(_:didstopwithparticipantid:error:)](https://developer.apple.com/documentation/gamekit/gkvoicechatclient/voicechatservice(_:didstopwithparticipantid:error:))

# voiceChatService(\_:didStopWithParticipantID:error:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Received by the client when a previously established voice chat has ended.

## Declaration

```swift
optional func voiceChatService(_ voiceChatService: GKVoiceChatService, didStopWithParticipantID participantID: String, error: (any Error)?)
```

## Parameters

- `voiceChatService`: The voice chat that maintained the connection.
- `participantID`: A string that uniquely identifies the user who disconnected.
- `error`: The error that caused the chat to end.

<a id="Discussion"></a>

## Discussion

Your application can implement this method to notify the user that an established voice connection has ended. This may occur when another participant ends the chat or if the network connection was lost.

## See Also

### Responding to Changes in Other Participants

- [voiceChatService(\_:didStartWithParticipantID:)](voicechatservice%28__didstartwithparticipantid_%29.md): Deprecated. Received by the client when a voice chat with another participant is established.
- [voiceChatService(\_:didNotStartWithParticipantID:error:)](voicechatservice%28__didnotstartwithparticipantid_error_%29.md): Deprecated. Received by the client when an attempt to establish a voice chat with another participant failed.

# voiceChatService:didStopWithParticipantID:error: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.6+ (deprecated in 10.8) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Received by the client when a previously established voice chat has ended.

## Declaration

```objectivec
- (void) voiceChatService:(GKVoiceChatService *) voiceChatService didStopWithParticipantID:(NSString *) participantID error:(NSError *) error;
```

## Parameters

- `voiceChatService`: The voice chat that maintained the connection.
- `participantID`: A string that uniquely identifies the user who disconnected.
- `error`: The error that caused the chat to end.

<a id="Discussion"></a>

## Discussion

Your application can implement this method to notify the user that an established voice connection has ended. This may occur when another participant ends the chat or if the network connection was lost.

## See Also

### Responding to Changes in Other Participants

- [voiceChatService:didStartWithParticipantID:](voicechatservice%28__didstartwithparticipantid_%29.md): Deprecated. Received by the client when a voice chat with another participant is established.
- [voiceChatService:didNotStartWithParticipantID:error:](voicechatservice%28__didnotstartwithparticipantid_error_%29.md): Deprecated. Received by the client when an attempt to establish a voice chat with another participant failed.
