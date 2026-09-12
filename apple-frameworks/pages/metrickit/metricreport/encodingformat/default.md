> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/metricreport/encodingformat/default](https://developer.apple.com/documentation/metrickit/metricreport/encodingformat/default)

# MetricReport.EncodingFormat.default

**Framework:** MetricKit  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

Default format with state entries and interval entries as arrays.

## Declaration

```swift
case `default`
```

<a id="discussion"></a>

## Discussion

State entries are provided as an array, interval entries are provided as an array with states as arrays within each entry.

## See Also

### Encoding formats

- [MetricReport.EncodingFormat.byStateReportingDomain](bystatereportingdomain.md): Format with entries organized by StateReporting domain.
