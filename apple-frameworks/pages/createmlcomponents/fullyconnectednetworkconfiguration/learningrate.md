> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/fullyconnectednetworkconfiguration/learningrate](https://developer.apple.com/documentation/createmlcomponents/fullyconnectednetworkconfiguration/learningrate)

# learningRate

**Framework:** Create ML Components  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

The learning rate.

## Declaration

```swift
var learningRate: Float
```

<a id="discussion"></a>

## Discussion

The learning rate controls how much the model changes when presented with new data. A high learning rate may overshoot when close to a solution, while a low learning rate my take too long to train a good model.

Defaults to 0.001.

## See Also

### Getting the properties

- [batchSize](batchsize.md): The number of examples to use per mini-batch.
- [dropoutProbability](dropoutprobability.md): The dropout probability.
- [earlyStopIterationCount](earlystopiterationcount.md): The number of iterations to use when evaluating whether to stop early.
- [earlyStoppingTolerance](earlystoppingtolerance.md): The early-stopping tolerance.
- [hiddenUnitCounts](hiddenunitcounts.md): The number of neurons in each hidden layer.
- [maximumIterations](maximumiterations.md): The maximum number of iterations.
- [randomSeed](randomseed.md): A seed to generate reproducible results from random operations such as column and row subsampling.
