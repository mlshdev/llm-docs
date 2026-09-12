> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkvoicechatclient/voicechatservice(_:didnotstartwithparticipantid:error:)](https://developer.apple.com/documentation/gamekit/gkvoicechatclient/voicechatservice(_:didnotstartwithparticipantid:error:))

# voiceChatService(\_:didNotStartWithParticipantID:error:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Received by the client when an attempt to establish a voice chat with another participant failed.

## Declaration

```swift
optional func voiceChatService(_ voiceChatService: GKVoiceChatService, didNotStartWithParticipantID participantID: String, error: (any Error)?)
```

## Parameters

- `voiceChatService`: The voice chat service that was establishing the connection.
- `participantID`: A string that uniquely identifies the other user.
- `error`: The error that prevented the voice chat from being established.

<a id="Discussion"></a>

## Discussion

Your application can implement this method to notify the user that an error occurred when establishing a connection.

## See Also

### Responding to Changes in Other Participants

- [voiceChatService(\_:didStartWithParticipantID:)](voicechatservice%28__didstartwithparticipantid_%29.md): Deprecated. Received by the client when a voice chat with another participant is established.
- [voiceChatService(\_:didStopWithParticipantID:error:)](voicechatservice%28__didstopwithparticipantid_error_%29.md): Deprecated. Received by the client when a previously established voice chat has ended.

# voiceChatService:didNotStartWithParticipantID:error: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.6+ (deprecated in 10.8) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Received by the client when an attempt to establish a voice chat with another participant failed.

## Declaration

```objectivec
- (void) voiceChatService:(GKVoiceChatService *) voiceChatService didNotStartWithParticipantID:(NSString *) participantID error:(NSError *) error;
```

## Parameters

- `voiceChatService`: The voice chat service that was establishing the connection.
- `participantID`: A string that uniquely identifies the other user.
- `error`: The error that prevented the voice chat from being established.

<a id="Discussion"></a>

## Discussion

Your application can implement this method to notify the user that an error occurred when establishing a connection.

## See Also

### Responding to Changes in Other Participants

- [voiceChatService:didStartWithParticipantID:](voicechatservice%28__didstartwithparticipantid_%29.md): Deprecated. Received by the client when a voice chat with another participant is established.
- [voiceChatService:didStopWithParticipantID:error:](voicechatservice%28__didstopwithparticipantid_error_%29.md): Deprecated. Received by the client when a previously established voice chat has ended.
