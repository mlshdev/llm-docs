> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/array/fulldayentry

# fullDayEntry

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

The full day interval entry spanning the entire report collection period.

## Declaration

```swift
var fullDayEntry: MetricReport.IntervalEntry { get }
```

<a id="discussion"></a>

## Discussion

This entry contains metrics aggregated across the entire aggregation period while other interval entries represent breakdowns within that period.
