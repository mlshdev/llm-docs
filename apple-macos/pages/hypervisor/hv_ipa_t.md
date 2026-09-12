> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_ipa_t](https://developer.apple.com/documentation/hypervisor/hv_ipa_t)

# hv_ipa_t (Swift)

**Framework:** Hypervisor  
**Kind:** Type Alias  
**Availability:** macOS

The type of an intermediate physical address, which is a guest physical address space of the VM.

## Declaration

```swift
typealias hv_ipa_t = UInt64
```

## See Also

### Intermediate physical memory

- [hv_vm_map(\_:\_:\_:\_:)](hv_vm_map%28________%29.md): Maps a region in the virtual address space of the current process into the guest physical address space of the VM.
- [hv_vm_unmap(\_:\_:)](hv_vm_unmap%28____%29.md): Unmaps a region in the guest physical address space of the VM.
- [hv_vm_protect(\_:\_:\_:)](hv_vm_protect%28______%29.md): Modifies the permissions of a region in the guest physical address space of the VM.

# hv_ipa_t (Objective-C)

**Framework:** Hypervisor  
**Kind:** Type Alias  
**Availability:** macOS

The type of an intermediate physical address, which is a guest physical address space of the VM.

## Declaration

```objectivec
typedef uint64_t hv_ipa_t;
```

## See Also

### Intermediate physical memory

- [hv_vm_map](hv_vm_map%28________%29.md): Maps a region in the virtual address space of the current process into the guest physical address space of the VM.
- [hv_vm_unmap](hv_vm_unmap%28____%29.md): Unmaps a region in the guest physical address space of the VM.
- [hv_vm_protect](hv_vm_protect%28______%29.md): Modifies the permissions of a region in the guest physical address space of the VM.
