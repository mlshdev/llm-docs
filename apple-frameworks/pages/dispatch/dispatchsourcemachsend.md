> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchsourcemachsend](https://developer.apple.com/documentation/dispatch/dispatchsourcemachsend)

# DispatchSourceMachSend

**Framework:** Dispatch  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A dispatch source that monitors a Mach port for dead name notifications, indicating that a send right no longer has a corresponding receive right.

## Declaration

```swift
protocol DispatchSourceMachSend : DispatchSourceProtocol, Sendable
```

<a id="overview"></a>

## Overview

You do not adopt this protocol in your objects. Instead, use the [makeMachSendSource(port:eventMask:queue:)](dispatchsource/makemachsendsource%28port_eventmask_queue_%29.md) method to create an object that adopts this protocol.

## Topics

### Getting the Mach Port Handle

- [handle](dispatchsourcemachsend/handle.md)

### Getting the Event Data

- [data](dispatchsourcemachsend/data.md)
- [mask](dispatchsourcemachsend/mask.md)

## Relationships

### Inherits From

- [DispatchSourceProtocol](dispatchsourceprotocol.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [DispatchSource](dispatchsource.md)

## See Also

### Creating a Mach Port Source

- [makeMachReceiveSource(port:queue:)](dispatchsource/makemachreceivesource%28port_queue_%29.md): Creates a new dispatch source object for monitoring a Mach port for pending messages.
- [makeMachSendSource(port:eventMask:queue:)](dispatchsource/makemachsendsource%28port_eventmask_queue_%29.md): A dispatch source that monitors a Mach port for dead name notifications.
- [DispatchSourceMachReceive](dispatchsourcemachreceive.md): A dispatch source that monitors a Mach port for pending messages.
- [DispatchSource.MachSendEvent](dispatchsource/machsendevent.md): Mach-related events.
