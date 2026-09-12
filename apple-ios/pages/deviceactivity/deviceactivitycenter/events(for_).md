> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/deviceactivity/deviceactivitycenter/events(for:)](https://developer.apple.com/documentation/deviceactivity/deviceactivitycenter/events(for:))

# events(for:)

**Framework:** Device Activity  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Fetches the events of a device activity.

## Declaration

```swift
func events(for activity: DeviceActivityName) -> [DeviceActivityEvent.Name : DeviceActivityEvent]
```

## Parameters

- `activity`: The name of the activity.

<a id="return-value"></a>

## Return Value

The events of the activity. The dictionary is empty if your app doesn’t monitor the activity.

<a id="discussion"></a>

## Discussion

The returned object is a static representation of the events at the time the function was called. In other words, an `Event` fetched for a particular activity doesn’t dynamically update in response to future changes made to that activity.

## See Also

### Getting the Events and Schedules

- [schedule(for:)](schedule%28for_%29.md): Fetches the schedule of a device activity.
