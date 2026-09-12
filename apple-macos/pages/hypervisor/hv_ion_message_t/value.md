> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_ion_message_t/value](https://developer.apple.com/documentation/hypervisor/hv_ion_message_t/value)

# value (Swift)

**Framework:** Hypervisor  
**Kind:** Instance Property  
**Availability:** macOS

An unsigned 64-bit integer that represents the contents of an I/O notifier message.

## Declaration

```swift
var value: UInt64
```

## See Also

### Instance properties

- [addr](addr.md): The address of the I/O write.
- [header](header.md): The Mach message header.
- [size](size.md): The size of the value written by the notifier.
- [trailer](trailer.md): The Mach message trailer.

# value (Objective-C)

**Framework:** Hypervisor  
**Kind:** Instance Property  
**Availability:** macOS

An unsigned 64-bit integer that represents the contents of an I/O notifier message.

## Declaration

```objectivec
uint64_t value;
```

## See Also

### Instance properties

- [addr](addr.md): The address of the I/O write.
- [header](header.md): The Mach message header.
- [size](size.md): The size of the value written by the notifier.
- [trailer](trailer.md): The Mach message trailer.
