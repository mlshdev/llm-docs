> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/analyzerinput](https://developer.apple.com/documentation/speech/analyzerinput)

# AnalyzerInput

**Framework:** Speech  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Time-coded audio data.

## Declaration

```swift
struct AnalyzerInput
```

<a id="overview"></a>

## Overview

The audio data must have an audio format that is supported by the analyzer’s modules; the analyzer does not perform audio conversion. Call [bestAvailableAudioFormat(compatibleWith:considering:)](speechanalyzer/bestavailableaudioformat%28compatiblewith_considering_%29.md) (or its variants) to select an appropriate format to convert to.

The audio format may differ from one `AnalyzerInput` object to the next. If the new audio format is supported by the modules, the modules will be reconfigured as needed.

## Topics

### Creating an input element

- [init(buffer:)](analyzerinput/init%28buffer_%29-3nt02.md): Creates an audio input object.
- [init(buffer:)](analyzerinput/init%28buffer_%29-2ysg3.md): Creates an audio input object.
- [init(buffer:bufferStartTime:)](analyzerinput/init%28buffer_bufferstarttime_%29.md): Creates an audio input object for audio that may be discontiguous with previous input.

### Inspecting an input element

- [bufferStartTime](analyzerinput/bufferstarttime.md): The time-code of this input.
- [bufferDuration](analyzerinput/bufferduration.md): The length of this input.
- [bufferFormat](analyzerinput/bufferformat.md): The audio format of this input.
- [buffer](analyzerinput/buffer.md): Deprecated. A new copy of the audio data for this input.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Input and output

- [SpeechModuleResult](speechmoduleresult.md): Protocol that all module results conform to.
