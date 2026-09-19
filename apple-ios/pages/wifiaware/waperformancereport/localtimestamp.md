> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/wifiaware/waperformancereport/localtimestamp

# localTimestamp

**Framework:** Wi-Fi Aware  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The time the report was generated, using a local monotonically increasing clock.

## Declaration

```swift
let localTimestamp: ContinuousClock.Instant
```

## See Also

### Reporting the data collection time

- [timestamp](timestamp.md): The time that the framework generates the report.
