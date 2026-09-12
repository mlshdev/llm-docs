> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iomemorydescriptor/1812787-getpagecounts](https://developer.apple.com/documentation/kernel/iomemorydescriptor/1812787-getpagecounts)

# getPageCounts

**Interface language:** Objective-C

**Framework:** Kernel

Retrieve the number of resident and/or dirty pages encompassed by a memory descriptor.

## Declaration

```objectivec
IOReturn getPageCounts(
 IOByteCount *residentPageCount, 
 IOByteCount *dirtyPageCount); 
```

## Parameters

- `residentPageCount`: \- If non-null, a pointer to a byte count that will return the number of resident pages encompassed by this IOMemoryDescriptor.
- `dirtyPageCount`: \- If non-null, a pointer to a byte count that will return the number of dirty pages encompassed by this IOMemoryDescriptor.

<a id="return_value"></a>

## Return Value

An IOReturn code.

<a id="overview"></a>

## Overview

This method returns the number of resident and/or dirty pages encompassed by an IOMemoryDescriptor.

## See Also

### Getting the Memory Pages

- [getPageCounts](1441992-getpagecounts.md): Retrieve the number of resident and/or dirty pages encompassed by a memory descriptor.
- [getPhysicalAddress](1812795-getphysicaladdress.md): Return the physical address of the first byte in the memory.
- [getPhysicalAddress](1441916-getphysicaladdress.md): Return the physical address of the first byte in the memory.
- [getPhysicalSegment](1812807-getphysicalsegment.md): Break a memory descriptor into its physically contiguous segments.
- [getPhysicalSegment](1442068-getphysicalsegment.md): Break a memory descriptor into its physically contiguous segments.
