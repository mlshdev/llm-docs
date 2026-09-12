> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcspatialaccessory/didconnectmessage](https://developer.apple.com/documentation/gamecontroller/gcspatialaccessory/didconnectmessage)

# GCSpatialAccessory.DidConnectMessage

**Framework:** Game Controller  
**Kind:** Structure  
**Availability:** visionOS 27.0+

A message that posts after a spatial accessory connects to the device.

## Declaration

```swift
struct DidConnectMessage
```

<a id="overview"></a>

## Overview

Use the `.didConnect` identifier with `NotificationCenter` to listen for this message.

```
let observation = NotificationCenter.default.addObserver(of: GCSpatialAccessory.self, for: .didConnect) { message in
   let accessory = message.spatialAccessory
}
```

Connections of spatial accessories will be reflected in the `spatialAccessories` array of the `GCSpatialAccessory` class when the message posts.

## Topics

### Initializers

- [init(spatialAccessory:)](didconnectmessage/init%28spatialaccessory_%29.md)

### Instance Properties

- [spatialAccessory](didconnectmessage/spatialaccessory.md): The spatial accessory object that connected to the device.

## Relationships

### Conforms To

- [NotificationCenter.MainActorMessage](../../foundation/notificationcenter/mainactormessage.md)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
