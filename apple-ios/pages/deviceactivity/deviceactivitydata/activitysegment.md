> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/deviceactivity/deviceactivitydata/activitysegment](https://developer.apple.com/documentation/deviceactivity/deviceactivitydata/activitysegment)

# DeviceActivityData.ActivitySegment

**Framework:** Device Activity  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Activity data for a specific time interval.

## Declaration

```swift
struct ActivitySegment
```

<a id="overview"></a>

## Overview

This type contains all of the activity details for a particular person on a particular device during [dateInterval](activitysegment/dateinterval.md).

## Topics

### Defining the segment

- [dateInterval](activitysegment/dateinterval.md): Access the date interval of the activity segment.

### Measuring activity

- [totalActivityDuration](activitysegment/totalactivityduration.md): Access the total activity time during the activity segment.
- [longestActivity](activitysegment/longestactivity.md): Access the date interval of the longest activity session during the activity segment.

### Tracking device usage

- [firstPickup](activitysegment/firstpickup.md): Access the first time the person picked up the device during the activity segment.
- [totalPickupsWithoutApplicationActivity](activitysegment/totalpickupswithoutapplicationactivity.md): Access the number of device pickups without application use.

### Accessing categorized activity

- [categories](activitysegment/categories.md): Access the categorized device activity during the activity segment.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Managing activity data

- [activitySegments](activitysegments.md): Access the activity divided into segments.
- [segmentInterval](segmentinterval.md): Access the segment interval of each activity segment.
- [lastUpdatedDate](lastupdateddate.md): Access the date when the system last updated the data for this device.
