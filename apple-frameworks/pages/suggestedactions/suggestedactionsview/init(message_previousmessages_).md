> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/suggestedactions/suggestedactionsview/init(message:previousmessages:)](https://developer.apple.com/documentation/suggestedactions/suggestedactionsview/init(message:previousmessages:))

# init(message:previousMessages:)

**Framework:** Suggested Actions  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Creates a view that shows suggested actions for the specified message.

## Declaration

```swift
@MainActor init(message: SuggestedActionsMessage, previousMessages: [SuggestedActionsMessage] = [])
```

## Parameters

- `message`: The message that you want to generate suggested actions for.
- `previousMessages`: An array of messages that precede the provided `message`. The Suggested Actions framework uses them as context to generate suggested actions for the `message`. The system limits the number of previous messages it considers to the value of [previousMessagesLimit](../suggestedactionsmessage/previousmessageslimit.md). This parameter defaults to an empty array if you don’t include previous messages.

<a id="discussion"></a>

## Discussion

Use this initializer to present suggested actions that the framework generates for a provided message. The Suggested Actions framework analyzes the message, and previous messages you provide as additional context, then shows relevant actions that a person can take.

If you call [generate(message:previousMessages:)](generate%28message_previousmessages_%29.md) to generate suggested actions for future use, and later pass a [SuggestedActionsMessage](../suggestedactionsmessage.md), the Suggested Actions framework checks for suggested actions it already generated and cached. If it finds a message with a matching `id`, the `SuggestedActionsView` uses the cached result and renders the suggested actions immediately.

The following example shows how an app might show a `SuggestedActionsView` with information from previous messages:

```swift
struct ChatView: View {
    @Binding
    var messages: [ChatMessage]

    var body: some View {
        ForEach(messages) { message in
            ChatBubble(message)

            SuggestedActionsView(
                message: message.suggestedActionsMessage,
                previousMessages: message.previousMessages
                    .suffix(SuggestedActionsMessage.previousMessagesLimit)
                    .map(\.suggestedActionsMessage)
            )
        }
    }
}
```

## See Also

### Displaying suggested actions

- [generate(message:previousMessages:)](generate%28message_previousmessages_%29.md): Fetches and caches suggested actions for the provided message.
- [SuggestedActionsMessage](../suggestedactionsmessage.md): A representation of the message you use as context for suggested actions.
