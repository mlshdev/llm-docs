> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcmouse/didconnectmessage](https://developer.apple.com/documentation/gamecontroller/gcmouse/didconnectmessage)

# GCMouse.DidConnectMessage

**Framework:** Game Controller  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A message that posts after a mouse accessory connects to the device.

## Declaration

```swift
struct DidConnectMessage
```

<a id="overview"></a>

## Overview

Use the `didConnect` identifier with `NotificationCenter` to listen for this message.

```
let observation = NotificationCenter.default.addObserver(of: GCMouse.self, for: .didConnect) { message in
   let mouse = message.mouse
}
```

Connections of mouse accessories will be reflected in the `mice` array of the `GCMouse` class when the message posts.

## Topics

### Initializers

- [init(mouse:)](didconnectmessage/init%28mouse_%29.md)

### Instance Properties

- [mouse](didconnectmessage/mouse.md): The mouse object that connected to the device.

## Relationships

### Conforms To

- [NotificationCenter.MainActorMessage](../../foundation/notificationcenter/mainactormessage.md)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
