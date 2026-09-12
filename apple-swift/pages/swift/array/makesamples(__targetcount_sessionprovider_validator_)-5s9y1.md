> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/array/makesamples(_:targetcount:sessionprovider:validator:)-5s9y1](https://developer.apple.com/documentation/swift/array/makesamples(_:targetcount:sessionprovider:validator:)-5s9y1)

# makeSamples(\_:targetCount:sessionProvider:validator:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Generates synthetic data based on this dataset and returns a stream of new samples.

## Declaration

```swift
func makeSamples(_ prompt: Prompt, targetCount: Int, sessionProvider: (@Sendable () -> LanguageModelSession)? = nil, validator: (nonisolated(nonsending) @Sendable (Element) async throws -> Bool)? = nil) -> some AsyncSequence<Element, any Error>

```

## Parameters

- `prompt`: The prompt the generator sends to the language model session.
- `targetCount`: The desired total number of samples, counting both the initial dataset and newly generated ones.
- `sessionProvider`: A closure that creates a new language model session, or `nil` to use the default.
- `validator`: A closure that decides whether a generated sample is valid, or `nil` to accept all samples.

<a id="return-value"></a>

## Return Value

An async throwing stream of newly generated samples.

<a id="discussion"></a>

## Discussion

For more control over generation, create a `SampleGenerator` directly.
