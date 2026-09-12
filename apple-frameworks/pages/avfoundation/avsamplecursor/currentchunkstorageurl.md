> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplecursor/currentchunkstorageurl](https://developer.apple.com/documentation/avfoundation/avsamplecursor/currentchunkstorageurl)

# currentChunkStorageURL (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.10+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The URL of the storage container of the current sample and other samples to load in the same operation as a chunk.

## Declaration

```swift
var currentChunkStorageURL: URL? { get }
```

<a id="Discussion"></a>

## Discussion

When this property is `nil`, the storage location of the chunk is the URL of the sample cursor’s track’s asset, if it has one.

## See Also

### Getting sample information

- [currentChunkInfo](currentchunkinfo.md): A value that provides information about the chunk of samples to which the current sample belongs.
- [AVSampleCursorChunkInfo](../avsamplecursorchunkinfo.md): A value that provides information about a chunk of media samples.
- [currentChunkStorageRange](currentchunkstoragerange.md): The sample range in the storage container to load together with the current sample as a chunk.
- [AVSampleCursorStorageRange](../avsamplecursorstoragerange.md): A structure that indicates the offset and length of storage for a media sample or its chunk.
- [currentSampleDependencyInfo](currentsampledependencyinfo.md): The dependency information that describes relationships between a media sample and other media samples in the same sample sequence.
- [AVSampleCursorDependencyInfo](../avsamplecursordependencyinfo.md): A value for describing dependencies between a media sample and other media samples in the same sample sequence.
- [currentSampleDuration](currentsampleduration.md): The decode duration of the sample at the cursor’s current position.
- [currentSampleIndexInChunk](currentsampleindexinchunk.md): The index of the current sample within the chunk to which it belongs.
- [currentSampleStorageRange](currentsamplestoragerange.md): The offset and length of the current sample in the current chunk storage URL.
- [currentSampleSyncInfo](currentsamplesyncinfo.md): The synchronization information for the current sample for consideration when resynchronizing a decoder.
- [AVSampleCursorSyncInfo](../avsamplecursorsyncinfo.md): A structure that describes the attributes of media samples to consider when resynchronizing a decoder.
- [copyCurrentSampleFormatDescription()](copycurrentsampleformatdescription%28%29.md): Returns the format description of the sample at the cursor’s current position.
- [currentSampleAudioDependencyInfo](currentsampleaudiodependencyinfo.md): The independent decodability information for the audio sample.
- [currentSampleDependencyAttachments](currentsampledependencyattachments.md): A dictionary of dependency-related sample buffer attachments.

# currentChunkStorageURL (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.10+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The URL of the storage container of the current sample and other samples to load in the same operation as a chunk.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSURL * currentChunkStorageURL;
```

<a id="Discussion"></a>

## Discussion

When this property is `nil`, the storage location of the chunk is the URL of the sample cursor’s track’s asset, if it has one.

## See Also

### Getting sample information

- [currentChunkInfo](currentchunkinfo.md): A value that provides information about the chunk of samples to which the current sample belongs.
- [AVSampleCursorChunkInfo](../avsamplecursorchunkinfo.md): A value that provides information about a chunk of media samples.
- [currentChunkStorageRange](currentchunkstoragerange.md): The sample range in the storage container to load together with the current sample as a chunk.
- [AVSampleCursorStorageRange](../avsamplecursorstoragerange.md): A structure that indicates the offset and length of storage for a media sample or its chunk.
- [currentSampleDependencyInfo](currentsampledependencyinfo.md): The dependency information that describes relationships between a media sample and other media samples in the same sample sequence.
- [AVSampleCursorDependencyInfo](../avsamplecursordependencyinfo.md): A value for describing dependencies between a media sample and other media samples in the same sample sequence.
- [currentSampleDuration](currentsampleduration.md): The decode duration of the sample at the cursor’s current position.
- [currentSampleIndexInChunk](currentsampleindexinchunk.md): The index of the current sample within the chunk to which it belongs.
- [currentSampleStorageRange](currentsamplestoragerange.md): The offset and length of the current sample in the current chunk storage URL.
- [currentSampleSyncInfo](currentsamplesyncinfo.md): The synchronization information for the current sample for consideration when resynchronizing a decoder.
- [AVSampleCursorSyncInfo](../avsamplecursorsyncinfo.md): A structure that describes the attributes of media samples to consider when resynchronizing a decoder.
- [copyCurrentSampleFormatDescription](copycurrentsampleformatdescription%28%29.md): Returns the format description of the sample at the cursor’s current position.
- [currentSampleAudioDependencyInfo](currentsampleaudiodependencyinfo.md): The independent decodability information for the audio sample.
- [currentSampleDependencyAttachments](currentsampledependencyattachments.md): A dictionary of dependency-related sample buffer attachments.
