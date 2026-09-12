> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/mesamplecursorchunk/init(bytesource:chunkstoragerange:chunkinfo:sampleindexwithinchunk:)](https://developer.apple.com/documentation/mediaextension/mesamplecursorchunk/init(bytesource:chunkstoragerange:chunkinfo:sampleindexwithinchunk:))

# init(byteSource:chunkStorageRange:chunkInfo:sampleIndexWithinChunk:) (Swift)

**Framework:** MediaExtension  
**Kind:** Initializer  
**Availability:** macOS 14.0+

Creates a new sample cursor chunk with byte source and chunk data that you provide.

## Declaration

```swift
init(byteSource: MEByteSource, chunkStorageRange: AVSampleCursorStorageRange, chunkInfo: AVSampleCursorChunkInfo, sampleIndexWithinChunk: CFIndex)
```

## Parameters

- `byteSource`: The byte source to use to read the data for the sample.
- `chunkStorageRange`: The offset location and length of the sample’s chunk within the byte source.
- `chunkInfo`: An object that provides details about the chunk in the media.
- `sampleIndexWithinChunk`: The offset index of the sample within the chunk, in samples.

# initWithByteSource:chunkStorageRange:chunkInfo:sampleIndexWithinChunk: (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Creates a new sample cursor chunk with byte source and chunk data that you provide.

## Declaration

```objectivec
- (instancetype) initWithByteSource:(MEByteSource *) byteSource chunkStorageRange:(AVSampleCursorStorageRange) chunkStorageRange chunkInfo:(AVSampleCursorChunkInfo) chunkInfo sampleIndexWithinChunk:(CFIndex) sampleIndexWithinChunk;
```

## Parameters

- `byteSource`: The byte source to use to read the data for the sample.
- `chunkStorageRange`: The offset location and length of the sample’s chunk within the byte source.
- `chunkInfo`: An object that provides details about the chunk in the media.
- `sampleIndexWithinChunk`: The offset index of the sample within the chunk, in samples.
