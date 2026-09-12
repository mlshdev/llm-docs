> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musicunderstanding/keyresult](https://developer.apple.com/documentation/musicunderstanding/keyresult)

# KeyResult

**Framework:** Music Understanding  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A value describing the musical key detected over a time range.

## Declaration

```swift
struct KeyResult
```

<a id="overview"></a>

## Overview

A key is the central note that organizes a piece of music. The tonic can be any of the supported enharmonic spellings: A, A♭, A♯, B♭, B, C, C♯, D♭, D, D♯, E♭, E, F, F♯, G, G♭, or G♯. The framework represents the enharmonic equivalents as distinct cases to preserve the original spelling.

## Topics

### Getting key result ranges

- [ranges](keyresult/ranges.md): The detected key for each time range.

### Getting the mode of the musical key

- [mode](keyresult/keysignature/mode.md): The mode of the musical key.

### Getting the notes of a key

- [KeyResult.KeySignature](keyresult/keysignature.md): The set of sharp and flat symbols for the notes.
- [tonic](keyresult/keysignature/tonic.md): The root note of the musical key.

### Enumerations

- [KeyResult.Mode](keyresult/mode.md): The mode of a musical key.
- [KeyResult.Tonic](keyresult/tonic.md): The root note of a musical key.

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
- [LoudnessResult](loudnessresult.md): A structure that contains perceptual loudness measurements for a song, including integrated, momentary, short-term, and peak values.
- [PaceResult](paceresult.md): A pace analysis results for the song.
- [StructureResult](structureresult.md): A song’s structural boundary information, including sections, segments, and phrases.
- [InstrumentActivityResult](instrumentactivityresult.md): A structure containing the activity levels and detected time ranges for instruments in a song.
