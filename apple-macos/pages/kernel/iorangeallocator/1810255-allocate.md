> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iorangeallocator/1810255-allocate](https://developer.apple.com/documentation/kernel/iorangeallocator/1810255-allocate)

# allocate

**Interface language:** Objective-C

**Framework:** Kernel

Allocates from the free list, at any offset.

## Declaration

```objectivec
virtual bool allocate(
 IORangeScalar size, 
 IORangeScalar *result, 
 IORangeScalar alignment = 0 ); 
```

## Parameters

- `size`: The size of the range requested.
- `result`: The beginning of the range allocated is returned here on success.
- `alignment`: If zero is passed, default to the allocators alignment, otherwise pass an alignment required for the allocation, for example 4096 to page align.

<a id="return_value"></a>

## Return Value

Returns true if the allocation was successful, else false.

<a id="overview"></a>

## Overview

This method allocates a range from the free list. The alignment will default to the alignment set when the allocator was created or may be set here.

## See Also

### Miscellaneous

- [allocateRange](1810314-allocaterange.md): Allocates from the free list, at a set offset.
- [deallocate](1810361-deallocate.md): Deallocates a range to the free list.
- [getFragmentCapacity](1810407-getfragmentcapacity.md): Accessor to return the number of free fragments in the range.
- [getFragmentCount](1810456-getfragmentcount.md): Accessor to return the number of free fragments in the range.
- [getFreeCount](1810490-getfreecount.md): Totals the sizes of the free fragments.
- [init](1810534-init.md): Standard initializer for IORangeAllocator.
- [setFragmentCapacityIncrement](1810575-setfragmentcapacityincrement.md): Sets the count of fragments the free list will increase by when full.
- [withRange](1810621-withrange.md): Standard factory method for IORangeAllocator.
