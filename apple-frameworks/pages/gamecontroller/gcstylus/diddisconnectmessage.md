> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcstylus/diddisconnectmessage](https://developer.apple.com/documentation/gamecontroller/gcstylus/diddisconnectmessage)

# GCStylus.DidDisconnectMessage

**Framework:** Game Controller  
**Kind:** Structure  
**Availability:** visionOS 26.0+

A message that posts after a stylus accessory disconnects from the device.

## Declaration

```swift
struct DidDisconnectMessage
```

<a id="overview"></a>

## Overview

Use the `.didDisconnect` identifier with `NotificationCenter` to listen for this message.

```
let observation = NotificationCenter.default.addObserver(of: GCStylus.self, for: .didDisconnect) { message in
   let stylus = message.stylus
}
```

## Topics

### Initializers

- [init(stylus:)](diddisconnectmessage/init%28stylus_%29.md)

### Instance Properties

- [stylus](diddisconnectmessage/stylus.md): The stylus object that disconnected from the device.

## Relationships

### Conforms To

- [NotificationCenter.MainActorMessage](../../foundation/notificationcenter/mainactormessage.md)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
