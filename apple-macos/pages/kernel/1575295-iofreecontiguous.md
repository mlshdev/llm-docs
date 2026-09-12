> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1575295-iofreecontiguous](https://developer.apple.com/documentation/kernel/1575295-iofreecontiguous)

# IOFreeContiguous

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Deprecated - use IOBufferMemoryDescriptor. Frees memory allocated with IOMallocContiguous.

## Declaration

```objectivec
void IOFreeContiguous(void *address, vm_size_t size);
```

## Parameters

- `address`: Virtual address of the allocated memory.
- `size`: Size of the memory allocated.

<a id="discussion"></a>

## Discussion

This function frees memory allocated with IOMallocContiguous, it may block and so should not be called from interrupt level or while a simple lock is held.
