> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctperformancemetric](https://developer.apple.com/documentation/xctest/xctperformancemetric)

# XCTPerformanceMetric (Swift)

**Framework:** XCTest  
**Kind:** Structure

Performance metrics that the test records.

## Declaration

```swift
struct XCTPerformanceMetric
```

## Topics

### Measuring Elapsed Time

- [wallClockTime](xctperformancemetric/wallclocktime.md): A performance metric that records the time in seconds to execute a block of code.

### Initializing an Item

- [init(\_:)](xctperformancemetric/init%28__%29.md): Creates a new instance with the specified raw value.
- [init(rawValue:)](xctperformancemetric/init%28rawvalue_%29.md): Creates a new instance with the specified raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Measuring Performance

- [measure(\_:)](xctestcase/measure%28__%29.md): Measures the performance of a block of code.
- [measureMetrics(\_:automaticallyStartMeasuring:for:)](xctestcase/measuremetrics%28__automaticallystartmeasuring_for_%29.md): Measures the performance of a block of code, optionally deferring the starting point for measurement.
- [measure(metrics:block:)](xctestcase/measure%28metrics_block_%29.md): Records the selected metrics for a block of code.
- [measure(metrics:options:block:)](xctestcase/measure%28metrics_options_block_%29.md): Records the selected metrics, using the specified measurement options, for a block of code.
- [measure(options:block:)](xctestcase/measure%28options_block_%29.md): Records the performance, using the specified measurement options, for a block of code.
- [startMeasuring()](xctestcase/startmeasuring%28%29.md): Starts recording performance metrics within a block of code.
- [stopMeasuring()](xctestcase/stopmeasuring%28%29.md): Ends recording performance metrics within a block of code.
- [defaultPerformanceMetrics](xctestcase/defaultperformancemetrics.md): An array of default performance metrics the test records.
- [defaultMetrics](xctestcase/defaultmetrics.md): An array of default metrics the test uses to record performance.
- [defaultMeasureOptions](xctestcase/defaultmeasureoptions.md): The default measurement options the test uses to record performance.

# XCTPerformanceMetric (Objective-C)

**Framework:** XCTest  
**Kind:** Type Alias

Performance metrics that the test records.

## Declaration

```objectivec
typedef NSString * XCTPerformanceMetric;
```

## Topics

### Measuring Elapsed Time

- [XCTPerformanceMetric_WallClockTime](xctperformancemetric/wallclocktime.md): A performance metric that records the time in seconds to execute a block of code.

## See Also

### Measuring Performance

- [measureBlock:](xctestcase/measure%28__%29.md): Measures the performance of a block of code.
- [measureMetrics:automaticallyStartMeasuring:forBlock:](xctestcase/measuremetrics%28__automaticallystartmeasuring_for_%29.md): Measures the performance of a block of code, optionally deferring the starting point for measurement.
- [measureWithMetrics:block:](xctestcase/measure%28metrics_block_%29.md): Records the selected metrics for a block of code.
- [measureWithMetrics:options:block:](xctestcase/measure%28metrics_options_block_%29.md): Records the selected metrics, using the specified measurement options, for a block of code.
- [measureWithOptions:block:](xctestcase/measure%28options_block_%29.md): Records the performance, using the specified measurement options, for a block of code.
- [startMeasuring](xctestcase/startmeasuring%28%29.md): Starts recording performance metrics within a block of code.
- [stopMeasuring](xctestcase/stopmeasuring%28%29.md): Ends recording performance metrics within a block of code.
- [defaultPerformanceMetrics](xctestcase/defaultperformancemetrics.md): An array of default performance metrics the test records.
- [defaultMetrics](xctestcase/defaultmetrics.md): An array of default metrics the test uses to record performance.
- [defaultMeasureOptions](xctestcase/defaultmeasureoptions.md): The default measurement options the test uses to record performance.
