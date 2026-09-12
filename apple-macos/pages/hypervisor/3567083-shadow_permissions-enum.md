> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/3567083-shadow_permissions-enum](https://developer.apple.com/documentation/hypervisor/3567083-shadow_permissions-enum)

# Shadow Permissions (Swift)

**Framework:** Hypervisor  
**Kind:** API Collection

Permissions that define access to the shadow VMCS fields.

## Topics

### Permissions

- [HV_SHADOW_VMCS_NONE](hv_shadow_vmcs_none.md): The value that indicates no access to the shadow VMCS fields.
- [HV_SHADOW_VMCS_READ](hv_shadow_vmcs_read.md): The value that indicates read access to the shadow VMCS fields.
- [HV_SHADOW_VMCS_WRITE](hv_shadow_vmcs_write.md): The value that indicates read access to the write access shadow VMCS fields.

## See Also

### Shadow fields

- [hv_vmx_vcpu_read_shadow_vmcs(\_:\_:\_:)](hv_vmx_vcpu_read_shadow_vmcs%28______%29.md): Returns the current value of a shadow VMCS field of a vCPU.
- [hv_vmx_vcpu_set_shadow_access(\_:\_:\_:)](hv_vmx_vcpu_set_shadow_access%28______%29.md): Set the access permissions of a shadow VMCS field of a vCPU.
- [hv_vmx_vcpu_write_shadow_vmcs(\_:\_:\_:)](hv_vmx_vcpu_write_shadow_vmcs%28______%29.md): Set the value of a shadow VMCS field of a vCPU.
- [hv_shadow_flags_t](hv_shadow_flags_t.md): Shadow VMCS permissions for the set shadow access function.

# Shadow Permissions (Objective-C)

**Framework:** Hypervisor  
**Kind:** API Collection

Permissions that define access to the shadow VMCS fields.

## Topics

### Permissions

- [HV_SHADOW_VMCS_NONE](hv_shadow_vmcs_none.md): The value that indicates no access to the shadow VMCS fields.
- [HV_SHADOW_VMCS_READ](hv_shadow_vmcs_read.md): The value that indicates read access to the shadow VMCS fields.
- [HV_SHADOW_VMCS_WRITE](hv_shadow_vmcs_write.md): The value that indicates read access to the write access shadow VMCS fields.

## See Also

### Shadow fields

- [hv_vmx_vcpu_read_shadow_vmcs](hv_vmx_vcpu_read_shadow_vmcs%28______%29.md): Returns the current value of a shadow VMCS field of a vCPU.
- [hv_vmx_vcpu_set_shadow_access](hv_vmx_vcpu_set_shadow_access%28______%29.md): Set the access permissions of a shadow VMCS field of a vCPU.
- [hv_vmx_vcpu_write_shadow_vmcs](hv_vmx_vcpu_write_shadow_vmcs%28______%29.md): Set the value of a shadow VMCS field of a vCPU.
- [hv_shadow_flags_t](hv_shadow_flags_t.md): Shadow VMCS permissions for the set shadow access function.
