> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/lineartimeseriesforecasterconfiguration/earlystoppingtolerance](https://developer.apple.com/documentation/createmlcomponents/lineartimeseriesforecasterconfiguration/earlystoppingtolerance)

# earlyStoppingTolerance

**Framework:** Create ML Components  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The early-stopping tolerance.

## Declaration

```swift
var earlyStoppingTolerance: Float
```

<a id="discussion"></a>

## Discussion

The tolerance is used by the `fitted` method to decide when progress is no longer being made, in which case the training process will stop before the specified maximum number of iterations (known as early stopping). Significant progress happens when the validation loss decreases by at least the tolerance.

Defaults to 0.01.

> **Note**

> Early stopping only happens when using the `fitted` method with validation data.

## See Also

### Inspecting a linear time series forecasater configuration

- [batchSize](batchsize.md): The number of examples in each training batch.
- [earlyStoppingIterationCount](earlystoppingiterationcount.md): The number of iterations to use when evaluating whether to stop early.
- [forecastWindowSize](forecastwindowsize.md): The number of predicted samples.
- [inputWindowSize](inputwindowsize.md): The number of input samples.
- [learningRate](learningrate.md): The starting learning rate.
- [maximumIterationCount](maximumiterationcount.md): The maximum number of allowed passes through the data.
- [randomSeed](randomseed.md): A seed to generate reproducible results from random operations.
