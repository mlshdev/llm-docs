> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/livecommunicationkit/conversation/localmember](https://developer.apple.com/documentation/livecommunicationkit/conversation/localmember)

# localMember

**Framework:** LiveCommunicationKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS 1.1+ · watchOS 10.4+

The handle that identifies the local participant to remote participants.

## Declaration

```swift
final var localMember: Handle? { get }
```

<a id="discussion"></a>

## Discussion

The `localMember` is only available to the [ConversationManager](../conversationmanager.md) that provides the [Conversation](../conversation.md).

## See Also

### Describing a conversation

- [state](state-swift.property.md): The current state of the conversation.
- [Conversation.State](state-swift.enum.md): Values that describe the current state of a conversation.
- [uuid](uuid.md): The unique identifier for a conversation.
