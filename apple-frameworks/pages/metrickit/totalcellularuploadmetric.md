> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/totalcellularuploadmetric](https://developer.apple.com/documentation/metrickit/totalcellularuploadmetric)

# TotalCellularUploadMetric

**Framework:** MetricKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+

A metric that measures the total data uploaded over a cellular connection.

## Declaration

```swift
struct TotalCellularUploadMetric
```

<a id="Discussion"></a>

## Discussion

This metric corresponds to the [MetricResult.totalCellularUpload(\_:)](metricresult/totalcellularupload%28__%29.md) case. It appears only in [intervalEntries](metricreport/intervalentries.md) and is not included in state entries.

This value covers all cellular data regardless of whether the connection used LTE, 5G, or another technology.

## Topics

### Measurements

- [value](totalcellularuploadmetric/value.md): The total amount of data uploaded over the cellular connection.

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
- [TotalWiFiDownloadMetric](totalwifidownloadmetric.md): A metric that measures the total data downloaded over WiFi.
- [TotalCellularDownloadMetric](totalcellulardownloadmetric.md): A metric that measures the total data downloaded over a cellular connection.
