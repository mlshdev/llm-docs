> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/intel-based_mac-memory-management](https://developer.apple.com/documentation/hypervisor/intel-based_mac-memory-management)

# Memory Management (Swift)

**Framework:** Hypervisor  
**Kind:** API Collection

Map memory into the physical address space of the virtual machine, and allocate additional memory for the current task.

## Topics

### Shared memory

- [hv_vm_map(\_:\_:\_:\_:)](hv_vm_map%28________%29.md): Maps a region in the virtual address space of the current process into the guest physical address space of the VM.
- [hv_vm_unmap(\_:\_:)](hv_vm_unmap%28____%29.md): Unmaps a region in the guest physical address space of the VM.
- [hv_vm_protect(\_:\_:\_:)](hv_vm_protect%28______%29.md): Modifies the permissions of a region in the guest physical address space of the VM.

### Process-specific memory

- [hv_vm_space_create(\_:)](hv_vm_space_create%28__%29.md): Creates an additional guest address space for the current task.
- [hv_vm_space_destroy(\_:)](hv_vm_space_destroy%28__%29.md): Destroys the address space instance associated with the current task.
- [hv_vm_map_space(\_:\_:\_:\_:\_:)](hv_vm_map_space%28__________%29.md): Maps a region in the virtual address space of the current task into a guest physical address space of the VM.
- [hv_vm_unmap_space(\_:\_:\_:)](hv_vm_unmap_space%28______%29.md): Umaps a region in a guest physical address space of the VM.
- [hv_vm_protect_space(\_:\_:\_:\_:)](hv_vm_protect_space%28________%29.md): Modifies the permissions of a region in a guest physical address space of the VM.

### Common types

- [hv_uvaddr_t](hv_uvaddr_t.md): The type of a user virtual address.
- [hv_gpaddr_t](hv_gpaddr_t.md): The type of a guest physical address (GPA).
- [hv_memory_flags_t](hv_memory_flags_t.md): The permissions for guest physical memory regions.
- [Memory Permissions](1447309-memory_permissions-enum.md): Enumeration values that describe memory permissions.
- [hv_vm_space_t](hv_vm_space_t.md): The type of a guest-address space.
- [Address Space Types](3181561-address_space_type-enum.md)

## See Also

### Resource management

- [vCPU Management](intel-based_mac-vcpu-management.md): Create and run virtual CPUs, and manage CPU-specific registers and features.
- [Virtual Machine Control Structure (VMCS)](virtual-machine-control-structure-vmcs.md): Read and write to fields of the virtual machine control structure.

# Memory Management (Objective-C)

**Framework:** Hypervisor  
**Kind:** API Collection

Map memory into the physical address space of the virtual machine, and allocate additional memory for the current task.

## Topics

### Shared memory

- [hv_vm_map](hv_vm_map%28________%29.md): Maps a region in the virtual address space of the current process into the guest physical address space of the VM.
- [hv_vm_unmap](hv_vm_unmap%28____%29.md): Unmaps a region in the guest physical address space of the VM.
- [hv_vm_protect](hv_vm_protect%28______%29.md): Modifies the permissions of a region in the guest physical address space of the VM.

### Process-specific memory

- [hv_vm_space_create](hv_vm_space_create%28__%29.md): Creates an additional guest address space for the current task.
- [hv_vm_space_destroy](hv_vm_space_destroy%28__%29.md): Destroys the address space instance associated with the current task.
- [hv_vm_map_space](hv_vm_map_space%28__________%29.md): Maps a region in the virtual address space of the current task into a guest physical address space of the VM.
- [hv_vm_unmap_space](hv_vm_unmap_space%28______%29.md): Umaps a region in a guest physical address space of the VM.
- [hv_vm_protect_space](hv_vm_protect_space%28________%29.md): Modifies the permissions of a region in a guest physical address space of the VM.

### Common types

- [hv_uvaddr_t](hv_uvaddr_t.md): The type of a user virtual address.
- [hv_gpaddr_t](hv_gpaddr_t.md): The type of a guest physical address (GPA).
- [hv_memory_flags_t](hv_memory_flags_t.md): The permissions for guest physical memory regions.
- [Memory Permissions](1447309-memory_permissions-enum.md): Enumeration values that describe memory permissions.
- [hv_vm_space_t](hv_vm_space_t.md): The type of a guest-address space.
- [Address Space Types](3181561-address_space_type-enum.md)

## See Also

### Resource management

- [vCPU Management](intel-based_mac-vcpu-management.md): Create and run virtual CPUs, and manage CPU-specific registers and features.
- [Virtual Machine Control Structure (VMCS)](virtual-machine-control-structure-vmcs.md): Read and write to fields of the virtual machine control structure.
