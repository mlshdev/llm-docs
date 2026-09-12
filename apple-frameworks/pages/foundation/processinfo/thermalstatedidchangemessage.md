> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/processinfo/thermalstatedidchangemessage](https://developer.apple.com/documentation/foundation/processinfo/thermalstatedidchangemessage)

# ProcessInfo.ThermalStateDidChangeMessage

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A message the system sends when the device’s thermal state changes.

## Declaration

```swift
struct ThermalStateDidChangeMessage
```

<a id="overview"></a>

## Overview

To observe this message, access the [thermalState](thermalstate-swift.property.md) property prior to adding your observer.

Observe this message with the identifier [thermalStateDidChange](../notificationcenter/messageidentifier/thermalstatedidchange.md), or specify its type directly to the `addObserver(of:for:using:)` method. The [Subject](../notificationcenter/mainactormessage/subject.md) of this message type is [ProcessInfo](../processinfo.md).

This message interoperates with the notification [thermalStateDidChangeNotification](thermalstatedidchangenotification.md). The system notifies observers of the message when the [NotificationCenter](../notificationcenter.md) posts the notification. Similarly, the system notifies observers of the notification when it posts the message.

## Topics

### Creating a message

- [init()](thermalstatedidchangemessage/init%28%29.md): Creates a message about a thermal state change.

## Relationships

### Conforms To

- [NotificationCenter.AsyncMessage](../notificationcenter/asyncmessage.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Working with notification messsages

- [ProcessInfo.PowerStateDidChangeMessage](powerstatedidchangemessage.md): A message the system sends when the device’s power state changes.
