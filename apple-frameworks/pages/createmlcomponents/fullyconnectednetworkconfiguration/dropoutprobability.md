> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/fullyconnectednetworkconfiguration/dropoutprobability](https://developer.apple.com/documentation/createmlcomponents/fullyconnectednetworkconfiguration/dropoutprobability)

# dropoutProbability

**Framework:** Create ML Components  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

The dropout probability.

## Declaration

```swift
var dropoutProbability: Float
```

<a id="discussion"></a>

## Discussion

Dropout layers are placed after fully-connected layers to help prevent over-fitting.

Defaults to 0.2.

## See Also

### Getting the properties

- [batchSize](batchsize.md): The number of examples to use per mini-batch.
- [earlyStopIterationCount](earlystopiterationcount.md): The number of iterations to use when evaluating whether to stop early.
- [earlyStoppingTolerance](earlystoppingtolerance.md): The early-stopping tolerance.
- [hiddenUnitCounts](hiddenunitcounts.md): The number of neurons in each hidden layer.
- [learningRate](learningrate.md): The learning rate.
- [maximumIterations](maximumiterations.md): The maximum number of iterations.
- [randomSeed](randomseed.md): A seed to generate reproducible results from random operations such as column and row subsampling.
