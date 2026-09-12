> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontroller/diddisconnectmessage](https://developer.apple.com/documentation/gamecontroller/gccontroller/diddisconnectmessage)

# GCController.DidDisconnectMessage

**Framework:** Game Controller  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A message that posts after a game controller accessory disconnects from the device.

## Declaration

```swift
struct DidDisconnectMessage
```

<a id="overview"></a>

## Overview

Use the `.didDisconnect` identifier with `NotificationCenter` to listen for this message.

```
let observation = NotificationCenter.default.addObserver(of: GCController.self, for: .didDisconnect) { message in
   let controller = message.controller
}
```

## Topics

### Initializers

- [init(controller:)](diddisconnectmessage/init%28controller_%29.md)

### Instance Properties

- [controller](diddisconnectmessage/controller.md): The controller object that disconnected from the device.

## Relationships

### Conforms To

- [NotificationCenter.MainActorMessage](../../foundation/notificationcenter/mainactormessage.md)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
