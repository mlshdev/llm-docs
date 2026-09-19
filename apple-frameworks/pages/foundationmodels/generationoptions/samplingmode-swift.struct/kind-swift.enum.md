> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/generationoptions/samplingmode-swift.struct/kind-swift.enum

# GenerationOptions.SamplingMode.Kind

**Framework:** Foundation Models  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A representation of the different strategies for choosing the next token.

## Declaration

```swift
enum Kind
```

## Topics

### Sampling cases

- [GenerationOptions.SamplingMode.Kind.greedy](kind-swift.enum/greedy.md): A strategy that always chooses the most likely token.
- [GenerationOptions.SamplingMode.Kind.randomProbabilityThreshold(\_:seed:)](kind-swift.enum/randomprobabilitythreshold%28__seed_%29.md): A strategy that samples from the highest-probability tokens whose cumulative probability reaches a threshold.
- [GenerationOptions.SamplingMode.Kind.randomTopK(\_:seed:)](kind-swift.enum/randomtopk%28__seed_%29.md): A strategy that samples from a fixed number of the highest-probability tokens.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the kind of sampling

- [kind](kind-swift.property.md): The strategy this sampling mode uses to choose the next token.
