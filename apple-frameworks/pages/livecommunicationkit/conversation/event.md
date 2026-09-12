> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/livecommunicationkit/conversation/event](https://developer.apple.com/documentation/livecommunicationkit/conversation/event)

# Conversation.Event

**Framework:** LiveCommunicationKit  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS 1.1+ · watchOS 10.4+

Values that tell the system what happened during a conversation.

## Declaration

```swift
enum Event
```

## Topics

- [Conversation.Event.conversationConnected(\_:)](event/conversationconnected%28__%29.md): Informs that system that conversation successfully connected at a point in time.
- [Conversation.Event.conversationEnded(\_:\_:)](event/conversationended%28____%29.md): Informs that system that a conversation ended at a point in time with a reason.
- [Conversation.Event.conversationStartedConnecting(\_:)](event/conversationstartedconnecting%28__%29.md): Informs the system that a conversation has started to connect participants at a point in time.
- [Conversation.Event.conversationUpdated(\_:)](event/conversationupdated%28__%29.md): Updates a conversation’s attributes and capabilities.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Observing a conversation

- [Conversation.EndedReason](endedreason.md): Values that describe why a conversation ended.
