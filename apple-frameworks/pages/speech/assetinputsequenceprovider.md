> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/assetinputsequenceprovider](https://developer.apple.com/documentation/speech/assetinputsequenceprovider)

# AssetInputSequenceProvider

**Framework:** Speech  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Reads from an audio file or asset, providing its audio in a format suitable for analysis by a speech analyzer.

## Declaration

```swift
final class AssetInputSequenceProvider
```

## Topics

### Creating a provider

- [provider(from:compatibleWith:priority:)](assetinputsequenceprovider/provider%28from_compatiblewith_priority_%29.md): Returns an input sequence provider that reads from the first track of an asset or file.
- [provider(from:track:compatibleWith:priority:)](assetinputsequenceprovider/provider%28from_track_compatiblewith_priority_%29.md): Returns an input sequence provider that reads from a track of an asset.
- [init(asset:track:analyzerFormat:priority:)](assetinputsequenceprovider/init%28asset_track_analyzerformat_priority_%29.md): Creates an input sequence provider.

### Obtaining an input sequence

- [analyzerInputs](assetinputsequenceprovider/analyzerinputs.md): A new sequence of speech analyzer input objects containing audio from the asset or file.

## See Also

### Audio sources

- [CaptureInputSequenceProvider](captureinputsequenceprovider.md): Reads from an AV capture device such as a microphone, providing the captured audio in a format suitable for analysis by a speech analyzer.
- [AnalyzerInputConverter](analyzerinputconverter.md): Converts audio buffers to a format suitable for analysis by a speech analyzer.
