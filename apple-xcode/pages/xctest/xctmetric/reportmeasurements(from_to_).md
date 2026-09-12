> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctmetric/reportmeasurements(from:to:)](https://developer.apple.com/documentation/xctest/xctmetric/reportmeasurements(from:to:))

# reportMeasurements(from:to:) (Swift)

**Framework:** XCTest  
**Kind:** Instance Method

Reports the measurements gathered for a metric between specific timestamps.

## Declaration

```swift
func reportMeasurements(from startTime: XCTPerformanceMeasurementTimestamp, to endTime: XCTPerformanceMeasurementTimestamp) throws -> [XCTPerformanceMeasurement]
```

## Parameters

- `startTime`: A timestamp that represents the time at which the measured code began to execute.
- `endTime`: A timestamp that represents the time at which the measured code finished executing.

<a id="return-value"></a>

## Return Value

An array of the measurements gathered by this metric during the requested interval.

<a id="Discussion"></a>

## Discussion

Report the measurements gathered during the execution of measured code in a performance test. Use the `startTime` and `endTime` parameters to refine the accuracy of the reported measurements.

# reportMeasurementsFromStartTime:toEndTime:error: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Reports the measurements gathered for a metric between specific timestamps.

## Declaration

```objectivec
- (NSArray<XCTPerformanceMeasurement *> *) reportMeasurementsFromStartTime:(XCTPerformanceMeasurementTimestamp *) startTime toEndTime:(XCTPerformanceMeasurementTimestamp *) endTime error:(NSError **) error;
```

## Parameters

- `startTime`: A timestamp that represents the time at which the measured code began to execute.
- `endTime`: A timestamp that represents the time at which the measured code finished executing.
- `error`: In Objective-C, on return, if the metric could not gather measurements for the requested interval, points to an error describing the failure.

<a id="return-value"></a>

## Return Value

An array of the measurements gathered by this metric during the requested interval. On failure, this method returns `nil`.

<a id="Discussion"></a>

## Discussion

Report the measurements gathered during the execution of measured code in a performance test. Use the `startTime` and `endTime` parameters to refine the accuracy of the reported measurements.
