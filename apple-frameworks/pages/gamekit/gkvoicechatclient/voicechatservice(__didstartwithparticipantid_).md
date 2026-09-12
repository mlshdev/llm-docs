> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkvoicechatclient/voicechatservice(_:didstartwithparticipantid:)](https://developer.apple.com/documentation/gamekit/gkvoicechatclient/voicechatservice(_:didstartwithparticipantid:))

# voiceChatService(\_:didStartWithParticipantID:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Received by the client when a voice chat with another participant is established.

## Declaration

```swift
optional func voiceChatService(_ voiceChatService: GKVoiceChatService, didStartWithParticipantID participantID: String)
```

## Parameters

- `voiceChatService`: The voice chat service that initiated the connection.
- `participantID`: A string that uniquely identifies the other user.

<a id="Discussion"></a>

## Discussion

Your client can use this method to update the user interface to show that a connection has been established.

## See Also

### Responding to Changes in Other Participants

- [voiceChatService(\_:didNotStartWithParticipantID:error:)](voicechatservice%28__didnotstartwithparticipantid_error_%29.md): Deprecated. Received by the client when an attempt to establish a voice chat with another participant failed.
- [voiceChatService(\_:didStopWithParticipantID:error:)](voicechatservice%28__didstopwithparticipantid_error_%29.md): Deprecated. Received by the client when a previously established voice chat has ended.

# voiceChatService:didStartWithParticipantID: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.6+ (deprecated in 10.8) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Received by the client when a voice chat with another participant is established.

## Declaration

```objectivec
- (void) voiceChatService:(GKVoiceChatService *) voiceChatService didStartWithParticipantID:(NSString *) participantID;
```

## Parameters

- `voiceChatService`: The voice chat service that initiated the connection.
- `participantID`: A string that uniquely identifies the other user.

<a id="Discussion"></a>

## Discussion

Your client can use this method to update the user interface to show that a connection has been established.

## See Also

### Responding to Changes in Other Participants

- [voiceChatService:didNotStartWithParticipantID:error:](voicechatservice%28__didnotstartwithparticipantid_error_%29.md): Deprecated. Received by the client when an attempt to establish a voice chat with another participant failed.
- [voiceChatService:didStopWithParticipantID:error:](voicechatservice%28__didstopwithparticipantid_error_%29.md): Deprecated. Received by the client when a previously established voice chat has ended.
