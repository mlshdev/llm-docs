> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxmetricmanager/pastdiagnosticpayloads](https://developer.apple.com/documentation/metrickit/mxmetricmanager/pastdiagnosticpayloads)

# pastDiagnosticPayloads (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The diagnostic reports since the last initialization of the shared manager instance.

> Use [diagnosticReports](../metricmanager/diagnosticreports.md) instead.

## Declaration

```swift
var pastDiagnosticPayloads: [MXDiagnosticPayload] { get }
```

<a id="Discussion"></a>

## Discussion

You can access this property after you register your first subscriber using [add(\_:)](add%28__%29.md) and receive at least one [MXMetricManagerSubscriber](../mxmetricmanagersubscriber.md) callback.

This property only reflects diagnostic reports from the current session and lifetime of the [MXMetricManager](../mxmetricmanager.md) instance. It doesn’t include diagnostics from previous app instances.

## See Also

### Retrieving previous reports

- [pastPayloads](pastpayloads.md): Deprecated. Returns an array of the daily metrics reports generated since the last allocation of the shared manager instance.

# pastDiagnosticPayloads (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The diagnostic reports since the last initialization of the shared manager instance.

> Use [diagnosticReports](../metricmanager/diagnosticreports.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nonnull) NSArray<MXDiagnosticPayload *> * pastDiagnosticPayloads;
```

<a id="Discussion"></a>

## Discussion

You can access this property after you register your first subscriber using [addSubscriber:](add%28__%29.md) and receive at least one [MXMetricManagerSubscriber](../mxmetricmanagersubscriber.md) callback.

This property only reflects diagnostic reports from the current session and lifetime of the [MXMetricManager](../mxmetricmanager.md) instance. It doesn’t include diagnostics from previous app instances.

## See Also

### Retrieving previous reports

- [pastPayloads](pastpayloads.md): Deprecated. Returns an array of the daily metrics reports generated since the last allocation of the shared manager instance.
