> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/multivariatelinearregressorconfiguration/batchsize](https://developer.apple.com/documentation/createmlcomponents/multivariatelinearregressorconfiguration/batchsize)

# batchSize

**Framework:** Create ML Components  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The number of examples in each training batch.

## Declaration

```swift
var batchSize: Int
```

<a id="discussion"></a>

## Discussion

> **Note**

> This parameter is only used by the `fitted` method.

## See Also

### Getting the properties

- [maximumIterationCount](maximumiterationcount.md): The maximum number of allowed passes through the data.
- [earlyStoppingTolerance](earlystoppingtolerance.md): The early-stopping tolerance.
- [earlyStoppingIterationCount](earlystoppingiterationcount.md): The number of iterations to use when evaluating whether to stop early.
- [learningRate](learningrate.md): The optimizer learning rate.
- [randomSeed](randomseed.md): A seed to generate reproducible results from random operations.
