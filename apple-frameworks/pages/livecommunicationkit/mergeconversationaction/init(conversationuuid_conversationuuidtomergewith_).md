> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/livecommunicationkit/mergeconversationaction/init(conversationuuid:conversationuuidtomergewith:)

# init(conversationUUID:conversationUUIDToMergeWith:)

**Framework:** LiveCommunicationKit  
**Kind:** Initializer  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS 1.1+ · watchOS 10.4+

Creates an action that merges two conversations.

## Declaration

```swift
init(conversationUUID: UUID, conversationUUIDToMergeWith: UUID)
```

## Parameters

- `conversationUUID`: The unique identifier of the first conversation.
- `conversationUUIDToMergeWith`: The unique identifier of the other conversation.
