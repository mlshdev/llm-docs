> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/metricreport/encodingformat/bystatereportingdomain](https://developer.apple.com/documentation/metrickit/metricreport/encodingformat/bystatereportingdomain)

# MetricReport.EncodingFormat.byStateReportingDomain

**Framework:** MetricKit  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

Format with entries organized by StateReporting domain.

## Declaration

```swift
case byStateReportingDomain
```

## Mentioned In

- [Analyzing app performance with MetricKit](../../analyzing-app-performance-with-metrickit.md)

<a id="discussion"></a>

## Discussion

State entries are grouped by domain, and interval entries have their states grouped by domain within each entry.

## See Also

### Encoding formats

- [MetricReport.EncodingFormat.default](default.md): Default format with state entries and interval entries as arrays.
