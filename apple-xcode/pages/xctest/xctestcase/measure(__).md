> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestcase/measure(_:)](https://developer.apple.com/documentation/xctest/xctestcase/measure(_:))

# measure(\_:) (Swift)

**Framework:** XCTest  
**Kind:** Instance Method

Measures the performance of a block of code.

## Declaration

```swift
func measure(_ block: () -> Void)
```

## Parameters

- `block`: A block whose performance is measured.

<a id="Discussion"></a>

## Discussion

Call this method from within a test method to measure the performance of a block of code. By default, this method measures the number of seconds the block of code takes to execute. Override [defaultPerformanceMetrics](defaultperformancemetrics.md) to change the default metrics measured by this method.

> **Note**

>  This method starts and stops performance measurement automatically. Use [measureMetrics(\_:automaticallyStartMeasuring:for:)](measuremetrics%28__automaticallystartmeasuring_for_%29.md) if you need more control over when performance measurement starts and ends.

## See Also

### Measuring Performance

- [measureMetrics(\_:automaticallyStartMeasuring:for:)](measuremetrics%28__automaticallystartmeasuring_for_%29.md): Measures the performance of a block of code, optionally deferring the starting point for measurement.
- [measure(metrics:block:)](measure%28metrics_block_%29.md): Records the selected metrics for a block of code.
- [measure(metrics:options:block:)](measure%28metrics_options_block_%29.md): Records the selected metrics, using the specified measurement options, for a block of code.
- [measure(options:block:)](measure%28options_block_%29.md): Records the performance, using the specified measurement options, for a block of code.
- [startMeasuring()](startmeasuring%28%29.md): Starts recording performance metrics within a block of code.
- [stopMeasuring()](stopmeasuring%28%29.md): Ends recording performance metrics within a block of code.
- [defaultPerformanceMetrics](defaultperformancemetrics.md): An array of default performance metrics the test records.
- [defaultMetrics](defaultmetrics.md): An array of default metrics the test uses to record performance.
- [defaultMeasureOptions](defaultmeasureoptions.md): The default measurement options the test uses to record performance.
- [XCTPerformanceMetric](../xctperformancemetric.md): Performance metrics that the test records.

# measureBlock: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Measures the performance of a block of code.

## Declaration

```objectivec
- (void) measureBlock:(void (^)()) block;
```

## Parameters

- `block`: A block whose performance is measured.

<a id="Discussion"></a>

## Discussion

Call this method from within a test method to measure the performance of a block of code. By default, this method measures the number of seconds the block of code takes to execute. Override [defaultPerformanceMetrics](defaultperformancemetrics.md) to change the default metrics measured by this method.

> **Note**

>  This method starts and stops performance measurement automatically. Use [measureMetrics:automaticallyStartMeasuring:forBlock:](measuremetrics%28__automaticallystartmeasuring_for_%29.md) if you need more control over when performance measurement starts and ends.

## See Also

### Measuring Performance

- [measureMetrics:automaticallyStartMeasuring:forBlock:](measuremetrics%28__automaticallystartmeasuring_for_%29.md): Measures the performance of a block of code, optionally deferring the starting point for measurement.
- [measureWithMetrics:block:](measure%28metrics_block_%29.md): Records the selected metrics for a block of code.
- [measureWithMetrics:options:block:](measure%28metrics_options_block_%29.md): Records the selected metrics, using the specified measurement options, for a block of code.
- [measureWithOptions:block:](measure%28options_block_%29.md): Records the performance, using the specified measurement options, for a block of code.
- [startMeasuring](startmeasuring%28%29.md): Starts recording performance metrics within a block of code.
- [stopMeasuring](stopmeasuring%28%29.md): Ends recording performance metrics within a block of code.
- [defaultPerformanceMetrics](defaultperformancemetrics.md): An array of default performance metrics the test records.
- [defaultMetrics](defaultmetrics.md): An array of default metrics the test uses to record performance.
- [defaultMeasureOptions](defaultmeasureoptions.md): The default measurement options the test uses to record performance.
- [XCTPerformanceMetric](../xctperformancemetric.md): Performance metrics that the test records.
