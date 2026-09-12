> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodevicememory/1811085-withrange](https://developer.apple.com/documentation/kernel/iodevicememory/1811085-withrange)

# withRange

**Interface language:** Objective-C

**Framework:** Kernel

Constructs an IODeviceMemory instance, describing one physical range.

## Declaration

```objectivec
static IODeviceMemory * withRange( 
 IOPhysicalAddressaddress, 
 IOPhysicalLengthwithLength ); 
```

## Parameters

- `address`: The physical address of the first byte in the memory.
- `withLength`: The length of memory.

<a id="return_value"></a>

## Return Value

Returns the created IODeviceMemory on success, to be released by the caller, or zero on failure.

<a id="overview"></a>

## Overview

This method creates an IODeviceMemory instance for one physical range passed as a physical address and length. It just calls IOMemoryDescriptor::withPhysicalAddress.

## See Also

### Miscellaneous

- [arrayFromList](1811066-arrayfromlist.md): Constructs an OSArray of IODeviceMemory instances, each describing one physical range, and a tag value.
- [withSubRange](1811112-withsubrange.md): Constructs an IODeviceMemory instance, describing a subset of an existing IODeviceMemory range.
