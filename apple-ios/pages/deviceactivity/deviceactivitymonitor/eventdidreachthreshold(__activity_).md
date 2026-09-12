> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/deviceactivity/deviceactivitymonitor/eventdidreachthreshold(_:activity:)](https://developer.apple.com/documentation/deviceactivity/deviceactivitymonitor/eventdidreachthreshold(_:activity:))

# eventDidReachThreshold(\_:activity:)

**Framework:** Device Activity  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Indicates that the activity reached its threshold.

## Declaration

```swift
func eventDidReachThreshold(_ event: DeviceActivityEvent.Name, activity: DeviceActivityName)
```

## Parameters

- `event`: The name of the event.
- `activity`: The name of the activity.

<a id="discussion"></a>

## Discussion

The system invokes this method when use of the `activity` reaches its threshold.

## See Also

### Monitoring Event Thresholds

- [eventWillReachThresholdWarning(\_:activity:)](eventwillreachthresholdwarning%28__activity_%29.md): Warns your app that an activity is about to reach its threshold.
