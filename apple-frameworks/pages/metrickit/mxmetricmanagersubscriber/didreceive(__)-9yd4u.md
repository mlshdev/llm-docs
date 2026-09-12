> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxmetricmanagersubscriber/didreceive(_:)-9yd4u](https://developer.apple.com/documentation/metrickit/mxmetricmanagersubscriber/didreceive(_:)-9yd4u)

# didReceive(\_:) (Swift)

**Framework:** MetricKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Delivers new diagnostic reports to the object registered with the metrics manager.

> Use [diagnosticReports](../metricmanager/diagnosticreports.md) instead.

## Declaration

```swift
optional func didReceive(_ payloads: [MXDiagnosticPayload])
```

## Parameters

- `payloads`: An array of new diagnostic reports.

<a id="Discussion"></a>

## Discussion

The system calls this method at most once per day. It’s safe to process the payload on a separate thread.

## See Also

### Receiving reports

- [didReceive(\_:)](didreceive%28__%29-3zq5g.md): Deprecated. Delivers new metrics reports to the object registered with the metrics manager.

# didReceiveDiagnosticPayloads: (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Delivers new diagnostic reports to the object registered with the metrics manager.

> Use [diagnosticReports](../metricmanager/diagnosticreports.md) instead.

## Declaration

```objectivec
- (void) didReceiveDiagnosticPayloads:(NSArray<MXDiagnosticPayload *> *) payloads;
```

## Parameters

- `payloads`: An array of new diagnostic reports.

<a id="Discussion"></a>

## Discussion

The system calls this method at most once per day. It’s safe to process the payload on a separate thread.

## See Also

### Receiving reports

- [didReceiveMetricPayloads:](didreceive%28__%29-3zq5g.md): Deprecated. Delivers new metrics reports to the object registered with the metrics manager.
