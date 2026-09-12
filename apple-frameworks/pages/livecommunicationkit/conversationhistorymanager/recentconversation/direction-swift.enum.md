> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/livecommunicationkit/conversationhistorymanager/recentconversation/direction-swift.enum](https://developer.apple.com/documentation/livecommunicationkit/conversationhistorymanager/recentconversation/direction-swift.enum)

# ConversationHistoryManager.RecentConversation.Direction

**Framework:** LiveCommunicationKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Values that indicate whether a conversation was initiated or received.

## Declaration

```swift
enum Direction
```

## Topics

### Conversation direction

- [ConversationHistoryManager.RecentConversation.Direction.incoming](direction-swift.enum/incoming.md): The conversation was received by the local participant.
- [ConversationHistoryManager.RecentConversation.Direction.outgoing](direction-swift.enum/outgoing.md): The conversation was initiated by the local participant.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing conversation attributes

- [date](date.md): The point in time when the conversation started.
- [direction](direction-swift.property.md): The direction of this conversation.
- [duration](duration.md): The duration of the conversation from the time the system connected the participants.
- [handles](handles.md): The handles of the conversation’s participants.
- [isRead](isread.md): A value that indicates whether a person marked the recent conversation as read.
- [status](status-swift.property.md): The status of the conversation.
- [ConversationHistoryManager.RecentConversation.Status](status-swift.enum.md): Values that indicate the connection status of a recent conversation.
