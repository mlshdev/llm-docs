> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/vmnet/vmpktdesc](https://developer.apple.com/documentation/vmnet/vmpktdesc)

# vmpktdesc (Swift)

**Framework:** vmnet  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.10+

Describes a packet.

## Declaration

```swift
struct vmpktdesc
```

## Topics

### Fields

- [vm_flags](vmpktdesc/vm_flags.md): Option flags associated with the packet.
- [vm_pkt_iov](vmpktdesc/vm_pkt_iov.md): An array of packet buffers.
- [vm_pkt_iovcnt](vmpktdesc/vm_pkt_iovcnt.md): The number of packet buffers in `vm_pkt_iov`.
- [vm_pkt_size](vmpktdesc/vm_pkt_size.md): The size of the packet, in bytes.

### Initializers

- [init(vm_pkt_size:vm_pkt_iov:vm_pkt_iovcnt:vm_flags:)](vmpktdesc/init%28vm_pkt_size_vm_pkt_iov_vm_pkt_iovcnt_vm_flags_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Data types

- [vmnet_return_t](vmnet_return_t.md): Values returned by functions in the vmnet Framework.
- [interface_ref](interface_ref.md): A virtual network interface.
- [interface_event_t](interface_event_t.md): Interface event types.
- [operating_modes_t](operating_modes_t.md): The operating modes for an interface.
- [vmnet_mode_t](vmnet_mode_t.md): A type that defines the operating modes of the vmnet interface.
- [vmnet_network_ref](vmnet_network_ref.md): A pointer to a network structure.

# vmpktdesc (Objective-C)

**Framework:** vmnet  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.10+

Describes a packet.

## Declaration

```objectivec
struct vmpktdesc;
```

## Topics

### Fields

- [vm_flags](vmpktdesc/vm_flags.md): Option flags associated with the packet.
- [vm_pkt_iov](vmpktdesc/vm_pkt_iov.md): An array of packet buffers.
- [vm_pkt_iovcnt](vmpktdesc/vm_pkt_iovcnt.md): The number of packet buffers in `vm_pkt_iov`.
- [vm_pkt_size](vmpktdesc/vm_pkt_size.md): The size of the packet, in bytes.

## See Also

### Data types

- [vmnet_return_t](vmnet_return_t.md): Values returned by functions in the vmnet Framework.
- [interface_ref](interface_ref.md): A virtual network interface.
- [interface_event_t](interface_event_t.md): Interface event types.
- [operating_modes_t](operating_modes_t.md): The operating modes for an interface.
- [vmnet_mode_t](vmnet_mode_t.md): A type that defines the operating modes of the vmnet interface.
- [vmnet_network_ref](vmnet_network_ref.md): A pointer to a network structure.
