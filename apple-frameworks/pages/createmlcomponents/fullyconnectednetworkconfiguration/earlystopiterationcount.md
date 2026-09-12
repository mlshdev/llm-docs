> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/fullyconnectednetworkconfiguration/earlystopiterationcount](https://developer.apple.com/documentation/createmlcomponents/fullyconnectednetworkconfiguration/earlystopiterationcount)

# earlyStopIterationCount

**Framework:** Create ML Components  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

The number of iterations to use when evaluating whether to stop early.

## Declaration

```swift
var earlyStopIterationCount: Int
```

<a id="discussion"></a>

## Discussion

The `fitted` method will stop if no significant progress is made for this many iterations. Significant progress happens when the validation loss decreases by at least `earlyStoppingTolerance`.

Defaults to 10.

> **Note**

> Early stopping only happens when using the `fitted` method with validation data.

## See Also

### Getting the properties

- [batchSize](batchsize.md): The number of examples to use per mini-batch.
- [dropoutProbability](dropoutprobability.md): The dropout probability.
- [earlyStoppingTolerance](earlystoppingtolerance.md): The early-stopping tolerance.
- [hiddenUnitCounts](hiddenunitcounts.md): The number of neurons in each hidden layer.
- [learningRate](learningrate.md): The learning rate.
- [maximumIterations](maximumiterations.md): The maximum number of iterations.
- [randomSeed](randomseed.md): A seed to generate reproducible results from random operations such as column and row subsampling.
