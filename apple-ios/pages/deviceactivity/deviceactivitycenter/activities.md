> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/deviceactivity/deviceactivitycenter/activities

# activities

**Framework:** Device Activity  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The activities that the application’s extension currently monitors.

## Declaration

```swift
var activities: [DeviceActivityName] { get }
```

## See Also

### Monitoring Device Activities

- [init()](init%28%29.md): Creates an activity center to manage which device activities your application monitors.
- [startMonitoring(\_:during:events:)](startmonitoring%28__during_events_%29.md): Starts monitoring the specified device activity.
- [stopMonitoring(\_:)](stopmonitoring%28__%29.md): Stops monitoring the specified device activities.
