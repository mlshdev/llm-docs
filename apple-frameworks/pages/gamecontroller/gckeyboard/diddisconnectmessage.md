> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gckeyboard/diddisconnectmessage](https://developer.apple.com/documentation/gamecontroller/gckeyboard/diddisconnectmessage)

# GCKeyboard.DidDisconnectMessage

**Framework:** Game Controller  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A message that posts after a keyboard accessory disconnects from the device.

## Declaration

```swift
struct DidDisconnectMessage
```

<a id="overview"></a>

## Overview

Use the `didDisconnect` identifier with `NotificationCenter` to listen for this message.

```
let observation = NotificationCenter.default.addObserver(of: GCKeyboard.self, for: .didDisconnect) { message in
   let keyboard = message.keyboard
}
```

## Topics

### Initializers

- [init(keyboard:)](diddisconnectmessage/init%28keyboard_%29.md)

### Instance Properties

- [keyboard](diddisconnectmessage/keyboard.md): The keyboard object that disconnected from the device.

## Relationships

### Conforms To

- [NotificationCenter.MainActorMessage](../../foundation/notificationcenter/mainactormessage.md)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
