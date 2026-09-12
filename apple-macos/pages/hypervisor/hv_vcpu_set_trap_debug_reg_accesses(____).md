> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_vcpu_set_trap_debug_reg_accesses(_:_:)](https://developer.apple.com/documentation/hypervisor/hv_vcpu_set_trap_debug_reg_accesses(_:_:))

# hv_vcpu_set_trap_debug_reg_accesses(\_:\_:) (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 11.0+

Sets whether debug-register accesses exit the guest.

## Declaration

```swift
func hv_vcpu_set_trap_debug_reg_accesses(_ vcpu: hv_vcpu_t, _ value: Bool) -> hv_return_t
```

## Parameters

- `vcpu`: The instance of the vCPU.
- `value`: A Boolean value that if `true` indicates debug-register accesses in the guest trap to the host.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

<a id="Discussion"></a>

## Discussion

The trapped registers includes `DBGBCR<n>_EL1`, `DBGBVR<n>_EL1`, `DBGWCR<n>_EL1`, `DBGWVR<n>_EL1.` and `MDSCR_EL1`.

The equivalent system register is `MDCR_EL2.TDA`.

> **Important**

>  This function must be called by the owning thread.

## See Also

### Trap configuration

- [hv_vcpu_get_trap_debug_exceptions(\_:\_:)](hv_vcpu_get_trap_debug_exceptions%28____%29.md): Gets whether debug exceptions exit the guest.
- [hv_vcpu_set_trap_debug_exceptions(\_:\_:)](hv_vcpu_set_trap_debug_exceptions%28____%29.md): Sets whether debug exceptions exit the guest.
- [hv_vcpu_get_trap_debug_reg_accesses(\_:\_:)](hv_vcpu_get_trap_debug_reg_accesses%28____%29.md): Gets whether debug-register accesses exit the guest.

# hv_vcpu_set_trap_debug_reg_accesses (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 11.0+

Sets whether debug-register accesses exit the guest.

## Declaration

```objectivec
extern hv_return_t hv_vcpu_set_trap_debug_reg_accesses(hv_vcpu_t vcpu, bool value);
```

## Parameters

- `vcpu`: The instance of the vCPU.
- `value`: A Boolean value that if `true` indicates debug-register accesses in the guest trap to the host.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

<a id="Discussion"></a>

## Discussion

The trapped registers includes `DBGBCR<n>_EL1`, `DBGBVR<n>_EL1`, `DBGWCR<n>_EL1`, `DBGWVR<n>_EL1.` and `MDSCR_EL1`.

The equivalent system register is `MDCR_EL2.TDA`.

> **Important**

>  This function must be called by the owning thread.

## See Also

### Trap configuration

- [hv_vcpu_get_trap_debug_exceptions](hv_vcpu_get_trap_debug_exceptions%28____%29.md): Gets whether debug exceptions exit the guest.
- [hv_vcpu_set_trap_debug_exceptions](hv_vcpu_set_trap_debug_exceptions%28____%29.md): Sets whether debug exceptions exit the guest.
- [hv_vcpu_get_trap_debug_reg_accesses](hv_vcpu_get_trap_debug_reg_accesses%28____%29.md): Gets whether debug-register accesses exit the guest.
