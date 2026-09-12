> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_ion_message_t/header](https://developer.apple.com/documentation/hypervisor/hv_ion_message_t/header)

# header (Swift)

**Framework:** Hypervisor  
**Kind:** Instance Property  
**Availability:** macOS

The Mach message header.

## Declaration

```swift
var header: mach_msg_header_t
```

## See Also

### Instance properties

- [addr](addr.md): The address of the I/O write.
- [size](size.md): The size of the value written by the notifier.
- [trailer](trailer.md): The Mach message trailer.
- [value](value.md): An unsigned 64-bit integer that represents the contents of an I/O notifier message.

# header (Objective-C)

**Framework:** Hypervisor  
**Kind:** Instance Property  
**Availability:** macOS

The Mach message header.

## Declaration

```objectivec
mach_msg_header_t header;
```

## See Also

### Instance properties

- [addr](addr.md): The address of the I/O write.
- [size](size.md): The size of the value written by the notifier.
- [trailer](trailer.md): The Mach message trailer.
- [value](value.md): An unsigned 64-bit integer that represents the contents of an I/O notifier message.
