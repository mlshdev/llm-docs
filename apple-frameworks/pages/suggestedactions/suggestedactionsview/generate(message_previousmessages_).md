> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/suggestedactions/suggestedactionsview/generate(message:previousmessages:)](https://developer.apple.com/documentation/suggestedactions/suggestedactionsview/generate(message:previousmessages:))

# generate(message:previousMessages:)

**Framework:** Suggested Actions  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Fetches and caches suggested actions for the provided message.

## Declaration

```swift
nonisolated static func generate(message: SuggestedActionsMessage, previousMessages: [SuggestedActionsMessage] = []) async
```

## Parameters

- `message`: The message that you want to generate suggested actions for.
- `previousMessages`: An array of messages that precede the provided `message`. The Suggested Actions framework uses them as context to generate suggested actions for the `message`. The system limits the number of previous messages it considers to the value of [previousMessagesLimit](../suggestedactionsmessage/previousmessageslimit.md). This parameter defaults to an empty array if you don’t include previous messages.

<a id="discussion"></a>

## Discussion

Call this method ahead of presenting a [SuggestedActionsView](../suggestedactionsview.md) to generate and cache suggested actions for future use. When you later initialize the view with a [SuggestedActionsMessage](../suggestedactionsmessage.md) that has a matching `id`, the view uses the cached result and renders immediately without displaying a loading indicator.

Generate suggested actions for future use when you know that a person is likely to see them soon, for example, when someone opens a conversation.

You can call this method multiple times with different messages. Within a single conversation, the framework deduplicates suggestions: If a suggested action appears for an earlier message, it doesn’t appear again for later messages.

The following example shows how an app might use a `ChatManager` class that processes an incoming message and creates a suggested actions view:

```swift
@Observable
class ChatManager {
    private(set) var messages: [ChatMessage] = []

    // Process a new incoming message and generate suggested
    // actions to let the Suggested Actions framework cache them for future use.
    func handleIncomingMessage(_ newMessage: ChatMessage) async {
        await SuggestedActionsView.generate(
            message: newMessage.suggestedActionsMessage,
            previousMessages: newMessage.previousMessages
                .suffix(SuggestedActionsMessage.previousMessagesLimit)
                .map(\.suggestedActionsMessage)
        )
        messages.append(newMessage)
    }
}
```

## See Also

### Displaying suggested actions

- [init(message:previousMessages:)](init%28message_previousmessages_%29.md): Creates a view that shows suggested actions for the specified message.
- [SuggestedActionsMessage](../suggestedactionsmessage.md): A representation of the message you use as context for suggested actions.
