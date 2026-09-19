> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/evaluations/samplegenerator/samplingstrategy-swift.property

# samplingStrategy

**Framework:** Evaluations  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

The strategy for selecting existing samples as examples in the prompt.

## Declaration

```swift
var samplingStrategy: SampleGenerator<SampleType>.SamplingStrategy? { get }
```

<a id="discussion"></a>

## Discussion

When `nil`, the generator shows no examples and doesn’t retry on repetition. When set, the strategy also controls retry behavior when the model repeats itself.

## See Also

### Configuring generation

- [validator](validator.md): An optional closure that decides whether a generated sample is valid.
- [SampleGenerator.SamplingStrategy](samplingstrategy-swift.enum.md): The values that define how the generator selects existing samples as examples in the generation prompt.
