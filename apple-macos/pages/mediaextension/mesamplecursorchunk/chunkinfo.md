> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/mesamplecursorchunk/chunkinfo](https://developer.apple.com/documentation/mediaextension/mesamplecursorchunk/chunkinfo)

# chunkInfo (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

An object that provides details about the chunk in the media.

## Declaration

```swift
var chunkInfo: AVSampleCursorChunkInfo { get }
```

## See Also

### Inspecting a chunk

- [byteSource](bytesource.md): The byte source to use to read the data for the sample.
- [chunkStorageRange](chunkstoragerange.md): The offset location and length of the sample’s chunk within the byte source.
- [sampleIndexWithinChunk](sampleindexwithinchunk.md): The offset index of the sample within the chunk, in samples.

# chunkInfo (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

An object that provides details about the chunk in the media.

## Declaration

```objectivec
@property (nonatomic, readonly) AVSampleCursorChunkInfo chunkInfo;
```

## See Also

### Inspecting a chunk

- [byteSource](bytesource.md): The byte source to use to read the data for the sample.
- [chunkStorageRange](chunkstoragerange.md): The offset location and length of the sample’s chunk within the byte source.
- [sampleIndexWithinChunk](sampleindexwithinchunk.md): The offset index of the sample within the chunk, in samples.
