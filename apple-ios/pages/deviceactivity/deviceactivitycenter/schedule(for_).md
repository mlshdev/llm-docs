> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/deviceactivity/deviceactivitycenter/schedule(for:)](https://developer.apple.com/documentation/deviceactivity/deviceactivitycenter/schedule(for:))

# schedule(for:)

**Framework:** Device Activity  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Fetches the schedule of a device activity.

## Declaration

```swift
func schedule(for activity: DeviceActivityName) -> DeviceActivitySchedule?
```

## Parameters

- `activity`: The name of the activity.

<a id="return-value"></a>

## Return Value

The schedule of the activity or `nil` if no such activity is currently monitored.

<a id="discussion"></a>

## Discussion

The returned object is a static representation of the schedule at the time the function was called. In other words, a `Schedule` fetched for a particular activity doesn’t dynamically update in response to future changes made to that activity.

## See Also

### Getting the Events and Schedules

- [events(for:)](events%28for_%29.md): Fetches the events of a device activity.
