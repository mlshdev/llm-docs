> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/vmnet/interface_event_t](https://developer.apple.com/documentation/vmnet/interface_event_t)

# interface_event_t (Swift)

**Framework:** vmnet  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.10+

Interface event types.

## Declaration

```swift
struct interface_event_t
```

## Topics

### Constants

- [VMNET_INTERFACE_PACKETS_AVAILABLE](interface_event_t/vmnet_interface_packets_available.md)

### Initializers

- [init(rawValue:)](interface_event_t/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Data types

- [vmnet_return_t](vmnet_return_t.md): Values returned by functions in the vmnet Framework.
- [vmpktdesc](vmpktdesc.md): Describes a packet.
- [interface_ref](interface_ref.md): A virtual network interface.
- [operating_modes_t](operating_modes_t.md): The operating modes for an interface.
- [vmnet_mode_t](vmnet_mode_t.md): A type that defines the operating modes of the vmnet interface.
- [vmnet_network_ref](vmnet_network_ref.md): A pointer to a network structure.

# interface_event_t (Objective-C)

**Framework:** vmnet  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.10+

Interface event types.

## Declaration

```objectivec
enum interface_event_t : uint32_t;
```

## Topics

### Constants

- [VMNET_INTERFACE_PACKETS_AVAILABLE](interface_event_t/vmnet_interface_packets_available.md)

## See Also

### Data types

- [vmnet_return_t](vmnet_return_t.md): Values returned by functions in the vmnet Framework.
- [vmpktdesc](vmpktdesc.md): Describes a packet.
- [interface_ref](interface_ref.md): A virtual network interface.
- [operating_modes_t](operating_modes_t.md): The operating modes for an interface.
- [vmnet_mode_t](vmnet_mode_t.md): A type that defines the operating modes of the vmnet interface.
- [vmnet_network_ref](vmnet_network_ref.md): A pointer to a network structure.
