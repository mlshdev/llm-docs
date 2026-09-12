> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iobigmemorycursor/1811657-initwithspecification](https://developer.apple.com/documentation/kernel/iobigmemorycursor/1811657-initwithspecification)

# initWithSpecification

**Interface language:** Objective-C

**Framework:** Kernel

Primary initializer for the IOBigMemoryCursor class.

## Declaration

```objectivec
virtual bool initWithSpecification(
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

Returns true if the inherited classes and this instance initialize successfully.

## See Also

### Miscellaneous

- [getPhysicalSegments](1811632-getphysicalsegments.md): Generates a big endian physical scatter/gather list given a memory descriptor.
- [outputSegment](1811675-outputsegment.md): Outputs the given segment into the output segments array in big endian byte order.
- [withSpecification](1811699-withspecification.md): Creates and initializes an IOBigMemoryCursor in one operation.
