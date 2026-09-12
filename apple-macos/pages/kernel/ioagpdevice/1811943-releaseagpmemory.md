> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioagpdevice/1811943-releaseagpmemory](https://developer.apple.com/documentation/kernel/ioagpdevice/1811943-releaseagpmemory)

# releaseAGPMemory

**Interface language:** Objective-C

**Framework:** Kernel

Releases memory addressable by AGP transactions.

## Declaration

```objectivec
virtual IOReturn releaseAGPMemory(
 IOMemoryDescriptor *memory, 
 IOByteCount agpOffset, 
 IOOptionBits options = 0 ); 
```

## Parameters

- `memory`: A IOMemoryDescriptor object describing the memory to remove from the GART.
- `agpOffset`: An offset into AGP space that the caller has allocated - usually allocated by the AGP range allocator.
- `options`: Pass kIOAGPGartInvalidate if the AGP target should invalidate any GART TLB.

<a id="return_value"></a>

## Return Value

Returns an IOReturn code indicating success or failure.

<a id="overview"></a>

## Overview

Makes the memory described by the IOMemoryDescriptor object unaddressable by AGP by removing its pages from the GART array, given an offset into AGP space supplied by the caller (usually allocated by the AGP range allocator). It is the caller's responsibility to complete non-kernel pageable memory before calling this method, with IOMemoryDescriptor::complete.

## See Also

### Miscellaneous

- [commitAGPMemory](1811820-commitagpmemory.md): Makes memory addressable by AGP transactions.
- [createAGPSpace](1811842-createagpspace.md): Allocates the AGP space, and enables AGP transactions on the primary and secondary.
- [destroyAGPSpace](1811870-destroyagpspace.md): Destroys the AGP space, and disables AGP transactions on the primary and secondary.
- [getAGPRangeAllocator](1811894-getagprangeallocator.md): Accessor to obtain the AGP range allocator.
- [getAGPSpace](1811914-getagpspace.md): Returns the allocated AGP space.
- [getAGPStatus](1811928-getagpstatus.md): Returns the current state of the AGP bus.
