> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_shadow_flags_t](https://developer.apple.com/documentation/hypervisor/hv_shadow_flags_t)

# hv_shadow_flags_t (Swift)

**Framework:** Hypervisor  
**Kind:** Type Alias  
**Availability:** macOS

Shadow VMCS permissions for the set shadow access function.

## Declaration

```swift
typealias hv_shadow_flags_t = UInt64
```

## See Also

### Shadow fields

- [hv_vmx_vcpu_read_shadow_vmcs(\_:\_:\_:)](hv_vmx_vcpu_read_shadow_vmcs%28______%29.md): Returns the current value of a shadow VMCS field of a vCPU.
- [hv_vmx_vcpu_set_shadow_access(\_:\_:\_:)](hv_vmx_vcpu_set_shadow_access%28______%29.md): Set the access permissions of a shadow VMCS field of a vCPU.
- [hv_vmx_vcpu_write_shadow_vmcs(\_:\_:\_:)](hv_vmx_vcpu_write_shadow_vmcs%28______%29.md): Set the value of a shadow VMCS field of a vCPU.
- [Shadow Permissions](3567083-shadow_permissions-enum.md): Permissions that define access to the shadow VMCS fields.

# hv_shadow_flags_t (Objective-C)

**Framework:** Hypervisor  
**Kind:** Type Alias  
**Availability:** macOS

Shadow VMCS permissions for the set shadow access function.

## Declaration

```objectivec
typedef uint64_t hv_shadow_flags_t;
```

## See Also

### Shadow fields

- [hv_vmx_vcpu_read_shadow_vmcs](hv_vmx_vcpu_read_shadow_vmcs%28______%29.md): Returns the current value of a shadow VMCS field of a vCPU.
- [hv_vmx_vcpu_set_shadow_access](hv_vmx_vcpu_set_shadow_access%28______%29.md): Set the access permissions of a shadow VMCS field of a vCPU.
- [hv_vmx_vcpu_write_shadow_vmcs](hv_vmx_vcpu_write_shadow_vmcs%28______%29.md): Set the value of a shadow VMCS field of a vCPU.
- [Shadow Permissions](3567083-shadow_permissions-enum.md): Permissions that define access to the shadow VMCS fields.
