> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchsource/makemachreceivesource(port:queue:)](https://developer.apple.com/documentation/dispatch/dispatchsource/makemachreceivesource(port:queue:))

# makeMachReceiveSource(port:queue:)

**Framework:** Dispatch  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new dispatch source object for monitoring a Mach port for pending messages.

## Declaration

```swift
class func makeMachReceiveSource(port: mach_port_t, queue: DispatchQueue? = nil) -> any DispatchSourceMachReceive
```

## Parameters

- `port`: A Mach port with a receive right.
- `queue`: The dispatch queue to use when executing the installed handlers.

<a id="return-value"></a>

## Return Value

A dispatch source object that conforms to the [DispatchSourceMachReceive](../dispatchsourcemachreceive.md) protocol.

<a id="Discussion"></a>

## Discussion

After creating the dispatch source, use the methods of the [DispatchSourceProtocol](../dispatchsourceprotocol.md) protocol to install the event handlers you need. The returned dispatch source is in the inactive state initially. When you are ready to begin processing events, call its [activate()](../dispatchobject/activate%28%29.md) method.

## See Also

### Creating a Mach Port Source

- [makeMachSendSource(port:eventMask:queue:)](makemachsendsource%28port_eventmask_queue_%29.md): A dispatch source that monitors a Mach port for dead name notifications.
- [DispatchSourceMachReceive](../dispatchsourcemachreceive.md): A dispatch source that monitors a Mach port for pending messages.
- [DispatchSourceMachSend](../dispatchsourcemachsend.md): A dispatch source that monitors a Mach port for dead name notifications, indicating that a send right no longer has a corresponding receive right.
- [DispatchSource.MachSendEvent](machsendevent.md): Mach-related events.
