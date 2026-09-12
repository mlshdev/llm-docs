> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/livecommunicationkit/conversationaction/init(conversationuuid:timeoutdate:)](https://developer.apple.com/documentation/livecommunicationkit/conversationaction/init(conversationuuid:timeoutdate:))

# init(conversationUUID:timeoutDate:)

**Framework:** LiveCommunicationKit  
**Kind:** Initializer  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS 1.1+ · watchOS 10.4+

Creates a conversation action.

## Declaration

```swift
convenience init(conversationUUID: UUID, timeoutDate: Date = Date(timeIntervalSinceNow: 30))
```

## Parameters

- `conversationUUID`: The unique identifier of the action’s associated conversation.
- `timeoutDate`: The point in time that marks when the action can’t be completed anymore.
