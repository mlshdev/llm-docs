> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musicunderstanding/musicunderstandingsession/sessionresult/structure](https://developer.apple.com/documentation/musicunderstanding/musicunderstandingsession/sessionresult/structure)

# structure

**Framework:** Music Understanding  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The aggregated structure results, identifying musical sections and their boundaries.

## Declaration

```swift
let structure: StructureResult?
```

## See Also

### Getting music understanding session results

- [instrumentActivity](instrumentactivity.md): The aggregated instrument activity results, identifying which instruments are present and when they’re active.
- [key](key.md): The aggregated key results, identifying the central note (tonic) and mode around which a piece of music is organized.
- [loudness](loudness.md): The aggregated loudness results, providing information about volume levels throughout the audio.
- [pace](pace.md): The aggregated pace results, describing the energy and momentum variations over time.
- [rhythm](rhythm.md): The aggregated rhythm results, including detected beats, bars, and BPM.
