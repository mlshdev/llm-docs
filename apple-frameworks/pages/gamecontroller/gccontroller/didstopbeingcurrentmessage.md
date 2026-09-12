> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontroller/didstopbeingcurrentmessage](https://developer.apple.com/documentation/gamecontroller/gccontroller/didstopbeingcurrentmessage)

# GCController.DidStopBeingCurrentMessage

**Framework:** Game Controller  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A message that posts after a game controller stops being the most recently used controller.

## Declaration

```swift
struct DidStopBeingCurrentMessage
```

<a id="overview"></a>

## Overview

Use the `.didStopBeingCurrent` identifier with `NotificationCenter` to listen for this message.

```
let observation = NotificationCenter.default.addObserver(of: GCController.self, for: .didStopBeingCurrent) { message in
   let controller = message.controller
}
```

## Topics

### Initializers

- [init(controller:)](didstopbeingcurrentmessage/init%28controller_%29.md)

### Instance Properties

- [controller](didstopbeingcurrentmessage/controller.md): The controller object that was previously the current controller.

## Relationships

### Conforms To

- [NotificationCenter.MainActorMessage](../../foundation/notificationcenter/mainactormessage.md)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
