> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcmouse/didbecomecurrentmessage](https://developer.apple.com/documentation/gamecontroller/gcmouse/didbecomecurrentmessage)

# GCMouse.DidBecomeCurrentMessage

**Framework:** Game Controller  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A message that posts after a mouse becomes the most recently used mouse.

## Declaration

```swift
struct DidBecomeCurrentMessage
```

<a id="overview"></a>

## Overview

Use the `.didBecomeCurrent` identifier with `NotificationCenter` to listen for this message.

```
let observation = NotificationCenter.default.addObserver(of: GCMouse.self, for: .didBecomeCurrent) { message in
   let mouse = message.mouse
}
```

## Topics

### Initializers

- [init(mouse:)](didbecomecurrentmessage/init%28mouse_%29.md)

### Instance Properties

- [mouse](didbecomecurrentmessage/mouse.md): The mouse object that became current.

## Relationships

### Conforms To

- [NotificationCenter.MainActorMessage](../../foundation/notificationcenter/mainactormessage.md)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
