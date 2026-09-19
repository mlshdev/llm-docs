> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/speech/analyzerinput/buffer

# buffer

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ (deprecated in 27.0) · iPadOS 26.0+ (deprecated in 27.0) · Mac Catalyst 26.0+ (deprecated in 27.0) · macOS 26.0+ (deprecated in 27.0) · tvOS 26.0+ (deprecated in 27.0) · visionOS 26.0+ (deprecated in 27.0)

A new copy of the audio data for this input.

> use other AnalyzerInput properties to get information about audio

## Declaration

```swift
var buffer: AVAudioPCMBuffer { get }
```

## See Also

### Inspecting an input element

- [bufferStartTime](bufferstarttime.md): The time-code of this input.
- [bufferDuration](bufferduration.md): The length of this input.
- [bufferFormat](bufferformat.md): The audio format of this input.
