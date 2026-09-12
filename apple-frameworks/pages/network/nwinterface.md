> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwinterface](https://developer.apple.com/documentation/network/nwinterface)

# NWInterface

**Framework:** Network  
**Kind:** Structure  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

An interface that a network connection uses to send and receive data.

## Declaration

```swift
struct NWInterface
```

## Topics

### Inspecting Interfaces

- [type](nwinterface/type.md): The type of the interface, such as Wi-Fi or loopback.
- [NWInterface.InterfaceType](nwinterface/interfacetype.md): Types of network interfaces, based on their link layer media types.
- [name](nwinterface/name.md): The name of the interface.
- [index](nwinterface/index.md): The system interface index associated with the interface.

### Enumerations

- [NWInterface.RadioType](nwinterface/radiotype.md)

## Relationships

### Conforms To

- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Paths and Interfaces

- [NWPath](nwpath.md): An object that contains information about the properties of the network that a connection uses, or that are available to your app.
- [NWPathMonitor](nwpathmonitor.md): An observer that you use to monitor and react to network changes.
