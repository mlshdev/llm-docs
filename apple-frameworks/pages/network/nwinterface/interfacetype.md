> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwinterface/interfacetype](https://developer.apple.com/documentation/network/nwinterface/interfacetype)

# NWInterface.InterfaceType

**Framework:** Network  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Types of network interfaces, based on their link layer media types.

## Declaration

```swift
enum InterfaceType
```

## Topics

### Interface Types

- [NWInterface.InterfaceType.wifi](interfacetype/wifi.md): The network interface type used for communication over Wi-Fi networks.
- [NWInterface.InterfaceType.cellular](interfacetype/cellular.md): The network interface type used for communication over cellular networks.
- [NWInterface.InterfaceType.wiredEthernet](interfacetype/wiredethernet.md): The network interface type used for communication over wired Ethernet networks.
- [NWInterface.InterfaceType.loopback](interfacetype/loopback.md): The network interface type used for communication over local loopback networks.
- [NWInterface.InterfaceType.other](interfacetype/other.md): The network interface type used for communication over virtual networks or networks of unknown types.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting Interfaces

- [type](type.md): The type of the interface, such as Wi-Fi or loopback.
- [name](name.md): The name of the interface.
- [index](index.md): The system interface index associated with the interface.
