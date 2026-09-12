> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/fullyconnectednetworkconfiguration/earlystoppingtolerance](https://developer.apple.com/documentation/createmlcomponents/fullyconnectednetworkconfiguration/earlystoppingtolerance)

# earlyStoppingTolerance

**Framework:** Create ML Components  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

The early-stopping tolerance.

## Declaration

```swift
var earlyStoppingTolerance: Double
```

<a id="discussion"></a>

## Discussion

The tolerance is used by the `fitted` method to decide when progress is no longer being made, in which case the training process will stop before the specified maximum number of iterations (known as early stopping). Significant progress happens when the validation loss decreases by at least the tolerance.

Defaults to 0.01.

> **Note**

> Early stopping only happens when using the `fitted` method with validation data.

## See Also

### Getting the properties

- [batchSize](batchsize.md): The number of examples to use per mini-batch.
- [dropoutProbability](dropoutprobability.md): The dropout probability.
- [earlyStopIterationCount](earlystopiterationcount.md): The number of iterations to use when evaluating whether to stop early.
- [hiddenUnitCounts](hiddenunitcounts.md): The number of neurons in each hidden layer.
- [learningRate](learningrate.md): The learning rate.
- [maximumIterations](maximumiterations.md): The maximum number of iterations.
- [randomSeed](randomseed.md): A seed to generate reproducible results from random operations such as column and row subsampling.
