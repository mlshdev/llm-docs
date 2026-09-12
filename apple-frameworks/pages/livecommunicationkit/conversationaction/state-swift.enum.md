> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/livecommunicationkit/conversationaction/state-swift.enum](https://developer.apple.com/documentation/livecommunicationkit/conversationaction/state-swift.enum)

# ConversationAction.State

**Framework:** LiveCommunicationKit  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS 1.1+ · watchOS 10.4+

A type that describes the current state of a conversation action.

## Declaration

```swift
enum State
```

## Topics

### Constants

- [ConversationAction.State.complete](state-swift.enum/complete.md): The action finished successfully.
- [ConversationAction.State.failed(reason:)](state-swift.enum/failed%28reason_%29.md): Indicates that the action failed.
- [ConversationAction.State.idle](state-swift.enum/idle.md): The action has been created but hasn’t started.
- [ConversationAction.State.running](state-swift.enum/running.md): The action is currently processing.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing action attributes

- [conversationUUID](conversationuuid.md): The unique identifier for the action’s associated conversation.
- [uuid](uuid.md): The unique identifier that identifies the action.
- [timeoutDate](timeoutdate.md): The point in time that marks when the action can’t be completed anymore.
- [state](state-swift.property.md): The action’s current state.
