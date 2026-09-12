> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsmetadatarange/startoffset](https://developer.apple.com/documentation/fskit/fsmetadatarange/startoffset)

# startOffset (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The start offset of the range in bytes.

## Declaration

```swift
var startOffset: off_t { get }
```

<a id="discussion"></a>

## Discussion

Ensure this value is a multiple of the corresponding resource’s [blockSize](../fsblockdeviceresource/blocksize.md).

## See Also

### Accessing range properties

- [segmentLength](segmentlength.md): The segment length in bytes.
- [segmentCount](segmentcount.md): The number of segments in the range.

# startOffset (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The start offset of the range in bytes.

## Declaration

```objectivec
@property (readonly) off_t startOffset;
```

<a id="discussion"></a>

## Discussion

Ensure this value is a multiple of the corresponding resource’s [blockSize](../fsblockdeviceresource/blocksize.md).

## See Also

### Accessing range properties

- [segmentLength](segmentlength.md): The segment length in bytes.
- [segmentCount](segmentcount.md): The number of segments in the range.
