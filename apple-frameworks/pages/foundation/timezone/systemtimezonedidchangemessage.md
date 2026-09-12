> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/timezone/systemtimezonedidchangemessage](https://developer.apple.com/documentation/foundation/timezone/systemtimezonedidchangemessage)

# TimeZone.SystemTimeZoneDidChangeMessage

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A message the system sends when the system time zone changes.

## Declaration

```swift
struct SystemTimeZoneDidChangeMessage
```

<a id="overview"></a>

## Overview

Observe this message with the identifier [systemTimeZoneDidChange](../notificationcenter/messageidentifier/systemtimezonedidchange.md), or specify its type directly to the `addObserver(of:for:using:)` method. The [Subject](../notificationcenter/mainactormessage/subject.md) of this message type is [TimeZone](../timezone.md).

This message interoperates with the notification [NSSystemTimeZoneDidChange](../nsnotification/name-swift.struct/nssystemtimezonedidchange.md). The system notifies observers of the message when the [NotificationCenter](../notificationcenter.md) posts the notification. Similarly, the system notifies observers of the notification when it posts the message.

## Topics

### Creating a message for a system time zone change

- [init(previousTimeZone:)](systemtimezonedidchangemessage/init%28previoustimezone_%29.md): Creates a message for a change in the system time zone.

### Accessing message properties

- [previousTimeZone](systemtimezonedidchangemessage/previoustimezone.md): The previous system time zone, prior to the change.

## Relationships

### Conforms To

- [NotificationCenter.MainActorMessage](../notificationcenter/mainactormessage.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
