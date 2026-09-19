> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gamecontroller/gccontroller/didconnectmessage

# GCController.DidConnectMessage

**Framework:** Game Controller  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A message that posts after a game controller accessory connects to the device.

## Declaration

```swift
struct DidConnectMessage
```

<a id="overview"></a>

## Overview

Use the `.didConnect` identifier with `NotificationCenter` to listen for this message.

```
let observation = NotificationCenter.default.addObserver(of: GCController.self, for: .didConnect) { message in
   let controller = message.controller
}
```

Connections of controller accessories will be reflected in the `controllers` array of the `GCController` class when the message posts.

## Topics

### Initializers

- [init(controller:)](didconnectmessage/init%28controller_%29.md)

### Instance Properties

- [controller](didconnectmessage/controller.md): The controller object that connected to the device.

## Relationships

### Conforms To

- [NotificationCenter.MainActorMessage](../../foundation/notificationcenter/mainactormessage.md)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
