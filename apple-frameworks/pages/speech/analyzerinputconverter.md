> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/analyzerinputconverter](https://developer.apple.com/documentation/speech/analyzerinputconverter)

# AnalyzerInputConverter

**Framework:** Speech  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Converts audio buffers to a format suitable for analysis by a speech analyzer.

## Declaration

```swift
final class AnalyzerInputConverter
```

## Topics

### Creating a converter

- [converter(compatibleWith:)](analyzerinputconverter/converter%28compatiblewith_%29.md): Returns an audio input converter compatible with the given modules.
- [init(analyzerFormat:configurationHandler:)](analyzerinputconverter/init%28analyzerformat_configurationhandler_%29.md): Creates an audio input converter.

### Converting a buffer

- [convert(\_:at:)](analyzerinputconverter/convert%28__at_%29.md): Converts an audio buffer.
- [flush()](analyzerinputconverter/flush%28%29.md): Completes pending audio conversions.

## See Also

### Audio sources

- [AssetInputSequenceProvider](assetinputsequenceprovider.md): Reads from an audio file or asset, providing its audio in a format suitable for analysis by a speech analyzer.
- [CaptureInputSequenceProvider](captureinputsequenceprovider.md): Reads from an AV capture device such as a microphone, providing the captured audio in a format suitable for analysis by a speech analyzer.
