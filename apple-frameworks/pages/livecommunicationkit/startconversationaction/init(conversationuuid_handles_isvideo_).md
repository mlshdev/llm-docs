> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/livecommunicationkit/startconversationaction/init(conversationuuid:handles:isvideo:)

# init(conversationUUID:handles:isVideo:)

**Framework:** LiveCommunicationKit  
**Kind:** Initializer  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS 1.1+ · watchOS 10.4+

Creates an action that starts an outgoing conversation.

## Declaration

```swift
init(conversationUUID: UUID, handles: [Handle], isVideo: Bool)
```

## Parameters

- `conversationUUID`: The unique identifier of the conversation to start.
- `handles`: The handles of all remote members who receive an invite  to join the conversation.
- `isVideo`: A value that specifies if the conversation contains a video stream.
