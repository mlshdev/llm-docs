> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/livecommunicationkit/conversation/event/conversationended(_:_:)](https://developer.apple.com/documentation/livecommunicationkit/conversation/event/conversationended(_:_:))

# Conversation.Event.conversationEnded(\_:\_:)

**Framework:** LiveCommunicationKit  
**Kind:** Case  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS 1.1+ · watchOS 10.4+

Informs that system that a conversation ended at a point in time with a reason.

## Declaration

```swift
case conversationEnded(Date, Conversation.EndedReason)
```

## See Also

- [Conversation.Event.conversationConnected(\_:)](conversationconnected%28__%29.md): Informs that system that conversation successfully connected at a point in time.
- [Conversation.Event.conversationStartedConnecting(\_:)](conversationstartedconnecting%28__%29.md): Informs the system that a conversation has started to connect participants at a point in time.
- [Conversation.Event.conversationUpdated(\_:)](conversationupdated%28__%29.md): Updates a conversation’s attributes and capabilities.
