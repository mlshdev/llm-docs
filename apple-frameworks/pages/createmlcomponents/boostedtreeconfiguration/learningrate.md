> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/boostedtreeconfiguration/learningrate](https://developer.apple.com/documentation/createmlcomponents/boostedtreeconfiguration/learningrate)

# learningRate

**Framework:** Create ML Components  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

The learning rate.

## Declaration

```swift
var learningRate: Double { get set }
```

<a id="discussion"></a>

## Discussion

The learning rate controls the step size shrinkage. A smaller learning rate makes the learning process more conservative. Must be in the range \[0, 1\]. Defaults to 0.3.

## See Also

### Inspecting the configuration

- [columnSubsample](columnsubsample.md): Subsample ratio of the columns in each iteration of tree construction.
- [earlyStoppingIterationCount](earlystoppingiterationcount.md): Stops training after this number of iterations where the validation metric does not improve.
- [maximumDepth](maximumdepth.md): Maximum tree depth.
- [maximumIterations](maximumiterations.md): Maximum number of iterations.
- [minimumChildWeight](minimumchildweight.md): The minimum weight of each leaf node.
- [minimumLossReduction](minimumlossreduction.md): Minimum loss reduction required to further split a node during the tree learning phase.
- [parallelTreeCount](paralleltreecount.md): The number of parallel trees constructed during each iteration.
- [randomSeed](randomseed.md): A seed to generate reproducible results from random operations such as column and row subsampling.
- [rowSubsample](rowsubsample.md): Subsample ratio of the training set in each iteration of tree construction.
- [stepSize](stepsize.md): Deprecated. The step size shrinking.
