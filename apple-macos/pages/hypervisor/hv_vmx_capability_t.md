> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_vmx_capability_t](https://developer.apple.com/documentation/hypervisor/hv_vmx_capability_t)

# hv_vmx_capability_t (Swift)

**Framework:** Hypervisor  
**Kind:** Structure  
**Availability:** macOS

The type that describes Virtual Machine Extensions (VMX) capability fields.

## Declaration

```swift
struct hv_vmx_capability_t
```

## Topics

### Capabilities

- [HV_VMX_CAP_PINBASED](hv_vmx_cap_pinbased.md): Field ID for pin-based capabilities.
- [HV_VMX_CAP_PROCBASED](hv_vmx_cap_procbased.md): Field ID for primary proc-based capabilities.
- [HV_VMX_CAP_PROCBASED2](hv_vmx_cap_procbased2.md): Field ID for secondary proc-based capabilities.
- [HV_VMX_CAP_ENTRY](hv_vmx_cap_entry.md): Field ID for VM entry capabilities.
- [HV_VMX_CAP_EXIT](hv_vmx_cap_exit.md): Field ID for VM exit capabilities.
- [HV_VMX_CAP_BASIC](hv_vmx_cap_basic.md): Field ID for basic VMX capabilities.
- [HV_VMX_CAP_TRUE_PINBASED](hv_vmx_cap_true_pinbased.md): Field ID for hardware pin-based VMX capabilities.
- [HV_VMX_CAP_TRUE_PROCBASED](hv_vmx_cap_true_procbased.md): Field ID for primary process-based VMX capabilities.
- [HV_VMX_CAP_TRUE_ENTRY](hv_vmx_cap_true_entry.md): Field ID for hardware VM-entry VMX capabilities.
- [HV_VMX_CAP_TRUE_EXIT](hv_vmx_cap_true_exit.md): Field ID for hardware VM-exit VMX capabilities.
- [HV_VMX_CAP_MISC](hv_vmx_cap_misc.md): Field ID for miscellaneous VMX capabilities.
- [HV_VMX_CAP_CR0_FIXED0](hv_vmx_cap_cr0_fixed0.md): Field ID for CR0 allowed, zero-bits VMX capability.
- [HV_VMX_CAP_CR0_FIXED1](hv_vmx_cap_cr0_fixed1.md): Field ID for CR0 allowed, one-bits VMX capability.
- [HV_VMX_CAP_CR4_FIXED0](hv_vmx_cap_cr4_fixed0.md): Fields ID for CR4 allowed, zero-bits VMX capability.
- [HV_VMX_CAP_CR4_FIXED1](hv_vmx_cap_cr4_fixed1.md): Field ID for CR4 allowed, one-bits VMX capability.
- [HV_VMX_CAP_VMCS_ENUM](hv_vmx_cap_vmcs_enum.md): Field ID for VMCS enumeration capability.
- [HV_VMX_CAP_EPT_VPID_CAP](hv_vmx_cap_ept_vpid_cap.md): Field ID for EPT/VPID VMX capabilities.
- [HV_VMX_CAP_PREEMPTION_TIMER](hv_vmx_cap_preemption_timer.md): Field ID for preemption timer frequency.

### Initializers

- [init(\_:)](hv_vmx_capability_t/init%28__%29.md): Creates a new Virtual Machine Extensions (VMX) instance.
- [init(rawValue:)](hv_vmx_capability_t/init%28rawvalue_%29.md): Creates a new Virtual Machine Extensions (VMX) instance with the value you provide.

### Raw Value

- [rawValue](hv_vmx_capability_t/rawvalue.md): An unsigned 32-bit integer that represents the Virtual Machine Extensions (VMX) fields.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Capabilities

- [hv_vmx_read_capability(\_:\_:)](hv_vmx_read_capability%28____%29.md): Returns, by reference, the VMX virtualization capabilities of the host processor.
- [hv_vmx_get_msr_info(\_:\_:)](hv_vmx_get_msr_info%28____%29.md): Returns information about guest MSR configuration.
- [VMX Capabilities](1469645-vmx-capabilities.md): An enumeration that represents the available VMX capabilities.
- [hv_vmx_msr_info_t](hv_vmx_msr_info_t.md): The type that describes Move to Status Register (MSR) information fields.
- [MSR Information Fields](3567084-msr-information-fields.md): The type that describes Machine Specific Register (MSR) fields.

# hv_vmx_capability_t (Objective-C)

**Framework:** Hypervisor  
**Kind:** Enumeration  
**Availability:** macOS

The type that describes Virtual Machine Extensions (VMX) capability fields.

## Declaration

```objectivec
typedef enum { ... } hv_vmx_capability_t;
```

## Topics

### Capabilities

- [HV_VMX_CAP_PINBASED](hv_vmx_cap_pinbased.md): Field ID for pin-based capabilities.
- [HV_VMX_CAP_PROCBASED](hv_vmx_cap_procbased.md): Field ID for primary proc-based capabilities.
- [HV_VMX_CAP_PROCBASED2](hv_vmx_cap_procbased2.md): Field ID for secondary proc-based capabilities.
- [HV_VMX_CAP_ENTRY](hv_vmx_cap_entry.md): Field ID for VM entry capabilities.
- [HV_VMX_CAP_EXIT](hv_vmx_cap_exit.md): Field ID for VM exit capabilities.
- [HV_VMX_CAP_BASIC](hv_vmx_cap_basic.md): Field ID for basic VMX capabilities.
- [HV_VMX_CAP_TRUE_PINBASED](hv_vmx_cap_true_pinbased.md): Field ID for hardware pin-based VMX capabilities.
- [HV_VMX_CAP_TRUE_PROCBASED](hv_vmx_cap_true_procbased.md): Field ID for primary process-based VMX capabilities.
- [HV_VMX_CAP_TRUE_ENTRY](hv_vmx_cap_true_entry.md): Field ID for hardware VM-entry VMX capabilities.
- [HV_VMX_CAP_TRUE_EXIT](hv_vmx_cap_true_exit.md): Field ID for hardware VM-exit VMX capabilities.
- [HV_VMX_CAP_MISC](hv_vmx_cap_misc.md): Field ID for miscellaneous VMX capabilities.
- [HV_VMX_CAP_CR0_FIXED0](hv_vmx_cap_cr0_fixed0.md): Field ID for CR0 allowed, zero-bits VMX capability.
- [HV_VMX_CAP_CR0_FIXED1](hv_vmx_cap_cr0_fixed1.md): Field ID for CR0 allowed, one-bits VMX capability.
- [HV_VMX_CAP_CR4_FIXED0](hv_vmx_cap_cr4_fixed0.md): Fields ID for CR4 allowed, zero-bits VMX capability.
- [HV_VMX_CAP_CR4_FIXED1](hv_vmx_cap_cr4_fixed1.md): Field ID for CR4 allowed, one-bits VMX capability.
- [HV_VMX_CAP_VMCS_ENUM](hv_vmx_cap_vmcs_enum.md): Field ID for VMCS enumeration capability.
- [HV_VMX_CAP_EPT_VPID_CAP](hv_vmx_cap_ept_vpid_cap.md): Field ID for EPT/VPID VMX capabilities.
- [HV_VMX_CAP_PREEMPTION_TIMER](hv_vmx_cap_preemption_timer.md): Field ID for preemption timer frequency.

## See Also

### Capabilities

- [hv_vmx_read_capability](hv_vmx_read_capability%28____%29.md): Returns, by reference, the VMX virtualization capabilities of the host processor.
- [hv_vmx_get_msr_info](hv_vmx_get_msr_info%28____%29.md): Returns information about guest MSR configuration.
- [VMX Capabilities](1469645-vmx-capabilities.md): An enumeration that represents the available VMX capabilities.
- [hv_vmx_msr_info_t](hv_vmx_msr_info_t.md): The type that describes Move to Status Register (MSR) information fields.
- [MSR Information Fields](3567084-msr-information-fields.md): The type that describes Machine Specific Register (MSR) fields.
