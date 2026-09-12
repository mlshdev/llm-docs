> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musicunderstanding/musicunderstandingsession/sessionresult](https://developer.apple.com/documentation/musicunderstanding/musicunderstandingsession/sessionresult)

# MusicUnderstandingSession.SessionResult

**Framework:** Music Understanding  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The aggregated results for all analysis types that a music understanding session performs.

## Declaration

```swift
struct SessionResult
```

<a id="overview"></a>

## Overview

Each property corresponds to one analysis type that the session can perform: the instrument activity, key, loudness, rhythm, pace, and structure. A property is nil if the session wasn’t configured to perform that analysis. Access a session result after the session finishes processing audio to retrieve the data for each configured type.

## Topics

### Getting music understanding session results

- [instrumentActivity](sessionresult/instrumentactivity.md): The aggregated instrument activity results, identifying which instruments are present and when they’re active.
- [key](sessionresult/key.md): The aggregated key results, identifying the central note (tonic) and mode around which a piece of music is organized.
- [loudness](sessionresult/loudness.md): The aggregated loudness results, providing information about volume levels throughout the audio.
- [pace](sessionresult/pace.md): The aggregated pace results, describing the energy and momentum variations over time.
- [rhythm](sessionresult/rhythm.md): The aggregated rhythm results, including detected beats, bars, and BPM.
- [structure](sessionresult/structure.md): The aggregated structure results, identifying musical sections and their boundaries.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Content results

- [RhythmResult](../rhythmresult.md): A structure that describes a song’s rhythm results in terms of beats, bars, and beats per minute (BPM).
- [KeyResult](../keyresult.md): A value describing the musical key detected over a time range.
- [LoudnessResult](../loudnessresult.md): A structure that contains perceptual loudness measurements for a song, including integrated, momentary, short-term, and peak values.
- [PaceResult](../paceresult.md): A pace analysis results for the song.
- [StructureResult](../structureresult.md): A song’s structural boundary information, including sections, segments, and phrases.
- [InstrumentActivityResult](../instrumentactivityresult.md): A structure containing the activity levels and detected time ranges for instruments in a song.
