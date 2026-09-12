> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsmetadatarange/rangewithoffset:segmentlength:segmentcount:](https://developer.apple.com/documentation/fskit/fsmetadatarange/rangewithoffset:segmentlength:segmentcount:)

# rangeWithOffset:segmentLength:segmentCount:

**Interface language:** Objective-C

**Framework:** FSKit  
**Kind:** Type Method  
**Availability:** macOS 15.4+

Creates a metadata range with the given properties.

## Declaration

```objectivec
+ (instancetype) rangeWithOffset:(off_t) startOffset segmentLength:(uint64_t) segmentLength segmentCount:(uint64_t) segmentCount;
```

## Parameters

- `startOffset`: The start offset of the range in bytes. Ensure this value is a multiple of the corresponding resource’s [blockSize](../fsblockdeviceresource/blocksize.md).
- `segmentLength`: The segment length in bytes. Ensure this value is a multiple of the corresponding resource’s [blockSize](../fsblockdeviceresource/blocksize.md).
- `segmentCount`: The number of segments in the range.

## See Also

### Creating a metadata range

- [initWithOffset:segmentLength:segmentCount:](init%28offset_segmentlength_segmentcount_%29.md): Initializes a metadata range with the given properties.
