> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musicunderstanding/loudnessresult/momentary](https://developer.apple.com/documentation/musicunderstanding/loudnessresult/momentary)

# momentary

**Framework:** Music Understanding  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

An array of momentary loudness measurements sampled across the song in LUFS.

## Declaration

```swift
let momentary: [MusicUnderstandingSession.TimedValue<Float>]
```

<a id="Discussion"></a>

## Discussion

The measurement happens in 400 millisecond (ms) increments that advance 100ms at a time.

## See Also

### Getting loudness results

- [integrated](integrated.md): The integrated loudness of the song, measured in LUFS over its full duration.
- [peak](peak.md): The peak amplitude of the song in decibels (dB).
- [shortTerm](shortterm.md): An array of short-term loudness measurements sampled across the song in LUFS.
