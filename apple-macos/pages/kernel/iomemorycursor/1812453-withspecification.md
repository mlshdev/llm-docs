> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iomemorycursor/1812453-withspecification](https://developer.apple.com/documentation/kernel/iomemorycursor/1812453-withspecification)

# withSpecification

**Interface language:** Objective-C

**Framework:** Kernel

Creates and initializes an IOMemoryCursor in one operation.

## Declaration

```objectivec
static IOMemoryCursor * withSpecification(
 SegmentFunction outSegFunc, 
 IOPhysicalLength maxSegmentSize = 0, 
 IOPhysicalLength maxTransferSize = 0, 
 IOPhysicalLength alignment = 1); 
```

## Parameters

- `outSegFunc`: SegmentFunction to call to output one physical segment.
- `maxSegmentSize`: Maximum allowable size for one segment. Defaults to 0.
- `maxTransferSize`: Maximum size of an entire transfer. Defaults to 0 indicating no maximum.
- `alignment`: Alignment restrictions on output physical addresses. Not currently implemented. Defaults to single byte alignment.

<a id="return_value"></a>

## Return Value

Returns a new memory cursor if successfully created and initialized, 0 otherwise.

<a id="overview"></a>

## Overview

Factory function to create and initialize an IOMemoryCursor in one operation. For more information, see IOMemoryCursor::initWithSpecification.

## See Also

### Miscellaneous

- [genPhysicalSegments](1812441-genphysicalsegments.md): Generates a physical scatter/gather list given a memory descriptor.
- [initWithSpecification](1812445-initwithspecification.md): Primary initializer for the IOMemoryCursor class.
