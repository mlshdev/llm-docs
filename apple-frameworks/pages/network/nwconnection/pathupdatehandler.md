> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwconnection/pathupdatehandler](https://developer.apple.com/documentation/network/nwconnection/pathupdatehandler)

# pathUpdateHandler

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A handler that receives network path updates.

## Declaration

```swift
@preconcurrency final var pathUpdateHandler: (@Sendable (NWPath) -> Void)? { get set }
```

## See Also

### Handling Path Updates

- [currentPath](currentpath.md): The network path the connection is using.
- [viabilityUpdateHandler](viabilityupdatehandler.md): A handler that receives updates when data can be sent and received.
- [betterPathUpdateHandler](betterpathupdatehandler.md): A handler that receives updates when an alternative network path is preferred over the current path.
