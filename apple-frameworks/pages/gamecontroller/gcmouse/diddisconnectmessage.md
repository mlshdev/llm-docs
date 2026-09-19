> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gamecontroller/gcmouse/diddisconnectmessage

# GCMouse.DidDisconnectMessage

**Framework:** Game Controller  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A message that posts after a mouse accessory disconnects from the device.

## Declaration

```swift
struct DidDisconnectMessage
```

<a id="overview"></a>

## Overview

Use the `didDisconnect` identifier with `NotificationCenter` to listen for this message.

```
let observation = NotificationCenter.default.addObserver(of: GCMouse.self, for: .didDisconnect) { message in
   let mouse = message.mouse
}
```

## Topics

### Initializers

- [init(mouse:)](diddisconnectmessage/init%28mouse_%29.md)

### Instance Properties

- [mouse](diddisconnectmessage/mouse.md): The mouse object that disconnected from the device.

## Relationships

### Conforms To

- [NotificationCenter.MainActorMessage](../../foundation/notificationcenter/mainactormessage.md)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
