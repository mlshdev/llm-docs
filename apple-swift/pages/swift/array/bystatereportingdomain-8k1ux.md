> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/array/bystatereportingdomain-8k1ux](https://developer.apple.com/documentation/swift/array/bystatereportingdomain-8k1ux)

# byStateReportingDomain

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

State entries grouped by their StateReporting domain.

## Declaration

```swift
var byStateReportingDomain: [StateReportingDomain : [MetricReport.StateEntry]] { get }
```

<a id="discussion"></a>

## Discussion

State entries with active StateReporting context are grouped by their domain.
