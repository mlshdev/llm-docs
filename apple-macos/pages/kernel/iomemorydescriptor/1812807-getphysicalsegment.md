> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iomemorydescriptor/1812807-getphysicalsegment](https://developer.apple.com/documentation/kernel/iomemorydescriptor/1812807-getphysicalsegment)

# getPhysicalSegment

**Interface language:** Objective-C

**Framework:** Kernel

Break a memory descriptor into its physically contiguous segments.

## Declaration

```objectivec
#ifdef __LP64__
 virtual addr64_t getPhysicalSegment(
 IOByteCount offset, 
 IOByteCount *length, 
 IOOptionBits options = 0 ) = 0; 
#else /* !__LP64__ */
virtual addr64_t getPhysicalSegment(
 IOByteCount offset, 
 IOByteCount *length, 
 IOOptionBits options ); 
#endif 
/* !__LP64__ */
```

## Parameters

- `offset`: A byte offset into the memory whose physical address to return.
- `length`: If non-zero, getPhysicalSegment will store here the length of the physically contiguous segement at the given offset.
- `options`: Additional options.

<a id="return_value"></a>

## Return Value

A physical address, or zero if the offset is beyond the length of the memory.

<a id="overview"></a>

## Overview

This method returns the physical address of the byte at the given offset into the memory, and optionally the length of the physically contiguous segment from that offset.

## See Also

### Getting the Memory Pages

- [getPageCounts](1812787-getpagecounts.md): Retrieve the number of resident and/or dirty pages encompassed by a memory descriptor.
- [getPageCounts](1441992-getpagecounts.md): Retrieve the number of resident and/or dirty pages encompassed by a memory descriptor.
- [getPhysicalAddress](1812795-getphysicaladdress.md): Return the physical address of the first byte in the memory.
- [getPhysicalAddress](1441916-getphysicaladdress.md): Return the physical address of the first byte in the memory.
- [getPhysicalSegment](1442068-getphysicalsegment.md): Break a memory descriptor into its physically contiguous segments.
