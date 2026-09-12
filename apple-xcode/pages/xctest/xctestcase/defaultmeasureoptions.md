> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestcase/defaultmeasureoptions](https://developer.apple.com/documentation/xctest/xctestcase/defaultmeasureoptions)

# defaultMeasureOptions (Swift)

**Framework:** XCTest  
**Kind:** Type Property

The default measurement options the test uses to record performance.

## Declaration

```swift
@NSCopying class var defaultMeasureOptions: XCTMeasureOptions { get }
```

<a id="Discussion"></a>

## Discussion

The default measurement options the test uses when you call [measure(\_:)](measure%28__%29.md). Subclasses of [XCTestCase](../xctestcase.md) can override this property to change the default measurement options.

## See Also

### Measuring Performance

- [measure(\_:)](measure%28__%29.md): Measures the performance of a block of code.
- [measureMetrics(\_:automaticallyStartMeasuring:for:)](measuremetrics%28__automaticallystartmeasuring_for_%29.md): Measures the performance of a block of code, optionally deferring the starting point for measurement.
- [measure(metrics:block:)](measure%28metrics_block_%29.md): Records the selected metrics for a block of code.
- [measure(metrics:options:block:)](measure%28metrics_options_block_%29.md): Records the selected metrics, using the specified measurement options, for a block of code.
- [measure(options:block:)](measure%28options_block_%29.md): Records the performance, using the specified measurement options, for a block of code.
- [startMeasuring()](startmeasuring%28%29.md): Starts recording performance metrics within a block of code.
- [stopMeasuring()](stopmeasuring%28%29.md): Ends recording performance metrics within a block of code.
- [defaultPerformanceMetrics](defaultperformancemetrics.md): An array of default performance metrics the test records.
- [defaultMetrics](defaultmetrics.md): An array of default metrics the test uses to record performance.
- [XCTPerformanceMetric](../xctperformancemetric.md): Performance metrics that the test records.

# defaultMeasureOptions (Objective-C)

**Framework:** XCTest  
**Kind:** Type Property

The default measurement options the test uses to record performance.

## Declaration

```objectivec
@property (class, copy, readonly) XCTMeasureOptions * defaultMeasureOptions;
```

<a id="Discussion"></a>

## Discussion

The default measurement options the test uses when you call [measureBlock:](measure%28__%29.md). Subclasses of [XCTestCase](../xctestcase.md) can override this property to change the default measurement options.

## See Also

### Measuring Performance

- [measureBlock:](measure%28__%29.md): Measures the performance of a block of code.
- [measureMetrics:automaticallyStartMeasuring:forBlock:](measuremetrics%28__automaticallystartmeasuring_for_%29.md): Measures the performance of a block of code, optionally deferring the starting point for measurement.
- [measureWithMetrics:block:](measure%28metrics_block_%29.md): Records the selected metrics for a block of code.
- [measureWithMetrics:options:block:](measure%28metrics_options_block_%29.md): Records the selected metrics, using the specified measurement options, for a block of code.
- [measureWithOptions:block:](measure%28options_block_%29.md): Records the performance, using the specified measurement options, for a block of code.
- [startMeasuring](startmeasuring%28%29.md): Starts recording performance metrics within a block of code.
- [stopMeasuring](stopmeasuring%28%29.md): Ends recording performance metrics within a block of code.
- [defaultPerformanceMetrics](defaultperformancemetrics.md): An array of default performance metrics the test records.
- [defaultMetrics](defaultmetrics.md): An array of default metrics the test uses to record performance.
- [XCTPerformanceMetric](../xctperformancemetric.md): Performance metrics that the test records.
