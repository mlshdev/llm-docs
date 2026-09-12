> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/metricreport/encodingformatkey](https://developer.apple.com/documentation/metrickit/metricreport/encodingformatkey)

# encodingFormatKey

**Framework:** MetricKit  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

A `CodingUserInfoKey` for selecting the JSON encoding format of a metric report.

## Declaration

```swift
static let encodingFormatKey: CodingUserInfoKey
```

## Mentioned In

- [Analyzing app performance with MetricKit](../analyzing-app-performance-with-metrickit.md)

<a id="Discussion"></a>

## Discussion

Set this key in a `JSONEncoder`’s `userInfo` dictionary before encoding a [MetricReport](../metricreport.md) to control the JSON output structure:

```swift
let encoder = JSONEncoder()
encoder.userInfo[MetricReport.encodingFormatKey] = MetricReport.EncodingFormat.byStateReportingDomain
let data = try encoder.encode(report)
```

When omitted, the encoder uses the default format.

## See Also

### Metric data

- [intervalEntries](intervalentries.md): The interval entries in this metric report, including the full-day aggregate.
- [stateEntries](stateentries.md): The state entries in this metric report, populated when state reporting is enabled.
- [MetricReport.EncodingFormat](encodingformat.md): A value that controls the JSON structure used when encoding a metric report.
