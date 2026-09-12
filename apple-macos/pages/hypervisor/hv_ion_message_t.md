> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_ion_message_t](https://developer.apple.com/documentation/hypervisor/hv_ion_message_t)

# hv_ion_message_t (Swift)

**Framework:** Hypervisor  
**Kind:** Structure  
**Availability:** macOS

The structure that describes the Mach message that the Hypervisor sends when an I/O notifier delivers the notifications you request.

## Declaration

```swift
struct hv_ion_message_t
```

## Topics

### Initializers

- [init()](hv_ion_message_t/init%28%29.md): Creates a new I/O notifier message.
- [init(header:addr:size:value:trailer:)](hv_ion_message_t/init%28header_addr_size_value_trailer_%29.md): Creates a new I/O notifier message with the parameters you provide.

### Instance properties

- [addr](hv_ion_message_t/addr.md): The address of the I/O write.
- [header](hv_ion_message_t/header.md): The Mach message header.
- [size](hv_ion_message_t/size.md): The size of the value written by the notifier.
- [trailer](hv_ion_message_t/trailer.md): The Mach message trailer.
- [value](hv_ion_message_t/value.md): An unsigned 64-bit integer that represents the contents of an I/O notifier message.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### I/O notifier functions

- [hv_vm_add_pio_notifier(\_:\_:\_:\_:\_:)](hv_vm_add_pio_notifier%28__________%29.md): Generate a notification when the Hypervisor issues a matching guest port I/O.
- [hv_vm_remove_pio_notifier(\_:\_:\_:\_:\_:)](hv_vm_remove_pio_notifier%28__________%29.md): Removes an existing I/O notifier that matches the specifications you provide.
- [hv_ion_flags_t](hv_ion_flags_t.md): The bitfield that you use to set the options flags for the I/O notifier.
- [I/O Notifier Flags](3727903-i-o-notifier-flags.md): Flags that you set to choose the kind of information the I/O Notifier delivers.

# hv_ion_message_t (Objective-C)

**Framework:** Hypervisor  
**Kind:** Structure  
**Availability:** macOS

The structure that describes the Mach message that the Hypervisor sends when an I/O notifier delivers the notifications you request.

## Declaration

```objectivec
typedef struct { ... } hv_ion_message_t;
```

## Topics

### Instance properties

- [addr](hv_ion_message_t/addr.md): The address of the I/O write.
- [header](hv_ion_message_t/header.md): The Mach message header.
- [size](hv_ion_message_t/size.md): The size of the value written by the notifier.
- [trailer](hv_ion_message_t/trailer.md): The Mach message trailer.
- [value](hv_ion_message_t/value.md): An unsigned 64-bit integer that represents the contents of an I/O notifier message.

## See Also

### I/O notifier functions

- [hv_vm_add_pio_notifier](hv_vm_add_pio_notifier%28__________%29.md): Generate a notification when the Hypervisor issues a matching guest port I/O.
- [hv_vm_remove_pio_notifier](hv_vm_remove_pio_notifier%28__________%29.md): Removes an existing I/O notifier that matches the specifications you provide.
- [hv_ion_flags_t](hv_ion_flags_t.md): The bitfield that you use to set the options flags for the I/O notifier.
- [I/O Notifier Flags](3727903-i-o-notifier-flags.md): Flags that you set to choose the kind of information the I/O Notifier delivers.
