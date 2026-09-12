> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchsourceprotocol/seteventhandler(qos:flags:handler:)](https://developer.apple.com/documentation/dispatch/dispatchsourceprotocol/seteventhandler(qos:flags:handler:))

# setEventHandler(qos:flags:handler:)

**Framework:** Dispatch  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
func setEventHandler(qos: DispatchQoS = .unspecified, flags: DispatchWorkItemFlags = [], handler: Self.DispatchSourceHandler?)
```

## See Also

### Installing Event Handlers

- [setEventHandler(handler:)](seteventhandler%28handler_%29.md): Sets the event handler work item for the dispatch source.
- [setRegistrationHandler(handler:)](setregistrationhandler%28handler_%29.md): Sets the registration handler work item for the dispatch source.
- [setRegistrationHandler(qos:flags:handler:)](setregistrationhandler%28qos_flags_handler_%29.md)
- [DispatchSourceProtocol.DispatchSourceHandler](dispatchsourcehandler.md)
