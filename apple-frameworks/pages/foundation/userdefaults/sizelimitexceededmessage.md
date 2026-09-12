> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/userdefaults/sizelimitexceededmessage](https://developer.apple.com/documentation/foundation/userdefaults/sizelimitexceededmessage)

# UserDefaults.SizeLimitExceededMessage

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A message the system sends when the size of the data in the defaults database exceeds the maximum.

## Declaration

```swift
struct SizeLimitExceededMessage
```

<a id="overview"></a>

## Overview

In tvOS, the system posts this message as a warning when the size of your app’s defaults database reaches 512 kilobytes. If your app continues to write to the defaults database, the system terminates your app when the database reaches or exceeds 1 megabyte in size.

The system doesn’t post size exceeded messages for platforms other than tvOS. The system posts this message on your app’s main thread.

Observe this message with the identifier [sizeLimitExceeded](../notificationcenter/messageidentifier/sizelimitexceeded.md), or specify its type directly to the `addObserver(of:for:using:)` method. The [Subject](../notificationcenter/mainactormessage/subject.md) of this message type is [UserDefaults](../userdefaults.md).

This message interoperates with the notification [sizeLimitExceededNotification](sizelimitexceedednotification.md). The system notifies observers of the message when the [NotificationCenter](../notificationcenter.md) posts the notification. Similarly, the system notifies observers of the notification when it posts the message.

## Topics

### Creating a message

- [init()](sizelimitexceededmessage/init%28%29.md): Creates a message when the user defaults database of a tvOS app exceeds its maximum size.

## Relationships

### Conforms To

- [NotificationCenter.MainActorMessage](../notificationcenter/mainactormessage.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Monitoring settings changes and issues

- [UserDefaults.DidChangeMessage](didchangemessage.md): A message the system sends when a user-defaults setting changes.
- [didChangeNotification](didchangenotification.md): Posted when the current process changes the value of a setting.
- [sizeLimitExceededNotification](sizelimitexceedednotification.md): Posted when the amount of data in the defaults database exceeds the allowed maximum.
