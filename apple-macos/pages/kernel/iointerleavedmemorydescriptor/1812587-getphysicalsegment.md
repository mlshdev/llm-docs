> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iointerleavedmemorydescriptor/1812587-getphysicalsegment](https://developer.apple.com/documentation/kernel/iointerleavedmemorydescriptor/1812587-getphysicalsegment)

# getPhysicalSegment

**Interface language:** Objective-C

**Framework:** Kernel

Break a memory descriptor into its physically contiguous segments.

## Declaration

```objectivec
virtual addr64_t getPhysicalSegment(
 IOByteCountoffset, 
 IOByteCount *length, 
 IOOptionBits options = 0 ); 
```

## Parameters

- `offset`: A byte offset into the memory whose physical address to return.
- `length`: If non-zero, getPhysicalSegment will store here the length of the physically contiguous segement at the given offset.

<a id="return_value"></a>

## Return Value

A physical address, or zero if the offset is beyond the length of the memory.

<a id="overview"></a>

## Overview

This method returns the physical address of the byte at the given offset into the memory, and optionally the length of the physically contiguous segment from that offset.

## See Also

### Miscellaneous

- [clearMemoryDescriptors](1812566-clearmemorydescriptors.md): Clear all of the IOMemoryDescriptors currently contained in and reset the IOInterleavedMemoryDescriptor.
- [complete](1812579-complete.md): Complete processing of the memory after an I/O transfer finishes.
- [initWithCapacity](1812598-initwithcapacity.md): Initialize an IOInterleavedMemoryDescriptor to describe a memory area made up of several other IOMemoryDescriptors.
- [prepare](1812608-prepare.md): Prepare the memory for an I/O transfer.
- [setMemoryDescriptor](1812618-setmemorydescriptor.md): Add a portion of an IOMemoryDescriptor to the IOInterleavedMemoryDescriptor.
- [withCapacity](1812626-withcapacity.md): Create an IOInterleavedMemoryDescriptor to describe a memory area made up of several other IOMemoryDescriptors.
