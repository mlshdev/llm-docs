> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/message/messages-swift.struct](https://developer.apple.com/documentation/storekit/message/messages-swift.struct)

# Message.Messages

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An asynchronous sequence of messages from the App Store.

## Declaration

```swift
struct Messages
```

<a id="overview"></a>

## Overview

The `Message.Messages` structure provides a sequence of messages that the App Store sends to your app. Iterate over the contents of this structure asynchronously to retrieve each message if your app needs to delay the message.

Don’t create this structure directly. Instead, use [messages](messages-swift.type.property.md) method to retrieve the messages.

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting messages and message reasons

- [messages](messages-swift.type.property.md): The asynchronous sequence that sends a message when the App Store creates it.
- [reason](reason-swift.property.md): The reason that the App Store sends the message.
- [Message.Reason](reason-swift.struct.md): Reasons for the App Store messages.
