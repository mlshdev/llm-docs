> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/multivariatelinearregressorconfiguration/learningrate](https://developer.apple.com/documentation/createmlcomponents/multivariatelinearregressorconfiguration/learningrate)

# learningRate

**Framework:** Create ML Components  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The optimizer learning rate.

## Declaration

```swift
var learningRate: Float
```

<a id="discussion"></a>

## Discussion

Defaults to 0.005.

## See Also

### Getting the properties

- [batchSize](batchsize.md): The number of examples in each training batch.
- [maximumIterationCount](maximumiterationcount.md): The maximum number of allowed passes through the data.
- [earlyStoppingTolerance](earlystoppingtolerance.md): The early-stopping tolerance.
- [earlyStoppingIterationCount](earlystoppingiterationcount.md): The number of iterations to use when evaluating whether to stop early.
- [randomSeed](randomseed.md): A seed to generate reproducible results from random operations.
