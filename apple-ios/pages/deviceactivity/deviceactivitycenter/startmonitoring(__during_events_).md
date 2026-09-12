> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/deviceactivity/deviceactivitycenter/startmonitoring(_:during:events:)](https://developer.apple.com/documentation/deviceactivity/deviceactivitycenter/startmonitoring(_:during:events:))

# startMonitoring(\_:during:events:)

**Framework:** Device Activity  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Starts monitoring the specified device activity.

## Declaration

```swift
func startMonitoring(_ activity: DeviceActivityName, during schedule: DeviceActivitySchedule, events: [DeviceActivityEvent.Name : DeviceActivityEvent] = [:]) throws
```

## Parameters

- `activity`: The name of the activity.
- `schedule`: The schedule on which your app extension’s [DeviceActivityMonitor](../deviceactivitymonitor.md) receives callbacks.
- `events`: An optional mapping of events keyed by their names. If this parameter is empty, the application extension only receives callbacks for the start and end times of the schedule’s interval. If the device’s time zone changes in the middle of a schedule’s interval, any ongoing events include device activity that may have accumulated outside of the new time zone. In other words, the system uses the time zone of the device at `nextInterval.start` to calculate device activity for the entirety of the interval.

<a id="discussion"></a>

## Discussion

If the app already monitored the activity, this method overwrites the previous schedule and events. Attempting to monitor too many activities or activities that are too tightly scheduled can cause this method to throw an error.

The system throws an error if the attempt to monitor the device activity failed. To avoid errors, reduce the number of unique, tightly-scheduled activities. For example, consider using the `warningTime` property of an activity’s schedule.

> **Important**

> The application extension’s [DeviceActivityMonitor](../deviceactivitymonitor.md) may begin receiving callbacks as soon as the system calls this method if the activity’s scheduled interval is ongoing.

## See Also

### Monitoring Device Activities

- [init()](init%28%29.md): Creates an activity center to manage which device activities your application monitors.
- [stopMonitoring(\_:)](stopmonitoring%28__%29.md): Stops monitoring the specified device activities.
- [activities](activities.md): The activities that the application’s extension currently monitors.
