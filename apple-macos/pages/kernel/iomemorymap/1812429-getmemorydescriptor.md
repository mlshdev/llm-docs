> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iomemorymap/1812429-getmemorydescriptor](https://developer.apple.com/documentation/kernel/iomemorymap/1812429-getmemorydescriptor)

# getMemoryDescriptor

**Interface language:** Objective-C

**Framework:** Kernel

Accessor to the IOMemoryDescriptor the mapping was created from.

## Declaration

```objectivec
virtual IOMemoryDescriptor * getMemoryDescriptor(); 
```

<a id="return_value"></a>

## Return Value

An IOMemoryDescriptor reference, which is valid while the IOMemoryMap object is retained. It should not be released by the caller.

<a id="overview"></a>

## Overview

This method returns the IOMemoryDescriptor the mapping was created from.

## See Also

### Miscellaneous

- [getAddress()](1812407-getaddress.md): Accessor to the length of the mapping.
- [getAddressTask](1812414-getaddresstask.md): Accessor to the task of the mapping.
- [getLength](1812419-getlength.md): Accessor to the length of the mapping.
- [getMapOptions](1812423-getmapoptions.md): Accessor to the options the mapping was created with.
- [getPhysicalAddress](1812435-getphysicaladdress.md): Return the physical address of the first byte in the mapping.
- [getPhysicalSegment](1812443-getphysicalsegment.md): Break a mapping into its physically contiguous segments.
- [getSize()](1812448-getsize.md): Accessor to the length of the mapping.
- [getVirtualAddress](1812459-getvirtualaddress.md): Accessor to the virtual address of the first byte in the mapping.
- [redirect](1812465-redirect.md): Replace the memory mapped in a process with new backing memory.
- [unmap](1812474-unmap.md): Force the IOMemoryMap to unmap, without destroying the object.
