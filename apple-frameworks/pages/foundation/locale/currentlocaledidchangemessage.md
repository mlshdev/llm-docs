> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/locale/currentlocaledidchangemessage](https://developer.apple.com/documentation/foundation/locale/currentlocaledidchangemessage)

# Locale.CurrentLocaleDidChangeMessage

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A message the system sends when the current locale changes.

## Declaration

```swift
struct CurrentLocaleDidChangeMessage
```

<a id="overview"></a>

## Overview

Register an observer for this message if your app displays content that’s affected by the current locale, such as dates, times, numbers, and so on. Use the message to trigger updates to your app’s interface.

Observe this message with the identifier [currentLocaleDidChange](../notificationcenter/messageidentifier/currentlocaledidchange.md), or specify its type directly to the `addObserver(of:for:using:)` method. The [Subject](../notificationcenter/mainactormessage/subject.md) of this message type is [Locale](../locale.md).

This message interoperates with the notification [currentLocaleDidChangeNotification](../nslocale/currentlocaledidchangenotification.md). The system notifies observers of the message when the [NotificationCenter](../notificationcenter.md) posts the notification. Similarly, the system notifies observers of the notification when it posts the message.

## Topics

### Creating a message for a change in locale

- [init()](currentlocaledidchangemessage/init%28%29.md): Creates a message for the change in current locale.

## Relationships

### Conforms To

- [NotificationCenter.MainActorMessage](../notificationcenter/mainactormessage.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
