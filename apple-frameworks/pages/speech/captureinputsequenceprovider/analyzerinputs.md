> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/captureinputsequenceprovider/analyzerinputs](https://developer.apple.com/documentation/speech/captureinputsequenceprovider/analyzerinputs)

# analyzerInputs

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A new sequence of speech analyzer input objects containing captured audio.

## Declaration

```swift
final var analyzerInputs: some Sendable & AsyncSequence<AnalyzerInput, any Error> { get }
```

<a id="discussion"></a>

## Discussion

The sequence includes only newly captured audio.

You may release the provider object after obtaining the sequence. The sequence terminates when you deallocate the audio data output, which typically happens when you deallocate the capture session and this provider.
