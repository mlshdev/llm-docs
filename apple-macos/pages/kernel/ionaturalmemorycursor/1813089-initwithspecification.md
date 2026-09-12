> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ionaturalmemorycursor/1813089-initwithspecification](https://developer.apple.com/documentation/kernel/ionaturalmemorycursor/1813089-initwithspecification)

# initWithSpecification

**Interface language:** Objective-C

**Framework:** Kernel

Primary initializer for the IONaturalMemoryCursor class.

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

- [getPhysicalSegments](1813076-getphysicalsegments.md): Generates a CPU natural physical scatter/gather list given a memory descriptor.
- [outputSegment](1813100-outputsegment.md): Outputs the given segment into the output segments array in natural byte order.
- [withSpecification](1813112-withspecification.md): Creates and initializes an IONaturalMemoryCursor in one operation.
