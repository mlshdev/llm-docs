> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/deviceactivity/deviceactivitydata](https://developer.apple.com/documentation/deviceactivity/deviceactivitydata)

# DeviceActivityData

**Framework:** Device Activity  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Activity data for a person on a specific device.

## Declaration

```swift
struct DeviceActivityData
```

## Topics

### Getting activity data

- [activityData(filteredBy:using:)](deviceactivitydata/activitydata%28filteredby_using_%29.md): Requests device activity data using a filter.

### Accessing device and user information

- [user](deviceactivitydata/user-swift.property.md): Access the person associated with the activity report.
- [device](deviceactivitydata/device-swift.property.md): Access the device associated with the activity report.
- [DeviceActivityData.User](deviceactivitydata/user-swift.struct.md): Information about a person associated with an activity report.
- [DeviceActivityData.Device](deviceactivitydata/device-swift.struct.md): Device information for activity reporting.

### Managing activity data

- [activitySegments](deviceactivitydata/activitysegments.md): Access the activity divided into segments.
- [segmentInterval](deviceactivitydata/segmentinterval.md): Access the segment interval of each activity segment.
- [lastUpdatedDate](deviceactivitydata/lastupdateddate.md): Access the date when the system last updated the data for this device.
- [DeviceActivityData.ActivitySegment](deviceactivitydata/activitysegment.md): Activity data for a specific time interval.

### Organizing activity by type

- [DeviceActivityData.ApplicationActivity](deviceactivitydata/applicationactivity.md): Activity data for an application.
- [DeviceActivityData.CategoryActivity](deviceactivitydata/categoryactivity.md): Categorized representation of application and web domain activity.
- [DeviceActivityData.WebDomainActivity](deviceactivitydata/webdomainactivity.md): Activity data for a web domain.

### Managing data access

- [DeviceActivityData.Policy](deviceactivitydata/policy.md): The policy for fetching activity data.
- [DeviceActivityData.Error](deviceactivitydata/error.md): Errors that may occur when attempting to fetch activity data.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Filter activity data

- [DeviceActivityFilter](deviceactivityfilter.md): A type that filters the device activity data to include in a report.
- [DeviceActivityResults](deviceactivityresults.md): An asynchronous sequence of filtered device activity results.
