> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/livecommunicationkit/telephonyconversationmanager/startcellularconversation(_:)

# startCellularConversation(\_:)

**Framework:** LiveCommunicationKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Starts a cellular conversation using the provided action.

## Declaration

```swift
final func startCellularConversation(_ action: StartCellularConversationAction) async throws
```

## Parameters

- `action`: The action that initiates a cellular conversation.

## Mentioned In

- [Preparing your app to be the default dialer app](../preparing-your-app-to-be-the-default-dialer-app.md)

## See Also

### Starting a conversation

- [sharedInstance](sharedinstance.md): The shared object that manages cellular conversations.
