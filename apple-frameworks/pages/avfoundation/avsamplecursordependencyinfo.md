> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplecursordependencyinfo](https://developer.apple.com/documentation/avfoundation/avsamplecursordependencyinfo)

# AVSampleCursorDependencyInfo (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A value for describing dependencies between a media sample and other media samples in the same sample sequence.

## Declaration

```swift
struct AVSampleCursorDependencyInfo
```

## Topics

### Dependency information

- [sampleIndicatesWhetherItHasDependentSamples](avsamplecursordependencyinfo/sampleindicateswhetherithasdependentsamples.md): A Boolean value that determines whether the sample indicates if other samples depend on it.
- [sampleHasDependentSamples](avsamplecursordependencyinfo/samplehasdependentsamples.md): A Boolean value that determines whether the sample has dependent samples.
- [sampleIndicatesWhetherItDependsOnOthers](avsamplecursordependencyinfo/sampleindicateswhetheritdependsonothers.md): A Boolean value that determines whether the sample indicates that it depends on other samples.
- [sampleDependsOnOthers](avsamplecursordependencyinfo/sampledependsonothers.md): A Boolean value that determines whether the sample depends on other samples.
- [sampleIndicatesWhetherItHasRedundantCoding](avsamplecursordependencyinfo/sampleindicateswhetherithasredundantcoding.md): A Boolean value that determines whether the sample indicates that it has redundant coding.
- [sampleHasRedundantCoding](avsamplecursordependencyinfo/samplehasredundantcoding.md): A Boolean value that determines whether the sample has redundant coding.

### Initializers

- [init()](avsamplecursordependencyinfo/init%28%29.md): Creates a sample cursor dependency information structure.
- [init(sampleIndicatesWhetherItHasDependentSamples:sampleHasDependentSamples:sampleIndicatesWhetherItDependsOnOthers:sampleDependsOnOthers:sampleIndicatesWhetherItHasRedundantCoding:sampleHasRedundantCoding:)](avsamplecursordependencyinfo/init%28sampleindicateswhetherithasdependentsamples_samplehasdependentsamples_sampleindicateswhetheritdependsonothers_sampledependsonothers_sampleindicateswhetherithasredundantcoding_~a5be0090.md): Creates a sample cursor dependency information structure with sample information.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Sample cursors

- [AVSampleCursor](avsamplecursor.md): An object that provides information about the media sample at the cursor’s current position.
- [AVSampleCursorSyncInfo](avsamplecursorsyncinfo.md): A structure that describes the attributes of media samples to consider when resynchronizing a decoder.
- [AVSampleCursorAudioDependencyInfo](avsamplecursoraudiodependencyinfo.md): A structure that describes the independent decodability of audio samples.
- [AVSampleCursorStorageRange](avsamplecursorstoragerange.md): A structure that indicates the offset and length of storage for a media sample or its chunk.
- [AVSampleCursorChunkInfo](avsamplecursorchunkinfo.md): A value that provides information about a chunk of media samples.

# AVSampleCursorDependencyInfo (Objective-C)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A value for describing dependencies between a media sample and other media samples in the same sample sequence.

## Declaration

```objectivec
typedef struct { ... } AVSampleCursorDependencyInfo;
```

## Topics

### Dependency information

- [sampleIndicatesWhetherItHasDependentSamples](avsamplecursordependencyinfo/sampleindicateswhetherithasdependentsamples.md): A Boolean value that determines whether the sample indicates if other samples depend on it.
- [sampleHasDependentSamples](avsamplecursordependencyinfo/samplehasdependentsamples.md): A Boolean value that determines whether the sample has dependent samples.
- [sampleIndicatesWhetherItDependsOnOthers](avsamplecursordependencyinfo/sampleindicateswhetheritdependsonothers.md): A Boolean value that determines whether the sample indicates that it depends on other samples.
- [sampleDependsOnOthers](avsamplecursordependencyinfo/sampledependsonothers.md): A Boolean value that determines whether the sample depends on other samples.
- [sampleIndicatesWhetherItHasRedundantCoding](avsamplecursordependencyinfo/sampleindicateswhetherithasredundantcoding.md): A Boolean value that determines whether the sample indicates that it has redundant coding.
- [sampleHasRedundantCoding](avsamplecursordependencyinfo/samplehasredundantcoding.md): A Boolean value that determines whether the sample has redundant coding.

## See Also

### Sample cursors

- [AVSampleCursor](avsamplecursor.md): An object that provides information about the media sample at the cursor’s current position.
- [AVSampleCursorSyncInfo](avsamplecursorsyncinfo.md): A structure that describes the attributes of media samples to consider when resynchronizing a decoder.
- [AVSampleCursorAudioDependencyInfo](avsamplecursoraudiodependencyinfo.md): A structure that describes the independent decodability of audio samples.
- [AVSampleCursorStorageRange](avsamplecursorstoragerange.md): A structure that indicates the offset and length of storage for a media sample or its chunk.
- [AVSampleCursorChunkInfo](avsamplecursorchunkinfo.md): A value that provides information about a chunk of media samples.
