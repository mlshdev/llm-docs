> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/generationoptions/samplingmode-swift.struct/kind-swift.enum/greedy

# GenerationOptions.SamplingMode.Kind.greedy

**Framework:** Foundation Models  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A strategy that always chooses the most likely token.

## Declaration

```swift
case greedy
```

## See Also

### Sampling cases

- [GenerationOptions.SamplingMode.Kind.randomProbabilityThreshold(\_:seed:)](randomprobabilitythreshold%28__seed_%29.md): A strategy that samples from the highest-probability tokens whose cumulative probability reaches a threshold.
- [GenerationOptions.SamplingMode.Kind.randomTopK(\_:seed:)](randomtopk%28__seed_%29.md): A strategy that samples from a fixed number of the highest-probability tokens.
