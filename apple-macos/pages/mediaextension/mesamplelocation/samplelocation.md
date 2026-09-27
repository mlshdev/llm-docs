> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mediaextension/mesamplelocation/samplelocation

# sampleLocation (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The starting file offset and size in bytes of the sample.

## Declaration

```swift
var sampleLocation: AVSampleCursorStorageRange { get }
```

## See Also

### Inspecting a sample location

- [byteSource](bytesource.md): The byte source to use to read the data for the sample.

# sampleLocation (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The starting file offset and size in bytes of the sample.

## Declaration

```objectivec
@property (nonatomic, readonly) AVSampleCursorStorageRange sampleLocation;
```

## See Also

### Inspecting a sample location

- [byteSource](bytesource.md): The byte source to use to read the data for the sample.
