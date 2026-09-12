> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplecursorchunkinfo](https://developer.apple.com/documentation/avfoundation/avsamplecursorchunkinfo)

# AVSampleCursorChunkInfo (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A value that provides information about a chunk of media samples.

## Declaration

```swift
struct AVSampleCursorChunkInfo
```

## Topics

### Chunk information

- [chunkSampleCount](avsamplecursorchunkinfo/chunksamplecount.md): The count of media samples in the chunk.
- [chunkHasUniformSampleSizes](avsamplecursorchunkinfo/chunkhasuniformsamplesizes.md): The samples in the chunk occupy the same number of bytes in storage.
- [chunkHasUniformSampleDurations](avsamplecursorchunkinfo/chunkhasuniformsampledurations.md): The samples in the chunk have the same duration.
- [chunkHasUniformFormatDescriptions](avsamplecursorchunkinfo/chunkhasuniformformatdescriptions.md): The samples in the chunk have the same format description.

### Initializers

- [init()](avsamplecursorchunkinfo/init%28%29.md): Creates a chunk information structure.
- [init(chunkSampleCount:chunkHasUniformSampleSizes:chunkHasUniformSampleDurations:chunkHasUniformFormatDescriptions:)](avsamplecursorchunkinfo/init%28chunksamplecount_chunkhasuniformsamplesizes_chunkhasuniformsampledurations_chunkhasuniformformatdescriptions_%29.md): Creates a chunk information structure with the specified values.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Sample cursors

- [AVSampleCursor](avsamplecursor.md): An object that provides information about the media sample at the cursor’s current position.
- [AVSampleCursorSyncInfo](avsamplecursorsyncinfo.md): A structure that describes the attributes of media samples to consider when resynchronizing a decoder.
- [AVSampleCursorDependencyInfo](avsamplecursordependencyinfo.md): A value for describing dependencies between a media sample and other media samples in the same sample sequence.
- [AVSampleCursorAudioDependencyInfo](avsamplecursoraudiodependencyinfo.md): A structure that describes the independent decodability of audio samples.
- [AVSampleCursorStorageRange](avsamplecursorstoragerange.md): A structure that indicates the offset and length of storage for a media sample or its chunk.

# AVSampleCursorChunkInfo (Objective-C)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A value that provides information about a chunk of media samples.

## Declaration

```objectivec
typedef struct { ... } AVSampleCursorChunkInfo;
```

## Topics

### Chunk information

- [chunkSampleCount](avsamplecursorchunkinfo/chunksamplecount.md): The count of media samples in the chunk.
- [chunkHasUniformSampleSizes](avsamplecursorchunkinfo/chunkhasuniformsamplesizes.md): The samples in the chunk occupy the same number of bytes in storage.
- [chunkHasUniformSampleDurations](avsamplecursorchunkinfo/chunkhasuniformsampledurations.md): The samples in the chunk have the same duration.
- [chunkHasUniformFormatDescriptions](avsamplecursorchunkinfo/chunkhasuniformformatdescriptions.md): The samples in the chunk have the same format description.

## See Also

### Sample cursors

- [AVSampleCursor](avsamplecursor.md): An object that provides information about the media sample at the cursor’s current position.
- [AVSampleCursorSyncInfo](avsamplecursorsyncinfo.md): A structure that describes the attributes of media samples to consider when resynchronizing a decoder.
- [AVSampleCursorDependencyInfo](avsamplecursordependencyinfo.md): A value for describing dependencies between a media sample and other media samples in the same sample sequence.
- [AVSampleCursorAudioDependencyInfo](avsamplecursoraudiodependencyinfo.md): A structure that describes the independent decodability of audio samples.
- [AVSampleCursorStorageRange](avsamplecursorstoragerange.md): A structure that indicates the offset and length of storage for a media sample or its chunk.
