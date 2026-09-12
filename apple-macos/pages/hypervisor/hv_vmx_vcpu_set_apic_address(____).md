> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_vmx_vcpu_set_apic_address(_:_:)](https://developer.apple.com/documentation/hypervisor/hv_vmx_vcpu_set_apic_address(_:_:))

# hv_vmx_vcpu_set_apic_address(\_:\_:) (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 10.10+

Sets the address of the guest Advanced Programmable Interrupt Controller (APIC) for a vCPU in the guest physical address space of the VM.

## Declaration

```swift
func hv_vmx_vcpu_set_apic_address(_ vcpu: hv_vcpuid_t, _ gpa: hv_gpaddr_t) -> hv_return_t
```

## Parameters

- `vcpu`: The ID of the vCPU.
- `gpa`: The address in the guest physical address space. It must be page-aligned.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

<a id="Discussion"></a>

## Discussion

> **Important**

>  This function must be called by the owning thread.

## See Also

### Field management

- [Virtual Machine Control Structure (VMCS) Field IDs](virtual-machine-control-structure-vmcs-field-ids.md): Fields you can read or change using the Hypervisor framework’s read and write functions.
- [hv_vmx_vcpu_read_vmcs(\_:\_:\_:)](hv_vmx_vcpu_read_vmcs%28______%29.md): Returns, by reference, the current value of a virtual machine control structure (VMCS) field of a vCPU.
- [hv_vmx_vcpu_write_vmcs(\_:\_:\_:)](hv_vmx_vcpu_write_vmcs%28______%29.md): Sets the value of a virtual machine control structure (VMCS) field of a vCPU.
- [hv_vmx_vcpu_get_cap_write_vmcs(\_:\_:\_:\_:)](hv_vmx_vcpu_get_cap_write_vmcs%28________%29.md): Returns the allowed_0 and allowed_1 masks for a VMCS field of a vCPU.
- [Virtual Machine control structure (VMCS) Field IDs](1469436-virtual_machine_control_structur-enum.md): Identify the fields of the virtual machine control structure.

# hv_vmx_vcpu_set_apic_address (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 10.10+

Sets the address of the guest Advanced Programmable Interrupt Controller (APIC) for a vCPU in the guest physical address space of the VM.

## Declaration

```objectivec
extern hv_return_t hv_vmx_vcpu_set_apic_address(hv_vcpuid_t vcpu, hv_gpaddr_t gpa);
```

## Parameters

- `vcpu`: The ID of the vCPU.
- `gpa`: The address in the guest physical address space. It must be page-aligned.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

<a id="Discussion"></a>

## Discussion

> **Important**

>  This function must be called by the owning thread.

## See Also

### Field management

- [Virtual Machine Control Structure (VMCS) Field IDs](virtual-machine-control-structure-vmcs-field-ids.md): Fields you can read or change using the Hypervisor framework’s read and write functions.
- [hv_vmx_vcpu_read_vmcs](hv_vmx_vcpu_read_vmcs%28______%29.md): Returns, by reference, the current value of a virtual machine control structure (VMCS) field of a vCPU.
- [hv_vmx_vcpu_write_vmcs](hv_vmx_vcpu_write_vmcs%28______%29.md): Sets the value of a virtual machine control structure (VMCS) field of a vCPU.
- [hv_vmx_vcpu_get_cap_write_vmcs](hv_vmx_vcpu_get_cap_write_vmcs%28________%29.md): Returns the allowed_0 and allowed_1 masks for a VMCS field of a vCPU.
- [Virtual Machine control structure (VMCS) Field IDs](1469436-virtual_machine_control_structur-enum.md): Identify the fields of the virtual machine control structure.
