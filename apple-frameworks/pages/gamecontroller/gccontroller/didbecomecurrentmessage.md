> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontroller/didbecomecurrentmessage](https://developer.apple.com/documentation/gamecontroller/gccontroller/didbecomecurrentmessage)

# GCController.DidBecomeCurrentMessage

**Framework:** Game Controller  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A message that posts after a game controller becomes the most recently used controller.

## Declaration

```swift
struct DidBecomeCurrentMessage
```

<a id="overview"></a>

## Overview

This is a good time to swap out UI to match the new current controller, and unregister any handlers with the old current controller.

Use the `.didBecomeCurrent` identifier with `NotificationCenter` to listen for this message.

```
let observation = NotificationCenter.default.addObserver(of: GCController.self, for: .didBecomeCurrent) { message in
   let controller = message.controller
}
```

## Topics

### Initializers

- [init(controller:)](didbecomecurrentmessage/init%28controller_%29.md)

### Instance Properties

- [controller](didbecomecurrentmessage/controller.md): The controller object that became current.

## Relationships

### Conforms To

- [NotificationCenter.MainActorMessage](../../foundation/notificationcenter/mainactormessage.md)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
