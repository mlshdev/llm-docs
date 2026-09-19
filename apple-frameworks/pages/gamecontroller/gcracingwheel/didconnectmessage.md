> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gamecontroller/gcracingwheel/didconnectmessage

# GCRacingWheel.DidConnectMessage

**Framework:** Game Controller  
**Kind:** Structure  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

A message that posts after a racing wheel accessory connects to the device.

## Declaration

```swift
struct DidConnectMessage
```

<a id="overview"></a>

## Overview

Use the `.didConnect` identifier with `NotificationCenter` to listen for this message.

```
let observation = NotificationCenter.default.addObserver(of: GCRacingWheel.self, for: .didConnect) { message in
   let racingWheel = message.racingWheel
}
```

Connections of controller accessories will be reflected in the `controllers` array of the `GCController` class when the message posts.

## Topics

### Initializers

- [init(racingWheel:)](didconnectmessage/init%28racingwheel_%29.md)

### Instance Properties

- [racingWheel](didconnectmessage/racingwheel.md): The racing wheel object that connected to the device.

## Relationships

### Conforms To

- [NotificationCenter.MainActorMessage](../../foundation/notificationcenter/mainactormessage.md)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
