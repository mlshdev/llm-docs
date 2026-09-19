> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gamecontroller/gcracingwheel/diddisconnectmessage

# GCRacingWheel.DidDisconnectMessage

**Framework:** Game Controller  
**Kind:** Structure  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

A message that posts after a racing wheel accessory disconnects from the device.

## Declaration

```swift
struct DidDisconnectMessage
```

<a id="overview"></a>

## Overview

Use the `.didDisconnect` identifier with `NotificationCenter` to listen for this message.

```
let observation = NotificationCenter.default.addObserver(of: GCRacingWheel.self, for: .didDisconnect) { message in
   let racingWheel = message.racingWheel
}
```

## Topics

### Initializers

- [init(racingWheel:)](diddisconnectmessage/init%28racingwheel_%29.md)

### Instance Properties

- [racingWheel](diddisconnectmessage/racingwheel.md): The racing wheel object that disconnected from the device.

## Relationships

### Conforms To

- [NotificationCenter.MainActorMessage](../../foundation/notificationcenter/mainactormessage.md)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
