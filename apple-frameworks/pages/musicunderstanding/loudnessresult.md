> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musicunderstanding/loudnessresult](https://developer.apple.com/documentation/musicunderstanding/loudnessresult)

# LoudnessResult

**Framework:** Music Understanding  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A structure that contains perceptual loudness measurements for a song, including integrated, momentary, short-term, and peak values.

## Declaration

```swift
struct LoudnessResult
```

<a id="overview"></a>

## Overview

The `LoudnessResult` delivers perceptual loudness measurements that align with human hearing perception, using the Loudness K-weighted Full Scale (LUFS) standard defined in ITU-R BS.1770.

The results contain time-based measurements, including integrated loudness, short-term loudness, momentary loudness, and peak amplitude.

When used in `SessionResult`, a single `LoudnessResult` contains all analysis values for the entire song, with `momentary` and `shortTerm` arrays containing the complete set of measurements across the song’s duration.

When used in the streaming `loudnessResults` context, the framework delivers multiple results progressively during analysis. Each result’s [momentary](loudnessresult/momentary.md) and [shortTerm](loudnessresult/shortterm.md) arrays contain only one value representing the measurement at that point in time.

## Topics

### Getting loudness results

- [integrated](loudnessresult/integrated.md): The integrated loudness of the song, measured in LUFS over its full duration.
- [momentary](loudnessresult/momentary.md): An array of momentary loudness measurements sampled across the song in LUFS.
- [peak](loudnessresult/peak.md): The peak amplitude of the song in decibels (dB).
- [shortTerm](loudnessresult/shortterm.md): An array of short-term loudness measurements sampled across the song in LUFS.

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
- [PaceResult](paceresult.md): A pace analysis results for the song.
- [StructureResult](structureresult.md): A song’s structural boundary information, including sections, segments, and phrases.
- [InstrumentActivityResult](instrumentactivityresult.md): A structure containing the activity levels and detected time ranges for instruments in a song.
