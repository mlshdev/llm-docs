> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/mesamplecursorchunk/chunkstoragerange](https://developer.apple.com/documentation/mediaextension/mesamplecursorchunk/chunkstoragerange)

# chunkStorageRange (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The offset location and length of the sample’s chunk within the byte source.

## Declaration

```swift
var chunkStorageRange: AVSampleCursorStorageRange { get }
```

## See Also

### Inspecting a chunk

- [byteSource](bytesource.md): The byte source to use to read the data for the sample.
- [chunkInfo](chunkinfo.md): An object that provides details about the chunk in the media.
- [sampleIndexWithinChunk](sampleindexwithinchunk.md): The offset index of the sample within the chunk, in samples.

# chunkStorageRange (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The offset location and length of the sample’s chunk within the byte source.

## Declaration

```objectivec
@property (nonatomic, readonly) AVSampleCursorStorageRange chunkStorageRange;
```

## See Also

### Inspecting a chunk

- [byteSource](bytesource.md): The byte source to use to read the data for the sample.
- [chunkInfo](chunkinfo.md): An object that provides details about the chunk in the media.
- [sampleIndexWithinChunk](sampleindexwithinchunk.md): The offset index of the sample within the chunk, in samples.
