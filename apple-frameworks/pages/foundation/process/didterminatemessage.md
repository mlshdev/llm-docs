> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/process/didterminatemessage](https://developer.apple.com/documentation/foundation/process/didterminatemessage)

# Process.DidTerminateMessage

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** macOS 26.0+

A message the system sends when a task stops operation.

## Declaration

```swift
struct DidTerminateMessage
```

<a id="overview"></a>

## Overview

Observe this message with the identifier [didTerminate](../notificationcenter/messageidentifier/didterminate.md), or specify its type directly to the `addObserver(of:for:using:)` method. The [Subject](../notificationcenter/mainactormessage/subject.md) of this message type is [Process](../process.md).

This message interoperates with the notification [didTerminateNotification](didterminatenotification.md). The system notifies observers of the message when the [NotificationCenter](../notificationcenter.md) posts the notification. Similarly, the system notifies observers of the notification when it posts the message.

## Topics

### Creating a message

- [init()](didterminatemessage/init%28%29.md): Creates a message about a stopped task.

## Relationships

### Conforms To

- [NotificationCenter.AsyncMessage](../notificationcenter/asyncmessage.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
