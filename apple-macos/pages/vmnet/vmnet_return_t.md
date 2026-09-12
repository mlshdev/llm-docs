> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/vmnet/vmnet_return_t](https://developer.apple.com/documentation/vmnet/vmnet_return_t)

# vmnet_return_t (Swift)

**Framework:** vmnet  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.10+

Values returned by functions in the vmnet Framework.

## Declaration

```swift
enum vmnet_return_t
```

## Topics

### Constants

- [vmnet_return_t.VMNET_SUCCESS](vmnet_return_t/vmnet_success.md)
- [vmnet_return_t.VMNET_FAILURE](vmnet_return_t/vmnet_failure.md)
- [vmnet_return_t.VMNET_MEM_FAILURE](vmnet_return_t/vmnet_mem_failure.md)
- [vmnet_return_t.VMNET_INVALID_ARGUMENT](vmnet_return_t/vmnet_invalid_argument.md)
- [vmnet_return_t.VMNET_SETUP_INCOMPLETE](vmnet_return_t/vmnet_setup_incomplete.md)
- [vmnet_return_t.VMNET_INVALID_ACCESS](vmnet_return_t/vmnet_invalid_access.md)
- [vmnet_return_t.VMNET_PACKET_TOO_BIG](vmnet_return_t/vmnet_packet_too_big.md)
- [vmnet_return_t.VMNET_BUFFER_EXHAUSTED](vmnet_return_t/vmnet_buffer_exhausted.md)
- [vmnet_return_t.VMNET_TOO_MANY_PACKETS](vmnet_return_t/vmnet_too_many_packets.md)

### Enumeration Cases

- [vmnet_return_t.VMNET_NOT_AUTHORIZED](vmnet_return_t/vmnet_not_authorized.md)
- [vmnet_return_t.VMNET_SHARING_SERVICE_BUSY](vmnet_return_t/vmnet_sharing_service_busy.md)

### Initializers

- [init(rawValue:)](vmnet_return_t/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Data types

- [vmpktdesc](vmpktdesc.md): Describes a packet.
- [interface_ref](interface_ref.md): A virtual network interface.
- [interface_event_t](interface_event_t.md): Interface event types.
- [operating_modes_t](operating_modes_t.md): The operating modes for an interface.
- [vmnet_mode_t](vmnet_mode_t.md): A type that defines the operating modes of the vmnet interface.
- [vmnet_network_ref](vmnet_network_ref.md): A pointer to a network structure.

# vmnet_return_t (Objective-C)

**Framework:** vmnet  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.10+

Values returned by functions in the vmnet Framework.

## Declaration

```objectivec
enum vmnet_return_t : uint32_t;
```

## Topics

### Constants

- [VMNET_SUCCESS](vmnet_return_t/vmnet_success.md)
- [VMNET_FAILURE](vmnet_return_t/vmnet_failure.md)
- [VMNET_MEM_FAILURE](vmnet_return_t/vmnet_mem_failure.md)
- [VMNET_INVALID_ARGUMENT](vmnet_return_t/vmnet_invalid_argument.md)
- [VMNET_SETUP_INCOMPLETE](vmnet_return_t/vmnet_setup_incomplete.md)
- [VMNET_INVALID_ACCESS](vmnet_return_t/vmnet_invalid_access.md)
- [VMNET_PACKET_TOO_BIG](vmnet_return_t/vmnet_packet_too_big.md)
- [VMNET_BUFFER_EXHAUSTED](vmnet_return_t/vmnet_buffer_exhausted.md)
- [VMNET_TOO_MANY_PACKETS](vmnet_return_t/vmnet_too_many_packets.md)

### Enumeration Cases

- [VMNET_NOT_AUTHORIZED](vmnet_return_t/vmnet_not_authorized.md)
- [VMNET_SHARING_SERVICE_BUSY](vmnet_return_t/vmnet_sharing_service_busy.md)

## See Also

### Data types

- [vmpktdesc](vmpktdesc.md): Describes a packet.
- [interface_ref](interface_ref.md): A virtual network interface.
- [interface_event_t](interface_event_t.md): Interface event types.
- [operating_modes_t](operating_modes_t.md): The operating modes for an interface.
- [vmnet_mode_t](vmnet_mode_t.md): A type that defines the operating modes of the vmnet interface.
- [vmnet_network_ref](vmnet_network_ref.md): A pointer to a network structure.
