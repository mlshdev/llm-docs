> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/boostedtreeconfiguration/minimumchildweight](https://developer.apple.com/documentation/createmlcomponents/boostedtreeconfiguration/minimumchildweight)

# minimumChildWeight

**Framework:** Create ML Components  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

The minimum weight of each leaf node.

## Declaration

```swift
var minimumChildWeight: Double
```

<a id="discussion"></a>

## Discussion

Larger values result in more conservative tree learning and help prevent overfitting. If the tree learning algorithm results in a leaf node with the sum of instance weights less than this value, tree building will terminate. Defaults to 0.1

## See Also

### Inspecting the configuration

- [columnSubsample](columnsubsample.md): Subsample ratio of the columns in each iteration of tree construction.
- [earlyStoppingIterationCount](earlystoppingiterationcount.md): Stops training after this number of iterations where the validation metric does not improve.
- [learningRate](learningrate.md): The learning rate.
- [maximumDepth](maximumdepth.md): Maximum tree depth.
- [maximumIterations](maximumiterations.md): Maximum number of iterations.
- [minimumLossReduction](minimumlossreduction.md): Minimum loss reduction required to further split a node during the tree learning phase.
- [parallelTreeCount](paralleltreecount.md): The number of parallel trees constructed during each iteration.
- [randomSeed](randomseed.md): A seed to generate reproducible results from random operations such as column and row subsampling.
- [rowSubsample](rowsubsample.md): Subsample ratio of the training set in each iteration of tree construction.
- [stepSize](stepsize.md): Deprecated. The step size shrinking.
