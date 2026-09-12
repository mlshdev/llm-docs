> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/livecommunicationkit/conversationhistorymanager/recentconversation/status-swift.enum](https://developer.apple.com/documentation/livecommunicationkit/conversationhistorymanager/recentconversation/status-swift.enum)

# ConversationHistoryManager.RecentConversation.Status

**Framework:** LiveCommunicationKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Values that indicate the connection status of a recent conversation.

## Declaration

```swift
enum Status
```

## Topics

### Connection status

- [ConversationHistoryManager.RecentConversation.Status.answeredElsewhere](status-swift.enum/answeredelsewhere.md): The conversation was answered on another device.
- [ConversationHistoryManager.RecentConversation.Status.cancelled](status-swift.enum/cancelled.md): The outgoing conversation was cancelled by the initiating participant before it was connected.
- [ConversationHistoryManager.RecentConversation.Status.connected](status-swift.enum/connected.md): The conversation was connected on this device.
- [ConversationHistoryManager.RecentConversation.Status.missed](status-swift.enum/missed.md): The receving participant didn’t answer the incoming conversation.
- [ConversationHistoryManager.RecentConversation.Status.unknown](status-swift.enum/unknown.md): The conversation’s status is unknown.

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
- [ConversationHistoryManager.RecentConversation.Direction](direction-swift.enum.md): Values that indicate whether a conversation was initiated or received.
- [duration](duration.md): The duration of the conversation from the time the system connected the participants.
- [handles](handles.md): The handles of the conversation’s participants.
- [isRead](isread.md): A value that indicates whether a person marked the recent conversation as read.
- [status](status-swift.property.md): The status of the conversation.
