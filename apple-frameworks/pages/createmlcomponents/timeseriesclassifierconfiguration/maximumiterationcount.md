> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/timeseriesclassifierconfiguration/maximumiterationcount](https://developer.apple.com/documentation/createmlcomponents/timeseriesclassifierconfiguration/maximumiterationcount)

# maximumIterationCount

**Framework:** Create ML Components  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

The maximum number of allowed passes through the data.

## Declaration

```swift
var maximumIterationCount: Int
```

<a id="discussion"></a>

## Discussion

More passes over the data can result in a more accurately trained model. Consider increasing this if the training accuracy is low. Defaults to 25.

> **Note**

> This parameter is only used by the `fitted` method. When using the `update` method it’s up to you to decide when to stop.

## See Also

### Inspecting a time series classifier configuration

- [batchSize](batchsize.md): The number of examples in each training batch.
- [earlyStoppingIterationCount](earlystoppingiterationcount.md): The number of iterations to use when evaluating whether to stop early.
- [earlyStoppingTolerance](earlystoppingtolerance.md): The early-stopping tolerance.
- [learningRate](learningrate.md): The starting learning rate.
- [maximumSequenceLength](maximumsequencelength.md): The maximum number of samples that can be classified.
- [minimumSequenceLength](minimumsequencelength.md): The minimum number of samples required to produce a classification.
- [randomSeed](randomseed.md): A seed to generate reproducible results from random operations.
