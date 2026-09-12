> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iointerleavedmemorydescriptor/1812626-withcapacity](https://developer.apple.com/documentation/kernel/iointerleavedmemorydescriptor/1812626-withcapacity)

# withCapacity

**Interface language:** Objective-C

**Framework:** Kernel

Create an IOInterleavedMemoryDescriptor to describe a memory area made up of several other IOMemoryDescriptors.

## Declaration

```objectivec
static IOInterleavedMemoryDescriptor * withCapacity(
 IOByteCountcapacity, 
 IODirectiondirection); 
```

## Parameters

- `capacity`: The maximum number of IOMemoryDescriptors that may be subsequently added to this IOInterleavedMemoryDescriptor.
- `direction`: An I/O direction to be associated with the descriptor, which may affect the operation of the prepare and complete methods on some architectures.

<a id="return_value"></a>

## Return Value

The created IOInterleavedMemoryDescriptor on success, to be released by the caller, or zero on failure.

<a id="overview"></a>

## Overview

This method creates and initializes an IOInterleavedMemoryDescriptor for memory consisting of portions of a number of other IOMemoryDescriptors, chained end-to-end (in the order they appear in the array) to represent a single contiguous memory buffer.

## See Also

### Miscellaneous

- [clearMemoryDescriptors](1812566-clearmemorydescriptors.md): Clear all of the IOMemoryDescriptors currently contained in and reset the IOInterleavedMemoryDescriptor.
- [complete](1812579-complete.md): Complete processing of the memory after an I/O transfer finishes.
- [getPhysicalSegment](1812587-getphysicalsegment.md): Break a memory descriptor into its physically contiguous segments.
- [initWithCapacity](1812598-initwithcapacity.md): Initialize an IOInterleavedMemoryDescriptor to describe a memory area made up of several other IOMemoryDescriptors.
- [prepare](1812608-prepare.md): Prepare the memory for an I/O transfer.
- [setMemoryDescriptor](1812618-setmemorydescriptor.md): Add a portion of an IOMemoryDescriptor to the IOInterleavedMemoryDescriptor.
