> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/livecommunicationkit/conversationhistorymanager/recentconversation](https://developer.apple.com/documentation/livecommunicationkit/conversationhistorymanager/recentconversation)

# ConversationHistoryManager.RecentConversation

**Framework:** LiveCommunicationKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A structure that describes a recent conversation.

## Declaration

```swift
struct RecentConversation
```

## Topics

### Accessing conversation attributes

- [date](recentconversation/date.md): The point in time when the conversation started.
- [direction](recentconversation/direction-swift.property.md): The direction of this conversation.
- [ConversationHistoryManager.RecentConversation.Direction](recentconversation/direction-swift.enum.md): Values that indicate whether a conversation was initiated or received.
- [duration](recentconversation/duration.md): The duration of the conversation from the time the system connected the participants.
- [handles](recentconversation/handles.md): The handles of the conversation’s participants.
- [isRead](recentconversation/isread.md): A value that indicates whether a person marked the recent conversation as read.
- [status](recentconversation/status-swift.property.md): The status of the conversation.
- [ConversationHistoryManager.RecentConversation.Status](recentconversation/status-swift.enum.md): Values that indicate the connection status of a recent conversation.

### Identifying a recent conversation

- [id](recentconversation/id.md): The unique identifier of the recent conversation.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing recent conversations

- [recentConversations(matching:)](recentconversations%28matching_%29.md): Returns a list of recent conversations that match the given predicate.
- [markConversationAsRead(\_:)](markconversationasread%28__%29.md): Marks a conversation as read.
- [markConversationsAsRead(\_:)](markconversationsasread%28__%29.md): Marks the a list of conversations as read.
