> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxmetricmanagersubscriber/didreceive(_:)-3zq5g](https://developer.apple.com/documentation/metrickit/mxmetricmanagersubscriber/didreceive(_:)-3zq5g)

# didReceive(\_:) (Swift)

**Framework:** MetricKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Delivers new metrics reports to the object registered with the metrics manager.

> Use [metricReports](../metricmanager/metricreports.md) instead.

## Declaration

```swift
optional func didReceive(_ payloads: [MXMetricPayload])
```

## Parameters

- `payloads`: An array of new metrics reports.

<a id="Discussion"></a>

## Discussion

The system calls this method at most once per day. It’s safe to process the payload on a separate thread.

> **Note**

>  MetricKit delivers daily metric reports from iOS 13 or later, and macOS 26 or later.

## See Also

### Receiving reports

- [didReceive(\_:)](didreceive%28__%29-9yd4u.md): Deprecated. Delivers new diagnostic reports to the object registered with the metrics manager.

# didReceiveMetricPayloads: (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Delivers new metrics reports to the object registered with the metrics manager.

> Use [metricReports](../metricmanager/metricreports.md) instead.

## Declaration

```objectivec
- (void) didReceiveMetricPayloads:(NSArray<MXMetricPayload *> *) payloads;
```

## Parameters

- `payloads`: An array of new metrics reports.

<a id="Discussion"></a>

## Discussion

The system calls this method at most once per day. It’s safe to process the payload on a separate thread.

> **Note**

>  MetricKit delivers daily metric reports from iOS 13 or later, and macOS 26 or later.

## See Also

### Receiving reports

- [didReceiveDiagnosticPayloads:](didreceive%28__%29-9yd4u.md): Deprecated. Delivers new diagnostic reports to the object registered with the metrics manager.
