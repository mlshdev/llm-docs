> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/livecommunicationkit/conversationhistorymanager](https://developer.apple.com/documentation/livecommunicationkit/conversationhistorymanager)

# ConversationHistoryManager

**Framework:** LiveCommunicationKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An interface for managing and providing conversation history.

## Declaration

```swift
final class ConversationHistoryManager
```

## Mentioned In

- [Preparing your app to be the default dialer app](preparing-your-app-to-be-the-default-dialer-app.md)

## Topics

### Accessing the conversation history

- [sharedInstance](conversationhistorymanager/sharedinstance.md)

### Managing recent conversations

- [recentConversations(matching:)](conversationhistorymanager/recentconversations%28matching_%29.md): Returns a list of recent conversations that match the given predicate.
- [markConversationAsRead(\_:)](conversationhistorymanager/markconversationasread%28__%29.md): Marks a conversation as read.
- [markConversationsAsRead(\_:)](conversationhistorymanager/markconversationsasread%28__%29.md): Marks the a list of conversations as read.
- [ConversationHistoryManager.RecentConversation](conversationhistorymanager/recentconversation.md): A structure that describes a recent conversation.

### Responding to conversation history updates

- [ConversationHistoryManager.ConversationHistoryDidUpdate](conversationhistorymanager/conversationhistorydidupdate.md): A message you can observe to receive conversation history updates if your app is the default dialer app.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### VoIP conversations

- [ConversationManager](conversationmanager.md): An interface for managing and observing VoIP conversations.
- [ConversationManagerDelegate](conversationmanagerdelegate.md): Methods for managing conversations and receiving VoIP conversation updates.
- [Conversation](conversation.md): A type that describes a video or audio conversation.
