> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/vmnet/vmpktdesc/init(vm_pkt_size:vm_pkt_iov:vm_pkt_iovcnt:vm_flags:)

# init(vm_pkt_size:vm_pkt_iov:vm_pkt_iovcnt:vm_flags:)

**Framework:** vmnet  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.0+ · macOS 10.10+

## Declaration

```swift
init(vm_pkt_size: Int, vm_pkt_iov: UnsafeMutablePointer<iovec>, vm_pkt_iovcnt: UInt32, vm_flags: UInt32)
```
