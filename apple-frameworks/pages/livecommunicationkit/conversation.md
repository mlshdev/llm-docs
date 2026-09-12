> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/livecommunicationkit/conversation](https://developer.apple.com/documentation/livecommunicationkit/conversation)

# Conversation

**Framework:** LiveCommunicationKit  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS 1.1+ · watchOS 10.4+

A type that describes a video or audio conversation.

## Declaration

```swift
final class Conversation
```

## Topics

### Describing a conversation

- [localMember](conversation/localmember.md): The handle that identifies the local participant to remote participants.
- [state](conversation/state-swift.property.md): The current state of the conversation.
- [Conversation.State](conversation/state-swift.enum.md): Values that describe the current state of a conversation.
- [uuid](conversation/uuid.md): The unique identifier for a conversation.

### Observing a conversation

- [Conversation.Event](conversation/event.md): Values that tell the system what happened during a conversation.
- [Conversation.EndedReason](conversation/endedreason.md): Values that describe why a conversation ended.

### Updating a conversation

- [Conversation.Update](conversation/update.md): A type that describes new, changed, or deleted capabilities and attributes of a conversation.
- [Conversation.Capabilities](conversation/capabilities.md): A type that describes capabilities of a conversation.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Observable](https://developer.apple.com/documentation/observation/observable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### VoIP conversations

- [ConversationManager](conversationmanager.md): An interface for managing and observing VoIP conversations.
- [ConversationManagerDelegate](conversationmanagerdelegate.md): Methods for managing conversations and receiving VoIP conversation updates.
- [ConversationHistoryManager](conversationhistorymanager.md): An interface for managing and providing conversation history.
