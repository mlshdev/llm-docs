> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/samplegenerator/validator](https://developer.apple.com/documentation/evaluations/samplegenerator/validator)

# validator

**Framework:** Evaluations  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

An optional closure that decides whether a generated sample is valid.

## Declaration

```swift
var validator: (nonisolated(nonsending) @Sendable (SampleType) async throws -> Bool)? { get }
```

<a id="discussion"></a>

## Discussion

When provided, the generator collects rejected samples in [invalidSamples](invalidsamples.md).

## See Also

### Configuring generation

- [samplingStrategy](samplingstrategy-swift.property.md): The strategy for selecting existing samples as examples in the prompt.
- [SampleGenerator.SamplingStrategy](samplingstrategy-swift.enum.md): The values that define how the generator selects existing samples as examples in the generation prompt.
