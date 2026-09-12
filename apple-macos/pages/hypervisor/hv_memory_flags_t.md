> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_memory_flags_t](https://developer.apple.com/documentation/hypervisor/hv_memory_flags_t)

# hv_memory_flags_t (Swift)

**Framework:** Hypervisor  
**Kind:** Type Alias  
**Availability:** macOS

The permissions for guest physical memory regions.

## Declaration

```swift
typealias hv_memory_flags_t = UInt64
```

<a id="Discussion"></a>

## Discussion

Set with the [hv_vm_map(\_:\_:\_:\_:)](hv_vm_map%28________%29.md) and [hv_vm_protect(\_:\_:\_:)](hv_vm_protect%28______%29.md) functions.

## Topics

### Permissions

- [HV_MEMORY_READ](hv_memory_read.md): The value that represents the memory-read permission.
- [HV_MEMORY_WRITE](hv_memory_write.md): The value that represents the memory-write permission.
- [HV_MEMORY_EXEC](hv_memory_exec.md): The value that represents the memory-execute permission.

## See Also

### Data Types

- [hv_allocate_flags_t](hv_allocate_flags_t.md)
- [hv_gpaddr_t](hv_gpaddr_t.md): The type of a guest physical address (GPA).
- [hv_sme_zt0_uchar64_t](hv_sme_zt0_uchar64_t.md)
- [hv_uvaddr_t](hv_uvaddr_t.md): The type of a user virtual address.
- [hv_vm_space_t](hv_vm_space_t.md): The type of a guest-address space.

# hv_memory_flags_t (Objective-C)

**Framework:** Hypervisor  
**Kind:** Type Alias  
**Availability:** macOS

The permissions for guest physical memory regions.

## Declaration

```objectivec
typedef uint64_t hv_memory_flags_t;
```

<a id="Discussion"></a>

## Discussion

Set with the [hv_vm_map](hv_vm_map%28________%29.md) and [hv_vm_protect](hv_vm_protect%28______%29.md) functions.

## Topics

### Permissions

- [HV_MEMORY_READ](hv_memory_read.md): The value that represents the memory-read permission.
- [HV_MEMORY_WRITE](hv_memory_write.md): The value that represents the memory-write permission.
- [HV_MEMORY_EXEC](hv_memory_exec.md): The value that represents the memory-execute permission.

## See Also

### Data Types

- [hv_allocate_flags_t](hv_allocate_flags_t.md)
- [hv_gpaddr_t](hv_gpaddr_t.md): The type of a guest physical address (GPA).
- [hv_sme_zt0_uchar64_t](hv_sme_zt0_uchar64_t.md)
- [hv_uvaddr_t](hv_uvaddr_t.md): The type of a user virtual address.
- [hv_vm_space_t](hv_vm_space_t.md): The type of a guest-address space.
