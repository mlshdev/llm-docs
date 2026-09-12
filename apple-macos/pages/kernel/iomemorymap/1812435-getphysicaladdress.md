> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iomemorymap/1812435-getphysicaladdress](https://developer.apple.com/documentation/kernel/iomemorymap/1812435-getphysicaladdress)

# getPhysicalAddress

**Interface language:** Objective-C

**Framework:** Kernel

Return the physical address of the first byte in the mapping.

## Declaration

```objectivec
IOPhysicalAddress getPhysicalAddress(); 
```

<a id="return_value"></a>

## Return Value

A physical address.

<a id="overview"></a>

## Overview

This method returns the physical address of the first byte in the mapping. It is most useful on mappings known to be physically contiguous.

## See Also

### Miscellaneous

- [getAddress()](1812407-getaddress.md): Accessor to the length of the mapping.
- [getAddressTask](1812414-getaddresstask.md): Accessor to the task of the mapping.
- [getLength](1812419-getlength.md): Accessor to the length of the mapping.
- [getMapOptions](1812423-getmapoptions.md): Accessor to the options the mapping was created with.
- [getMemoryDescriptor](1812429-getmemorydescriptor.md): Accessor to the IOMemoryDescriptor the mapping was created from.
- [getPhysicalSegment](1812443-getphysicalsegment.md): Break a mapping into its physically contiguous segments.
- [getSize()](1812448-getsize.md): Accessor to the length of the mapping.
- [getVirtualAddress](1812459-getvirtualaddress.md): Accessor to the virtual address of the first byte in the mapping.
- [redirect](1812465-redirect.md): Replace the memory mapped in a process with new backing memory.
- [unmap](1812474-unmap.md): Force the IOMemoryMap to unmap, without destroying the object.
