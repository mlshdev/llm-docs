> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/fullyconnectednetworkconfiguration/maximumiterations](https://developer.apple.com/documentation/createmlcomponents/fullyconnectednetworkconfiguration/maximumiterations)

# maximumIterations

**Framework:** Create ML Components  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

The maximum number of iterations.

## Declaration

```swift
var maximumIterations: Int
```

<a id="discussion"></a>

## Discussion

More iterations will produce better models as long as there is no over-fitting. Over-fitting happens when the dropout probability is too low or there is not enough training data.

> **Note**

> This parameter is only used by the `fitted` method. When using the `update` method it’s up to you to decide when to stop.

## See Also

### Getting the properties

- [batchSize](batchsize.md): The number of examples to use per mini-batch.
- [dropoutProbability](dropoutprobability.md): The dropout probability.
- [earlyStopIterationCount](earlystopiterationcount.md): The number of iterations to use when evaluating whether to stop early.
- [earlyStoppingTolerance](earlystoppingtolerance.md): The early-stopping tolerance.
- [hiddenUnitCounts](hiddenunitcounts.md): The number of neurons in each hidden layer.
- [learningRate](learningrate.md): The learning rate.
- [randomSeed](randomseed.md): A seed to generate reproducible results from random operations such as column and row subsampling.
