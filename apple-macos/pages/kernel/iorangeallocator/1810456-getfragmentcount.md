> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iorangeallocator/1810456-getfragmentcount](https://developer.apple.com/documentation/kernel/iorangeallocator/1810456-getfragmentcount)

# getFragmentCount

**Interface language:** Objective-C

**Framework:** Kernel

Accessor to return the number of free fragments in the range.

## Declaration

```objectivec
virtual UInt32 getFragmentCount(
 void ); 
```

<a id="return_value"></a>

## Return Value

Returns the count of free fragments.

<a id="overview"></a>

## Overview

This method returns a count of free fragments. Each fragment describes a non-contiguous free range - deallocations will merge contiguous fragments together.

## See Also

### Miscellaneous

- [allocate](1810255-allocate.md): Allocates from the free list, at any offset.
- [allocateRange](1810314-allocaterange.md): Allocates from the free list, at a set offset.
- [deallocate](1810361-deallocate.md): Deallocates a range to the free list.
- [getFragmentCapacity](1810407-getfragmentcapacity.md): Accessor to return the number of free fragments in the range.
- [getFreeCount](1810490-getfreecount.md): Totals the sizes of the free fragments.
- [init](1810534-init.md): Standard initializer for IORangeAllocator.
- [setFragmentCapacityIncrement](1810575-setfragmentcapacityincrement.md): Sets the count of fragments the free list will increase by when full.
- [withRange](1810621-withrange.md): Standard factory method for IORangeAllocator.
