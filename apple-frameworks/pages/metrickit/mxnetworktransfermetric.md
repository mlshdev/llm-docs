> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxnetworktransfermetric](https://developer.apple.com/documentation/metrickit/mxnetworktransfermetric)

# MXNetworkTransferMetric (Swift)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object representing metrics about network transfers.

> Use [MetricResult](metricresult.md), and read the [TotalWiFiDownloadMetric](totalwifidownloadmetric.md), [TotalWiFiUploadMetric](totalwifiuploadmetric.md), [TotalCellularDownloadMetric](totalcellulardownloadmetric.md), or [TotalCellularUploadMetric](totalcellularuploadmetric.md) cases instead.

## Declaration

```swift
class MXNetworkTransferMetric
```

## Topics

### Reading wireless data use

- [cumulativeCellularDownload](mxnetworktransfermetric/cumulativecellulardownload.md): Deprecated. The total amount of data downloaded over the cellular connection.
- [cumulativeCellularUpload](mxnetworktransfermetric/cumulativecellularupload.md): Deprecated. The total amount of data uploaded over the cellular connection.
- [cumulativeWifiDownload](mxnetworktransfermetric/cumulativewifidownload.md): Deprecated. The total amount of data downloaded over the WiFi connection.
- [cumulativeWifiUpload](mxnetworktransfermetric/cumulativewifiupload.md): Deprecated. The total amount of data uploaded over the WiFi connection.

## Relationships

### Inherits From

- [MXMetric](mxmetric.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Battery and resource metrics

- [MXCellularConditionMetric](mxcellularconditionmetric.md): Deprecated. An object representing metrics about the condition of the cellular network.
- [MXCPUMetric](mxcpumetric.md): Deprecated. An object representing metrics about the use of the CPU.
- [MXDisplayMetric](mxdisplaymetric.md): Deprecated. An object representing metrics about the power used to display the app on the screen.
- [MXGPUMetric](mxgpumetric.md): Deprecated. An object representing metrics about the use of the GPU.
- [MXLocationActivityMetric](mxlocationactivitymetric.md): Deprecated. An object representing metrics about the use of location-tracking features of a device.

# MXNetworkTransferMetric (Objective-C)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object representing metrics about network transfers.

> Use [MetricResult](metricresult.md), and read the [TotalWiFiDownloadMetric](totalwifidownloadmetric.md), [TotalWiFiUploadMetric](totalwifiuploadmetric.md), [TotalCellularDownloadMetric](totalcellulardownloadmetric.md), or [TotalCellularUploadMetric](totalcellularuploadmetric.md) cases instead.

## Declaration

```objectivec
@interface MXNetworkTransferMetric : MXMetric
```

## Topics

### Reading wireless data use

- [cumulativeCellularDownload](mxnetworktransfermetric/cumulativecellulardownload.md): Deprecated. The total amount of data downloaded over the cellular connection.
- [cumulativeCellularUpload](mxnetworktransfermetric/cumulativecellularupload.md): Deprecated. The total amount of data uploaded over the cellular connection.
- [cumulativeWifiDownload](mxnetworktransfermetric/cumulativewifidownload.md): Deprecated. The total amount of data downloaded over the WiFi connection.
- [cumulativeWifiUpload](mxnetworktransfermetric/cumulativewifiupload.md): Deprecated. The total amount of data uploaded over the WiFi connection.

## Relationships

### Inherits From

- [MXMetric](mxmetric.md)

## See Also

### Battery and resource metrics

- [MXCellularConditionMetric](mxcellularconditionmetric.md): Deprecated. An object representing metrics about the condition of the cellular network.
- [MXCPUMetric](mxcpumetric.md): Deprecated. An object representing metrics about the use of the CPU.
- [MXDisplayMetric](mxdisplaymetric.md): Deprecated. An object representing metrics about the power used to display the app on the screen.
- [MXGPUMetric](mxgpumetric.md): Deprecated. An object representing metrics about the use of the GPU.
- [MXLocationActivityMetric](mxlocationactivitymetric.md): Deprecated. An object representing metrics about the use of location-tracking features of a device.
