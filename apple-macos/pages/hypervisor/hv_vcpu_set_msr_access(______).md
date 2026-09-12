> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_vcpu_set_msr_access(_:_:_:)](https://developer.apple.com/documentation/hypervisor/hv_vcpu_set_msr_access(_:_:_:))

# hv_vcpu_set_msr_access(\_:\_:\_:) (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 11.0+

Controls the guest access of a managed Model-Specific Register (MSR).

## Declaration

```swift
func hv_vcpu_set_msr_access(_ vcpu: hv_vcpuid_t, _ msr: UInt32, _ flags: hv_msr_flags_t) -> hv_return_t
```

## Parameters

- `vcpu`: The instance of the vCPU.
- `msr`: The ID of the MSR.
- `flags`: The permission for `msr`.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

## Mentioned In

- [Extending vCPU Capabilities Using Model-Specific Registers](extending-vcpu-capabilities-using-model-specific-registers.md)

<a id="Discussion"></a>

## Discussion

This function must be called by the owning thread.

## See Also

### Model-Specific Registers

- [Extending vCPU Capabilities Using Model-Specific Registers](extending-vcpu-capabilities-using-model-specific-registers.md): Configure specific client performance monitoring and enable other vCPU capabilities using Model-Specific Registers.
- [hv_vcpu_read_msr(\_:\_:\_:)](hv_vcpu_read_msr%28______%29.md): Returns, by reference, the current value of a Model-Specific Register (MSR) of a vCPU.
- [hv_vcpu_write_msr(\_:\_:\_:)](hv_vcpu_write_msr%28______%29.md): Sets the value of a Model-Specific Register (MSR) of a vCPU.
- [hv_vcpu_enable_native_msr(\_:\_:\_:)](hv_vcpu_enable_native_msr%28______%29.md): Enables or disables a Model-Specific Register (MSR) that the VM uses natively.
- [hv_vcpu_enable_managed_msr(\_:\_:\_:)](hv_vcpu_enable_managed_msr%28______%29.md): Enables the guest access of a managed Model-Specific Register (MSR).
- [hv_msr_flags_t](hv_msr_flags_t.md): The type representing the native Model-Specific Register (MSR) permissions.
- [Model-Specific Registers](3727856-model-specific-registers.md)
- [MSR Permissions](3567078-msr_permissions-enum.md): An enumeration that describes possible Model-Specific Register (MSR) permisssions.

# hv_vcpu_set_msr_access (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 11.0+

Controls the guest access of a managed Model-Specific Register (MSR).

## Declaration

```objectivec
extern hv_return_t hv_vcpu_set_msr_access(hv_vcpuid_t vcpu, uint32_t msr, hv_msr_flags_t flags);
```

## Parameters

- `vcpu`: The instance of the vCPU.
- `msr`: The ID of the MSR.
- `flags`: The permission for `msr`.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

## Mentioned In

- [Extending vCPU Capabilities Using Model-Specific Registers](extending-vcpu-capabilities-using-model-specific-registers.md)

<a id="Discussion"></a>

## Discussion

This function must be called by the owning thread.

## See Also

### Model-Specific Registers

- [Extending vCPU Capabilities Using Model-Specific Registers](extending-vcpu-capabilities-using-model-specific-registers.md): Configure specific client performance monitoring and enable other vCPU capabilities using Model-Specific Registers.
- [hv_vcpu_read_msr](hv_vcpu_read_msr%28______%29.md): Returns, by reference, the current value of a Model-Specific Register (MSR) of a vCPU.
- [hv_vcpu_write_msr](hv_vcpu_write_msr%28______%29.md): Sets the value of a Model-Specific Register (MSR) of a vCPU.
- [hv_vcpu_enable_native_msr](hv_vcpu_enable_native_msr%28______%29.md): Enables or disables a Model-Specific Register (MSR) that the VM uses natively.
- [hv_vcpu_enable_managed_msr](hv_vcpu_enable_managed_msr%28______%29.md): Enables the guest access of a managed Model-Specific Register (MSR).
- [hv_msr_flags_t](hv_msr_flags_t.md): The type representing the native Model-Specific Register (MSR) permissions.
- [Model-Specific Registers](3727856-model-specific-registers.md)
- [MSR Permissions](3567078-msr_permissions-enum.md): An enumeration that describes possible Model-Specific Register (MSR) permisssions.
