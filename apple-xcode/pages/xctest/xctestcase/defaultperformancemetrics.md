> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestcase/defaultperformancemetrics](https://developer.apple.com/documentation/xctest/xctestcase/defaultperformancemetrics)

# defaultPerformanceMetrics (Swift)

**Framework:** XCTest  
**Kind:** Type Property

An array of default performance metrics the test records.

## Declaration

```swift
class var defaultPerformanceMetrics: [XCTPerformanceMetric] { get }
```

<a id="Discussion"></a>

## Discussion

When you call [measure(\_:)](measure%28__%29.md), the test uses this property to determine which performance metrics to record. The default is an array that contains [wallClockTime](../xctperformancemetric/wallclocktime.md). Subclasses of [XCTestCase](../xctestcase.md) can override this method to change the behavior of [measure(\_:)](measure%28__%29.md).

## See Also

### Related Documentation

- [wallClockTime](../xctperformancemetric/wallclocktime.md): A performance metric that records the time in seconds to execute a block of code.

### Measuring Performance

- [measure(\_:)](measure%28__%29.md): Measures the performance of a block of code.
- [measureMetrics(\_:automaticallyStartMeasuring:for:)](measuremetrics%28__automaticallystartmeasuring_for_%29.md): Measures the performance of a block of code, optionally deferring the starting point for measurement.
- [measure(metrics:block:)](measure%28metrics_block_%29.md): Records the selected metrics for a block of code.
- [measure(metrics:options:block:)](measure%28metrics_options_block_%29.md): Records the selected metrics, using the specified measurement options, for a block of code.
- [measure(options:block:)](measure%28options_block_%29.md): Records the performance, using the specified measurement options, for a block of code.
- [startMeasuring()](startmeasuring%28%29.md): Starts recording performance metrics within a block of code.
- [stopMeasuring()](stopmeasuring%28%29.md): Ends recording performance metrics within a block of code.
- [defaultMetrics](defaultmetrics.md): An array of default metrics the test uses to record performance.
- [defaultMeasureOptions](defaultmeasureoptions.md): The default measurement options the test uses to record performance.
- [XCTPerformanceMetric](../xctperformancemetric.md): Performance metrics that the test records.

# defaultPerformanceMetrics (Objective-C)

**Framework:** XCTest  
**Kind:** Type Property

An array of default performance metrics the test records.

## Declaration

```objectivec
@property (class, copy, readonly) NSArray<NSString *> * defaultPerformanceMetrics;
```

<a id="Discussion"></a>

## Discussion

When you call [measureBlock:](measure%28__%29.md), the test uses this property to determine which performance metrics to record. The default is an array that contains [XCTPerformanceMetric_WallClockTime](../xctperformancemetric/wallclocktime.md). Subclasses of [XCTestCase](../xctestcase.md) can override this method to change the behavior of [measureBlock:](measure%28__%29.md).

## See Also

### Related Documentation

- [XCTPerformanceMetric_WallClockTime](../xctperformancemetric/wallclocktime.md): A performance metric that records the time in seconds to execute a block of code.

### Measuring Performance

- [measureBlock:](measure%28__%29.md): Measures the performance of a block of code.
- [measureMetrics:automaticallyStartMeasuring:forBlock:](measuremetrics%28__automaticallystartmeasuring_for_%29.md): Measures the performance of a block of code, optionally deferring the starting point for measurement.
- [measureWithMetrics:block:](measure%28metrics_block_%29.md): Records the selected metrics for a block of code.
- [measureWithMetrics:options:block:](measure%28metrics_options_block_%29.md): Records the selected metrics, using the specified measurement options, for a block of code.
- [measureWithOptions:block:](measure%28options_block_%29.md): Records the performance, using the specified measurement options, for a block of code.
- [startMeasuring](startmeasuring%28%29.md): Starts recording performance metrics within a block of code.
- [stopMeasuring](stopmeasuring%28%29.md): Ends recording performance metrics within a block of code.
- [defaultMetrics](defaultmetrics.md): An array of default metrics the test uses to record performance.
- [defaultMeasureOptions](defaultmeasureoptions.md): The default measurement options the test uses to record performance.
- [XCTPerformanceMetric](../xctperformancemetric.md): Performance metrics that the test records.
