> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_vm_options_t](https://developer.apple.com/documentation/hypervisor/hv_vm_options_t)

# hv_vm_options_t (Swift)

**Framework:** Hypervisor  
**Kind:** Type Alias  
**Availability:** macOS

Options you use when creating a virtual machine.

## Declaration

```swift
typealias hv_vm_options_t = UInt64
```

## Topics

### Options

- [HV_VM_DEFAULT](hv_vm_default.md): The default VM creation behavior.

## See Also

### Virtual machine management

- [hv_vm_create(\_:)](hv_vm_create%28__%29.md): Creates a VM instance for the current process.
- [hv_vm_destroy()](hv_vm_destroy%28%29.md): Destroys the VM instance associated with the current process.
- [hv_capability(\_:\_:)](hv_capability%28____%29.md): Gets the value of capabilities of the system.
- [hv_capability_t](hv_capability_t.md): The type of system capabilities.

# hv_vm_options_t (Objective-C)

**Framework:** Hypervisor  
**Kind:** Type Alias  
**Availability:** macOS

Options you use when creating a virtual machine.

## Declaration

```objectivec
typedef uint64_t hv_vm_options_t;
```

## Topics

### Options

- [HV_VM_DEFAULT](hv_vm_default.md): The default VM creation behavior.

## See Also

### Virtual machine management

- [hv_vm_create](hv_vm_create%28__%29.md): Creates a VM instance for the current process.
- [hv_vm_destroy](hv_vm_destroy%28%29.md): Destroys the VM instance associated with the current process.
- [hv_capability](hv_capability%28____%29.md): Gets the value of capabilities of the system.
- [hv_capability_t](hv_capability_t.md): The type of system capabilities.
