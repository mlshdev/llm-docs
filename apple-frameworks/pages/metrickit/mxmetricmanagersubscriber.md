> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxmetricmanagersubscriber](https://developer.apple.com/documentation/metrickit/mxmetricmanagersubscriber)

# MXMetricManagerSubscriber (Swift)

**Framework:** MetricKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A protocol defining a method for receiving a daily metrics report.

> Use [MetricManager](metricmanager.md) instead.

## Declaration

```swift
protocol MXMetricManagerSubscriber : NSObjectProtocol
```

## Topics

### Receiving reports

- [didReceive(\_:)](mxmetricmanagersubscriber/didreceive%28__%29-3zq5g.md): Deprecated. Delivers new metrics reports to the object registered with the metrics manager.
- [didReceive(\_:)](mxmetricmanagersubscriber/didreceive%28__%29-9yd4u.md): Deprecated. Delivers new diagnostic reports to the object registered with the metrics manager.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Metric and diagnostic reports

- [MXMetricManager](mxmetricmanager.md): Deprecated. The shared object that registers you to receive metrics, creates logs for custom metrics, and gives access to past reports.
- [MXMetricPayload](mxmetricpayload.md): Deprecated. An object that encapsulates a daily metrics report.
- [MXDiagnosticPayload](mxdiagnosticpayload.md): Deprecated. An object that encapsulates a diagnostic report.

# MXMetricManagerSubscriber (Objective-C)

**Framework:** MetricKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A protocol defining a method for receiving a daily metrics report.

> Use [MetricManager](metricmanager.md) instead.

## Declaration

```objectivec
@protocol MXMetricManagerSubscriber <NSObject>
```

## Topics

### Receiving reports

- [didReceiveMetricPayloads:](mxmetricmanagersubscriber/didreceive%28__%29-3zq5g.md): Deprecated. Delivers new metrics reports to the object registered with the metrics manager.
- [didReceiveDiagnosticPayloads:](mxmetricmanagersubscriber/didreceive%28__%29-9yd4u.md): Deprecated. Delivers new diagnostic reports to the object registered with the metrics manager.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Metric and diagnostic reports

- [MXMetricManager](mxmetricmanager.md): Deprecated. The shared object that registers you to receive metrics, creates logs for custom metrics, and gives access to past reports.
- [MXMetricPayload](mxmetricpayload.md): Deprecated. An object that encapsulates a daily metrics report.
- [MXDiagnosticPayload](mxdiagnosticpayload.md): Deprecated. An object that encapsulates a diagnostic report.
