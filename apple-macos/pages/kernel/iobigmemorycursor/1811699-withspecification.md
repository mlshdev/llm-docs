> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iobigmemorycursor/1811699-withspecification](https://developer.apple.com/documentation/kernel/iobigmemorycursor/1811699-withspecification)

# withSpecification

**Interface language:** Objective-C

**Framework:** Kernel

Creates and initializes an IOBigMemoryCursor in one operation.

## Declaration

```objectivec
static IOBigMemoryCursor * withSpecification(
 IOPhysicalLength maxSegmentSize, 
 IOPhysicalLength maxTransferSize, 
 IOPhysicalLength alignment = 1); 
```

## Parameters

- `maxSegmentSize`: Maximum allowable size for one segment. Defaults to 0.
- `maxTransferSize`: Maximum size of an entire transfer. Defaults to 0 indicating no maximum.
- `alignment`: Alignment restrictions on output physical addresses. Not currently implemented. Defaults to single byte alignment.

<a id="return_value"></a>

## Return Value

Returns a new memory cursor if successfully created and initialized, 0 otherwise.

<a id="overview"></a>

## Overview

Factory function to create and initialize an IOBigMemoryCursor in one operation. See also IOBigMemoryCursor::initWithSpecification.

## See Also

### Miscellaneous

- [getPhysicalSegments](1811632-getphysicalsegments.md): Generates a big endian physical scatter/gather list given a memory descriptor.
- [initWithSpecification](1811657-initwithspecification.md): Primary initializer for the IOBigMemoryCursor class.
- [outputSegment](1811675-outputsegment.md): Outputs the given segment into the output segments array in big endian byte order.
