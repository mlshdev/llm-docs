> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/livecommunicationkit/conversationhistorymanager/markconversationsasread(_:)

# markConversationsAsRead(\_:)

**Framework:** LiveCommunicationKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Marks the a list of conversations as read.

## Declaration

```swift
final func markConversationsAsRead(_ recentConversations: [ConversationHistoryManager.RecentConversation]) async throws
```

## Parameters

- `recentConversations`: A list of recent conversations that you want to mark as read.

## See Also

### Managing recent conversations

- [recentConversations(matching:)](recentconversations%28matching_%29.md): Returns a list of recent conversations that match the given predicate.
- [markConversationAsRead(\_:)](markconversationasread%28__%29.md): Marks a conversation as read.
- [ConversationHistoryManager.RecentConversation](recentconversation.md): A structure that describes a recent conversation.
