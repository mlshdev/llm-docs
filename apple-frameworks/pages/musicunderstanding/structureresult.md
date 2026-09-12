> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musicunderstanding/structureresult](https://developer.apple.com/documentation/musicunderstanding/structureresult)

# StructureResult

**Framework:** Music Understanding  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A song’s structural boundary information, including sections, segments, and phrases.

## Declaration

```swift
struct StructureResult
```

<a id="overview"></a>

## Overview

The `StructureResult` describes a song’s structure in terms of sections, segments and phrases. A section corresponds to a distinct part of a song, such as an intro, verse, or chorus. A section consists of one or more segments, and each segment consists of one or more phrases.

## Topics

### Instance Properties

- [phrases](structureresult/phrases.md): The time range of each phrase in the song.
- [sections](structureresult/sections.md): The time ranges of each section in the song.
- [segments](structureresult/segments.md): The time range of each segment in the song.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Content results

- [MusicUnderstandingSession.SessionResult](musicunderstandingsession/sessionresult.md): The aggregated results for all analysis types that a music understanding session performs.
- [RhythmResult](rhythmresult.md): A structure that describes a song’s rhythm results in terms of beats, bars, and beats per minute (BPM).
- [KeyResult](keyresult.md): A value describing the musical key detected over a time range.
- [LoudnessResult](loudnessresult.md): A structure that contains perceptual loudness measurements for a song, including integrated, momentary, short-term, and peak values.
- [PaceResult](paceresult.md): A pace analysis results for the song.
- [InstrumentActivityResult](instrumentactivityresult.md): A structure containing the activity levels and detected time ranges for instruments in a song.
