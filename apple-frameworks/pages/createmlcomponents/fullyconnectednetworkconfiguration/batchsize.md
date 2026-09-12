> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/fullyconnectednetworkconfiguration/batchsize](https://developer.apple.com/documentation/createmlcomponents/fullyconnectednetworkconfiguration/batchsize)

# batchSize

**Framework:** Create ML Components  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

The number of examples to use per mini-batch.

## Declaration

```swift
var batchSize: Int
```

<a id="discussion"></a>

## Discussion

A larger batch size will speed up computation when training, as long as the batch fits in memory.

> **Note**

> This parameter is only used by the `fitted` method. When using the `update` method it’s up to you to do batching.

## See Also

### Getting the properties

- [dropoutProbability](dropoutprobability.md): The dropout probability.
- [earlyStopIterationCount](earlystopiterationcount.md): The number of iterations to use when evaluating whether to stop early.
- [earlyStoppingTolerance](earlystoppingtolerance.md): The early-stopping tolerance.
- [hiddenUnitCounts](hiddenunitcounts.md): The number of neurons in each hidden layer.
- [learningRate](learningrate.md): The learning rate.
- [maximumIterations](maximumiterations.md): The maximum number of iterations.
- [randomSeed](randomseed.md): A seed to generate reproducible results from random operations such as column and row subsampling.
