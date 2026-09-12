> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/meestimatedsamplelocation/estimatedsamplelocation](https://developer.apple.com/documentation/mediaextension/meestimatedsamplelocation/estimatedsamplelocation)

# estimatedSampleLocation (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The estimated starting file offset and size in bytes of the sample.

## Declaration

```swift
var estimatedSampleLocation: AVSampleCursorStorageRange { get }
```

## See Also

### Inspecting an estimated sample location

- [byteSource](bytesource.md): The byte source to use to read the data for the sample.
- [refinementDataLocation](refinementdatalocation.md): The starting file offset and size in bytes of the data necessary to provide an accurate sample location.

# estimatedSampleLocation (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The estimated starting file offset and size in bytes of the sample.

## Declaration

```objectivec
@property (nonatomic, readonly) AVSampleCursorStorageRange estimatedSampleLocation;
```

## See Also

### Inspecting an estimated sample location

- [byteSource](bytesource.md): The byte source to use to read the data for the sample.
- [refinementDataLocation](refinementdatalocation.md): The starting file offset and size in bytes of the data necessary to provide an accurate sample location.
