> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsmetadatarange/segmentlength](https://developer.apple.com/documentation/fskit/fsmetadatarange/segmentlength)

# segmentLength (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The segment length in bytes.

## Declaration

```swift
var segmentLength: UInt64 { get }
```

<a id="discussion"></a>

## Discussion

Ensure this value is a multiple of the corresponding resource’s [blockSize](../fsblockdeviceresource/blocksize.md).

## See Also

### Accessing range properties

- [startOffset](startoffset.md): The start offset of the range in bytes.
- [segmentCount](segmentcount.md): The number of segments in the range.

# segmentLength (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The segment length in bytes.

## Declaration

```objectivec
@property (readonly) uint64_t segmentLength;
```

<a id="discussion"></a>

## Discussion

Ensure this value is a multiple of the corresponding resource’s [blockSize](../fsblockdeviceresource/blocksize.md).

## See Also

### Accessing range properties

- [startOffset](startoffset.md): The start offset of the range in bytes.
- [segmentCount](segmentcount.md): The number of segments in the range.
