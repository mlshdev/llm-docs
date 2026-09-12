> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iobigmemorycursor/1811675-outputsegment](https://developer.apple.com/documentation/kernel/iobigmemorycursor/1811675-outputsegment)

# outputSegment

**Interface language:** Objective-C

**Framework:** Kernel

Outputs the given segment into the output segments array in big endian byte order.

## Declaration

```objectivec
static void outputSegment(
 PhysicalSegmentsegment, 
 void *segments, 
 UInt32segmentIndex); 
```

## Parameters

- `segment`: The physical address and length that is next to be output.
- `segments`: Base of the output vector of DMA address length pairs.
- `segmentIndex`: Index to output 'segment' in the 'segments' array.

## See Also

### Miscellaneous

- [getPhysicalSegments](1811632-getphysicalsegments.md): Generates a big endian physical scatter/gather list given a memory descriptor.
- [initWithSpecification](1811657-initwithspecification.md): Primary initializer for the IOBigMemoryCursor class.
- [withSpecification](1811699-withspecification.md): Creates and initializes an IOBigMemoryCursor in one operation.
