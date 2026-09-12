> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/deviceactivity/deviceactivitycenter/stopmonitoring(_:)](https://developer.apple.com/documentation/deviceactivity/deviceactivitycenter/stopmonitoring(_:))

# stopMonitoring(\_:)

**Framework:** Device Activity  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Stops monitoring the specified device activities.

## Declaration

```swift
func stopMonitoring(_ activities: [DeviceActivityName] = [])
```

## Parameters

- `activities`: The names of the activities. If the array is empty or no `activities` are explicitly specified, this method stops monitoring all activities.

<a id="discussion"></a>

## Discussion

This method ignores names that don’t correspond to monitored activities.

## See Also

### Monitoring Device Activities

- [init()](init%28%29.md): Creates an activity center to manage which device activities your application monitors.
- [startMonitoring(\_:during:events:)](startmonitoring%28__during_events_%29.md): Starts monitoring the specified device activity.
- [activities](activities.md): The activities that the application’s extension currently monitors.
