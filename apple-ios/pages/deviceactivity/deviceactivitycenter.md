> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/deviceactivity/deviceactivitycenter](https://developer.apple.com/documentation/deviceactivity/deviceactivitycenter)

# DeviceActivityCenter

**Framework:** Device Activity  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

A class that enables an application’s extension to start monitoring scheduled device activity.

## Declaration

```swift
struct DeviceActivityCenter
```

<a id="overview"></a>

## Overview

Activity begins when someone first uses a device within the scheduled time interval and ends when someone first uses the device outside of the interval. The system only invokes the [intervalDidStart(for:)](deviceactivitymonitor/intervaldidstart%28for_%29.md) and [intervalDidEnd(for:)](deviceactivitymonitor/intervaldidend%28for_%29.md) when the device is in use. Likewise, the system invokes the [eventDidReachThreshold(\_:activity:)](deviceactivitymonitor/eventdidreachthreshold%28__activity_%29.md) function when an event reaches its threshold.

## Topics

### Monitoring Device Activities

- [init()](deviceactivitycenter/init%28%29.md): Creates an activity center to manage which device activities your application monitors.
- [startMonitoring(\_:during:events:)](deviceactivitycenter/startmonitoring%28__during_events_%29.md): Starts monitoring the specified device activity.
- [stopMonitoring(\_:)](deviceactivitycenter/stopmonitoring%28__%29.md): Stops monitoring the specified device activities.
- [activities](deviceactivitycenter/activities.md): The activities that the application’s extension currently monitors.

### Getting the Events and Schedules

- [events(for:)](deviceactivitycenter/events%28for_%29.md): Fetches the events of a device activity.
- [schedule(for:)](deviceactivitycenter/schedule%28for_%29.md): Fetches the schedule of a device activity.

### Enumerations

- [DeviceActivityCenter.MonitoringError](deviceactivitycenter/monitoringerror.md): Errors that may occur when starting to monitor an activity.

## See Also

### Manage activities

- [DeviceActivityEvent](deviceactivityevent.md): An event that represents an application, category, or website activity.
- [DeviceActivityName](deviceactivityname.md): The unique name of an activity.
- [DeviceActivitySchedule](deviceactivityschedule.md): A calendar-based schedule for when to monitor a device’s activity.
