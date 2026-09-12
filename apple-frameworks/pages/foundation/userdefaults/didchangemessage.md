> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/userdefaults/didchangemessage](https://developer.apple.com/documentation/foundation/userdefaults/didchangemessage)

# UserDefaults.DidChangeMessage

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A message the system sends when a user-defaults setting changes.

## Declaration

```swift
struct DidChangeMessage
```

## Mentioned In

- [Accessing settings from your code](../accessing-settings-from-your-code.md)

<a id="overview"></a>

## Overview

When you write a new value to a setting, or remove an existing value, the system generates this message to alert you that your app’s settings changed. Use this message in other parts of your app to incorporate updated settings. The system posts this notification on the same thread you used to make the change.

If a different process changes your app’s settings, the system doesn’t generate this notification. To detect changes made by another process, register a key-value observer on the [UserDefaults](../userdefaults.md) object. Key-value observing reports all updates to setting values, regardless of which process made the change.

Observe this message with the identifier [didChange](../notificationcenter/messageidentifier/didchange-187tw.md), or specify its type directly to the `addObserver(of:for:using:)` method. The [Subject](../notificationcenter/mainactormessage/subject.md) of this message type is [UserDefaults](../userdefaults.md).

This message interoperates with the notification [didChangeNotification](didchangenotification.md). The system notifies observers of the message when the [NotificationCenter](../notificationcenter.md) posts the notification. Similarly, the system notifies observers of the notification when it posts the message.

## Topics

### Creating a message

- [init()](didchangemessage/init%28%29.md): Creates a message for a settings change to the user defaults.

## Relationships

### Conforms To

- [NotificationCenter.AsyncMessage](../notificationcenter/asyncmessage.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Monitoring settings changes and issues

- [didChangeNotification](didchangenotification.md): Posted when the current process changes the value of a setting.
- [UserDefaults.SizeLimitExceededMessage](sizelimitexceededmessage.md): A message the system sends when the size of the data in the defaults database exceeds the maximum.
- [sizeLimitExceededNotification](sizelimitexceedednotification.md): Posted when the amount of data in the defaults database exceeds the allowed maximum.
