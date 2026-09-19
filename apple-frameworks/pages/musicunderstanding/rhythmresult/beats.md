> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/musicunderstanding/rhythmresult/beats

# beats

**Framework:** Music Understanding  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The timestamp of each detected beat.

## Declaration

```swift
let beats: [CMTime]
```

## See Also

### Types of rhythm results

- [bars](bars.md): The start time of each bar. A bar is a musical unit typically containing several beats.
- [beatsPerMinute](beatsperminute.md): The tempo of the song in beats per minute.
