> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsmetadatarange/init(offset:segmentlength:segmentcount:)](https://developer.apple.com/documentation/fskit/fsmetadatarange/init(offset:segmentlength:segmentcount:))

# init(offset:segmentLength:segmentCount:) (Swift)

**Framework:** FSKit  
**Kind:** Initializer  
**Availability:** macOS 15.4+

Initializes a metadata range with the given properties.

## Declaration

```swift
init(offset startOffset: off_t, segmentLength: UInt64, segmentCount: UInt64)
```

## Parameters

- `startOffset`: The start offset of the range in bytes. Ensure this value is a multiple of the corresponding resource’s [blockSize](../fsblockdeviceresource/blocksize.md).
- `segmentLength`: The segment length in bytes. Ensure this value is a multiple of the corresponding resource’s [blockSize](../fsblockdeviceresource/blocksize.md).
- `segmentCount`: The number of segments in the range.

# initWithOffset:segmentLength:segmentCount: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Initializes a metadata range with the given properties.

## Declaration

```objectivec
- (instancetype) initWithOffset:(off_t) startOffset segmentLength:(uint64_t) segmentLength segmentCount:(uint64_t) segmentCount;
```

## Parameters

- `startOffset`: The start offset of the range in bytes. Ensure this value is a multiple of the corresponding resource’s [blockSize](../fsblockdeviceresource/blocksize.md).
- `segmentLength`: The segment length in bytes. Ensure this value is a multiple of the corresponding resource’s [blockSize](../fsblockdeviceresource/blocksize.md).
- `segmentCount`: The number of segments in the range.

## See Also

### Creating a metadata range

- [rangeWithOffset:segmentLength:segmentCount:](rangewithoffset_segmentlength_segmentcount_.md): Creates a metadata range with the given properties.
