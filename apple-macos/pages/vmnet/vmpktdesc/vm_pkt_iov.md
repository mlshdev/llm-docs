> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/vmnet/vmpktdesc/vm_pkt_iov](https://developer.apple.com/documentation/vmnet/vmpktdesc/vm_pkt_iov)

# vm_pkt_iov (Swift)

**Framework:** vmnet  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.10+

An array of packet buffers.

## Declaration

```swift
var vm_pkt_iov: UnsafeMutablePointer<iovec>
```

## See Also

### Fields

- [vm_flags](vm_flags.md): Option flags associated with the packet.
- [vm_pkt_iovcnt](vm_pkt_iovcnt.md): The number of packet buffers in `vm_pkt_iov`.
- [vm_pkt_size](vm_pkt_size.md): The size of the packet, in bytes.

# vm_pkt_iov (Objective-C)

**Framework:** vmnet  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.10+

An array of packet buffers.

## Declaration

```objectivec
struct iovec * vm_pkt_iov;
```

## See Also

### Fields

- [vm_flags](vm_flags.md): Option flags associated with the packet.
- [vm_pkt_iovcnt](vm_pkt_iovcnt.md): The number of packet buffers in `vm_pkt_iov`.
- [vm_pkt_size](vm_pkt_size.md): The size of the packet, in bytes.
