> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestcase/measuremetrics(_:automaticallystartmeasuring:for:)](https://developer.apple.com/documentation/xctest/xctestcase/measuremetrics(_:automaticallystartmeasuring:for:))

# measureMetrics(\_:automaticallyStartMeasuring:for:) (Swift)

**Framework:** XCTest  
**Kind:** Instance Method

Measures the performance of a block of code, optionally deferring the starting point for measurement.

## Declaration

```swift
func measureMetrics(_ metrics: [XCTPerformanceMetric], automaticallyStartMeasuring: Bool, for block: () -> Void)
```

## Parameters

- `metrics`: An array of performance metrics to measure. Each metric is measured across calls to the block. Pass [wallClockTime](../xctperformancemetric/wallclocktime.md) to measure the number of seconds taken to execute the  block of code.
- `automaticallyStartMeasuring`: If [false](https://developer.apple.com/documentation/swift/false), measurements will not be taken until [startMeasuring()](startmeasuring%28%29.md) is called inside the block.
- `block`: A block whose performance is measured.

<a id="Discussion"></a>

## Discussion

Call this method from within a test method to measure the performance of a block of code. This method provides more granular control over performance measurement than the  [measure(\_:)](measure%28__%29.md) method, and should be used when you need to customize the points at which measurement starts and ends within the block, or wish to measure multiple metrics for the block.

Performance measurement must be started and stopped exactly once within the block. As a result:

- If `automaticallyStartMeasuring` is [true](https://developer.apple.com/documentation/swift/true) and [startMeasuring()](startmeasuring%28%29.md) is called inside the block, the test will fail.
- If `automaticallyStartMeasuring` is [false](https://developer.apple.com/documentation/swift/false), [startMeasuring()](startmeasuring%28%29.md) must be called once and only once before the end of the block, or the test will fail.
- If [stopMeasuring()](stopmeasuring%28%29.md) is called multiple times during the block the test will fail.

## See Also

### Related Documentation

- [wallClockTime](../xctperformancemetric/wallclocktime.md): A performance metric that records the time in seconds to execute a block of code.

### Measuring Performance

- [measure(\_:)](measure%28__%29.md): Measures the performance of a block of code.
- [measure(metrics:block:)](measure%28metrics_block_%29.md): Records the selected metrics for a block of code.
- [measure(metrics:options:block:)](measure%28metrics_options_block_%29.md): Records the selected metrics, using the specified measurement options, for a block of code.
- [measure(options:block:)](measure%28options_block_%29.md): Records the performance, using the specified measurement options, for a block of code.
- [startMeasuring()](startmeasuring%28%29.md): Starts recording performance metrics within a block of code.
- [stopMeasuring()](stopmeasuring%28%29.md): Ends recording performance metrics within a block of code.
- [defaultPerformanceMetrics](defaultperformancemetrics.md): An array of default performance metrics the test records.
- [defaultMetrics](defaultmetrics.md): An array of default metrics the test uses to record performance.
- [defaultMeasureOptions](defaultmeasureoptions.md): The default measurement options the test uses to record performance.
- [XCTPerformanceMetric](../xctperformancemetric.md): Performance metrics that the test records.

# measureMetrics:automaticallyStartMeasuring:forBlock: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Measures the performance of a block of code, optionally deferring the starting point for measurement.

## Declaration

```objectivec
- (void) measureMetrics:(NSArray<NSString *> *) metrics automaticallyStartMeasuring:(BOOL) automaticallyStartMeasuring forBlock:(void (^)()) block;
```

## Parameters

- `metrics`: An array of performance metrics to measure. Each metric is measured across calls to the block. Pass [XCTPerformanceMetric_WallClockTime](../xctperformancemetric/wallclocktime.md) to measure the number of seconds taken to execute the  block of code.
- `automaticallyStartMeasuring`: If [false](https://developer.apple.com/documentation/swift/false), measurements will not be taken until [startMeasuring](startmeasuring%28%29.md) is called inside the block.
- `block`: A block whose performance is measured.

<a id="Discussion"></a>

## Discussion

Call this method from within a test method to measure the performance of a block of code. This method provides more granular control over performance measurement than the  [measureBlock:](measure%28__%29.md) method, and should be used when you need to customize the points at which measurement starts and ends within the block, or wish to measure multiple metrics for the block.

Performance measurement must be started and stopped exactly once within the block. As a result:

- If `automaticallyStartMeasuring` is [true](https://developer.apple.com/documentation/swift/true) and [startMeasuring](startmeasuring%28%29.md) is called inside the block, the test will fail.
- If `automaticallyStartMeasuring` is [false](https://developer.apple.com/documentation/swift/false), [startMeasuring](startmeasuring%28%29.md) must be called once and only once before the end of the block, or the test will fail.
- If [stopMeasuring](stopmeasuring%28%29.md) is called multiple times during the block the test will fail.

## See Also

### Related Documentation

- [XCTPerformanceMetric_WallClockTime](../xctperformancemetric/wallclocktime.md): A performance metric that records the time in seconds to execute a block of code.

### Measuring Performance

- [measureBlock:](measure%28__%29.md): Measures the performance of a block of code.
- [measureWithMetrics:block:](measure%28metrics_block_%29.md): Records the selected metrics for a block of code.
- [measureWithMetrics:options:block:](measure%28metrics_options_block_%29.md): Records the selected metrics, using the specified measurement options, for a block of code.
- [measureWithOptions:block:](measure%28options_block_%29.md): Records the performance, using the specified measurement options, for a block of code.
- [startMeasuring](startmeasuring%28%29.md): Starts recording performance metrics within a block of code.
- [stopMeasuring](stopmeasuring%28%29.md): Ends recording performance metrics within a block of code.
- [defaultPerformanceMetrics](defaultperformancemetrics.md): An array of default performance metrics the test records.
- [defaultMetrics](defaultmetrics.md): An array of default metrics the test uses to record performance.
- [defaultMeasureOptions](defaultmeasureoptions.md): The default measurement options the test uses to record performance.
- [XCTPerformanceMetric](../xctperformancemetric.md): Performance metrics that the test records.
