> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/memory-management](https://developer.apple.com/documentation/hypervisor/memory-management)

# Memory management (Swift)

**Framework:** Hypervisor  
**Kind:** API Collection

Map memory into the physical address space of the virtual machine.

<a id="overview"></a>

## Overview

Hypervisor virtualizes the memory seen by the guest as physical address space on top of the host’s address space.

The name for a physical address in the guest address space is an intermediate physical address or IPA in the host.

It’s possible to map memory regions in the host process into the intermediate physical address (IPA) with [hv_vm_map(\_:\_:\_:\_:)](hv_vm_map%28________%29.md).

Modify the guest’s access permissions over the entire region or subregions with [hv_vm_protect(\_:\_:\_:)](hv_vm_protect%28______%29.md).

## Topics

### Intermediate physical memory

- [hv_vm_map(\_:\_:\_:\_:)](hv_vm_map%28________%29.md): Maps a region in the virtual address space of the current process into the guest physical address space of the VM.
- [hv_vm_unmap(\_:\_:)](hv_vm_unmap%28____%29.md): Unmaps a region in the guest physical address space of the VM.
- [hv_vm_protect(\_:\_:\_:)](hv_vm_protect%28______%29.md): Modifies the permissions of a region in the guest physical address space of the VM.
- [hv_ipa_t](hv_ipa_t.md): The type of an intermediate physical address, which is a guest physical address space of the VM.

## See Also

### Resource management

- [vCPU Management](vcpu-management.md): Create and run virtual CPUs, and manage CPU-specific registers and features.

# Memory management (Objective-C)

**Framework:** Hypervisor  
**Kind:** API Collection

Map memory into the physical address space of the virtual machine.

<a id="overview"></a>

## Overview

Hypervisor virtualizes the memory seen by the guest as physical address space on top of the host’s address space.

The name for a physical address in the guest address space is an intermediate physical address or IPA in the host.

It’s possible to map memory regions in the host process into the intermediate physical address (IPA) with [hv_vm_map](hv_vm_map%28________%29.md).

Modify the guest’s access permissions over the entire region or subregions with [hv_vm_protect](hv_vm_protect%28______%29.md).

## Topics

### Intermediate physical memory

- [hv_vm_map](hv_vm_map%28________%29.md): Maps a region in the virtual address space of the current process into the guest physical address space of the VM.
- [hv_vm_unmap](hv_vm_unmap%28____%29.md): Unmaps a region in the guest physical address space of the VM.
- [hv_vm_protect](hv_vm_protect%28______%29.md): Modifies the permissions of a region in the guest physical address space of the VM.
- [hv_ipa_t](hv_ipa_t.md): The type of an intermediate physical address, which is a guest physical address space of the VM.

## See Also

### Resource management

- [vCPU Management](vcpu-management.md): Create and run virtual CPUs, and manage CPU-specific registers and features.
