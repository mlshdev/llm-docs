> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fskit/fsmetadatarange/segmentcount

# segmentCount (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The number of segments in the range.

## Declaration

```swift
var segmentCount: UInt64 { get }
```

## See Also

### Accessing range properties

- [startOffset](startoffset.md): The start offset of the range in bytes.
- [segmentLength](segmentlength.md): The segment length in bytes.

# segmentCount (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The number of segments in the range.

## Declaration

```objectivec
@property (readonly) uint64_t segmentCount;
```

## See Also

### Accessing range properties

- [startOffset](startoffset.md): The start offset of the range in bytes.
- [segmentLength](segmentlength.md): The segment length in bytes.
