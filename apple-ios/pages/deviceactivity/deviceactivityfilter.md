> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/deviceactivity/deviceactivityfilter](https://developer.apple.com/documentation/deviceactivity/deviceactivityfilter)

# DeviceActivityFilter

**Framework:** Device Activity  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

A type that filters the device activity data to include in a report.

## Declaration

```swift
struct DeviceActivityFilter
```

<a id="overview"></a>

## Overview

Your app can choose to filter device activity data for a specific date interval, filter by user and device, as well as specify a subset of applications, categories, and web domains to include in a report.

## Topics

### Structures

- [DeviceActivityFilter.Devices](deviceactivityfilter/devices-swift.struct.md): A type your app uses to indiciate which devices to include in a device activity report.
- [DeviceActivityFilter.Users](deviceactivityfilter/users-swift.struct.md): A type your app uses to indicate which users to include in a device activity report.

### Initializers

- [init(segment:devices:applications:categories:webDomains:)](deviceactivityfilter/init%28segment_devices_applications_categories_webdomains_%29.md): Creates a new filter for the current user.
- [init(segment:users:devices:applications:categories:webDomains:)](deviceactivityfilter/init%28segment_users_devices_applications_categories_webdomains_%29.md): Creates a new filter for the specified users and devices.

### Instance Properties

- [applications](deviceactivityfilter/applications.md): An optional set of applications to include in a report.
- [categories](deviceactivityfilter/categories.md): An optional set of categories to include in a report.
- [devices](deviceactivityfilter/devices-swift.property.md): The devices to include in a report.
- [segmentInterval](deviceactivityfilter/segmentinterval-swift.property.md): The interval at which the system subdivides the report’s device activity data during a specified date interval.
- [users](deviceactivityfilter/users-swift.property.md): The users to include in a report.
- [webDomains](deviceactivityfilter/webdomains.md): An optional set of web domains to include in a report.

### Enumerations

- [DeviceActivityFilter.SegmentInterval](deviceactivityfilter/segmentinterval-swift.enum.md): A type indicating the interval at which the system subdivides device activity data within a specified date interval.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Filter activity data

- [DeviceActivityData](deviceactivitydata.md): Activity data for a person on a specific device.
- [DeviceActivityResults](deviceactivityresults.md): An asynchronous sequence of filtered device activity results.
