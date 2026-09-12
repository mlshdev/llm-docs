> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_sme_zt0_uchar64_t](https://developer.apple.com/documentation/hypervisor/hv_sme_zt0_uchar64_t)

# hv_sme_zt0_uchar64_t (Swift)

**Framework:** Hypervisor  
**Kind:** Type Alias  
**Availability:** macOS 15.2+

## Declaration

```swift
typealias hv_sme_zt0_uchar64_t = SIMD64<UInt8>
```

## See Also

### Data Types

- [hv_allocate_flags_t](hv_allocate_flags_t.md)
- [hv_gpaddr_t](hv_gpaddr_t.md): The type of a guest physical address (GPA).
- [hv_memory_flags_t](hv_memory_flags_t.md): The permissions for guest physical memory regions.
- [hv_uvaddr_t](hv_uvaddr_t.md): The type of a user virtual address.
- [hv_vm_space_t](hv_vm_space_t.md): The type of a guest-address space.

# hv_sme_zt0_uchar64_t (Objective-C)

**Framework:** Hypervisor  
**Kind:** Type Alias  
**Availability:** macOS 15.2+

## Declaration

```objectivec
typedef unsigned char __attribute__((ext_vector_type(64))) hv_sme_zt0_uchar64_t;
```

## See Also

### Data Types

- [hv_allocate_flags_t](hv_allocate_flags_t.md)
- [hv_gpaddr_t](hv_gpaddr_t.md): The type of a guest physical address (GPA).
- [hv_memory_flags_t](hv_memory_flags_t.md): The permissions for guest physical memory regions.
- [hv_uvaddr_t](hv_uvaddr_t.md): The type of a user virtual address.
- [hv_vm_space_t](hv_vm_space_t.md): The type of a guest-address space.
