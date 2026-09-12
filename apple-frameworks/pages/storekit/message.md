> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/message](https://developer.apple.com/documentation/storekit/message)

# Message

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An instance for receiving and displaying App Store messages in your app.

## Declaration

```swift
struct Message
```

## Mentioned In

- [Merchandising win-back offers in your app](merchandising-win-back-offers-in-your-app.md)
- [Testing win-back offers in the sandbox environment](testing-win-back-offers-in-the-sandbox-environment.md)
- [Choosing a StoreKit API for In-App Purchases](choosing-a-storekit-api-for-in-app-purchases.md)
- [Testing failing subscription renewals and In-App Purchases](testing-failing-subscription-renewals-and-in-app-purchases.md)

<a id="overview"></a>

## Overview

A StoreKit message represents a sheet that appears over your app to display important information from the App Store. Messages have a reason, which the  [reason](message/reason-swift.property.md) value indicates. StoreKit retrieves any messages from the App Store each time your app launches, and presents them by default.

> **Note**

>  StoreKit displays messages from the App Store regardless of the SDK version you use to build your app. Apps built for iOS 16 and later can implement a message listener and delay or suppress messages.

You can optionally use the `Message` API to control message presentation by delaying or suppressing messages. Your app can listen for messages with the [messages](message/messages-swift.type.property.md) asynchronous sequence, and can display them at a particular time by calling [display(in:)](message/display%28in_%29.md), or [DisplayMessageAction](displaymessageaction.md) for SwiftUI views. For example, you may choose to delay messages in views where an interrupting sheet might confuse someone, such as in the middle of an onboarding flow, or if your app is providing real-time instructions.

StoreKit presents message sheets only if a message is still relevant. For example, if a person resolves the issue outside your app before it calls [display(in:)](message/display%28in_%29.md), StoreKit doesn’t present the message. StoreKit ensures that it presents each unique message once, even if the app asks to display messages multiple times.

<a id="Listen-for-and-display-messages"></a>

### Listen for and display messages

If you want to defer or suppress App Store messages, set up the message listener in your app when your app launches.

To control when a message may display, call [display(in:)](message/display%28in_%29.md) or [DisplayMessageAction](displaymessageaction.md) when your app’s ready to have StoreKit present the message. If your app doesn’t call either of these APIs after it listens for messages, it suppresses the messages. The following example is for apps that use [UIKit](../uikit.md):

```swift
// Listen for App Store messages.
for await message in StoreKit.Message.messages {
    // Call display on the message when the app is ready.
}

// Indicate the app is ready to display the message.
guard let windowScene = self.view.window?.windowScene else {
    fatalError("Could not get window scene.")
}
try? message.display(in: windowScene)
```

For a code example that uses SwiftUI, see [DisplayMessageAction](displaymessageaction.md).

## Topics

### Getting messages and message reasons

- [messages](message/messages-swift.type.property.md): The asynchronous sequence that sends a message when the App Store creates it.
- [reason](message/reason-swift.property.md): The reason that the App Store sends the message.
- [Message.Messages](message/messages-swift.struct.md): An asynchronous sequence of messages from the App Store.
- [Message.Reason](message/reason-swift.struct.md): Reasons for the App Store messages.

### Displaying messages

- [display(in:)](message/display%28in_%29.md): Requests the system to display the App Store message in the window scene.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Messages

- [Message.Reason](message/reason-swift.struct.md): Reasons for the App Store messages.
- [DisplayMessageAction](displaymessageaction.md): An instance that asks StoreKit to display an App Store message, if appropriate.
