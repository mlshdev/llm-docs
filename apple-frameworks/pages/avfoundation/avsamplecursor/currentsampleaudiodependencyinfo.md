> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplecursor/currentsampleaudiodependencyinfo](https://developer.apple.com/documentation/avfoundation/avsamplecursor/currentsampleaudiodependencyinfo)

# currentSampleAudioDependencyInfo (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.15+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The independent decodability information for the audio sample.

## Declaration

```swift
var currentSampleAudioDependencyInfo: AVSampleCursorAudioDependencyInfo { get }
```

<a id="Discussion"></a>

## Discussion

To position a sample cursor at the first sample that the audio decoder requires for a full refresh, move it back from the current sample until you find a sample that meets the following criteria:

- The value of its [audioSampleIsIndependentlyDecodable](../avsamplecursoraudiodependencyinfo/audiosampleisindependentlydecodable.md) property is [true](https://developer.apple.com/documentation/swift/true).
- The value of its [audioSamplePacketRefreshCount](../avsamplecursoraudiodependencyinfo/audiosamplepacketrefreshcount.md) property is greater than or equal to the number of steps back you’ve taken.

You don’t need to reposition the cursorif the current sample is independently decodable with an [audioSamplePacketRefreshCount](../avsamplecursoraudiodependencyinfo/audiosamplepacketrefreshcount.md) of `0`.

## See Also

### Getting sample information

- [currentChunkInfo](currentchunkinfo.md): A value that provides information about the chunk of samples to which the current sample belongs.
- [AVSampleCursorChunkInfo](../avsamplecursorchunkinfo.md): A value that provides information about a chunk of media samples.
- [currentChunkStorageRange](currentchunkstoragerange.md): The sample range in the storage container to load together with the current sample as a chunk.
- [AVSampleCursorStorageRange](../avsamplecursorstoragerange.md): A structure that indicates the offset and length of storage for a media sample or its chunk.
- [currentChunkStorageURL](currentchunkstorageurl.md): The URL of the storage container of the current sample and other samples to load in the same operation as a chunk.
- [currentSampleDependencyInfo](currentsampledependencyinfo.md): The dependency information that describes relationships between a media sample and other media samples in the same sample sequence.
- [AVSampleCursorDependencyInfo](../avsamplecursordependencyinfo.md): A value for describing dependencies between a media sample and other media samples in the same sample sequence.
- [currentSampleDuration](currentsampleduration.md): The decode duration of the sample at the cursor’s current position.
- [currentSampleIndexInChunk](currentsampleindexinchunk.md): The index of the current sample within the chunk to which it belongs.
- [currentSampleStorageRange](currentsamplestoragerange.md): The offset and length of the current sample in the current chunk storage URL.
- [currentSampleSyncInfo](currentsamplesyncinfo.md): The synchronization information for the current sample for consideration when resynchronizing a decoder.
- [AVSampleCursorSyncInfo](../avsamplecursorsyncinfo.md): A structure that describes the attributes of media samples to consider when resynchronizing a decoder.
- [copyCurrentSampleFormatDescription()](copycurrentsampleformatdescription%28%29.md): Returns the format description of the sample at the cursor’s current position.
- [currentSampleDependencyAttachments](currentsampledependencyattachments.md): A dictionary of dependency-related sample buffer attachments.

# currentSampleAudioDependencyInfo (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.15+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The independent decodability information for the audio sample.

## Declaration

```objectivec
@property (nonatomic, readonly) AVSampleCursorAudioDependencyInfo currentSampleAudioDependencyInfo;
```

<a id="Discussion"></a>

## Discussion

To position a sample cursor at the first sample that the audio decoder requires for a full refresh, move it back from the current sample until you find a sample that meets the following criteria:

- The value of its [audioSampleIsIndependentlyDecodable](../avsamplecursoraudiodependencyinfo/audiosampleisindependentlydecodable.md) property is [true](https://developer.apple.com/documentation/swift/true).
- The value of its [audioSamplePacketRefreshCount](../avsamplecursoraudiodependencyinfo/audiosamplepacketrefreshcount.md) property is greater than or equal to the number of steps back you’ve taken.

You don’t need to reposition the cursorif the current sample is independently decodable with an [audioSamplePacketRefreshCount](../avsamplecursoraudiodependencyinfo/audiosamplepacketrefreshcount.md) of `0`.

## See Also

### Getting sample information

- [currentChunkInfo](currentchunkinfo.md): A value that provides information about the chunk of samples to which the current sample belongs.
- [AVSampleCursorChunkInfo](../avsamplecursorchunkinfo.md): A value that provides information about a chunk of media samples.
- [currentChunkStorageRange](currentchunkstoragerange.md): The sample range in the storage container to load together with the current sample as a chunk.
- [AVSampleCursorStorageRange](../avsamplecursorstoragerange.md): A structure that indicates the offset and length of storage for a media sample or its chunk.
- [currentChunkStorageURL](currentchunkstorageurl.md): The URL of the storage container of the current sample and other samples to load in the same operation as a chunk.
- [currentSampleDependencyInfo](currentsampledependencyinfo.md): The dependency information that describes relationships between a media sample and other media samples in the same sample sequence.
- [AVSampleCursorDependencyInfo](../avsamplecursordependencyinfo.md): A value for describing dependencies between a media sample and other media samples in the same sample sequence.
- [currentSampleDuration](currentsampleduration.md): The decode duration of the sample at the cursor’s current position.
- [currentSampleIndexInChunk](currentsampleindexinchunk.md): The index of the current sample within the chunk to which it belongs.
- [currentSampleStorageRange](currentsamplestoragerange.md): The offset and length of the current sample in the current chunk storage URL.
- [currentSampleSyncInfo](currentsamplesyncinfo.md): The synchronization information for the current sample for consideration when resynchronizing a decoder.
- [AVSampleCursorSyncInfo](../avsamplecursorsyncinfo.md): A structure that describes the attributes of media samples to consider when resynchronizing a decoder.
- [copyCurrentSampleFormatDescription](copycurrentsampleformatdescription%28%29.md): Returns the format description of the sample at the cursor’s current position.
- [currentSampleDependencyAttachments](currentsampledependencyattachments.md): A dictionary of dependency-related sample buffer attachments.
