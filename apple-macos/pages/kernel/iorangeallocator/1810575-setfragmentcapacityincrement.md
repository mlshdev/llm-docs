> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iorangeallocator/1810575-setfragmentcapacityincrement](https://developer.apple.com/documentation/kernel/iorangeallocator/1810575-setfragmentcapacityincrement)

# setFragmentCapacityIncrement

**Interface language:** Objective-C

**Framework:** Kernel

Sets the count of fragments the free list will increase by when full.

## Declaration

```objectivec
virtual void setFragmentCapacityIncrement(
 UInt32count ); 
```

## Parameters

- `count`: The number of fragments to increment the capacity by when the free list is full.

<a id="overview"></a>

## Overview

This method sets the number of extra fragments the free list will expand to when full. It defaults to the initial capacity.

## See Also

### Miscellaneous

- [allocate](1810255-allocate.md): Allocates from the free list, at any offset.
- [allocateRange](1810314-allocaterange.md): Allocates from the free list, at a set offset.
- [deallocate](1810361-deallocate.md): Deallocates a range to the free list.
- [getFragmentCapacity](1810407-getfragmentcapacity.md): Accessor to return the number of free fragments in the range.
- [getFragmentCount](1810456-getfragmentcount.md): Accessor to return the number of free fragments in the range.
- [getFreeCount](1810490-getfreecount.md): Totals the sizes of the free fragments.
- [init](1810534-init.md): Standard initializer for IORangeAllocator.
- [withRange](1810621-withrange.md): Standard factory method for IORangeAllocator.
