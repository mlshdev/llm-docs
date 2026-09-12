> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ionaturalmemorycursor/1813100-outputsegment](https://developer.apple.com/documentation/kernel/ionaturalmemorycursor/1813100-outputsegment)

# outputSegment

**Interface language:** Objective-C

**Framework:** Kernel

Outputs the given segment into the output segments array in natural byte order.

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

- [getPhysicalSegments](1813076-getphysicalsegments.md): Generates a CPU natural physical scatter/gather list given a memory descriptor.
- [initWithSpecification](1813089-initwithspecification.md): Primary initializer for the IONaturalMemoryCursor class.
- [withSpecification](1813112-withspecification.md): Creates and initializes an IONaturalMemoryCursor in one operation.
