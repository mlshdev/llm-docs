> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/samplegenerator/samplingstrategy-swift.enum/slidingwindow](https://developer.apple.com/documentation/evaluations/samplegenerator/samplingstrategy-swift.enum/slidingwindow)

# SampleGenerator.SamplingStrategy.slidingWindow

**Framework:** Evaluations  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

A strategy that slides a window through the examples, advancing it each batch.

## Declaration

```swift
case slidingWindow
```

## Mentioned In

- [Generating synthetic datasets](../../generating-synthetic-evaluation-datasets.md)

<a id="discussion"></a>

## Discussion

When the model repeats an inference, this strategy continues retrying as long as there are new windows of examples to show the model.

## See Also

### Strategies

- [SampleGenerator.SamplingStrategy.random(retries:)](random%28retries_%29.md): A strategy that randomly picks a subset of samples each time a model repeats inference.
