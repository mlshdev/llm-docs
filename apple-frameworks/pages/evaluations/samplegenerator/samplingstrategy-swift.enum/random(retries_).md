> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/samplegenerator/samplingstrategy-swift.enum/random(retries:)](https://developer.apple.com/documentation/evaluations/samplegenerator/samplingstrategy-swift.enum/random(retries:))

# SampleGenerator.SamplingStrategy.random(retries:)

**Framework:** Evaluations  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

A strategy that randomly picks a subset of samples each time a model repeats inference.

## Declaration

```swift
case random(retries: Int = 5)
```

## Parameters

- `retries`: The maximum number of retries when the model repeats an inference.

## Mentioned In

- [Generating synthetic datasets](../../generating-synthetic-evaluation-datasets.md)

<a id="discussion"></a>

## Discussion

When the model repeats an inference, this strategy retries up to `retries` times, selecting a random subset to steer the model toward a new inference.

## See Also

### Strategies

- [SampleGenerator.SamplingStrategy.slidingWindow](slidingwindow.md): A strategy that slides a window through the examples, advancing it each batch.
