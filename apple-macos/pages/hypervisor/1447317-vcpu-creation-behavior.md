> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/1447317-vcpu-creation-behavior](https://developer.apple.com/documentation/hypervisor/1447317-vcpu-creation-behavior)

# vCPU Creation Behavior (Swift)

**Framework:** Hypervisor  
**Kind:** API Collection

An enumeration representing the default creation options for virtual CPUs.

## Topics

### Constants

- [HV_VCPU_DEFAULT](hv_vcpu_default.md): The default vCPU creation behavior.
- [HV_VCPU_ACCEL_RDPMC](hv_vcpu_accel_rdpmc.md): Instructs the kernel, when set, to handle RDPMC VM exits directly rather than passing them to user space.
- [HV_VCPU_TSC_RELATIVE](hv_vcpu_tsc_relative.md): The value that represents the relative offset the system should add to the hypervisor TSC clock.

## See Also

### Creation and destruction

- [hv_vcpu_create(\_:\_:\_:)](hv_vcpu_create%28______%29.md): Creates a vCPU instance for the current thread.
- [hv_vcpu_destroy(\_:)](hv_vcpu_destroy%28__%29.md): Destroys the vCPU instance associated with the current thread.
- [hv_vcpu_options_t](hv_vcpu_options_t.md): Options for creating a new vCPU instance.
- [hv_vcpuid_t](hv_vcpuid_t.md): The type that describes a vCPU ID.

# vCPU Creation Behavior (Objective-C)

**Framework:** Hypervisor  
**Kind:** API Collection

An enumeration representing the default creation options for virtual CPUs.

## Topics

### Constants

- [HV_VCPU_DEFAULT](hv_vcpu_default.md): The default vCPU creation behavior.
- [HV_VCPU_ACCEL_RDPMC](hv_vcpu_accel_rdpmc.md): Instructs the kernel, when set, to handle RDPMC VM exits directly rather than passing them to user space.
- [HV_VCPU_TSC_RELATIVE](hv_vcpu_tsc_relative.md): The value that represents the relative offset the system should add to the hypervisor TSC clock.

## See Also

### Creation and destruction

- [hv_vcpu_create](hv_vcpu_create%28______%29.md): Creates a vCPU instance for the current thread.
- [hv_vcpu_destroy](hv_vcpu_destroy%28__%29.md): Destroys the vCPU instance associated with the current thread.
- [hv_vcpu_options_t](hv_vcpu_options_t.md): Options for creating a new vCPU instance.
- [hv_vcpuid_t](hv_vcpuid_t.md): The type that describes a vCPU ID.
