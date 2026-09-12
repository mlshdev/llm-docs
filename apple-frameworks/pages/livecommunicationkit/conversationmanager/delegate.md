> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/livecommunicationkit/conversationmanager/delegate](https://developer.apple.com/documentation/livecommunicationkit/conversationmanager/delegate)

# delegate

**Framework:** LiveCommunicationKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS 1.1+ · watchOS 10.4+

The object that acts as the delegate of the conversation manager.

## Declaration

```swift
weak final var delegate: (any ConversationManagerDelegate)?
```

## See Also

### Configuring the manager

- [conversations](conversations.md): Currently active conversations.
- [pendingActions](pendingactions.md): All unfinished conversation actions.
