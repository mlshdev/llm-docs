> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musicunderstanding/loudnessresult/integrated](https://developer.apple.com/documentation/musicunderstanding/loudnessresult/integrated)

# integrated

**Framework:** Music Understanding  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The integrated loudness of the song, measured in LUFS over its full duration.

## Declaration

```swift
let integrated: MusicUnderstandingSession.TimedValue<Float>
```

## See Also

### Getting loudness results

- [momentary](momentary.md): An array of momentary loudness measurements sampled across the song in LUFS.
- [peak](peak.md): The peak amplitude of the song in decibels (dB).
- [shortTerm](shortterm.md): An array of short-term loudness measurements sampled across the song in LUFS.
