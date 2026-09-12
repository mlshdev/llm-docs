> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/captureinputsequenceprovider](https://developer.apple.com/documentation/speech/captureinputsequenceprovider)

# CaptureInputSequenceProvider

**Framework:** Speech  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Reads from an AV capture device such as a microphone, providing the captured audio in a format suitable for analysis by a speech analyzer.

## Declaration

```swift
final class CaptureInputSequenceProvider
```

## Topics

### Creating a provider

- [providerWithSession(from:compatibleWith:priority:)](captureinputsequenceprovider/providerwithsession%28from_compatiblewith_priority_%29.md): Returns an input sequence provider that reads from an audio capture device, and configures a new audio capture session with that device.
- [provider(from:in:compatibleWith:priority:)](captureinputsequenceprovider/provider%28from_in_compatiblewith_priority_%29.md): Returns an input sequence provider that reads from an audio capture device.
- [init(session:analyzerFormat:priority:)](captureinputsequenceprovider/init%28session_analyzerformat_priority_%29.md): Creates an input sequence provider.

### Obtaining an input sequence

- [analyzerInputs](captureinputsequenceprovider/analyzerinputs.md): A new sequence of speech analyzer input objects containing captured audio.

### Working with a capture session

- [captureSession](captureinputsequenceprovider/capturesession.md): The underlying capture session.
- [captureAudioDataOutput](captureinputsequenceprovider/captureaudiodataoutput.md): An audio data output that routes and converts captured audio buffers to async sequences.

## See Also

### Audio sources

- [AssetInputSequenceProvider](assetinputsequenceprovider.md): Reads from an audio file or asset, providing its audio in a format suitable for analysis by a speech analyzer.
- [AnalyzerInputConverter](analyzerinputconverter.md): Converts audio buffers to a format suitable for analysis by a speech analyzer.
