> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/deviceactivity/deviceactivitymonitor/intervaldidstart(for:)](https://developer.apple.com/documentation/deviceactivity/deviceactivitymonitor/intervaldidstart(for:))

# intervalDidStart(for:)

**Framework:** Device Activity  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Indicates that the device activity interval started.

## Declaration

```swift
func intervalDidStart(for activity: DeviceActivityName)
```

## Parameters

- `activity`: The name of the activity.

<a id="discussion"></a>

## Discussion

An activity starts when someone first uses the device within the activity’s scheduled time interval. In other words, the system only invokes this method when the device is in use.

## See Also

### Monitoring Scheduled Intervals

- [intervalDidEnd(for:)](intervaldidend%28for_%29.md): Indicates that the device activity interval ended.
- [intervalWillEndWarning(for:)](intervalwillendwarning%28for_%29.md): Warns your app of an ongoing activity’s conclusion a specified time before the activity ends.
- [intervalWillStartWarning(for:)](intervalwillstartwarning%28for_%29.md): Warns your app of an upcoming activity a specified time before the activity starts.
