> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_msr_flags_t](https://developer.apple.com/documentation/hypervisor/hv_msr_flags_t)

# hv_msr_flags_t (Swift)

**Framework:** Hypervisor  
**Kind:** Type Alias  
**Availability:** macOS

The type representing the native Model-Specific Register (MSR) permissions.

## Declaration

```swift
typealias hv_msr_flags_t = UInt32
```

<a id="Discussion"></a>

## Discussion

This type represents the native MSR permissions for `hv_vm_enable_managed_msr()`. The [MSR Permissions](3567078-msr_permissions-enum.md) enumeration describes the available permission values.

## See Also

### Model-Specific Registers

- [Extending vCPU Capabilities Using Model-Specific Registers](extending-vcpu-capabilities-using-model-specific-registers.md): Configure specific client performance monitoring and enable other vCPU capabilities using Model-Specific Registers.
- [hv_vcpu_read_msr(\_:\_:\_:)](hv_vcpu_read_msr%28______%29.md): Returns, by reference, the current value of a Model-Specific Register (MSR) of a vCPU.
- [hv_vcpu_write_msr(\_:\_:\_:)](hv_vcpu_write_msr%28______%29.md): Sets the value of a Model-Specific Register (MSR) of a vCPU.
- [hv_vcpu_enable_native_msr(\_:\_:\_:)](hv_vcpu_enable_native_msr%28______%29.md): Enables or disables a Model-Specific Register (MSR) that the VM uses natively.
- [hv_vcpu_set_msr_access(\_:\_:\_:)](hv_vcpu_set_msr_access%28______%29.md): Controls the guest access of a managed Model-Specific Register (MSR).
- [hv_vcpu_enable_managed_msr(\_:\_:\_:)](hv_vcpu_enable_managed_msr%28______%29.md): Enables the guest access of a managed Model-Specific Register (MSR).
- [Model-Specific Registers](3727856-model-specific-registers.md)
- [MSR Permissions](3567078-msr_permissions-enum.md): An enumeration that describes possible Model-Specific Register (MSR) permisssions.

# hv_msr_flags_t (Objective-C)

**Framework:** Hypervisor  
**Kind:** Type Alias  
**Availability:** macOS

The type representing the native Model-Specific Register (MSR) permissions.

## Declaration

```objectivec
typedef uint32_t hv_msr_flags_t;
```

<a id="Discussion"></a>

## Discussion

This type represents the native MSR permissions for `hv_vm_enable_managed_msr()`. The [MSR Permissions](3567078-msr_permissions-enum.md) enumeration describes the available permission values.

## See Also

### Model-Specific Registers

- [Extending vCPU Capabilities Using Model-Specific Registers](extending-vcpu-capabilities-using-model-specific-registers.md): Configure specific client performance monitoring and enable other vCPU capabilities using Model-Specific Registers.
- [hv_vcpu_read_msr](hv_vcpu_read_msr%28______%29.md): Returns, by reference, the current value of a Model-Specific Register (MSR) of a vCPU.
- [hv_vcpu_write_msr](hv_vcpu_write_msr%28______%29.md): Sets the value of a Model-Specific Register (MSR) of a vCPU.
- [hv_vcpu_enable_native_msr](hv_vcpu_enable_native_msr%28______%29.md): Enables or disables a Model-Specific Register (MSR) that the VM uses natively.
- [hv_vcpu_set_msr_access](hv_vcpu_set_msr_access%28______%29.md): Controls the guest access of a managed Model-Specific Register (MSR).
- [hv_vcpu_enable_managed_msr](hv_vcpu_enable_managed_msr%28______%29.md): Enables the guest access of a managed Model-Specific Register (MSR).
- [Model-Specific Registers](3727856-model-specific-registers.md)
- [MSR Permissions](3567078-msr_permissions-enum.md): An enumeration that describes possible Model-Specific Register (MSR) permisssions.
