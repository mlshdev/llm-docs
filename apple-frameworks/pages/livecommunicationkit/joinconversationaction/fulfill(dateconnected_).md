> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/livecommunicationkit/joinconversationaction/fulfill(dateconnected:)

# fulfill(dateConnected:)

**Framework:** LiveCommunicationKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS 1.1+ · watchOS 10.4+

Indicates that the local participant successfully joined an incoming conversation.

## Declaration

```swift
final func fulfill(dateConnected: Date)
```

## Parameters

- `dateConnected`: The point in time when the local participant joined a conversation.
