> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/livecommunicationkit/conversationhistorymanager/markconversationasread(_:)

# markConversationAsRead(\_:)

**Framework:** LiveCommunicationKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Marks a conversation as read.

## Declaration

```swift
final func markConversationAsRead(_ recentConversation: ConversationHistoryManager.RecentConversation) async throws
```

## Parameters

- `recentConversation`: A recent conversation in the conversation history that you want to mark as read.

## See Also

### Managing recent conversations

- [recentConversations(matching:)](recentconversations%28matching_%29.md): Returns a list of recent conversations that match the given predicate.
- [markConversationsAsRead(\_:)](markconversationsasread%28__%29.md): Marks the a list of conversations as read.
- [ConversationHistoryManager.RecentConversation](recentconversation.md): A structure that describes a recent conversation.
