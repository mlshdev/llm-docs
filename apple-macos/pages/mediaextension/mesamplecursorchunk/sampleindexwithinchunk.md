> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/mesamplecursorchunk/sampleindexwithinchunk](https://developer.apple.com/documentation/mediaextension/mesamplecursorchunk/sampleindexwithinchunk)

# sampleIndexWithinChunk (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The offset index of the sample within the chunk, in samples.

## Declaration

```swift
var sampleIndexWithinChunk: CFIndex { get }
```

## See Also

### Inspecting a chunk

- [byteSource](bytesource.md): The byte source to use to read the data for the sample.
- [chunkStorageRange](chunkstoragerange.md): The offset location and length of the sample’s chunk within the byte source.
- [chunkInfo](chunkinfo.md): An object that provides details about the chunk in the media.

# sampleIndexWithinChunk (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The offset index of the sample within the chunk, in samples.

## Declaration

```objectivec
@property (nonatomic, readonly) CFIndex sampleIndexWithinChunk;
```

## See Also

### Inspecting a chunk

- [byteSource](bytesource.md): The byte source to use to read the data for the sample.
- [chunkStorageRange](chunkstoragerange.md): The offset location and length of the sample’s chunk within the byte source.
- [chunkInfo](chunkinfo.md): An object that provides details about the chunk in the media.
