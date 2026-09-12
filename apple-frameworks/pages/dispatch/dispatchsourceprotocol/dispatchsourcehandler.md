> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchsourceprotocol/dispatchsourcehandler](https://developer.apple.com/documentation/dispatch/dispatchsourceprotocol/dispatchsourcehandler)

# DispatchSourceProtocol.DispatchSourceHandler

**Framework:** Dispatch  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
typealias DispatchSourceHandler = () -> Void
```

## See Also

### Installing Event Handlers

- [setEventHandler(handler:)](seteventhandler%28handler_%29.md): Sets the event handler work item for the dispatch source.
- [setEventHandler(qos:flags:handler:)](seteventhandler%28qos_flags_handler_%29.md)
- [setRegistrationHandler(handler:)](setregistrationhandler%28handler_%29.md): Sets the registration handler work item for the dispatch source.
- [setRegistrationHandler(qos:flags:handler:)](setregistrationhandler%28qos_flags_handler_%29.md)
