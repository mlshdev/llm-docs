> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/deviceactivity/deviceactivityschedule](https://developer.apple.com/documentation/deviceactivity/deviceactivityschedule)

# DeviceActivitySchedule

**Framework:** Device Activity  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

A calendar-based schedule for when to monitor a device’s activity.

## Declaration

```swift
struct DeviceActivitySchedule
```

<a id="overview"></a>

## Overview

Create a new schedule using `DateComponents` that allows your app to monitor the person’s device activity during a period of time. You can set a schedule for your app to monitor on a regularly occuring basis. You can create a warning time that the system uses to provide your app extension with callbacks whenever a schedule is about to start or end, or when an event is close to reaching its threshold.

## Topics

### Creating a Schedule

- [init(intervalStart:intervalEnd:repeats:warningTime:)](deviceactivityschedule/init%28intervalstart_intervalend_repeats_warningtime_%29.md): Creates a new schedule.
- [intervalEnd](deviceactivityschedule/intervalend.md): The date components that represent the end time for a schedule’s interval.
- [intervalStart](deviceactivityschedule/intervalstart.md): The date components that represent the start time for a schedule’s interval.
- [nextInterval](deviceactivityschedule/nextinterval.md): The schedule’s next interval or the current interval if one is ongoing.
- [repeats](deviceactivityschedule/repeats.md): A Boolean value that indicates whether the schedule recurs.
- [warningTime](deviceactivityschedule/warningtime.md): Optional components that generate a warning prior to regularly scheduled events.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Manage activities

- [DeviceActivityEvent](deviceactivityevent.md): An event that represents an application, category, or website activity.
- [DeviceActivityName](deviceactivityname.md): The unique name of an activity.
- [DeviceActivityCenter](deviceactivitycenter.md): A class that enables an application’s extension to start monitoring scheduled device activity.
