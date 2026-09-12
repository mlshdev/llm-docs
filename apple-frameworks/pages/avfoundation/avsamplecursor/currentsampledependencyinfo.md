> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplecursor/currentsampledependencyinfo](https://developer.apple.com/documentation/avfoundation/avsamplecursor/currentsampledependencyinfo)

# currentSampleDependencyInfo (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.10+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The dependency information that describes relationships between a media sample and other media samples in the same sample sequence.

## Declaration

```swift
var currentSampleDependencyInfo: AVSampleCursorDependencyInfo { get }
```

## See Also

### Getting sample information

- [currentChunkInfo](currentchunkinfo.md): A value that provides information about the chunk of samples to which the current sample belongs.
- [AVSampleCursorChunkInfo](../avsamplecursorchunkinfo.md): A value that provides information about a chunk of media samples.
- [currentChunkStorageRange](currentchunkstoragerange.md): The sample range in the storage container to load together with the current sample as a chunk.
- [AVSampleCursorStorageRange](../avsamplecursorstoragerange.md): A structure that indicates the offset and length of storage for a media sample or its chunk.
- [currentChunkStorageURL](currentchunkstorageurl.md): The URL of the storage container of the current sample and other samples to load in the same operation as a chunk.
- [AVSampleCursorDependencyInfo](../avsamplecursordependencyinfo.md): A value for describing dependencies between a media sample and other media samples in the same sample sequence.
- [currentSampleDuration](currentsampleduration.md): The decode duration of the sample at the cursor’s current position.
- [currentSampleIndexInChunk](currentsampleindexinchunk.md): The index of the current sample within the chunk to which it belongs.
- [currentSampleStorageRange](currentsamplestoragerange.md): The offset and length of the current sample in the current chunk storage URL.
- [currentSampleSyncInfo](currentsamplesyncinfo.md): The synchronization information for the current sample for consideration when resynchronizing a decoder.
- [AVSampleCursorSyncInfo](../avsamplecursorsyncinfo.md): A structure that describes the attributes of media samples to consider when resynchronizing a decoder.
- [copyCurrentSampleFormatDescription()](copycurrentsampleformatdescription%28%29.md): Returns the format description of the sample at the cursor’s current position.
- [currentSampleAudioDependencyInfo](currentsampleaudiodependencyinfo.md): The independent decodability information for the audio sample.
- [currentSampleDependencyAttachments](currentsampledependencyattachments.md): A dictionary of dependency-related sample buffer attachments.

# currentSampleDependencyInfo (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.10+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The dependency information that describes relationships between a media sample and other media samples in the same sample sequence.

## Declaration

```objectivec
@property (nonatomic, readonly) AVSampleCursorDependencyInfo currentSampleDependencyInfo;
```

## See Also

### Getting sample information

- [currentChunkInfo](currentchunkinfo.md): A value that provides information about the chunk of samples to which the current sample belongs.
- [AVSampleCursorChunkInfo](../avsamplecursorchunkinfo.md): A value that provides information about a chunk of media samples.
- [currentChunkStorageRange](currentchunkstoragerange.md): The sample range in the storage container to load together with the current sample as a chunk.
- [AVSampleCursorStorageRange](../avsamplecursorstoragerange.md): A structure that indicates the offset and length of storage for a media sample or its chunk.
- [currentChunkStorageURL](currentchunkstorageurl.md): The URL of the storage container of the current sample and other samples to load in the same operation as a chunk.
- [AVSampleCursorDependencyInfo](../avsamplecursordependencyinfo.md): A value for describing dependencies between a media sample and other media samples in the same sample sequence.
- [currentSampleDuration](currentsampleduration.md): The decode duration of the sample at the cursor’s current position.
- [currentSampleIndexInChunk](currentsampleindexinchunk.md): The index of the current sample within the chunk to which it belongs.
- [currentSampleStorageRange](currentsamplestoragerange.md): The offset and length of the current sample in the current chunk storage URL.
- [currentSampleSyncInfo](currentsamplesyncinfo.md): The synchronization information for the current sample for consideration when resynchronizing a decoder.
- [AVSampleCursorSyncInfo](../avsamplecursorsyncinfo.md): A structure that describes the attributes of media samples to consider when resynchronizing a decoder.
- [copyCurrentSampleFormatDescription](copycurrentsampleformatdescription%28%29.md): Returns the format description of the sample at the cursor’s current position.
- [currentSampleAudioDependencyInfo](currentsampleaudiodependencyinfo.md): The independent decodability information for the audio sample.
- [currentSampleDependencyAttachments](currentsampledependencyattachments.md): A dictionary of dependency-related sample buffer attachments.
