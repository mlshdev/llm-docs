> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/livecommunicationkit/muteconversationaction/init(conversationuuid:ismuted:)](https://developer.apple.com/documentation/livecommunicationkit/muteconversationaction/init(conversationuuid:ismuted:))

# init(conversationUUID:isMuted:)

**Framework:** LiveCommunicationKit  
**Kind:** Initializer  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS 1.1+ · watchOS 10.4+

Creates an action to mute or unmute a conversation.

## Declaration

```swift
init(conversationUUID: UUID, isMuted: Bool)
```

## Parameters

- `conversationUUID`: The unique identifier of the ongoing conversation.
- `isMuted`: A value that specifies whether to mute or unmute the local participant of the conversation.
