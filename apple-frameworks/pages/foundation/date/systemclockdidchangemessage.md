> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/systemclockdidchangemessage](https://developer.apple.com/documentation/foundation/date/systemclockdidchangemessage)

# Date.SystemClockDidChangeMessage

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A message the system sends when the system clock changes.

## Declaration

```swift
struct SystemClockDidChangeMessage
```

<a id="overview"></a>

## Overview

Various events can initiate this message, such as a call to `settimeofday(_:_:)`, or if the person using the device changes values in Settings.

Observe this message with the identifier [systemClockDidChange](../notificationcenter/messageidentifier/systemclockdidchange.md), or specify its type directly to the `addObserver(of:for:using:)` method. The [Subject](../notificationcenter/mainactormessage/subject.md) of this message type is [Date](../date.md).

This message interoperates with the notification [NSSystemClockDidChange](../nsnotification/name-swift.struct/nssystemclockdidchange.md). The system notifies observers of the message when the [NotificationCenter](../notificationcenter.md) posts the notification. Similarly, the system notifies observers of the notification when it posts the message.

## Topics

### Creating a message for a system clock change

- [init()](systemclockdidchangemessage/init%28%29.md): Creates a message for a change in the system clock.

## Relationships

### Conforms To

- [NotificationCenter.MainActorMessage](../notificationcenter/mainactormessage.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
