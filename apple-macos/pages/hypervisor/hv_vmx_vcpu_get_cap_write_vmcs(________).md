> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_vmx_vcpu_get_cap_write_vmcs(_:_:_:_:)](https://developer.apple.com/documentation/hypervisor/hv_vmx_vcpu_get_cap_write_vmcs(_:_:_:_:))

# hv_vmx_vcpu_get_cap_write_vmcs(\_:\_:\_:\_:) (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 11.0+

Returns the allowed_0 and allowed_1 masks for a VMCS field of a vCPU.

## Declaration

```swift
func hv_vmx_vcpu_get_cap_write_vmcs(_ vcpu: hv_vcpuid_t, _ field: UInt32, _ allowed_0: UnsafeMutablePointer<UInt64>, _ allowed_1: UnsafeMutablePointer<UInt64>) -> hv_return_t
```

## Parameters

- `vcpu`: The vCPU ID.
- `field`: The ID of the VMCS field for which to return capabilities.
- `allowed_0`: The pointer to the VMCS allowed_0 mask (written on success).
- `allowed_1`: The pointer to the VMCS allowed_1 mask (written on success).

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

<a id="Discussion"></a>

## Discussion

Returns the constraints imposed by the Hypervisor framework on the given VMCS field, in the form of `allowed_0` and `allowed_1` masks, that indicate what bit values may be set when writing the given VMCS field.

When writing to a VMCS field, the caller is allowed to set bits that are 0 in its `allowed_0` mask to 0, and bits that are 1 in its `allowed_1` mask to 1. This means:

- If allowed_0 = 0, allowed_1 = 0 -\> must be `NOT SET`.
- If allowed_0 = 0, allowed_1 = 1 -\> can be either `SET` or `NOT SET.`
- If allowed_0 = 1, allowed_1 = 0 -\> undefined (shouldn’t happen).
- If allowed_0 = 1, allowed_1 = 1 -\> must be `SET`.

> **Important**

>  This function must be called by the owning thread.

## See Also

### Field management

- [Virtual Machine Control Structure (VMCS) Field IDs](virtual-machine-control-structure-vmcs-field-ids.md): Fields you can read or change using the Hypervisor framework’s read and write functions.
- [hv_vmx_vcpu_read_vmcs(\_:\_:\_:)](hv_vmx_vcpu_read_vmcs%28______%29.md): Returns, by reference, the current value of a virtual machine control structure (VMCS) field of a vCPU.
- [hv_vmx_vcpu_write_vmcs(\_:\_:\_:)](hv_vmx_vcpu_write_vmcs%28______%29.md): Sets the value of a virtual machine control structure (VMCS) field of a vCPU.
- [hv_vmx_vcpu_set_apic_address(\_:\_:)](hv_vmx_vcpu_set_apic_address%28____%29.md): Sets the address of the guest Advanced Programmable Interrupt Controller (APIC) for a vCPU in the guest physical address space of the VM.
- [Virtual Machine control structure (VMCS) Field IDs](1469436-virtual_machine_control_structur-enum.md): Identify the fields of the virtual machine control structure.

# hv_vmx_vcpu_get_cap_write_vmcs (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 11.0+

Returns the allowed_0 and allowed_1 masks for a VMCS field of a vCPU.

## Declaration

```objectivec
extern hv_return_t hv_vmx_vcpu_get_cap_write_vmcs(hv_vcpuid_t vcpu, uint32_t field, uint64_t *allowed_0, uint64_t *allowed_1);
```

## Parameters

- `vcpu`: The vCPU ID.
- `field`: The ID of the VMCS field for which to return capabilities.
- `allowed_0`: The pointer to the VMCS allowed_0 mask (written on success).
- `allowed_1`: The pointer to the VMCS allowed_1 mask (written on success).

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

<a id="Discussion"></a>

## Discussion

Returns the constraints imposed by the Hypervisor framework on the given VMCS field, in the form of `allowed_0` and `allowed_1` masks, that indicate what bit values may be set when writing the given VMCS field.

When writing to a VMCS field, the caller is allowed to set bits that are 0 in its `allowed_0` mask to 0, and bits that are 1 in its `allowed_1` mask to 1. This means:

- If allowed_0 = 0, allowed_1 = 0 -\> must be `NOT SET`.
- If allowed_0 = 0, allowed_1 = 1 -\> can be either `SET` or `NOT SET.`
- If allowed_0 = 1, allowed_1 = 0 -\> undefined (shouldn’t happen).
- If allowed_0 = 1, allowed_1 = 1 -\> must be `SET`.

> **Important**

>  This function must be called by the owning thread.

## See Also

### Field management

- [Virtual Machine Control Structure (VMCS) Field IDs](virtual-machine-control-structure-vmcs-field-ids.md): Fields you can read or change using the Hypervisor framework’s read and write functions.
- [hv_vmx_vcpu_read_vmcs](hv_vmx_vcpu_read_vmcs%28______%29.md): Returns, by reference, the current value of a virtual machine control structure (VMCS) field of a vCPU.
- [hv_vmx_vcpu_write_vmcs](hv_vmx_vcpu_write_vmcs%28______%29.md): Sets the value of a virtual machine control structure (VMCS) field of a vCPU.
- [hv_vmx_vcpu_set_apic_address](hv_vmx_vcpu_set_apic_address%28____%29.md): Sets the address of the guest Advanced Programmable Interrupt Controller (APIC) for a vCPU in the guest physical address space of the VM.
- [Virtual Machine control structure (VMCS) Field IDs](1469436-virtual_machine_control_structur-enum.md): Identify the fields of the virtual machine control structure.
