> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iorangeallocator/1810407-getfragmentcapacity](https://developer.apple.com/documentation/kernel/iorangeallocator/1810407-getfragmentcapacity)

# getFragmentCapacity

**Interface language:** Objective-C

**Framework:** Kernel

Accessor to return the number of free fragments in the range.

## Declaration

```objectivec
virtual UInt32 getFragmentCapacity(
 void ); 
```

<a id="return_value"></a>

## Return Value

Returns the current capacity of free fragment list.

<a id="overview"></a>

## Overview

This method returns the current capacity of the free fragment list.

## See Also

### Miscellaneous

- [allocate](1810255-allocate.md): Allocates from the free list, at any offset.
- [allocateRange](1810314-allocaterange.md): Allocates from the free list, at a set offset.
- [deallocate](1810361-deallocate.md): Deallocates a range to the free list.
- [getFragmentCount](1810456-getfragmentcount.md): Accessor to return the number of free fragments in the range.
- [getFreeCount](1810490-getfreecount.md): Totals the sizes of the free fragments.
- [init](1810534-init.md): Standard initializer for IORangeAllocator.
- [setFragmentCapacityIncrement](1810575-setfragmentcapacityincrement.md): Sets the count of fragments the free list will increase by when full.
- [withRange](1810621-withrange.md): Standard factory method for IORangeAllocator.
