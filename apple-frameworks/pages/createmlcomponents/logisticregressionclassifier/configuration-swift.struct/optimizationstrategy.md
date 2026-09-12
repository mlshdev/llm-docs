> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/logisticregressionclassifier/configuration-swift.struct/optimizationstrategy](https://developer.apple.com/documentation/createmlcomponents/logisticregressionclassifier/configuration-swift.struct/optimizationstrategy)

# optimizationStrategy

**Framework:** Create ML Components  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

The optimization strategy.

## Declaration

```swift
var optimizationStrategy: OptimizationStrategy { get set }
```

## See Also

### Getting the properties

- [convergenceThreshold](convergencethreshold.md): The convergence threshold.
- [earlyStopIterationCount](earlystopiterationcount.md): The number of iterations to use when evaluating whether to stop early.
- [l1Penalty](l1penalty.md): Weight of the L1 regularization term.
- [l2Penalty](l2penalty.md): Weight of the L2 regularization term.
- [maximumIterations](maximumiterations.md): The maximum number of allowed passes through the data.
- [scaleFeatures](scalefeatures.md): A Boolean value indicating whether to scale the input features.
- [stepSize](stepsize.md): The starting step size to use for the solver.
