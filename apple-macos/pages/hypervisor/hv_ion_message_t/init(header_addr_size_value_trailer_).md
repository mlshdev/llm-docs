> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_ion_message_t/init(header:addr:size:value:trailer:)](https://developer.apple.com/documentation/hypervisor/hv_ion_message_t/init(header:addr:size:value:trailer:))

# init(header:addr:size:value:trailer:)

**Framework:** Hypervisor  
**Kind:** Initializer  
**Availability:** macOS

Creates a new I/O notifier message with the parameters you provide.

## Declaration

```swift
init(header: mach_msg_header_t, addr: UInt64, size: UInt64, value: UInt64, trailer: mach_msg_trailer_t)
```

## Parameters

- `header`: The Mach message header.
- `addr`: The address of the I/O write.
- `size`: The size of the value written.
- `value`: The value written to `addr`.
- `trailer`: The Mach message trailer.

## See Also

### Initializers

- [init()](init%28%29.md): Creates a new I/O notifier message.
