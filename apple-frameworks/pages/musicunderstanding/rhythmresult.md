> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musicunderstanding/rhythmresult](https://developer.apple.com/documentation/musicunderstanding/rhythmresult)

# RhythmResult

**Framework:** Music Understanding  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A structure that describes a song’s rhythm results in terms of beats, bars, and beats per minute (BPM).

## Declaration

```swift
struct RhythmResult
```

<a id="overview"></a>

## Overview

- **Bars**: A group of beats, typically containing 2-4 beats depending on the song’s time signature.
- **Beats**: The basic, recurrent pulse of a song.
- **Beats Per Minute (BPM)**: The tempo of the song, measuring how many beats occur in one minute.

## Topics

### Types of rhythm results

- [bars](rhythmresult/bars.md): The start time of each bar. A bar is a musical unit typically containing several beats.
- [beats](rhythmresult/beats.md): The timestamp of each detected beat.
- [beatsPerMinute](rhythmresult/beatsperminute.md): The tempo of the song in beats per minute.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Content results

- [MusicUnderstandingSession.SessionResult](musicunderstandingsession/sessionresult.md): The aggregated results for all analysis types that a music understanding session performs.
- [KeyResult](keyresult.md): A value describing the musical key detected over a time range.
- [LoudnessResult](loudnessresult.md): A structure that contains perceptual loudness measurements for a song, including integrated, momentary, short-term, and peak values.
- [PaceResult](paceresult.md): A pace analysis results for the song.
- [StructureResult](structureresult.md): A song’s structural boundary information, including sections, segments, and phrases.
- [InstrumentActivityResult](instrumentactivityresult.md): A structure containing the activity levels and detected time ranges for instruments in a song.
