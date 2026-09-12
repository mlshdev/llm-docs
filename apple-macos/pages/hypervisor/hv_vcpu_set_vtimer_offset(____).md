> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_vcpu_set_vtimer_offset(_:_:)](https://developer.apple.com/documentation/hypervisor/hv_vcpu_set_vtimer_offset(_:_:))

# hv_vcpu_set_vtimer_offset(\_:\_:) (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 11.0+

Sets the vTimer offset to a value that you provide.

## Declaration

```swift
func hv_vcpu_set_vtimer_offset(_ vcpu: hv_vcpu_t, _ vtimer_offset: UInt64) -> hv_return_t
```

## Parameters

- `vcpu`: The ID of the vCPU instance.
- `vtimer_offset`: The new vTimer offset.

<a id="return-value"></a>

## Return Value

`0` on success, or an error code of the type [hv_return_t](hv_return_t.md).

<a id="Discussion"></a>

## Discussion

This corresponds to the value of the `CNTVOFF_EL2` register.

## See Also

### Timer functions

- [hv_vcpu_get_vtimer_mask(\_:\_:)](hv_vcpu_get_vtimer_mask%28____%29.md): Gets the virtual timer mask.
- [hv_vcpu_set_vtimer_mask(\_:\_:)](hv_vcpu_set_vtimer_mask%28____%29.md): Sets or clears the virtual timer mask.
- [hv_vcpu_get_vtimer_offset(\_:\_:)](hv_vcpu_get_vtimer_offset%28____%29.md): Returns the vTimer offset for the vCPU ID you specify.

# hv_vcpu_set_vtimer_offset (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 11.0+

Sets the vTimer offset to a value that you provide.

## Declaration

```objectivec
extern hv_return_t hv_vcpu_set_vtimer_offset(hv_vcpu_t vcpu, uint64_t vtimer_offset);
```

## Parameters

- `vcpu`: The ID of the vCPU instance.
- `vtimer_offset`: The new vTimer offset.

<a id="return-value"></a>

## Return Value

`0` on success, or an error code of the type [hv_return_t](hv_return_t.md).

<a id="Discussion"></a>

## Discussion

This corresponds to the value of the `CNTVOFF_EL2` register.

## See Also

### Timer functions

- [hv_vcpu_get_vtimer_mask](hv_vcpu_get_vtimer_mask%28____%29.md): Gets the virtual timer mask.
- [hv_vcpu_set_vtimer_mask](hv_vcpu_set_vtimer_mask%28____%29.md): Sets or clears the virtual timer mask.
- [hv_vcpu_get_vtimer_offset](hv_vcpu_get_vtimer_offset%28____%29.md): Returns the vTimer offset for the vCPU ID you specify.
