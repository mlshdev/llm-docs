> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplecursorstoragerange](https://developer.apple.com/documentation/avfoundation/avsamplecursorstoragerange)

# AVSampleCursorStorageRange (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that indicates the offset and length of storage for a media sample or its chunk.

## Declaration

```swift
struct AVSampleCursorStorageRange
```

## Topics

### Storage range

- [offset](avsamplecursorstoragerange/offset.md): The offset of the first byte of storage that a media sample or its chunk occupies.
- [length](avsamplecursorstoragerange/length.md): The count of bytes of storage that a media sample or its chunk occupies.

### Initializers

- [init()](avsamplecursorstoragerange/init%28%29.md): Creates a storage range structure.
- [init(offset:length:)](avsamplecursorstoragerange/init%28offset_length_%29.md): Creates a storage range structure with offset and length values.

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
- [AVSampleCursorChunkInfo](avsamplecursorchunkinfo.md): A value that provides information about a chunk of media samples.

# AVSampleCursorStorageRange (Objective-C)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that indicates the offset and length of storage for a media sample or its chunk.

## Declaration

```objectivec
typedef struct { ... } AVSampleCursorStorageRange;
```

## Topics

### Storage range

- [offset](avsamplecursorstoragerange/offset.md): The offset of the first byte of storage that a media sample or its chunk occupies.
- [length](avsamplecursorstoragerange/length.md): The count of bytes of storage that a media sample or its chunk occupies.

## See Also

### Sample cursors

- [AVSampleCursor](avsamplecursor.md): An object that provides information about the media sample at the cursor’s current position.
- [AVSampleCursorSyncInfo](avsamplecursorsyncinfo.md): A structure that describes the attributes of media samples to consider when resynchronizing a decoder.
- [AVSampleCursorDependencyInfo](avsamplecursordependencyinfo.md): A value for describing dependencies between a media sample and other media samples in the same sample sequence.
- [AVSampleCursorAudioDependencyInfo](avsamplecursoraudiodependencyinfo.md): A structure that describes the independent decodability of audio samples.
- [AVSampleCursorChunkInfo](avsamplecursorchunkinfo.md): A value that provides information about a chunk of media samples.
