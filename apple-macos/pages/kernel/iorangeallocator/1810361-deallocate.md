> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iorangeallocator/1810361-deallocate](https://developer.apple.com/documentation/kernel/iorangeallocator/1810361-deallocate)

# deallocate

**Interface language:** Objective-C

**Framework:** Kernel

Deallocates a range to the free list.

## Declaration

```objectivec
virtual void deallocate(
 IORangeScalarstart, 
 IORangeScalarsize ); 
```

## Parameters

- `start`: The beginning of the range requested.
- `size`: Returns the size of the range requested.

<a id="overview"></a>

## Overview

This method deallocates a range to the free list, given a the start offset and length passed in.

## See Also

### Miscellaneous

- [allocate](1810255-allocate.md): Allocates from the free list, at any offset.
- [allocateRange](1810314-allocaterange.md): Allocates from the free list, at a set offset.
- [getFragmentCapacity](1810407-getfragmentcapacity.md): Accessor to return the number of free fragments in the range.
- [getFragmentCount](1810456-getfragmentcount.md): Accessor to return the number of free fragments in the range.
- [getFreeCount](1810490-getfreecount.md): Totals the sizes of the free fragments.
- [init](1810534-init.md): Standard initializer for IORangeAllocator.
- [setFragmentCapacityIncrement](1810575-setfragmentcapacityincrement.md): Sets the count of fragments the free list will increase by when full.
- [withRange](1810621-withrange.md): Standard factory method for IORangeAllocator.
