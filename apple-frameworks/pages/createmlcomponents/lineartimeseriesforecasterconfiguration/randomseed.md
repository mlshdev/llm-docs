> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/lineartimeseriesforecasterconfiguration/randomseed](https://developer.apple.com/documentation/createmlcomponents/lineartimeseriesforecasterconfiguration/randomseed)

# randomSeed

**Framework:** Create ML Components  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A seed to generate reproducible results from random operations.

## Declaration

```swift
var randomSeed: Int?
```

## See Also

### Inspecting a linear time series forecasater configuration

- [batchSize](batchsize.md): The number of examples in each training batch.
- [earlyStoppingIterationCount](earlystoppingiterationcount.md): The number of iterations to use when evaluating whether to stop early.
- [earlyStoppingTolerance](earlystoppingtolerance.md): The early-stopping tolerance.
- [forecastWindowSize](forecastwindowsize.md): The number of predicted samples.
- [inputWindowSize](inputwindowsize.md): The number of input samples.
- [learningRate](learningrate.md): The starting learning rate.
- [maximumIterationCount](maximumiterationcount.md): The maximum number of allowed passes through the data.
