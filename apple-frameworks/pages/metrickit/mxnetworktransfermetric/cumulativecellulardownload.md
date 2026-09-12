> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxnetworktransfermetric/cumulativecellulardownload](https://developer.apple.com/documentation/metrickit/mxnetworktransfermetric/cumulativecellulardownload)

# cumulativeCellularDownload (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The total amount of data downloaded over the cellular connection.

> Use [TotalCellularDownloadMetric](../totalcellulardownloadmetric.md) instead.

## Declaration

```swift
var cumulativeCellularDownload: Measurement<UnitInformationStorage> { get }
```

## See Also

### Reading wireless data use

- [cumulativeCellularUpload](cumulativecellularupload.md): Deprecated. The total amount of data uploaded over the cellular connection.
- [cumulativeWifiDownload](cumulativewifidownload.md): Deprecated. The total amount of data downloaded over the WiFi connection.
- [cumulativeWifiUpload](cumulativewifiupload.md): Deprecated. The total amount of data uploaded over the WiFi connection.

# cumulativeCellularDownload (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The total amount of data downloaded over the cellular connection.

> Use [TotalCellularDownloadMetric](../totalcellulardownloadmetric.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nonnull) NSMeasurement<NSUnitInformationStorage *> * cumulativeCellularDownload;
```

## See Also

### Reading wireless data use

- [cumulativeCellularUpload](cumulativecellularupload.md): Deprecated. The total amount of data uploaded over the cellular connection.
- [cumulativeWifiDownload](cumulativewifidownload.md): Deprecated. The total amount of data downloaded over the WiFi connection.
- [cumulativeWifiUpload](cumulativewifiupload.md): Deprecated. The total amount of data uploaded over the WiFi connection.
