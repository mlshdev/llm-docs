> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gamecontroller/gcspatialaccessory/diddisconnectmessage

# GCSpatialAccessory.DidDisconnectMessage

**Framework:** Game Controller  
**Kind:** Structure  
**Availability:** visionOS 27.0+

A message that posts after a spatial accessory disconnects from the device.

## Declaration

```swift
struct DidDisconnectMessage
```

<a id="overview"></a>

## Overview

Use the `.didDisconnect` identifier with `NotificationCenter` to listen for this message.

```
let observation = NotificationCenter.default.addObserver(of: GCSpatialAccessory.self, for: .didDisconnect) { message in
   let spatialAccessory = message.spatialAccessory
}
```

## Topics

### Initializers

- [init(spatialAccessory:)](diddisconnectmessage/init%28spatialaccessory_%29.md)

### Instance Properties

- [spatialAccessory](diddisconnectmessage/spatialaccessory.md): The spatial object that disconnected from the device.

## Relationships

### Conforms To

- [NotificationCenter.MainActorMessage](../../foundation/notificationcenter/mainactormessage.md)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
