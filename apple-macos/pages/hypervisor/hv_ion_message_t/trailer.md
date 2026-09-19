> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/hypervisor/hv_ion_message_t/trailer

# trailer (Swift)

**Framework:** Hypervisor  
**Kind:** Instance Property  
**Availability:** macOS

The Mach message trailer.

## Declaration

```swift
var trailer: mach_msg_trailer_t
```

## See Also

### Instance properties

- [addr](addr.md): The address of the I/O write.
- [header](header.md): The Mach message header.
- [size](size.md): The size of the value written by the notifier.
- [value](value.md): An unsigned 64-bit integer that represents the contents of an I/O notifier message.

# trailer (Objective-C)

**Framework:** Hypervisor  
**Kind:** Instance Property  
**Availability:** macOS

The Mach message trailer.

## Declaration

```objectivec
mach_msg_trailer_t trailer;
```

## See Also

### Instance properties

- [addr](addr.md): The address of the I/O write.
- [header](header.md): The Mach message header.
- [size](size.md): The size of the value written by the notifier.
- [value](value.md): An unsigned 64-bit integer that represents the contents of an I/O notifier message.
