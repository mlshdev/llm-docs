> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/timeseriesclassifierconfiguration/batchsize](https://developer.apple.com/documentation/createmlcomponents/timeseriesclassifierconfiguration/batchsize)

# batchSize

**Framework:** Create ML Components  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

The number of examples in each training batch.

## Declaration

```swift
var batchSize: Int
```

<a id="discussion"></a>

## Discussion

> **Note**

> This parameter is only used by the `fitted` method.

## See Also

### Inspecting a time series classifier configuration

- [earlyStoppingIterationCount](earlystoppingiterationcount.md): The number of iterations to use when evaluating whether to stop early.
- [earlyStoppingTolerance](earlystoppingtolerance.md): The early-stopping tolerance.
- [learningRate](learningrate.md): The starting learning rate.
- [maximumIterationCount](maximumiterationcount.md): The maximum number of allowed passes through the data.
- [maximumSequenceLength](maximumsequencelength.md): The maximum number of samples that can be classified.
- [minimumSequenceLength](minimumsequencelength.md): The minimum number of samples required to produce a classification.
- [randomSeed](randomseed.md): A seed to generate reproducible results from random operations.
