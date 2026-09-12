> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/vmnet/operating_modes_t](https://developer.apple.com/documentation/vmnet/operating_modes_t)

# operating_modes_t (Swift)

**Framework:** vmnet  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.10+

The operating modes for an interface.

## Declaration

```swift
enum operating_modes_t
```

## Topics

### Constants

- [operating_modes_t.VMNET_HOST_MODE](operating_modes_t/vmnet_host_mode.md)
- [operating_modes_t.VMNET_SHARED_MODE](operating_modes_t/vmnet_shared_mode.md)

### Enumeration cases

- [operating_modes_t.VMNET_BRIDGED_MODE](operating_modes_t/vmnet_bridged_mode.md)

### Initializers

- [init(rawValue:)](operating_modes_t/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Data types

- [vmnet_return_t](vmnet_return_t.md): Values returned by functions in the vmnet Framework.
- [vmpktdesc](vmpktdesc.md): Describes a packet.
- [interface_ref](interface_ref.md): A virtual network interface.
- [interface_event_t](interface_event_t.md): Interface event types.
- [vmnet_mode_t](vmnet_mode_t.md): A type that defines the operating modes of the vmnet interface.
- [vmnet_network_ref](vmnet_network_ref.md): A pointer to a network structure.

# operating_modes_t (Objective-C)

**Framework:** vmnet  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.10+

The operating modes for an interface.

## Declaration

```objectivec
enum operating_modes_t : uint32_t;
```

## Topics

### Constants

- [VMNET_HOST_MODE](operating_modes_t/vmnet_host_mode.md)
- [VMNET_SHARED_MODE](operating_modes_t/vmnet_shared_mode.md)

### Enumeration cases

- [VMNET_BRIDGED_MODE](operating_modes_t/vmnet_bridged_mode.md)

## See Also

### Data types

- [vmnet_return_t](vmnet_return_t.md): Values returned by functions in the vmnet Framework.
- [vmpktdesc](vmpktdesc.md): Describes a packet.
- [interface_ref](interface_ref.md): A virtual network interface.
- [interface_event_t](interface_event_t.md): Interface event types.
- [vmnet_mode_t](vmnet_mode_t.md): A type that defines the operating modes of the vmnet interface.
- [vmnet_network_ref](vmnet_network_ref.md): A pointer to a network structure.
