> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestcase/measure(options:block:)](https://developer.apple.com/documentation/xctest/xctestcase/measure(options:block:))

# measure(options:block:) (Swift)

**Framework:** XCTest  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

Records the performance, using the specified measurement options, for a block of code.

## Declaration

```swift
func measure(options: XCTMeasureOptions, block: () -> Void)
```

## Parameters

- `options`: Options to control the gathering of performance measurements.
- `block`: A block whose performance is measured.

## See Also

### Measuring Performance

- [measure(\_:)](measure%28__%29.md): Measures the performance of a block of code.
- [measureMetrics(\_:automaticallyStartMeasuring:for:)](measuremetrics%28__automaticallystartmeasuring_for_%29.md): Measures the performance of a block of code, optionally deferring the starting point for measurement.
- [measure(metrics:block:)](measure%28metrics_block_%29.md): Records the selected metrics for a block of code.
- [measure(metrics:options:block:)](measure%28metrics_options_block_%29.md): Records the selected metrics, using the specified measurement options, for a block of code.
- [startMeasuring()](startmeasuring%28%29.md): Starts recording performance metrics within a block of code.
- [stopMeasuring()](stopmeasuring%28%29.md): Ends recording performance metrics within a block of code.
- [defaultPerformanceMetrics](defaultperformancemetrics.md): An array of default performance metrics the test records.
- [defaultMetrics](defaultmetrics.md): An array of default metrics the test uses to record performance.
- [defaultMeasureOptions](defaultmeasureoptions.md): The default measurement options the test uses to record performance.
- [XCTPerformanceMetric](../xctperformancemetric.md): Performance metrics that the test records.

# measureWithOptions:block: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

Records the performance, using the specified measurement options, for a block of code.

## Declaration

```objectivec
- (void) measureWithOptions:(XCTMeasureOptions *) options block:(void (^)()) block;
```

## Parameters

- `options`: Options to control the gathering of performance measurements.
- `block`: A block whose performance is measured.

## See Also

### Measuring Performance

- [measureBlock:](measure%28__%29.md): Measures the performance of a block of code.
- [measureMetrics:automaticallyStartMeasuring:forBlock:](measuremetrics%28__automaticallystartmeasuring_for_%29.md): Measures the performance of a block of code, optionally deferring the starting point for measurement.
- [measureWithMetrics:block:](measure%28metrics_block_%29.md): Records the selected metrics for a block of code.
- [measureWithMetrics:options:block:](measure%28metrics_options_block_%29.md): Records the selected metrics, using the specified measurement options, for a block of code.
- [startMeasuring](startmeasuring%28%29.md): Starts recording performance metrics within a block of code.
- [stopMeasuring](stopmeasuring%28%29.md): Ends recording performance metrics within a block of code.
- [defaultPerformanceMetrics](defaultperformancemetrics.md): An array of default performance metrics the test records.
- [defaultMetrics](defaultmetrics.md): An array of default metrics the test uses to record performance.
- [defaultMeasureOptions](defaultmeasureoptions.md): The default measurement options the test uses to record performance.
- [XCTPerformanceMetric](../xctperformancemetric.md): Performance metrics that the test records.
