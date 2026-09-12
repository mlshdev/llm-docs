> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/metricreport/encodingformat](https://developer.apple.com/documentation/metrickit/metricreport/encodingformat)

# MetricReport.EncodingFormat

**Framework:** MetricKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

A value that controls the JSON structure used when encoding a metric report.

## Declaration

```swift
enum EncodingFormat
```

<a id="Discussion"></a>

## Discussion

Set [encodingFormatKey](encodingformatkey.md) in a `JSONEncoder`’s `userInfo` dictionary to choose the encoding format before archiving reports:

```swift
let encoder = JSONEncoder()
encoder.userInfo[MetricReport.encodingFormatKey] = MetricReport.EncodingFormat.byStateReportingDomain
let data = try encoder.encode(report)
```

The `.byStateReportingDomain` format organizes metric values by [MetricGroup](../metricgroup.md), which can be more convenient for log pipelines that process one category at a time.

## Topics

### Encoding formats

- [MetricReport.EncodingFormat.default](encodingformat/default.md): Default format with state entries and interval entries as arrays.
- [MetricReport.EncodingFormat.byStateReportingDomain](encodingformat/bystatereportingdomain.md): Format with entries organized by StateReporting domain.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Metric data

- [intervalEntries](intervalentries.md): The interval entries in this metric report, including the full-day aggregate.
- [stateEntries](stateentries.md): The state entries in this metric report, populated when state reporting is enabled.
- [encodingFormatKey](encodingformatkey.md): A `CodingUserInfoKey` for selecting the JSON encoding format of a metric report.
