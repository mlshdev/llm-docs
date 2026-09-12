> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/processinfo/powerstatedidchangemessage](https://developer.apple.com/documentation/foundation/processinfo/powerstatedidchangemessage)

# ProcessInfo.PowerStateDidChangeMessage

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A message the system sends when the device’s power state changes.

## Declaration

```swift
struct PowerStateDidChangeMessage
```

<a id="overview"></a>

## Overview

After your observer receives this notification, query the [isLowPowerModeEnabled](islowpowermodeenabled.md) property to determine the current power state of the device. If Low Power Mode is active, take appropriate steps to reduce activity in your app. Otherwise, your app can resume normal operations.

Observe this message with the identifier [powerStateDidChange](../notificationcenter/messageidentifier/powerstatedidchange.md), or specify its type directly to the `addObserver(of:for:using:)` method. The [Subject](../notificationcenter/mainactormessage/subject.md) of this message type is [ProcessInfo](../processinfo.md).

This message interoperates with the notification [NSProcessInfoPowerStateDidChange](../nsnotification/name-swift.struct/nsprocessinfopowerstatedidchange.md). The system notifies observers of the message when the [NotificationCenter](../notificationcenter.md) posts the notification. Similarly, the system notifies observers of the notification when it posts the message.

## Topics

### Creating a message

- [init()](powerstatedidchangemessage/init%28%29.md): Creates a message about a power state change.

## Relationships

### Conforms To

- [NotificationCenter.AsyncMessage](../notificationcenter/asyncmessage.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Working with notification messsages

- [ProcessInfo.ThermalStateDidChangeMessage](thermalstatedidchangemessage.md): A message the system sends when the device’s thermal state changes.
