> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/livecommunicationkit/conversationhistorymanager/recentconversations(matching:)](https://developer.apple.com/documentation/livecommunicationkit/conversationhistorymanager/recentconversations(matching:))

# recentConversations(matching:)

**Framework:** LiveCommunicationKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Returns a list of recent conversations that match the given predicate.

## Declaration

```swift
final func recentConversations(matching request: Predicate<ConversationHistoryManager.RecentConversation>) async throws -> [ConversationHistoryManager.RecentConversation]
```

## See Also

### Managing recent conversations

- [markConversationAsRead(\_:)](markconversationasread%28__%29.md): Marks a conversation as read.
- [markConversationsAsRead(\_:)](markconversationsasread%28__%29.md): Marks the a list of conversations as read.
- [ConversationHistoryManager.RecentConversation](recentconversation.md): A structure that describes a recent conversation.
