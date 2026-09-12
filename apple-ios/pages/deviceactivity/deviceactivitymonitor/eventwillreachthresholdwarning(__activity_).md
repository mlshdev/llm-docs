> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/deviceactivity/deviceactivitymonitor/eventwillreachthresholdwarning(_:activity:)](https://developer.apple.com/documentation/deviceactivity/deviceactivitymonitor/eventwillreachthresholdwarning(_:activity:))

# eventWillReachThresholdWarning(\_:activity:)

**Framework:** Device Activity  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Warns your app that an activity is about to reach its threshold.

## Declaration

```swift
func eventWillReachThresholdWarning(_ event: DeviceActivityEvent.Name, activity: DeviceActivityName)
```

## Parameters

- `event`: The name of the event.
- `activity`: The name of the activity.

<a id="discussion"></a>

## Discussion

When an activity is about to reach its threshold, `eventWillReachThresholdWarning` warns your app extension of the concluding threshold limit.

## See Also

### Monitoring Event Thresholds

- [eventDidReachThreshold(\_:activity:)](eventdidreachthreshold%28__activity_%29.md): Indicates that the activity reached its threshold.
