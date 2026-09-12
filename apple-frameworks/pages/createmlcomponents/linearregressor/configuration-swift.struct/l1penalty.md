> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/linearregressor/configuration-swift.struct/l1penalty](https://developer.apple.com/documentation/createmlcomponents/linearregressor/configuration-swift.struct/l1penalty)

# l1Penalty

**Framework:** Create ML Components  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Weight of the L1 regularization term.

## Declaration

```swift
var l1Penalty: Double
```

<a id="discussion"></a>

## Discussion

Like the l2 penalty, the higher the l1 penalty, the more the estimated coefficients shrink toward 0. The l1 penalty, however, completely zeros out sufficiently small coefficients, automatically indicating features that are not useful for the model. The default weight of 0 prevents any features from being discarded.

## See Also

### Getting the properties

- [convergenceThreshold](convergencethreshold.md): The convergence threshold.
- [earlyStopIterationCount](earlystopiterationcount.md): The number of iterations to use when evaluating whether to stop early.
- [l2Penalty](l2penalty.md): Weight of the L2 regularization term.
- [maximumIterations](maximumiterations.md): The maximum number of allowed passes through the data.
- [optimizationStrategy](optimizationstrategy.md): The optimization strategy.
- [scaleFeatures](scalefeatures.md): A Boolean value indicating whether to scale the input features.
- [stepSize](stepsize.md): The starting step size to use for the solver.
