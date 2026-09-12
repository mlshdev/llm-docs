> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxmetricmanager/pastpayloads](https://developer.apple.com/documentation/metrickit/mxmetricmanager/pastpayloads)

# pastPayloads (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Returns an array of the daily metrics reports generated since the last allocation of the shared manager instance.

> Use [metricReports](../metricmanager/metricreports.md) instead.

## Declaration

```swift
var pastPayloads: [MXMetricPayload] { get }
```

## See Also

### Retrieving previous reports

- [pastDiagnosticPayloads](pastdiagnosticpayloads.md): Deprecated. The diagnostic reports since the last initialization of the shared manager instance.

# pastPayloads (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Returns an array of the daily metrics reports generated since the last allocation of the shared manager instance.

> Use [metricReports](../metricmanager/metricreports.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nonnull) NSArray<MXMetricPayload *> * pastPayloads;
```

## See Also

### Retrieving previous reports

- [pastDiagnosticPayloads](pastdiagnosticpayloads.md): Deprecated. The diagnostic reports since the last initialization of the shared manager instance.
