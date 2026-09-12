> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplecursorsyncinfo](https://developer.apple.com/documentation/avfoundation/avsamplecursorsyncinfo)

# AVSampleCursorSyncInfo (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that describes the attributes of media samples to consider when resynchronizing a decoder.

## Declaration

```swift
struct AVSampleCursorSyncInfo
```

## Topics

### Sync information

- [sampleIsFullSync](avsamplecursorsyncinfo/sampleisfullsync.md): A Boolean value that indicates whether a sample is a full sync sample.
- [sampleIsPartialSync](avsamplecursorsyncinfo/sampleispartialsync.md): A Boolean value that indicates whether a sample is a partial sync sample.
- [sampleIsDroppable](avsamplecursorsyncinfo/sampleisdroppable.md): A Boolean value that indicates whether a sample is droppable.

### Initializers

- [init()](avsamplecursorsyncinfo/init%28%29.md): Creates a sample cursor sync information structure.
- [init(sampleIsFullSync:sampleIsPartialSync:sampleIsDroppable:)](avsamplecursorsyncinfo/init%28sampleisfullsync_sampleispartialsync_sampleisdroppable_%29.md): Creates a sample cursor sync information structure with media sample information.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Sample cursors

- [AVSampleCursor](avsamplecursor.md): An object that provides information about the media sample at the cursor’s current position.
- [AVSampleCursorDependencyInfo](avsamplecursordependencyinfo.md): A value for describing dependencies between a media sample and other media samples in the same sample sequence.
- [AVSampleCursorAudioDependencyInfo](avsamplecursoraudiodependencyinfo.md): A structure that describes the independent decodability of audio samples.
- [AVSampleCursorStorageRange](avsamplecursorstoragerange.md): A structure that indicates the offset and length of storage for a media sample or its chunk.
- [AVSampleCursorChunkInfo](avsamplecursorchunkinfo.md): A value that provides information about a chunk of media samples.

# AVSampleCursorSyncInfo (Objective-C)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that describes the attributes of media samples to consider when resynchronizing a decoder.

## Declaration

```objectivec
typedef struct { ... } AVSampleCursorSyncInfo;
```

## Topics

### Sync information

- [sampleIsFullSync](avsamplecursorsyncinfo/sampleisfullsync.md): A Boolean value that indicates whether a sample is a full sync sample.
- [sampleIsPartialSync](avsamplecursorsyncinfo/sampleispartialsync.md): A Boolean value that indicates whether a sample is a partial sync sample.
- [sampleIsDroppable](avsamplecursorsyncinfo/sampleisdroppable.md): A Boolean value that indicates whether a sample is droppable.

## See Also

### Sample cursors

- [AVSampleCursor](avsamplecursor.md): An object that provides information about the media sample at the cursor’s current position.
- [AVSampleCursorDependencyInfo](avsamplecursordependencyinfo.md): A value for describing dependencies between a media sample and other media samples in the same sample sequence.
- [AVSampleCursorAudioDependencyInfo](avsamplecursoraudiodependencyinfo.md): A structure that describes the independent decodability of audio samples.
- [AVSampleCursorStorageRange](avsamplecursorstoragerange.md): A structure that indicates the offset and length of storage for a media sample or its chunk.
- [AVSampleCursorChunkInfo](avsamplecursorchunkinfo.md): A value that provides information about a chunk of media samples.
