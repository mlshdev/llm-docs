> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/deviceactivity/deviceactivityfilter/segmentinterval-swift.enum/hourly(during:)](https://developer.apple.com/documentation/deviceactivity/deviceactivityfilter/segmentinterval-swift.enum/hourly(during:))

# DeviceActivityFilter.SegmentInterval.hourly(during:)

**Framework:** Device Activity  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Indicates that the system aggregates data into hourly segments within the specified interval.

## Declaration

```swift
case hourly(during: DateInterval = DateInterval(
                start: Calendar.current.startOfDay(for: .now),
                end: .now
            ))
```

<a id="discussion"></a>

## Discussion

If you do not provide an interval, then the system aggregates device activity into hour-long segments for the current day. The system disregards any date components in the interval that are smaller than `.hour` and instead uses the start of the hour specified by `interval.start` and the end of the hour specified by `interval.end`.
