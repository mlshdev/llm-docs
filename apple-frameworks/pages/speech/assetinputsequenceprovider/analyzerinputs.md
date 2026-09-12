> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/assetinputsequenceprovider/analyzerinputs](https://developer.apple.com/documentation/speech/assetinputsequenceprovider/analyzerinputs)

# analyzerInputs

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A new sequence of speech analyzer input objects containing audio from the asset or file.

## Declaration

```swift
final var analyzerInputs: some Sendable & AsyncSequence<AnalyzerInput, any Error> { get }
```

<a id="discussion"></a>

## Discussion

The sequence includes the entire asset track’s or file’s audio. You may release the provider object after obtaining the sequence.
