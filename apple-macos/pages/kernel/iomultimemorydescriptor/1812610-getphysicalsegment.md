> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iomultimemorydescriptor/1812610-getphysicalsegment](https://developer.apple.com/documentation/kernel/iomultimemorydescriptor/1812610-getphysicalsegment)

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

- [complete](1812588-complete.md): Complete processing of the memory after an I/O transfer finishes.
- [initWithDescriptors](1812635-initwithdescriptors.md): Initialize an IOMultiMemoryDescriptor to describe a memory area made up of several other IOMemoryDescriptors.
- [prepare](1812660-prepare.md): Prepare the memory for an I/O transfer.
- [withDescriptors(IOMemoryDescriptor \*\*, UInt32, IODirection, bool)](1812685-withdescriptors.md): Create an IOMultiMemoryDescriptor to describe a memory area made up of several other IOMemoryDescriptors.
- [withDescriptors(IOMemoryDescriptor \*\*, UInt32, IODirection, bool)](1812714-withdescriptors.md): Initialize an IOMultiMemoryDescriptor to describe a memory area made up of several other IOMemoryDescriptors.
