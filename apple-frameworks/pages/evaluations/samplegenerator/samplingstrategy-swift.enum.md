> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/samplegenerator/samplingstrategy-swift.enum](https://developer.apple.com/documentation/evaluations/samplegenerator/samplingstrategy-swift.enum)

# SampleGenerator.SamplingStrategy

**Framework:** Evaluations  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

The values that define how the generator selects existing samples as examples in the generation prompt.

## Declaration

```swift
enum SamplingStrategy
```

<a id="overview"></a>

## Overview

When a model repeats an inference, the strategy determines whether and how the generator retries with different examples.

## Topics

### Strategies

- [SampleGenerator.SamplingStrategy.random(retries:)](samplingstrategy-swift.enum/random%28retries_%29.md): A strategy that randomly picks a subset of samples each time a model repeats inference.
- [SampleGenerator.SamplingStrategy.slidingWindow](samplingstrategy-swift.enum/slidingwindow.md): A strategy that slides a window through the examples, advancing it each batch.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring generation

- [samplingStrategy](samplingstrategy-swift.property.md): The strategy for selecting existing samples as examples in the prompt.
- [validator](validator.md): An optional closure that decides whether a generated sample is valid.
