> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_vcpu_accel_rdpmc](https://developer.apple.com/documentation/hypervisor/hv_vcpu_accel_rdpmc)

# HV_VCPU_ACCEL_RDPMC (Swift)

**Framework:** Hypervisor  
**Kind:** Global Variable  
**Availability:** macOS

Instructs the kernel, when set, to handle RDPMC VM exits directly rather than passing them to user space.

## Declaration

```swift
var HV_VCPU_ACCEL_RDPMC: Int { get }
```

## Mentioned In

- [Extending vCPU Capabilities Using Model-Specific Registers](extending-vcpu-capabilities-using-model-specific-registers.md)

<a id="Discussion"></a>

## Discussion

When the guest issues RDPMC instructions, a VM exit occurs. When set, this flag instructs the kernel to handle RDRPMC VM exits directly, and more efficiently, than passing them on to user space.

## See Also

### Constants

- [HV_VCPU_DEFAULT](hv_vcpu_default.md): The default vCPU creation behavior.
- [HV_VCPU_TSC_RELATIVE](hv_vcpu_tsc_relative.md): The value that represents the relative offset the system should add to the hypervisor TSC clock.

# HV_VCPU_ACCEL_RDPMC (Objective-C)

**Framework:** Hypervisor  
**Kind:** Enumeration Case  
**Availability:** macOS

Instructs the kernel, when set, to handle RDPMC VM exits directly rather than passing them to user space.

## Declaration

```objectivec
HV_VCPU_ACCEL_RDPMC
```

## Mentioned In

- [Extending vCPU Capabilities Using Model-Specific Registers](extending-vcpu-capabilities-using-model-specific-registers.md)

<a id="Discussion"></a>

## Discussion

When the guest issues RDPMC instructions, a VM exit occurs. When set, this flag instructs the kernel to handle RDRPMC VM exits directly, and more efficiently, than passing them on to user space.

## See Also

### Constants

- [HV_VCPU_DEFAULT](hv_vcpu_default.md): The default vCPU creation behavior.
- [HV_VCPU_TSC_RELATIVE](hv_vcpu_tsc_relative.md): The value that represents the relative offset the system should add to the hypervisor TSC clock.
