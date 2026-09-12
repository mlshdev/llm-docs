> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_vcpu_set_vtimer_mask(_:_:)](https://developer.apple.com/documentation/hypervisor/hv_vcpu_set_vtimer_mask(_:_:))

# hv_vcpu_set_vtimer_mask(\_:\_:) (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 11.0+

Sets or clears the virtual timer mask.

## Declaration

```swift
func hv_vcpu_set_vtimer_mask(_ vcpu: hv_vcpu_t, _ vtimer_is_masked: Bool) -> hv_return_t
```

## Parameters

- `vcpu`: The ID of the vCPU instance.
- `vtimer_is_masked`: A Boolean value that indicates whether the vTimer has a mask set.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

<a id="Discussion"></a>

## Discussion

After [hv_vcpu_run(\_:)](hv_vcpu_run%28__%29.md) returns with the exit reason `HV_EXIT_REASON_VTIMER_ACTIVATED`, the timer is masked automatically.

The vCPU won’t exit with this reason again until the mask is cleared even when calling hv_vcpu_run() with the vTimer interrupt in a pending state.

After receiving a [HV_EXIT_REASON_VTIMER_ACTIVATED](hv_exit_reason_vtimer_activated.md) exit reason, the caller of `hv_vcpu_run`() needs to make the interrupts to the vTimer pending in the guest’s virtual interrupt controller. It also needs to detect when the guest has serviced this interrupt. For example, call this function when emulating a GIC when deactivating an interrupt whose ID matches that of the vTimer.

## See Also

### Timer functions

- [hv_vcpu_get_vtimer_mask(\_:\_:)](hv_vcpu_get_vtimer_mask%28____%29.md): Gets the virtual timer mask.
- [hv_vcpu_get_vtimer_offset(\_:\_:)](hv_vcpu_get_vtimer_offset%28____%29.md): Returns the vTimer offset for the vCPU ID you specify.
- [hv_vcpu_set_vtimer_offset(\_:\_:)](hv_vcpu_set_vtimer_offset%28____%29.md): Sets the vTimer offset to a value that you provide.

# hv_vcpu_set_vtimer_mask (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 11.0+

Sets or clears the virtual timer mask.

## Declaration

```objectivec
extern hv_return_t hv_vcpu_set_vtimer_mask(hv_vcpu_t vcpu, bool vtimer_is_masked);
```

## Parameters

- `vcpu`: The ID of the vCPU instance.
- `vtimer_is_masked`: A Boolean value that indicates whether the vTimer has a mask set.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

<a id="Discussion"></a>

## Discussion

After [hv_vcpu_run](hv_vcpu_run%28__%29.md) returns with the exit reason `HV_EXIT_REASON_VTIMER_ACTIVATED`, the timer is masked automatically.

The vCPU won’t exit with this reason again until the mask is cleared even when calling hv_vcpu_run() with the vTimer interrupt in a pending state.

After receiving a [HV_EXIT_REASON_VTIMER_ACTIVATED](hv_exit_reason_vtimer_activated.md) exit reason, the caller of `hv_vcpu_run`() needs to make the interrupts to the vTimer pending in the guest’s virtual interrupt controller. It also needs to detect when the guest has serviced this interrupt. For example, call this function when emulating a GIC when deactivating an interrupt whose ID matches that of the vTimer.

## See Also

### Timer functions

- [hv_vcpu_get_vtimer_mask](hv_vcpu_get_vtimer_mask%28____%29.md): Gets the virtual timer mask.
- [hv_vcpu_get_vtimer_offset](hv_vcpu_get_vtimer_offset%28____%29.md): Returns the vTimer offset for the vCPU ID you specify.
- [hv_vcpu_set_vtimer_offset](hv_vcpu_set_vtimer_offset%28____%29.md): Sets the vTimer offset to a value that you provide.
