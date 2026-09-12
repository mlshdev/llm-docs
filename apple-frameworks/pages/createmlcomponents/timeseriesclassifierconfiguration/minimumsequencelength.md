> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/timeseriesclassifierconfiguration/minimumsequencelength](https://developer.apple.com/documentation/createmlcomponents/timeseriesclassifierconfiguration/minimumsequencelength)

# minimumSequenceLength

**Framework:** Create ML Components  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

The minimum number of samples required to produce a classification.

## Declaration

```swift
var minimumSequenceLength: Int
```

<a id="discussion"></a>

## Discussion

This configuration parameter controls the size of the model. Set it to the largest value that is reasonable for your task. For example if your input is accelerometer data sampled at 100Hz and you want to recognize actions, the minimum action duration may be one second, so the minimum sequence length is `100Hz * 1s = 100`. Defaults to 100.

## See Also

### Inspecting a time series classifier configuration

- [batchSize](batchsize.md): The number of examples in each training batch.
- [earlyStoppingIterationCount](earlystoppingiterationcount.md): The number of iterations to use when evaluating whether to stop early.
- [earlyStoppingTolerance](earlystoppingtolerance.md): The early-stopping tolerance.
- [learningRate](learningrate.md): The starting learning rate.
- [maximumIterationCount](maximumiterationcount.md): The maximum number of allowed passes through the data.
- [maximumSequenceLength](maximumsequencelength.md): The maximum number of samples that can be classified.
- [randomSeed](randomseed.md): A seed to generate reproducible results from random operations.
