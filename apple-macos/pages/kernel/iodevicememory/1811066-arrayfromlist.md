> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodevicememory/1811066-arrayfromlist](https://developer.apple.com/documentation/kernel/iodevicememory/1811066-arrayfromlist)

# arrayFromList

**Interface language:** Objective-C

**Framework:** Kernel

Constructs an OSArray of IODeviceMemory instances, each describing one physical range, and a tag value.

## Declaration

```objectivec
static OSArray * arrayFromList( 
 InitElement list[], 
 IOItemCount count ); 
```

## Parameters

- `list`: An array of IODeviceMemory::InitElement structures.
- `count`: The number of elements in the list.

<a id="return_value"></a>

## Return Value

Returns a created OSArray of IODeviceMemory objects, to be released by the caller, or zero on failure.

<a id="overview"></a>

## Overview

This method creates IODeviceMemory instances for each physical range passed in an IODeviceMemory::InitElement array. Each element consists of a physical address, length and tag value for the IODeviceMemory. The instances are returned as a created OSArray.

## See Also

### Miscellaneous

- [withRange](1811085-withrange.md): Constructs an IODeviceMemory instance, describing one physical range.
- [withSubRange](1811112-withsubrange.md): Constructs an IODeviceMemory instance, describing a subset of an existing IODeviceMemory range.
