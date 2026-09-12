> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_ion_message_t/size](https://developer.apple.com/documentation/hypervisor/hv_ion_message_t/size)

# size (Swift)

**Framework:** Hypervisor  
**Kind:** Instance Property  
**Availability:** macOS

The size of the value written by the notifier.

## Declaration

```swift
var size: UInt64
```

## See Also

### Instance properties

- [addr](addr.md): The address of the I/O write.
- [header](header.md): The Mach message header.
- [trailer](trailer.md): The Mach message trailer.
- [value](value.md): An unsigned 64-bit integer that represents the contents of an I/O notifier message.

# size (Objective-C)

**Framework:** Hypervisor  
**Kind:** Instance Property  
**Availability:** macOS

The size of the value written by the notifier.

## Declaration

```objectivec
uint64_t size;
```

## See Also

### Instance properties

- [addr](addr.md): The address of the I/O write.
- [header](header.md): The Mach message header.
- [trailer](trailer.md): The Mach message trailer.
- [value](value.md): An unsigned 64-bit integer that represents the contents of an I/O notifier message.
