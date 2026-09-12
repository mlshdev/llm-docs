> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcracingwheel/didconnectmessage](https://developer.apple.com/documentation/gamecontroller/gcracingwheel/didconnectmessage)

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
