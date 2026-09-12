> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iomultimemorydescriptor/1812588-complete](https://developer.apple.com/documentation/kernel/iomultimemorydescriptor/1812588-complete)

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

- [getPhysicalSegment](1812610-getphysicalsegment.md): Break a memory descriptor into its physically contiguous segments.
- [initWithDescriptors](1812635-initwithdescriptors.md): Initialize an IOMultiMemoryDescriptor to describe a memory area made up of several other IOMemoryDescriptors.
- [prepare](1812660-prepare.md): Prepare the memory for an I/O transfer.
- [withDescriptors(IOMemoryDescriptor \*\*, UInt32, IODirection, bool)](1812685-withdescriptors.md): Create an IOMultiMemoryDescriptor to describe a memory area made up of several other IOMemoryDescriptors.
- [withDescriptors(IOMemoryDescriptor \*\*, UInt32, IODirection, bool)](1812714-withdescriptors.md): Initialize an IOMultiMemoryDescriptor to describe a memory area made up of several other IOMemoryDescriptors.
