> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/mxnetworktransfermetric/cumulativewifiupload

# cumulativeWifiUpload (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The total amount of data uploaded over the WiFi connection.

> Use [TotalWiFiUploadMetric](../totalwifiuploadmetric.md) instead.

## Declaration

```swift
var cumulativeWifiUpload: Measurement<UnitInformationStorage> { get }
```

## See Also

### Reading wireless data use

- [cumulativeCellularDownload](cumulativecellulardownload.md): Deprecated. The total amount of data downloaded over the cellular connection.
- [cumulativeCellularUpload](cumulativecellularupload.md): Deprecated. The total amount of data uploaded over the cellular connection.
- [cumulativeWifiDownload](cumulativewifidownload.md): Deprecated. The total amount of data downloaded over the WiFi connection.

# cumulativeWifiUpload (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The total amount of data uploaded over the WiFi connection.

> Use [TotalWiFiUploadMetric](../totalwifiuploadmetric.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nonnull) NSMeasurement<NSUnitInformationStorage *> * cumulativeWifiUpload;
```

## See Also

### Reading wireless data use

- [cumulativeCellularDownload](cumulativecellulardownload.md): Deprecated. The total amount of data downloaded over the cellular connection.
- [cumulativeCellularUpload](cumulativecellularupload.md): Deprecated. The total amount of data uploaded over the cellular connection.
- [cumulativeWifiDownload](cumulativewifidownload.md): Deprecated. The total amount of data downloaded over the WiFi connection.
