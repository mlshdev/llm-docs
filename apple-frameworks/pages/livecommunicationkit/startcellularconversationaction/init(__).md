> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/livecommunicationkit/startcellularconversationaction/init(_:)](https://developer.apple.com/documentation/livecommunicationkit/startcellularconversationaction/init(_:))

# init(\_:)

**Framework:** LiveCommunicationKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Creates an action that initiates a cellular conversation using information from a recent conversation.

## Declaration

```swift
init(_ recentConversation: ConversationHistoryManager.RecentConversation)
```

## Parameters

- `recentConversation`: A recent conversation to use for the new dial request.

<a id="discussion"></a>

## Discussion

Starting a cellular conversation from a recent conversation uses the same information associated with the conversation, including all handles, the account, and other information.

## See Also

### Request creation

- [init(\_:cellularService:)](init%28__cellularservice_%29.md): Creates an action that initiates a cellular network conversation.
