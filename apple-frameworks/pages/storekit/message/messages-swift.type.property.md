> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/message/messages-swift.type.property](https://developer.apple.com/documentation/storekit/message/messages-swift.type.property)

# messages

**Framework:** StoreKit  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

The asynchronous sequence that sends a message when the App Store creates it.

## Declaration

```swift
static var messages: Message.Messages { get }
```

## Mentioned In

- [Testing failing subscription renewals and In-App Purchases](../testing-failing-subscription-renewals-and-in-app-purchases.md)
- [Merchandising win-back offers in your app](../merchandising-win-back-offers-in-your-app.md)

<a id="Discussion"></a>

## Discussion

If your app doesn’t implement this message listener, StoreKit retrieves any messages from the App Store each time your app launches, and presents them by default.

For more information about listening for and displaying messages, see [Message](../message.md).

## See Also

### Getting messages and message reasons

- [reason](reason-swift.property.md): The reason that the App Store sends the message.
- [Message.Messages](messages-swift.struct.md): An asynchronous sequence of messages from the App Store.
- [Message.Reason](reason-swift.struct.md): Reasons for the App Store messages.
