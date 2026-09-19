> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/mxdiagnosticpayload/timestampend

# timeStampEnd (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.2) · iPadOS 14.0+ (deprecated in 27.2) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The ending time of the reporting period.

> Use [timeRange](../diagnosticreport/timerange.md) instead.

## Declaration

```swift
var timeStampEnd: Date { get }
```

## See Also

### Reading information about the payload

- [timeStampBegin](timestampbegin.md): Deprecated. The starting time of the reporting period.

# timeStampEnd (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.2) · iPadOS 14.0+ (deprecated in 27.2) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The ending time of the reporting period.

> Use [timeRange](../diagnosticreport/timerange.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nonnull) NSDate * timeStampEnd;
```

## See Also

### Reading information about the payload

- [timeStampBegin](timestampbegin.md): Deprecated. The starting time of the reporting period.
