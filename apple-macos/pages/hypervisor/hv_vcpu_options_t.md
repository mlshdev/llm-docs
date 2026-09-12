> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_vcpu_options_t](https://developer.apple.com/documentation/hypervisor/hv_vcpu_options_t)

# hv_vcpu_options_t (Swift)

**Framework:** Hypervisor  
**Kind:** Type Alias  
**Availability:** macOS

Options for creating a new vCPU instance.

## Declaration

```swift
typealias hv_vcpu_options_t = UInt64
```

## Topics

### Constants

- [HV_VCPU_DEFAULT](hv_vcpu_default.md): The default vCPU creation behavior.

## See Also

### Creation and destruction

- [hv_vcpu_create(\_:\_:\_:)](hv_vcpu_create%28______%29.md): Creates a vCPU instance for the current thread.
- [hv_vcpu_destroy(\_:)](hv_vcpu_destroy%28__%29.md): Destroys the vCPU instance associated with the current thread.
- [vCPU Creation Behavior](1447317-vcpu-creation-behavior.md): An enumeration representing the default creation options for virtual CPUs.
- [hv_vcpuid_t](hv_vcpuid_t.md): The type that describes a vCPU ID.

# hv_vcpu_options_t (Objective-C)

**Framework:** Hypervisor  
**Kind:** Type Alias  
**Availability:** macOS

Options for creating a new vCPU instance.

## Declaration

```objectivec
typedef uint64_t hv_vcpu_options_t;
```

## Topics

### Constants

- [HV_VCPU_DEFAULT](hv_vcpu_default.md): The default vCPU creation behavior.

## See Also

### Creation and destruction

- [hv_vcpu_create](hv_vcpu_create%28______%29.md): Creates a vCPU instance for the current thread.
- [hv_vcpu_destroy](hv_vcpu_destroy%28__%29.md): Destroys the vCPU instance associated with the current thread.
- [vCPU Creation Behavior](1447317-vcpu-creation-behavior.md): An enumeration representing the default creation options for virtual CPUs.
- [hv_vcpuid_t](hv_vcpuid_t.md): The type that describes a vCPU ID.
