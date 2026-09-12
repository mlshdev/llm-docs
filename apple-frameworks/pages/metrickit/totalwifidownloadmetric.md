> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/totalwifidownloadmetric](https://developer.apple.com/documentation/metrickit/totalwifidownloadmetric)

# TotalWiFiDownloadMetric

**Framework:** MetricKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

A metric that measures the total data downloaded over WiFi.

## Declaration

```swift
struct TotalWiFiDownloadMetric
```

<a id="Discussion"></a>

## Discussion

This metric corresponds to the [MetricResult.totalWiFiDownload(\_:)](metricresult/totalwifidownload%28__%29.md) case. It appears only in [intervalEntries](metricreport/intervalentries.md) and is not included in state entries.

## Topics

### Measurements

- [value](totalwifidownloadmetric/value.md): The total amount of data downloaded over the WiFi connection.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Network metrics

- [TotalWiFiUploadMetric](totalwifiuploadmetric.md): A metric that measures the total data uploaded over WiFi.
- [TotalCellularUploadMetric](totalcellularuploadmetric.md): A metric that measures the total data uploaded over a cellular connection.
- [TotalCellularDownloadMetric](totalcellulardownloadmetric.md): A metric that measures the total data downloaded over a cellular connection.
