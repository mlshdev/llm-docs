> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/livecommunicationkit/conversationmanager/perform(_:)

# perform(\_:)

**Framework:** LiveCommunicationKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS 1.1+ · watchOS 10.4+

Tells the conversation manager to asynchronously perform actions for a conversation.

## Declaration

```swift
final func perform(_ actions: [ConversationAction]) async throws
```

## Parameters

- `actions`: An array of actions to perform for a conversation.

## See Also

### Managing conversations

- [invalidate()](invalidate%28%29.md): Invalidates the conversation manager, ends all conversations, and fails all pending concersation actions.
