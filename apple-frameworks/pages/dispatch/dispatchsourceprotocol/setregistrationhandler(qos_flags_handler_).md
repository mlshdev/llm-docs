> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchsourceprotocol/setregistrationhandler(qos:flags:handler:)](https://developer.apple.com/documentation/dispatch/dispatchsourceprotocol/setregistrationhandler(qos:flags:handler:))

# setRegistrationHandler(qos:flags:handler:)

**Framework:** Dispatch  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
func setRegistrationHandler(qos: DispatchQoS = .unspecified, flags: DispatchWorkItemFlags = [], handler: Self.DispatchSourceHandler?)
```

## See Also

### Installing Event Handlers

- [setEventHandler(handler:)](seteventhandler%28handler_%29.md): Sets the event handler work item for the dispatch source.
- [setEventHandler(qos:flags:handler:)](seteventhandler%28qos_flags_handler_%29.md)
- [setRegistrationHandler(handler:)](setregistrationhandler%28handler_%29.md): Sets the registration handler work item for the dispatch source.
- [DispatchSourceProtocol.DispatchSourceHandler](dispatchsourcehandler.md)
