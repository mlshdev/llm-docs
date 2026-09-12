> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxdiagnosticpayload/timestampbegin](https://developer.apple.com/documentation/metrickit/mxdiagnosticpayload/timestampbegin)

# timeStampBegin (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The starting time of the reporting period.

> Use [timeRange](../diagnosticreport/timerange.md) instead.

## Declaration

```swift
var timeStampBegin: Date { get }
```

## See Also

### Reading information about the payload

- [timeStampEnd](timestampend.md): Deprecated. The ending time of the reporting period.

# timeStampBegin (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The starting time of the reporting period.

> Use [timeRange](../diagnosticreport/timerange.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nonnull) NSDate * timeStampBegin;
```

## See Also

### Reading information about the payload

- [timeStampEnd](timestampend.md): Deprecated. The ending time of the reporting period.
