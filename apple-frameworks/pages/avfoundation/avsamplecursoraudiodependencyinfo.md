> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplecursoraudiodependencyinfo](https://developer.apple.com/documentation/avfoundation/avsamplecursoraudiodependencyinfo)

# AVSampleCursorAudioDependencyInfo (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that describes the independent decodability of audio samples.

## Declaration

```swift
struct AVSampleCursorAudioDependencyInfo
```

## Topics

### Querying independent decodability

- [audioSampleIsIndependentlyDecodable](avsamplecursoraudiodependencyinfo/audiosampleisindependentlydecodable.md): A Boolean value indicating whether the sample is independently decodable.
- [audioSamplePacketRefreshCount](avsamplecursoraudiodependencyinfo/audiosamplepacketrefreshcount.md): The number of samples, starting at the current sample, that must be fed to the decoder to achieve full decoder refresh.

### Initializers

- [init()](avsamplecursoraudiodependencyinfo/init%28%29.md): Creates an audio sample decodability information structure.
- [init(audioSampleIsIndependentlyDecodable:audioSamplePacketRefreshCount:)](avsamplecursoraudiodependencyinfo/init%28audiosampleisindependentlydecodable_audiosamplepacketrefreshcount_%29.md): Creates an audio sample decodability information structure with the specified values.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Sample cursors

- [AVSampleCursor](avsamplecursor.md): An object that provides information about the media sample at the cursor’s current position.
- [AVSampleCursorSyncInfo](avsamplecursorsyncinfo.md): A structure that describes the attributes of media samples to consider when resynchronizing a decoder.
- [AVSampleCursorDependencyInfo](avsamplecursordependencyinfo.md): A value for describing dependencies between a media sample and other media samples in the same sample sequence.
- [AVSampleCursorStorageRange](avsamplecursorstoragerange.md): A structure that indicates the offset and length of storage for a media sample or its chunk.
- [AVSampleCursorChunkInfo](avsamplecursorchunkinfo.md): A value that provides information about a chunk of media samples.

# AVSampleCursorAudioDependencyInfo (Objective-C)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that describes the independent decodability of audio samples.

## Declaration

```objectivec
typedef struct { ... } AVSampleCursorAudioDependencyInfo;
```

## Topics

### Querying independent decodability

- [audioSampleIsIndependentlyDecodable](avsamplecursoraudiodependencyinfo/audiosampleisindependentlydecodable.md): A Boolean value indicating whether the sample is independently decodable.
- [audioSamplePacketRefreshCount](avsamplecursoraudiodependencyinfo/audiosamplepacketrefreshcount.md): The number of samples, starting at the current sample, that must be fed to the decoder to achieve full decoder refresh.

## See Also

### Sample cursors

- [AVSampleCursor](avsamplecursor.md): An object that provides information about the media sample at the cursor’s current position.
- [AVSampleCursorSyncInfo](avsamplecursorsyncinfo.md): A structure that describes the attributes of media samples to consider when resynchronizing a decoder.
- [AVSampleCursorDependencyInfo](avsamplecursordependencyinfo.md): A value for describing dependencies between a media sample and other media samples in the same sample sequence.
- [AVSampleCursorStorageRange](avsamplecursorstoragerange.md): A structure that indicates the offset and length of storage for a media sample or its chunk.
- [AVSampleCursorChunkInfo](avsamplecursorchunkinfo.md): A value that provides information about a chunk of media samples.
