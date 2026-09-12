> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musicunderstanding/instrumentactivityresult](https://developer.apple.com/documentation/musicunderstanding/instrumentactivityresult)

# InstrumentActivityResult

**Framework:** Music Understanding  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A structure containing the activity levels and detected time ranges for instruments in a song.

## Declaration

```swift
struct InstrumentActivityResult
```

<a id="overview"></a>

## Overview

The [activity](instrumentactivityresult/activity.md) property provides a continuous signal for each instrument. The values range from `0.0`, which indicates the instrument isn’t  present, to `1.0`, which indicates the instrument is fully active. The [ranges](instrumentactivityresult/ranges.md) property provides discrete time windows during which the framework detected each instrument. Use both properties together to determine when an instrument is present and how prominently it features at each moment.

## Topics

### Structures

- [InstrumentActivityResult.Instrument](instrumentactivityresult/instrument.md): A type that identifies a specific instrument category.

### Instance Properties

- [activity](instrumentactivityresult/activity.md): The activity level of each instrument over time, as values from 0.0 to 1.0.
- [ranges](instrumentactivityresult/ranges.md): The time ranges during which the framework detects each instrument.

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
- [StructureResult](structureresult.md): A song’s structural boundary information, including sections, segments, and phrases.
