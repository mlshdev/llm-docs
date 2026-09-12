> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musicunderstanding/loudnessresult/shortterm](https://developer.apple.com/documentation/musicunderstanding/loudnessresult/shortterm)

# shortTerm

**Framework:** Music Understanding  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

An array of short-term loudness measurements sampled across the song in LUFS.

## Declaration

```swift
let shortTerm: [MusicUnderstandingSession.TimedValue<Float>]
```

<a id="Discussion"></a>

## Discussion

Short-term loudness is a 3-second window that advances 100 milliseconds (ms) per result.

## See Also

### Getting loudness results

- [integrated](integrated.md): The integrated loudness of the song, measured in LUFS over its full duration.
- [momentary](momentary.md): An array of momentary loudness measurements sampled across the song in LUFS.
- [peak](peak.md): The peak amplitude of the song in decibels (dB).
