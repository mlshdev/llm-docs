> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/mesamplecursorchunk/bytesource](https://developer.apple.com/documentation/mediaextension/mesamplecursorchunk/bytesource)

# byteSource (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The byte source to use to read the data for the sample.

## Declaration

```swift
var byteSource: MEByteSource { get }
```

## See Also

### Inspecting a chunk

- [chunkStorageRange](chunkstoragerange.md): The offset location and length of the sample’s chunk within the byte source.
- [chunkInfo](chunkinfo.md): An object that provides details about the chunk in the media.
- [sampleIndexWithinChunk](sampleindexwithinchunk.md): The offset index of the sample within the chunk, in samples.

# byteSource (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The byte source to use to read the data for the sample.

## Declaration

```objectivec
@property (nonatomic, retain, readonly) MEByteSource * byteSource;
```

## See Also

### Inspecting a chunk

- [chunkStorageRange](chunkstoragerange.md): The offset location and length of the sample’s chunk within the byte source.
- [chunkInfo](chunkinfo.md): An object that provides details about the chunk in the media.
- [sampleIndexWithinChunk](sampleindexwithinchunk.md): The offset index of the sample within the chunk, in samples.
