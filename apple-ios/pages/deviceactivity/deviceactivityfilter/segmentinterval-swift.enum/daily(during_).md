> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/deviceactivity/deviceactivityfilter/segmentinterval-swift.enum/daily(during:)](https://developer.apple.com/documentation/deviceactivity/deviceactivityfilter/segmentinterval-swift.enum/daily(during:))

# DeviceActivityFilter.SegmentInterval.daily(during:)

**Framework:** Device Activity  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Indicates that the system aggregates data into daily segments within the specified interval.

## Declaration

```swift
case daily(during: DateInterval)
```

<a id="discussion"></a>

## Discussion

The system disregards any date components in the interval that are smaller than `.day` and instead uses the start of the day specified by `interval.start` and the end of the day specified by `interval.end`.
