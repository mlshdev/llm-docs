> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/deviceactivity/deviceactivitydata/activitysegments](https://developer.apple.com/documentation/deviceactivity/deviceactivitydata/activitysegments)

# activitySegments

**Framework:** DeviceActivity  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Access the activity divided into segments.

## Declaration

```swift
var activitySegments: DeviceActivityResults<DeviceActivityData.ActivitySegment> { get }
```

<a id="Discussion"></a>

## Discussion

The [segmentInterval](segmentinterval.md) that your app requests via a [DeviceActivityFilter](../deviceactivityfilter.md) determines the length of each activity segment.

## See Also

### Managing activity data

- [segmentInterval](segmentinterval.md): Access the segment interval of each activity segment.
- [lastUpdatedDate](lastupdateddate.md): Access the date when the system last updated the data for this device.
- [DeviceActivityData.ActivitySegment](activitysegment.md): Activity data for a specific time interval.
