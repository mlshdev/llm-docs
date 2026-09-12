> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_vm_add_pio_notifier(_:_:_:_:_:)](https://developer.apple.com/documentation/hypervisor/hv_vm_add_pio_notifier(_:_:_:_:_:))

# hv_vm_add_pio_notifier(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 11.0+

Generate a notification when the Hypervisor issues a matching guest port I/O.

## Declaration

```swift
func hv_vm_add_pio_notifier(_ addr: UInt16, _ size: Int, _ value: UInt32, _ mach_port: mach_port_t, _ flags: hv_ion_flags_t) -> hv_return_t
```

## Parameters

- `addr`: The port I/O address to match.
- `size`: Size to match (1, 2, or 4).
- `value`: The value to match against.
- `mach_port`: The Mach port to write to; requires send permission.
- `flags`: Notifier options using [hv_ion_flags_t](hv_ion_flags_t.md).

<a id="return-value"></a>

## Return Value

`0` on success, or an [hv_return_t](hv_return_t.md) error code.

<a id="Discussion"></a>

## Discussion

The notifier suppresses guest exits caused by the matching I/O and instead sends a [hv_ion_message_t](hv_ion_message_t.md) message to the Mach port you specify. The Hypervisor framework only permits one notifier per port address.

## See Also

### I/O notifier functions

- [hv_vm_remove_pio_notifier(\_:\_:\_:\_:\_:)](hv_vm_remove_pio_notifier%28__________%29.md): Removes an existing I/O notifier that matches the specifications you provide.
- [hv_ion_message_t](hv_ion_message_t.md): The structure that describes the Mach message that the Hypervisor sends when an I/O notifier delivers the notifications you request.
- [hv_ion_flags_t](hv_ion_flags_t.md): The bitfield that you use to set the options flags for the I/O notifier.
- [I/O Notifier Flags](3727903-i-o-notifier-flags.md): Flags that you set to choose the kind of information the I/O Notifier delivers.

# hv_vm_add_pio_notifier (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 11.0+

Generate a notification when the Hypervisor issues a matching guest port I/O.

## Declaration

```objectivec
extern hv_return_t hv_vm_add_pio_notifier(uint16_t addr, size_t size, uint32_t value, mach_port_t mach_port, hv_ion_flags_t flags);
```

## Parameters

- `addr`: The port I/O address to match.
- `size`: Size to match (1, 2, or 4).
- `value`: The value to match against.
- `mach_port`: The Mach port to write to; requires send permission.
- `flags`: Notifier options using [hv_ion_flags_t](hv_ion_flags_t.md).

<a id="return-value"></a>

## Return Value

`0` on success, or an [hv_return_t](hv_return_t.md) error code.

<a id="Discussion"></a>

## Discussion

The notifier suppresses guest exits caused by the matching I/O and instead sends a [hv_ion_message_t](hv_ion_message_t.md) message to the Mach port you specify. The Hypervisor framework only permits one notifier per port address.

## See Also

### I/O notifier functions

- [hv_vm_remove_pio_notifier](hv_vm_remove_pio_notifier%28__________%29.md): Removes an existing I/O notifier that matches the specifications you provide.
- [hv_ion_message_t](hv_ion_message_t.md): The structure that describes the Mach message that the Hypervisor sends when an I/O notifier delivers the notifications you request.
- [hv_ion_flags_t](hv_ion_flags_t.md): The bitfield that you use to set the options flags for the I/O notifier.
- [I/O Notifier Flags](3727903-i-o-notifier-flags.md): Flags that you set to choose the kind of information the I/O Notifier delivers.
