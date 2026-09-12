> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/vmnet/vmpktdesc/vm_flags](https://developer.apple.com/documentation/vmnet/vmpktdesc/vm_flags)

# vm_flags (Swift)

**Framework:** vmnet  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.10+

Option flags associated with the packet.

## Declaration

```swift
var vm_flags: UInt32
```

<a id="Discussion"></a>

## Discussion

Should be set to `0` on read.

## See Also

### Fields

- [vm_pkt_iov](vm_pkt_iov.md): An array of packet buffers.
- [vm_pkt_iovcnt](vm_pkt_iovcnt.md): The number of packet buffers in `vm_pkt_iov`.
- [vm_pkt_size](vm_pkt_size.md): The size of the packet, in bytes.

# vm_flags (Objective-C)

**Framework:** vmnet  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.10+

Option flags associated with the packet.

## Declaration

```objectivec
uint32_t vm_flags;
```

<a id="Discussion"></a>

## Discussion

Should be set to `0` on read.

## See Also

### Fields

- [vm_pkt_iov](vm_pkt_iov.md): An array of packet buffers.
- [vm_pkt_iovcnt](vm_pkt_iovcnt.md): The number of packet buffers in `vm_pkt_iov`.
- [vm_pkt_size](vm_pkt_size.md): The size of the packet, in bytes.
