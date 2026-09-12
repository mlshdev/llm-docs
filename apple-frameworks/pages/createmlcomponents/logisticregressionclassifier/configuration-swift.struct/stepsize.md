> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/logisticregressionclassifier/configuration-swift.struct/stepsize](https://developer.apple.com/documentation/createmlcomponents/logisticregressionclassifier/configuration-swift.struct/stepsize)

# stepSize

**Framework:** Create ML Components  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

The starting step size to use for the solver.

## Declaration

```swift
var stepSize: Double
```

<a id="discussion"></a>

## Discussion

Defaults to 1.0. If the first iteration takes a considerable amount of time, reducing this parameter may speed up model training.

## See Also

### Getting the properties

- [convergenceThreshold](convergencethreshold.md): The convergence threshold.
- [earlyStopIterationCount](earlystopiterationcount.md): The number of iterations to use when evaluating whether to stop early.
- [l1Penalty](l1penalty.md): Weight of the L1 regularization term.
- [l2Penalty](l2penalty.md): Weight of the L2 regularization term.
- [maximumIterations](maximumiterations.md): The maximum number of allowed passes through the data.
- [optimizationStrategy](optimizationstrategy.md): The optimization strategy.
- [scaleFeatures](scalefeatures.md): A Boolean value indicating whether to scale the input features.
