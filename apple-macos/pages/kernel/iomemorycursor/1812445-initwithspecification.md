> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iomemorycursor/1812445-initwithspecification](https://developer.apple.com/documentation/kernel/iomemorycursor/1812445-initwithspecification)

# initWithSpecification

**Interface language:** Objective-C

**Framework:** Kernel

Primary initializer for the IOMemoryCursor class.

## Declaration

```objectivec
virtual bool initWithSpecification(
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

Returns true if the inherited classes and this instance initialize successfully.

## See Also

### Miscellaneous

- [genPhysicalSegments](1812441-genphysicalsegments.md): Generates a physical scatter/gather list given a memory descriptor.
- [withSpecification](1812453-withspecification.md): Creates and initializes an IOMemoryCursor in one operation.
