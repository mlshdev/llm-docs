> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_capability_t](https://developer.apple.com/documentation/hypervisor/hv_capability_t)

# hv_capability_t (Swift)

**Framework:** Hypervisor  
**Kind:** Type Alias  
**Availability:** macOS

The type of system capabilities.

## Declaration

```swift
typealias hv_capability_t = UInt64
```

## Topics

### Capabilities

- [HV_CAP_VCPUMAX](hv_cap_vcpumax.md): A value that indicates the maximum number of available vCPUs.
- [HV_CAP_ADDRSPACEMAX](hv_cap_addrspacemax.md): A value that indicates the maximum number of available address spaces.

## See Also

### Virtual machine management

- [hv_vm_create(\_:)](hv_vm_create%28__%29.md): Creates a VM instance for the current process.
- [hv_vm_destroy()](hv_vm_destroy%28%29.md): Destroys the VM instance associated with the current process.
- [hv_capability(\_:\_:)](hv_capability%28____%29.md): Gets the value of capabilities of the system.
- [hv_vm_options_t](hv_vm_options_t.md): Options you use when creating a virtual machine.

# hv_capability_t (Objective-C)

**Framework:** Hypervisor  
**Kind:** Type Alias  
**Availability:** macOS

The type of system capabilities.

## Declaration

```objectivec
typedef uint64_t hv_capability_t;
```

## Topics

### Capabilities

- [HV_CAP_VCPUMAX](hv_cap_vcpumax.md): A value that indicates the maximum number of available vCPUs.
- [HV_CAP_ADDRSPACEMAX](hv_cap_addrspacemax.md): A value that indicates the maximum number of available address spaces.

## See Also

### Virtual machine management

- [hv_vm_create](hv_vm_create%28__%29.md): Creates a VM instance for the current process.
- [hv_vm_destroy](hv_vm_destroy%28%29.md): Destroys the VM instance associated with the current process.
- [hv_capability](hv_capability%28____%29.md): Gets the value of capabilities of the system.
- [hv_vm_options_t](hv_vm_options_t.md): Options you use when creating a virtual machine.
