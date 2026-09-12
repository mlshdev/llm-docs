> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/linearregressor/configuration-swift.struct/l2penalty](https://developer.apple.com/documentation/createmlcomponents/linearregressor/configuration-swift.struct/l2penalty)

# l2Penalty

**Framework:** Create ML Components  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Weight of the L2 regularization term.

## Declaration

```swift
var l2Penalty: Double
```

<a id="discussion"></a>

## Discussion

The larger this weight, the more the model coefficients shrink toward 0. This introduces bias into the model but decreases variance, potentially leading to better predictions. The default value is 0.01; setting this parameter to 0 corresponds to unregularized logistic regression.

## See Also

### Getting the properties

- [convergenceThreshold](convergencethreshold.md): The convergence threshold.
- [earlyStopIterationCount](earlystopiterationcount.md): The number of iterations to use when evaluating whether to stop early.
- [l1Penalty](l1penalty.md): Weight of the L1 regularization term.
- [maximumIterations](maximumiterations.md): The maximum number of allowed passes through the data.
- [optimizationStrategy](optimizationstrategy.md): The optimization strategy.
- [scaleFeatures](scalefeatures.md): A Boolean value indicating whether to scale the input features.
- [stepSize](stepsize.md): The starting step size to use for the solver.
