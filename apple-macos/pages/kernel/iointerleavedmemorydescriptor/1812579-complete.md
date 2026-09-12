> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iointerleavedmemorydescriptor/1812579-complete](https://developer.apple.com/documentation/kernel/iointerleavedmemorydescriptor/1812579-complete)

# complete

**Interface language:** Objective-C

**Framework:** Kernel

Complete processing of the memory after an I/O transfer finishes.

## Declaration

```objectivec
virtual IOReturn complete(
 IODirection forDirection = forDirection); 
```

## Parameters

- `forDirection`: The direction of the I/O just completed, or kIODirectionNone for the direction specified by the memory descriptor.

<a id="return_value"></a>

## Return Value

An IOReturn code.

<a id="overview"></a>

## Overview

This method should not be called unless a prepare was previously issued; the prepare() and complete() must occur in pairs, before and after an I/O transfer involving pageable memory.

## See Also

### Miscellaneous

- [clearMemoryDescriptors](1812566-clearmemorydescriptors.md): Clear all of the IOMemoryDescriptors currently contained in and reset the IOInterleavedMemoryDescriptor.
- [getPhysicalSegment](1812587-getphysicalsegment.md): Break a memory descriptor into its physically contiguous segments.
- [initWithCapacity](1812598-initwithcapacity.md): Initialize an IOInterleavedMemoryDescriptor to describe a memory area made up of several other IOMemoryDescriptors.
- [prepare](1812608-prepare.md): Prepare the memory for an I/O transfer.
- [setMemoryDescriptor](1812618-setmemorydescriptor.md): Add a portion of an IOMemoryDescriptor to the IOInterleavedMemoryDescriptor.
- [withCapacity](1812626-withcapacity.md): Create an IOInterleavedMemoryDescriptor to describe a memory area made up of several other IOMemoryDescriptors.
