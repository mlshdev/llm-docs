> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iointerleavedmemorydescriptor/1812618-setmemorydescriptor](https://developer.apple.com/documentation/kernel/iointerleavedmemorydescriptor/1812618-setmemorydescriptor)

# setMemoryDescriptor

**Interface language:** Objective-C

**Framework:** Kernel

Add a portion of an IOMemoryDescriptor to the IOInterleavedMemoryDescriptor.

## Declaration

```objectivec
virtual bool setMemoryDescriptor(
 IOMemoryDescriptor *descriptor, 
 IOByteCountoffset, 
 IOByteCountlength ); 
```

## Parameters

- `descriptor`: An IOMemoryDescriptor to be added to the IOInterleavedMemoryDescriptor. Its direction must be compatible with that of the IOInterleavedMemoryDescriptor.
- `offset`: The offset into the IOMemoryDescriptor of the portion that will be added to the virtualized buffer.
- `length`: The length of the portion of the IOMemoryDescriptor to be added to the virtualized buffer.

<a id="return_value"></a>

## Return Value

Returns true the portion was successfully added.

<a id="overview"></a>

## Overview

This method adds the portion of an IOMemoryDescriptor described by the offset and length parameters to the end of the IOInterleavedMemoryDescriptor. A single IOMemoryDescriptor may be added as many times as there is room for it. The offset and length must describe a portion entirely within the IOMemoryDescriptor.

## See Also

### Miscellaneous

- [clearMemoryDescriptors](1812566-clearmemorydescriptors.md): Clear all of the IOMemoryDescriptors currently contained in and reset the IOInterleavedMemoryDescriptor.
- [complete](1812579-complete.md): Complete processing of the memory after an I/O transfer finishes.
- [getPhysicalSegment](1812587-getphysicalsegment.md): Break a memory descriptor into its physically contiguous segments.
- [initWithCapacity](1812598-initwithcapacity.md): Initialize an IOInterleavedMemoryDescriptor to describe a memory area made up of several other IOMemoryDescriptors.
- [prepare](1812608-prepare.md): Prepare the memory for an I/O transfer.
- [withCapacity](1812626-withcapacity.md): Create an IOInterleavedMemoryDescriptor to describe a memory area made up of several other IOMemoryDescriptors.
