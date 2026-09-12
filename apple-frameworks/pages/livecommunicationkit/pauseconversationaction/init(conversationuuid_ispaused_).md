> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/livecommunicationkit/pauseconversationaction/init(conversationuuid:ispaused:)](https://developer.apple.com/documentation/livecommunicationkit/pauseconversationaction/init(conversationuuid:ispaused:))

# init(conversationUUID:isPaused:)

**Framework:** LiveCommunicationKit  
**Kind:** Initializer  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS 1.1+ · watchOS 10.4+

Creates an action that starts or stops all audio and video streams for a conversation.

## Declaration

```swift
init(conversationUUID: UUID, isPaused: Bool)
```

## Parameters

- `conversationUUID`: The unique identifier of the ongoing conversation.
- `isPaused`: A value that specifies whether to start or stop all audio or video streams for a conversation.
