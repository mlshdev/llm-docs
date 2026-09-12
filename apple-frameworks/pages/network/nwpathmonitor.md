> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwpathmonitor](https://developer.apple.com/documentation/network/nwpathmonitor)

# NWPathMonitor

**Framework:** Network  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

An observer that you use to monitor and react to network changes.

## Declaration

```swift
final class NWPathMonitor
```

## Topics

### Creating Path Monitors

- [init()](nwpathmonitor/init%28%29.md): Initializes a path monitor to observe all available interface types.
- [init(requiredInterfaceType:)](nwpathmonitor/init%28requiredinterfacetype_%29.md): Initializes a path monitor to observe a specific interface type.
- [init(prohibitedInterfaceTypes:)](nwpathmonitor/init%28prohibitedinterfacetypes_%29.md): Initializes a path monitor to observe interface types that are not explicitly prohibited.
- [start(queue:)](nwpathmonitor/start%28queue_%29.md): Starts monitoring path changes, and sets a queue on which to deliver path events.
- [queue](nwpathmonitor/queue.md): The queue on which path events are delivered.

### Handling Path Updates

- [currentPath](nwpathmonitor/currentpath.md): The currently available network path observed by the path monitor.
- [pathUpdateHandler](nwpathmonitor/pathupdatehandler.md): A handler that receives network path updates.

### Canceling Path Monitors

- [cancel()](nwpathmonitor/cancel%28%29.md): Stops receiving network path updates.

### Structures

- [NWPathMonitor.Iterator](nwpathmonitor/iterator.md)

### Type Properties

- [ethernetChannel](nwpathmonitor/ethernetchannel.md)

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Paths and Interfaces

- [NWPath](nwpath.md): An object that contains information about the properties of the network that a connection uses, or that are available to your app.
- [NWInterface](nwinterface.md): An interface that a network connection uses to send and receive data.
