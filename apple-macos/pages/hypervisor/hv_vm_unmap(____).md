> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/hv_vm_unmap(_:_:)](https://developer.apple.com/documentation/hypervisor/hv_vm_unmap(_:_:))

# hv_vm_unmap(\_:\_:) (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 11.0+

Unmaps a region in the guest physical address space of the VM.

## Declaration

```swift
func hv_vm_unmap(_ ipa: hv_ipa_t, _ size: Int) -> hv_return_t
```

## Parameters

- `ipa`: The address in the intermediate physical address space. It must be page-aligned.

  Apple silicon only.
- `size`: The size of the region to unmap, in bytes. It must be a multiple of the page size.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

<a id="discussion"></a>

## Discussion

Intel-based Mac computers have different parameters:

- **`gpa`**: The address in the guest physical address space. It must be page-aligned.

## See Also

### Intermediate physical memory

- [hv_vm_map(\_:\_:\_:\_:)](hv_vm_map%28________%29.md): Maps a region in the virtual address space of the current process into the guest physical address space of the VM.
- [hv_vm_protect(\_:\_:\_:)](hv_vm_protect%28______%29.md): Modifies the permissions of a region in the guest physical address space of the VM.
- [hv_ipa_t](hv_ipa_t.md): The type of an intermediate physical address, which is a guest physical address space of the VM.

# hv_vm_unmap (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 11.0+

Unmaps a region in the guest physical address space of the VM.

## Declaration

```objectivec
extern hv_return_t hv_vm_unmap(hv_ipa_t ipa, size_t size);
```

## Parameters

- `ipa`: The address in the intermediate physical address space. It must be page-aligned.

  Apple silicon only.
- `size`: The size of the region to unmap, in bytes. It must be a multiple of the page size.

<a id="return-value"></a>

## Return Value

[HV_SUCCESS](hv_success.md) if the operation was successful, otherwise an error code specified in [hv_return_t](hv_return_t.md).

<a id="discussion"></a>

## Discussion

Intel-based Mac computers have different parameters:

- **`gpa`**: The address in the guest physical address space. It must be page-aligned.

## See Also

### Intermediate physical memory

- [hv_vm_map](hv_vm_map%28________%29.md): Maps a region in the virtual address space of the current process into the guest physical address space of the VM.
- [hv_vm_protect](hv_vm_protect%28______%29.md): Modifies the permissions of a region in the guest physical address space of the VM.
- [hv_ipa_t](hv_ipa_t.md): The type of an intermediate physical address, which is a guest physical address space of the VM.
