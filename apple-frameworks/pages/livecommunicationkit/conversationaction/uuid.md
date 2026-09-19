> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/livecommunicationkit/conversationaction/uuid

# uuid

**Framework:** LiveCommunicationKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS 1.1+ · watchOS 10.4+

The unique identifier that identifies the action.

## Declaration

```swift
final var uuid: UUID { get }
```

## See Also

### Accessing action attributes

- [conversationUUID](conversationuuid.md): The unique identifier for the action’s associated conversation.
- [timeoutDate](timeoutdate.md): The point in time that marks when the action can’t be completed anymore.
- [state](state-swift.property.md): The action’s current state.
- [ConversationAction.State](state-swift.enum.md): A type that describes the current state of a conversation action.
