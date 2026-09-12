> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_vmx_vcpu_set_shadow_access(_:_:_:)](https://developer.apple.com/documentation/hypervisor/hv_vmx_vcpu_set_shadow_access(_:_:_:))

# hv_vmx_vcpu_set_shadow_access(\_:\_:\_:) (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 10.15+

Set the access permissions of a shadow VMCS field of a vCPU.

## Declaration

```swift
func hv_vmx_vcpu_set_shadow_access(_ vcpu: hv_vcpuid_t, _ field: UInt32, _ flags: hv_shadow_flags_t) -> hv_return_t
```

## Parameters

- `vcpu`: The vCPU ID.
- `field`: The ID of the shadow VMCS field.
- `flags`: The new `READ`, `WRITE` permissions for the shadow VMCS field.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

<a id="discussion"></a>

## Discussion

> **Important**

>  This function must be called by the owning thread.

## See Also

### Shadow fields

- [hv_vmx_vcpu_read_shadow_vmcs(\_:\_:\_:)](hv_vmx_vcpu_read_shadow_vmcs%28______%29.md): Returns the current value of a shadow VMCS field of a vCPU.
- [hv_vmx_vcpu_write_shadow_vmcs(\_:\_:\_:)](hv_vmx_vcpu_write_shadow_vmcs%28______%29.md): Set the value of a shadow VMCS field of a vCPU.
- [hv_shadow_flags_t](hv_shadow_flags_t.md): Shadow VMCS permissions for the set shadow access function.
- [Shadow Permissions](3567083-shadow_permissions-enum.md): Permissions that define access to the shadow VMCS fields.

# hv_vmx_vcpu_set_shadow_access (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 10.15+

Set the access permissions of a shadow VMCS field of a vCPU.

## Declaration

```objectivec
extern hv_return_t hv_vmx_vcpu_set_shadow_access(hv_vcpuid_t vcpu, uint32_t field, hv_shadow_flags_t flags);
```

## Parameters

- `vcpu`: The vCPU ID.
- `field`: The ID of the shadow VMCS field.
- `flags`: The new `READ`, `WRITE` permissions for the shadow VMCS field.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

<a id="discussion"></a>

## Discussion

> **Important**

>  This function must be called by the owning thread.

## See Also

### Shadow fields

- [hv_vmx_vcpu_read_shadow_vmcs](hv_vmx_vcpu_read_shadow_vmcs%28______%29.md): Returns the current value of a shadow VMCS field of a vCPU.
- [hv_vmx_vcpu_write_shadow_vmcs](hv_vmx_vcpu_write_shadow_vmcs%28______%29.md): Set the value of a shadow VMCS field of a vCPU.
- [hv_shadow_flags_t](hv_shadow_flags_t.md): Shadow VMCS permissions for the set shadow access function.
- [Shadow Permissions](3567083-shadow_permissions-enum.md): Permissions that define access to the shadow VMCS fields.
