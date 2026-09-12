> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodevicememory/1811112-withsubrange](https://developer.apple.com/documentation/kernel/iodevicememory/1811112-withsubrange)

# withSubRange

**Interface language:** Objective-C

**Framework:** Kernel

Constructs an IODeviceMemory instance, describing a subset of an existing IODeviceMemory range.

## Declaration

```objectivec
static IODeviceMemory * withSubRange( 
 IODeviceMemory *of, 
 IOPhysicalAddressoffset, 
 IOPhysicalLengthlength ); 
```

## Parameters

- `of`: The parent IODeviceMemory of which a subrange is to be used for the new descriptor, which will be retained by the subrange IODeviceMemory.
- `offset`: A byte offset into the parent's memory.
- `length`: The length of the subrange.

<a id="return_value"></a>

## Return Value

Returns the created IODeviceMemory on success, to be released by the caller, or zero on failure.

<a id="overview"></a>

## Overview

This method creates an IODeviceMemory instance for a subset of an existing IODeviceMemory range, passed as a physical address offset and length. It just calls IOMemoryDescriptor::withSubRange.

## See Also

### Miscellaneous

- [arrayFromList](1811066-arrayfromlist.md): Constructs an OSArray of IODeviceMemory instances, each describing one physical range, and a tag value.
- [withRange](1811085-withrange.md): Constructs an IODeviceMemory instance, describing one physical range.
