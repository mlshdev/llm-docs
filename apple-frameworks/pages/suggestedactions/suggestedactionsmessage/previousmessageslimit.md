> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/suggestedactions/suggestedactionsmessage/previousmessageslimit](https://developer.apple.com/documentation/suggestedactions/suggestedactionsmessage/previousmessageslimit)

# previousMessagesLimit

**Framework:** Suggested Actions  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The maximum number of previous messages that contribute to generating suggested actions.

## Declaration

```swift
static var previousMessagesLimit: Int { get }
```

<a id="discussion"></a>

## Discussion

When you pass an array of [SuggestedActionsMessage](../suggestedactionsmessage.md) values to the `previousMessages` parameter of [init(message:previousMessages:)](../suggestedactionsview/init%28message_previousmessages_%29.md) or [generate(message:previousMessages:)](../suggestedactionsview/generate%28message_previousmessages_%29.md), the framework only considers a limited number of provided previous messages. `previousMessagesLimit` represents this limit. The framework ignores any older messages that exceed it.

The value of `previousMessagesLimit` may change between OS releases. Read it at runtime rather than hardcoding a limit to avoid constructing [SuggestedActionsMessage](../suggestedactionsmessage.md) instances that the framework doesn’t use, as shown in the following example:

```swift
let previousMessages = allPreviousMessages
    .suffix(SuggestedActionsMessage.previousMessagesLimit)
    .map(\.suggestedActionsMessage)

SuggestedActionsView(
    message: message.suggestedActionsMessage,
    previousMessages: previousMessages
)
```
