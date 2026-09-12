> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iolittlememorycursor/1812505-getphysicalsegments](https://developer.apple.com/documentation/kernel/iolittlememorycursor/1812505-getphysicalsegments)

# getPhysicalSegments

**Interface language:** Objective-C

**Framework:** Kernel

Generates a little endian physical scatter/gather list given a memory descriptor.

## Declaration

```objectivec
virtual UInt32 getPhysicalSegments(
 IOMemoryDescriptor *descriptor, 
 IOByteCount fromPosition, 
 PhysicalSegment *segments, 
 UInt32 maxSegments, 
 UInt32 inMaxTransferSize = 0, 
 IOByteCount *transferSize = 0) 
```

## Parameters

- `descriptor`: IOMemoryDescriptor that describes the data associated with an I/O request.
- `fromPosition`: Starting location of the I/O within a memory descriptor.
- `segments`: Pointer to an array of IOMemoryCursor::PhysicalSegments for the output physical scatter/gather list.
- `maxSegments`: Maximum number of segments that can be written to segments array.
- `inMaxTransferSize`: Maximum transfer size is limited to that many bytes, otherwise it defaults to the maximum transfer size specified when the memory cursor was initialized.
- `transferSize`: Pointer to an IOByteCount variable that can contain the total size of the transfer being described. Defaults to 0 indicating that no transfer size need be returned.

<a id="return_value"></a>

## Return Value

If the descriptor is exhausted of memory, a zero is returned, otherwise the number of segments that were filled in is returned.

<a id="overview"></a>

## Overview

Generates a list of physical segments from the given memory descriptor, relative to the current position of the descriptor. Wraps IOMemoryCursor::genPhysicalSegments.

## See Also

### Miscellaneous

- [initWithSpecification](1812512-initwithspecification.md): Primary initializer for the IOLittleMemoryCursor class.
- [outputSegment](1812519-outputsegment.md): Outputs the given segment into the output segments array in little endian byte order.
- [withSpecification](1812526-withspecification.md): Creates and initializes an IOLittleMemoryCursor in one operation.
