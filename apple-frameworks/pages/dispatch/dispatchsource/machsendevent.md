> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchsource/machsendevent](https://developer.apple.com/documentation/dispatch/dispatchsource/machsendevent)

# DispatchSource.MachSendEvent

**Framework:** Dispatch  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Mach-related events.

## Declaration

```swift
struct MachSendEvent
```

## Topics

### Mach Event Flags

- [dead](machsendevent/dead.md): The receive right corresponding to the given send right was destroyed.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Creating a Mach Port Source

- [makeMachReceiveSource(port:queue:)](makemachreceivesource%28port_queue_%29.md): Creates a new dispatch source object for monitoring a Mach port for pending messages.
- [makeMachSendSource(port:eventMask:queue:)](makemachsendsource%28port_eventmask_queue_%29.md): A dispatch source that monitors a Mach port for dead name notifications.
- [DispatchSourceMachReceive](../dispatchsourcemachreceive.md): A dispatch source that monitors a Mach port for pending messages.
- [DispatchSourceMachSend](../dispatchsourcemachsend.md): A dispatch source that monitors a Mach port for dead name notifications, indicating that a send right no longer has a corresponding receive right.
