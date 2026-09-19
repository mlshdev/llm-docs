> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/deviceactivity/deviceactivityfilter/segmentinterval-swift.enum/weekly(during:)

# DeviceActivityFilter.SegmentInterval.weekly(during:)

**Framework:** Device Activity  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Indicates that the system aggregates data into weekly segments within the specified interval.

## Declaration

```swift
case weekly(during: DateInterval)
```

<a id="discussion"></a>

## Discussion

The system disregards any date components in the interval that are smaller than `.weekOfYear` and instead uses the start of the week specified by `interval.start` and the end of the week specified by `interval.end`.
