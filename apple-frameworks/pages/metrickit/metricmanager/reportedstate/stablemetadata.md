> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/metricmanager/reportedstate/stablemetadata](https://developer.apple.com/documentation/metrickit/metricmanager/reportedstate/stablemetadata)

# stableMetadata

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

Context dictionary containing state-specific information

## Declaration

```swift
let stableMetadata: [String : ReportableMetadataValue]
```

<a id="discussion"></a>

## Discussion

ReportableMetadataValue is defined in the StateReporting framework.

> **Note**

> Only stable metadata from StateReporting are aggregated in MetricKit.
