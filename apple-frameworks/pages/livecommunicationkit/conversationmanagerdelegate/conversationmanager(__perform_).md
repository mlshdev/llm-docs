> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/livecommunicationkit/conversationmanagerdelegate/conversationmanager(_:perform:)

# conversationManager(\_:perform:)

**Framework:** LiveCommunicationKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS 1.1+ · watchOS 10.4+

Tells the delegate that the system requires a conversation action.

## Declaration

```swift
func conversationManager(_ manager: ConversationManager, perform action: ConversationAction)
```

## Parameters

- `manager`: A conversation manager informing the delegate that the system requires a conversation action.
- `action`: The action to perform and fulfill.

## See Also

### Performing actions

- [conversationManager(\_:timedOutPerforming:)](conversationmanager%28__timedoutperforming_%29.md): Tells the delegate that a conversation action wasn’t completed and timed out.
