> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_vm_remove_pio_notifier(_:_:_:_:_:)](https://developer.apple.com/documentation/hypervisor/hv_vm_remove_pio_notifier(_:_:_:_:_:))

# hv_vm_remove_pio_notifier(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 11.0+

Removes an existing I/O notifier that matches the specifications you provide.

## Declaration

```swift
func hv_vm_remove_pio_notifier(_ addr: UInt16, _ size: Int, _ value: UInt32, _ mach_port: mach_port_t, _ flags: hv_ion_flags_t) -> hv_return_t
```

## Parameters

- `addr`: The port I/O address of the existing notifier.
- `size`: The match-size from the existing notifier.
- `value`: The value to match against from the existing notifier.
- `mach_port`: The Mach port from the existing notifier.
- `flags`: The [hv_ion_flags_t](hv_ion_flags_t.md) option flags from the existing notifier.

<a id="return-value"></a>

## Return Value

`0` on success, or an [hv_return_t](hv_return_t.md) error code.

<a id="Discussion"></a>

## Discussion

The arguments you provide must match those previously used to add the notifier.

## See Also

### I/O notifier functions

- [hv_vm_add_pio_notifier(\_:\_:\_:\_:\_:)](hv_vm_add_pio_notifier%28__________%29.md): Generate a notification when the Hypervisor issues a matching guest port I/O.
- [hv_ion_message_t](hv_ion_message_t.md): The structure that describes the Mach message that the Hypervisor sends when an I/O notifier delivers the notifications you request.
- [hv_ion_flags_t](hv_ion_flags_t.md): The bitfield that you use to set the options flags for the I/O notifier.
- [I/O Notifier Flags](3727903-i-o-notifier-flags.md): Flags that you set to choose the kind of information the I/O Notifier delivers.

# hv_vm_remove_pio_notifier (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 11.0+

Removes an existing I/O notifier that matches the specifications you provide.

## Declaration

```objectivec
extern hv_return_t hv_vm_remove_pio_notifier(uint16_t addr, size_t size, uint32_t value, mach_port_t mach_port, hv_ion_flags_t flags);
```

## Parameters

- `addr`: The port I/O address of the existing notifier.
- `size`: The match-size from the existing notifier.
- `value`: The value to match against from the existing notifier.
- `mach_port`: The Mach port from the existing notifier.
- `flags`: The [hv_ion_flags_t](hv_ion_flags_t.md) option flags from the existing notifier.

<a id="return-value"></a>

## Return Value

`0` on success, or an [hv_return_t](hv_return_t.md) error code.

<a id="Discussion"></a>

## Discussion

The arguments you provide must match those previously used to add the notifier.

## See Also

### I/O notifier functions

- [hv_vm_add_pio_notifier](hv_vm_add_pio_notifier%28__________%29.md): Generate a notification when the Hypervisor issues a matching guest port I/O.
- [hv_ion_message_t](hv_ion_message_t.md): The structure that describes the Mach message that the Hypervisor sends when an I/O notifier delivers the notifications you request.
- [hv_ion_flags_t](hv_ion_flags_t.md): The bitfield that you use to set the options flags for the I/O notifier.
- [I/O Notifier Flags](3727903-i-o-notifier-flags.md): Flags that you set to choose the kind of information the I/O Notifier delivers.
