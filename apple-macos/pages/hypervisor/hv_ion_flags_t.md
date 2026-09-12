> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_ion_flags_t](https://developer.apple.com/documentation/hypervisor/hv_ion_flags_t)

# hv_ion_flags_t (Swift)

**Framework:** Hypervisor  
**Kind:** Type Alias  
**Availability:** macOS

The bitfield that you use to set the options flags for the I/O notifier.

## Declaration

```swift
typealias hv_ion_flags_t = UInt32
```

## See Also

### I/O notifier functions

- [hv_vm_add_pio_notifier(\_:\_:\_:\_:\_:)](hv_vm_add_pio_notifier%28__________%29.md): Generate a notification when the Hypervisor issues a matching guest port I/O.
- [hv_vm_remove_pio_notifier(\_:\_:\_:\_:\_:)](hv_vm_remove_pio_notifier%28__________%29.md): Removes an existing I/O notifier that matches the specifications you provide.
- [hv_ion_message_t](hv_ion_message_t.md): The structure that describes the Mach message that the Hypervisor sends when an I/O notifier delivers the notifications you request.
- [I/O Notifier Flags](3727903-i-o-notifier-flags.md): Flags that you set to choose the kind of information the I/O Notifier delivers.

# hv_ion_flags_t (Objective-C)

**Framework:** Hypervisor  
**Kind:** Type Alias  
**Availability:** macOS

The bitfield that you use to set the options flags for the I/O notifier.

## Declaration

```objectivec
typedef uint32_t hv_ion_flags_t;
```

## See Also

### I/O notifier functions

- [hv_vm_add_pio_notifier](hv_vm_add_pio_notifier%28__________%29.md): Generate a notification when the Hypervisor issues a matching guest port I/O.
- [hv_vm_remove_pio_notifier](hv_vm_remove_pio_notifier%28__________%29.md): Removes an existing I/O notifier that matches the specifications you provide.
- [hv_ion_message_t](hv_ion_message_t.md): The structure that describes the Mach message that the Hypervisor sends when an I/O notifier delivers the notifications you request.
- [I/O Notifier Flags](3727903-i-o-notifier-flags.md): Flags that you set to choose the kind of information the I/O Notifier delivers.
