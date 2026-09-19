> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/speech/sfspeecherror/code/audiodisordered

# audioDisordered

**Framework:** Speech  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The audio input time-code overlaps or precedes prior audio input.

## Declaration

```swift
static var audioDisordered: SFSpeechError.Code { get }
```

## See Also

### Audio input errors

- [SFSpeechError.Code.audioReadFailed](audioreadfailed.md): The audio source could not be read.
