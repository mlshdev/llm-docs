> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/livecommunicationkit/conversationmanagerdelegate/conversationmanagerdidbegin(_:)

# conversationManagerDidBegin(\_:)

**Framework:** LiveCommunicationKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS 1.1+ · watchOS 10.4+

Tells the delegate that your app has started a conversation manager.

## Declaration

```swift
func conversationManagerDidBegin(_ manager: ConversationManager)
```

## Parameters

- `manager`: The conversation manager that your app started.

## See Also

### Observing the conversation manager

- [conversationManagerDidReset(\_:)](conversationmanagerdidreset%28__%29.md): Tells the delegate that the app has reset the conversation manager.
