> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestcase/startmeasuring()](https://developer.apple.com/documentation/xctest/xctestcase/startmeasuring())

# startMeasuring() (Swift)

**Framework:** XCTest  
**Kind:** Instance Method

Starts recording performance metrics within a block of code.

## Declaration

```swift
func startMeasuring()
```

<a id="Discussion"></a>

## Discussion

Call this method to start the measurement of metrics by the [measureMetrics(\_:automaticallyStartMeasuring:for:)](measuremetrics%28__automaticallystartmeasuring_for_%29.md) method. Measurement will start immediately after this method is called from within the measured block.

> **Note**

>  You must call [measureMetrics(\_:automaticallyStartMeasuring:for:)](measuremetrics%28__automaticallystartmeasuring_for_%29.md) with an `automaticallyStartMeasuring` value of [false](https://developer.apple.com/documentation/swift/false) in order to set a custom start point with [startMeasuring()](startmeasuring%28%29.md).

## See Also

### Measuring Performance

- [measure(\_:)](measure%28__%29.md): Measures the performance of a block of code.
- [measureMetrics(\_:automaticallyStartMeasuring:for:)](measuremetrics%28__automaticallystartmeasuring_for_%29.md): Measures the performance of a block of code, optionally deferring the starting point for measurement.
- [measure(metrics:block:)](measure%28metrics_block_%29.md): Records the selected metrics for a block of code.
- [measure(metrics:options:block:)](measure%28metrics_options_block_%29.md): Records the selected metrics, using the specified measurement options, for a block of code.
- [measure(options:block:)](measure%28options_block_%29.md): Records the performance, using the specified measurement options, for a block of code.
- [stopMeasuring()](stopmeasuring%28%29.md): Ends recording performance metrics within a block of code.
- [defaultPerformanceMetrics](defaultperformancemetrics.md): An array of default performance metrics the test records.
- [defaultMetrics](defaultmetrics.md): An array of default metrics the test uses to record performance.
- [defaultMeasureOptions](defaultmeasureoptions.md): The default measurement options the test uses to record performance.
- [XCTPerformanceMetric](../xctperformancemetric.md): Performance metrics that the test records.

# startMeasuring (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Starts recording performance metrics within a block of code.

## Declaration

```objectivec
- (void) startMeasuring;
```

<a id="Discussion"></a>

## Discussion

Call this method to start the measurement of metrics by the [measureMetrics:automaticallyStartMeasuring:forBlock:](measuremetrics%28__automaticallystartmeasuring_for_%29.md) method. Measurement will start immediately after this method is called from within the measured block.

> **Note**

>  You must call [measureMetrics:automaticallyStartMeasuring:forBlock:](measuremetrics%28__automaticallystartmeasuring_for_%29.md) with an `automaticallyStartMeasuring` value of [false](https://developer.apple.com/documentation/swift/false) in order to set a custom start point with [startMeasuring](startmeasuring%28%29.md).

## See Also

### Measuring Performance

- [measureBlock:](measure%28__%29.md): Measures the performance of a block of code.
- [measureMetrics:automaticallyStartMeasuring:forBlock:](measuremetrics%28__automaticallystartmeasuring_for_%29.md): Measures the performance of a block of code, optionally deferring the starting point for measurement.
- [measureWithMetrics:block:](measure%28metrics_block_%29.md): Records the selected metrics for a block of code.
- [measureWithMetrics:options:block:](measure%28metrics_options_block_%29.md): Records the selected metrics, using the specified measurement options, for a block of code.
- [measureWithOptions:block:](measure%28options_block_%29.md): Records the performance, using the specified measurement options, for a block of code.
- [stopMeasuring](stopmeasuring%28%29.md): Ends recording performance metrics within a block of code.
- [defaultPerformanceMetrics](defaultperformancemetrics.md): An array of default performance metrics the test records.
- [defaultMetrics](defaultmetrics.md): An array of default metrics the test uses to record performance.
- [defaultMeasureOptions](defaultmeasureoptions.md): The default measurement options the test uses to record performance.
- [XCTPerformanceMetric](../xctperformancemetric.md): Performance metrics that the test records.
