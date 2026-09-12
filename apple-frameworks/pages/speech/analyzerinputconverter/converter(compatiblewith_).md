> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/analyzerinputconverter/converter(compatiblewith:)](https://developer.apple.com/documentation/speech/analyzerinputconverter/converter(compatiblewith:))

# converter(compatibleWith:)

**Framework:** Speech  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns an audio input converter compatible with the given modules.

## Declaration

```swift
static func converter(compatibleWith modules: [any SpeechModule]) async throws -> AnalyzerInputConverter
```

## Parameters

- `modules`: The speech modules that will analyze the audio.

<a id="return-value"></a>

## Return Value

An instance of this class.

## See Also

### Creating a converter

- [init(analyzerFormat:configurationHandler:)](init%28analyzerformat_configurationhandler_%29.md): Creates an audio input converter.
