> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/livecommunicationkit/conversationmanagerdelegate/conversationmanager(_:timedoutperforming:)](https://developer.apple.com/documentation/livecommunicationkit/conversationmanagerdelegate/conversationmanager(_:timedoutperforming:))

# conversationManager(\_:timedOutPerforming:)

**Framework:** LiveCommunicationKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS 1.1+ · watchOS 10.4+

Tells the delegate that a conversation action wasn’t completed and timed out.

## Declaration

```swift
func conversationManager(_ manager: ConversationManager, timedOutPerforming action: ConversationAction)
```

## Parameters

- `manager`: A conversation manager informing the delegate that the requested action wasn’t completed and timed out.
- `action`: The action that wasn’t completed and timed out.

## See Also

### Performing actions

- [conversationManager(\_:perform:)](conversationmanager%28__perform_%29.md): Tells the delegate that the system requires a conversation action.
