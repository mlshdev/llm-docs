> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/linearregressor/configuration-swift.struct/convergencethreshold](https://developer.apple.com/documentation/createmlcomponents/linearregressor/configuration-swift.struct/convergencethreshold)

# convergenceThreshold

**Framework:** Create ML Components  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

The convergence threshold.

## Declaration

```swift
var convergenceThreshold: Double
```

<a id="discussion"></a>

## Discussion

When the residual is within the convergence threshold of the objective, training stops. The threshold is also used by the `fitted` method to decide when progress is no longer being made, in which case the training process will stop before convergence and before the specified maximum number of iterations (known as early stopping).

Consider reducing this value for a more accurately trained model. But beware of overfitting if the it is set to a very low value. Defaults to 0.01.

## See Also

### Getting the properties

- [earlyStopIterationCount](earlystopiterationcount.md): The number of iterations to use when evaluating whether to stop early.
- [l1Penalty](l1penalty.md): Weight of the L1 regularization term.
- [l2Penalty](l2penalty.md): Weight of the L2 regularization term.
- [maximumIterations](maximumiterations.md): The maximum number of allowed passes through the data.
- [optimizationStrategy](optimizationstrategy.md): The optimization strategy.
- [scaleFeatures](scalefeatures.md): A Boolean value indicating whether to scale the input features.
- [stepSize](stepsize.md): The starting step size to use for the solver.
