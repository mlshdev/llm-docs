> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplecursor](https://developer.apple.com/documentation/avfoundation/avsamplecursor)

# AVSampleCursor (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.10+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

An object that provides information about the media sample at the cursor’s current position.

## Declaration

```swift
class AVSampleCursor
```

<a id="overview"></a>

## Overview

You position a sample cursor at a specific media sample in a sequence of samples contained in a higher-level object, like an [AVAssetTrack](avassettrack.md). You can move it to a new position in that sequence either backwards or forwards, either in decode order or in presentation order. You can also request moving it according to a count of samples or a delta in time.

Use a sample cursor to get information about the media sample such as its duration, timestamps, dependency information, and so on. You can also use them to synchronously to perform I/O in order to load media data of one or more media samples into memory.

## Topics

### Navigating samples

- [step(byDecodeTime:wasPinned:)](avsamplecursor/step%28bydecodetime_waspinned_%29.md): Moves the cursor by a given delta time on the decode timeline.
- [step(byPresentationTime:wasPinned:)](avsamplecursor/step%28bypresentationtime_waspinned_%29.md): Moves the cursor by a given delta time on the presentation timeline.
- [stepInDecodeOrder(byCount:)](avsamplecursor/stepindecodeorder%28bycount_%29.md): Moves the cursor a given number of samples in decode order.
- [stepInPresentationOrder(byCount:)](avsamplecursor/stepinpresentationorder%28bycount_%29.md): Moves the cursor a given number of samples in presentation order.

### Getting timestamps

- [decodeTimeStamp](avsamplecursor/decodetimestamp.md): The decode timestamp of the sample at the current position of the cursor.
- [presentationTimeStamp](avsamplecursor/presentationtimestamp.md): The presentation timestamp of the sample at the current position of the cursor.

### Getting sample information

- [currentChunkInfo](avsamplecursor/currentchunkinfo.md): A value that provides information about the chunk of samples to which the current sample belongs.
- [AVSampleCursorChunkInfo](avsamplecursorchunkinfo.md): A value that provides information about a chunk of media samples.
- [currentChunkStorageRange](avsamplecursor/currentchunkstoragerange.md): The sample range in the storage container to load together with the current sample as a chunk.
- [AVSampleCursorStorageRange](avsamplecursorstoragerange.md): A structure that indicates the offset and length of storage for a media sample or its chunk.
- [currentChunkStorageURL](avsamplecursor/currentchunkstorageurl.md): The URL of the storage container of the current sample and other samples to load in the same operation as a chunk.
- [currentSampleDependencyInfo](avsamplecursor/currentsampledependencyinfo.md): The dependency information that describes relationships between a media sample and other media samples in the same sample sequence.
- [AVSampleCursorDependencyInfo](avsamplecursordependencyinfo.md): A value for describing dependencies between a media sample and other media samples in the same sample sequence.
- [currentSampleDuration](avsamplecursor/currentsampleduration.md): The decode duration of the sample at the cursor’s current position.
- [currentSampleIndexInChunk](avsamplecursor/currentsampleindexinchunk.md): The index of the current sample within the chunk to which it belongs.
- [currentSampleStorageRange](avsamplecursor/currentsamplestoragerange.md): The offset and length of the current sample in the current chunk storage URL.
- [currentSampleSyncInfo](avsamplecursor/currentsamplesyncinfo.md): The synchronization information for the current sample for consideration when resynchronizing a decoder.
- [AVSampleCursorSyncInfo](avsamplecursorsyncinfo.md): A structure that describes the attributes of media samples to consider when resynchronizing a decoder.
- [copyCurrentSampleFormatDescription()](avsamplecursor/copycurrentsampleformatdescription%28%29.md): Returns the format description of the sample at the cursor’s current position.
- [currentSampleAudioDependencyInfo](avsamplecursor/currentsampleaudiodependencyinfo.md): The independent decodability information for the audio sample.
- [currentSampleDependencyAttachments](avsamplecursor/currentsampledependencyattachments.md): A dictionary of dependency-related sample buffer attachments.

### Accessing samples

- [maySamplesWithEarlierDecodeTimeStampsHavePresentationTimeStamps(laterThan:)](avsamplecursor/maysampleswithearlierdecodetimestampshavepresentationtimestamps%28laterthan_%29.md): Determines whether a sample earlier in decode order can have a presentation timestamp later than that of the specified sample cursor.
- [maySamplesWithLaterDecodeTimeStampsHavePresentationTimeStamps(earlierThan:)](avsamplecursor/maysampleswithlaterdecodetimestampshavepresentationtimestamps%28earlierthan_%29.md): Determines whether a sample later in decode order can have a presentation timestamp earlier than that of the specified sample cursor.
- [samplesRequiredForDecoderRefresh](avsamplecursor/samplesrequiredfordecoderrefresh.md): The number of samples prior to the current sample, in decode order, the decoder requires to achieve a coherent output at the current decode time.

### Comparing sample cursors

- [comparePositionInDecodeOrder(withPositionOf:)](avsamplecursor/comparepositionindecodeorder%28withpositionof_%29.md): Compares the relative positions of two sample cursors and returns their relative positions.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Sample cursors

- [AVSampleCursorSyncInfo](avsamplecursorsyncinfo.md): A structure that describes the attributes of media samples to consider when resynchronizing a decoder.
- [AVSampleCursorDependencyInfo](avsamplecursordependencyinfo.md): A value for describing dependencies between a media sample and other media samples in the same sample sequence.
- [AVSampleCursorAudioDependencyInfo](avsamplecursoraudiodependencyinfo.md): A structure that describes the independent decodability of audio samples.
- [AVSampleCursorStorageRange](avsamplecursorstoragerange.md): A structure that indicates the offset and length of storage for a media sample or its chunk.
- [AVSampleCursorChunkInfo](avsamplecursorchunkinfo.md): A value that provides information about a chunk of media samples.

# AVSampleCursor (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.10+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

An object that provides information about the media sample at the cursor’s current position.

## Declaration

```objectivec
@interface AVSampleCursor : NSObject
```

<a id="overview"></a>

## Overview

You position a sample cursor at a specific media sample in a sequence of samples contained in a higher-level object, like an [AVAssetTrack](avassettrack.md). You can move it to a new position in that sequence either backwards or forwards, either in decode order or in presentation order. You can also request moving it according to a count of samples or a delta in time.

Use a sample cursor to get information about the media sample such as its duration, timestamps, dependency information, and so on. You can also use them to synchronously to perform I/O in order to load media data of one or more media samples into memory.

## Topics

### Navigating samples

- [stepByDecodeTime:wasPinned:](avsamplecursor/step%28bydecodetime_waspinned_%29.md): Moves the cursor by a given delta time on the decode timeline.
- [stepByPresentationTime:wasPinned:](avsamplecursor/step%28bypresentationtime_waspinned_%29.md): Moves the cursor by a given delta time on the presentation timeline.
- [stepInDecodeOrderByCount:](avsamplecursor/stepindecodeorder%28bycount_%29.md): Moves the cursor a given number of samples in decode order.
- [stepInPresentationOrderByCount:](avsamplecursor/stepinpresentationorder%28bycount_%29.md): Moves the cursor a given number of samples in presentation order.

### Getting timestamps

- [decodeTimeStamp](avsamplecursor/decodetimestamp.md): The decode timestamp of the sample at the current position of the cursor.
- [presentationTimeStamp](avsamplecursor/presentationtimestamp.md): The presentation timestamp of the sample at the current position of the cursor.

### Getting sample information

- [currentChunkInfo](avsamplecursor/currentchunkinfo.md): A value that provides information about the chunk of samples to which the current sample belongs.
- [AVSampleCursorChunkInfo](avsamplecursorchunkinfo.md): A value that provides information about a chunk of media samples.
- [currentChunkStorageRange](avsamplecursor/currentchunkstoragerange.md): The sample range in the storage container to load together with the current sample as a chunk.
- [AVSampleCursorStorageRange](avsamplecursorstoragerange.md): A structure that indicates the offset and length of storage for a media sample or its chunk.
- [currentChunkStorageURL](avsamplecursor/currentchunkstorageurl.md): The URL of the storage container of the current sample and other samples to load in the same operation as a chunk.
- [currentSampleDependencyInfo](avsamplecursor/currentsampledependencyinfo.md): The dependency information that describes relationships between a media sample and other media samples in the same sample sequence.
- [AVSampleCursorDependencyInfo](avsamplecursordependencyinfo.md): A value for describing dependencies between a media sample and other media samples in the same sample sequence.
- [currentSampleDuration](avsamplecursor/currentsampleduration.md): The decode duration of the sample at the cursor’s current position.
- [currentSampleIndexInChunk](avsamplecursor/currentsampleindexinchunk.md): The index of the current sample within the chunk to which it belongs.
- [currentSampleStorageRange](avsamplecursor/currentsamplestoragerange.md): The offset and length of the current sample in the current chunk storage URL.
- [currentSampleSyncInfo](avsamplecursor/currentsamplesyncinfo.md): The synchronization information for the current sample for consideration when resynchronizing a decoder.
- [AVSampleCursorSyncInfo](avsamplecursorsyncinfo.md): A structure that describes the attributes of media samples to consider when resynchronizing a decoder.
- [copyCurrentSampleFormatDescription](avsamplecursor/copycurrentsampleformatdescription%28%29.md): Returns the format description of the sample at the cursor’s current position.
- [currentSampleAudioDependencyInfo](avsamplecursor/currentsampleaudiodependencyinfo.md): The independent decodability information for the audio sample.
- [currentSampleDependencyAttachments](avsamplecursor/currentsampledependencyattachments.md): A dictionary of dependency-related sample buffer attachments.

### Accessing samples

- [samplesWithEarlierDecodeTimeStampsMayHaveLaterPresentationTimeStampsThanCursor:](avsamplecursor/maysampleswithearlierdecodetimestampshavepresentationtimestamps%28laterthan_%29.md): Determines whether a sample earlier in decode order can have a presentation timestamp later than that of the specified sample cursor.
- [samplesWithLaterDecodeTimeStampsMayHaveEarlierPresentationTimeStampsThanCursor:](avsamplecursor/maysampleswithlaterdecodetimestampshavepresentationtimestamps%28earlierthan_%29.md): Determines whether a sample later in decode order can have a presentation timestamp earlier than that of the specified sample cursor.
- [samplesRequiredForDecoderRefresh](avsamplecursor/samplesrequiredfordecoderrefresh.md): The number of samples prior to the current sample, in decode order, the decoder requires to achieve a coherent output at the current decode time.

### Comparing sample cursors

- [comparePositionInDecodeOrderWithPositionOfCursor:](avsamplecursor/comparepositionindecodeorder%28withpositionof_%29.md): Compares the relative positions of two sample cursors and returns their relative positions.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Sample cursors

- [AVSampleCursorSyncInfo](avsamplecursorsyncinfo.md): A structure that describes the attributes of media samples to consider when resynchronizing a decoder.
- [AVSampleCursorDependencyInfo](avsamplecursordependencyinfo.md): A value for describing dependencies between a media sample and other media samples in the same sample sequence.
- [AVSampleCursorAudioDependencyInfo](avsamplecursoraudiodependencyinfo.md): A structure that describes the independent decodability of audio samples.
- [AVSampleCursorStorageRange](avsamplecursorstoragerange.md): A structure that indicates the offset and length of storage for a media sample or its chunk.
- [AVSampleCursorChunkInfo](avsamplecursorchunkinfo.md): A value that provides information about a chunk of media samples.
