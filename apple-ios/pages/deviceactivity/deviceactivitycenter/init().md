> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/deviceactivity/deviceactivitycenter/init()](https://developer.apple.com/documentation/deviceactivity/deviceactivitycenter/init())

# init()

**Framework:** Device Activity  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Creates an activity center to manage which device activities your application monitors.

## Declaration

```swift
init()
```

<a id="discussion"></a>

## Discussion

All instances are equivalent and manage the activities monitored by the application’s extension.

## See Also

### Monitoring Device Activities

- [startMonitoring(\_:during:events:)](startmonitoring%28__during_events_%29.md): Starts monitoring the specified device activity.
- [stopMonitoring(\_:)](stopmonitoring%28__%29.md): Stops monitoring the specified device activities.
- [activities](activities.md): The activities that the application’s extension currently monitors.
