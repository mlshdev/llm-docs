> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/analyzerinputconverter/convert(_:at:)](https://developer.apple.com/documentation/speech/analyzerinputconverter/convert(_:at:))

# convert(\_:at:)

**Framework:** Speech  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Converts an audio buffer.

## Declaration

```swift
final func convert(_ buffer: AVAudioBuffer, at audioTime: AVAudioTime?) throws -> [AnalyzerInput]
```

## Parameters

- `buffer`: An audio buffer to convert. Do not reuse or modify this buffer; it may be retained across calls.
- `audioTime`: The time-code of the start of the audio buffer. If `nil`, the audio buffer is assumed to start immediately after the previous buffer (or at time-code zero if there is no previous buffer).

<a id="return-value"></a>

## Return Value

An array of `AnalyzerInput` objects containing converted audio corresponding to some or all of the audio buffer.

<a id="discussion"></a>

## Discussion

This method does not necessarily convert the entire audio buffer. Some audio data may be held over and integrated into the conversion of a later audio buffer for correctness or efficiency.

Call [flush()](flush%28%29.md) to convert any remaining held-over audio and add it to the analyzer’s input sequence before finishing the sequence.

## See Also

### Converting a buffer

- [flush()](flush%28%29.md): Completes pending audio conversions.
