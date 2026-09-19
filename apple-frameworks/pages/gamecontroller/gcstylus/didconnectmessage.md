> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gamecontroller/gcstylus/didconnectmessage

# GCStylus.DidConnectMessage

**Framework:** Game Controller  
**Kind:** Structure  
**Availability:** visionOS 26.0+

A message that posts after a stylus accessory connects to the device.

## Declaration

```swift
struct DidConnectMessage
```

<a id="overview"></a>

## Overview

Use the `.didConnect` identifier with `NotificationCenter` to listen for this message.

```
let observation = NotificationCenter.default.addObserver(of: GCStylus.self, for: .didCnnect) { message in
   let stylus = message.stylus
}
```

Connections of stylus accessories will be reflected in the `styli` array of the `GCStylus` class when the message posts.

## Topics

### Initializers

- [init(stylus:)](didconnectmessage/init%28stylus_%29.md)

### Instance Properties

- [stylus](didconnectmessage/stylus.md): The stylus object that connected to the device.

## Relationships

### Conforms To

- [NotificationCenter.MainActorMessage](../../foundation/notificationcenter/mainactormessage.md)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
