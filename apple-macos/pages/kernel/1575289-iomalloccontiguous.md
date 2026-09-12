> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1575289-iomalloccontiguous](https://developer.apple.com/documentation/kernel/1575289-iomalloccontiguous)

# IOMallocContiguous

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Deprecated - use IOBufferMemoryDescriptor. Allocates wired memory in the kernel map, with an alignment restriction and physically contiguous.

## Declaration

```objectivec
void * IOMallocContiguous(vm_size_t size, vm_size_t alignment, IOPhysicalAddress *physicalAddress);
```

## Parameters

- `size`: Size of the memory requested.
- `alignment`: Byte count of the alignment for the memory. For example, pass 256 to get memory allocated at an address with bits 0-7 zero.
- `physicalAddress`: IOMallocContiguous returns the physical address of the allocated memory here, if physicalAddress is a non-zero pointer. The physicalAddress argument is deprecated and should be passed as NULL. To obtain the physical address for a memory buffer, use the IODMACommand class in conjunction with the IOMemoryDescriptor or IOBufferMemoryDescriptor classes.

<a id="return_value"></a>

## Return Value

Virtual address of the allocated memory, or zero on failure.

<a id="discussion"></a>

## Discussion

This is a utility to allocate memory in the kernel, with an alignment restriction which is specified as a byte count, and will allocate only physically contiguous memory. The request may fail if memory is fragmented, and may cause large amounts of paging activity. This function may block and so should not be called from interrupt level or while a simple lock is held.
