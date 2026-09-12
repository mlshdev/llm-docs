> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/deviceactivity/deviceactivitymonitor/intervalwillendwarning(for:)](https://developer.apple.com/documentation/deviceactivity/deviceactivitymonitor/intervalwillendwarning(for:))

# intervalWillEndWarning(for:)

**Framework:** Device Activity  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Warns your app of an ongoing activity’s conclusion a specified time before the activity ends.

## Declaration

```swift
func intervalWillEndWarning(for activity: DeviceActivityName)
```

## Parameters

- `activity`: The name of the activity.

<a id="discussion"></a>

## Discussion

When an activity is about to end, `intervalWillEndWarning` warns your app extension of the concluding activity.

## See Also

### Monitoring Scheduled Intervals

- [intervalDidEnd(for:)](intervaldidend%28for_%29.md): Indicates that the device activity interval ended.
- [intervalDidStart(for:)](intervaldidstart%28for_%29.md): Indicates that the device activity interval started.
- [intervalWillStartWarning(for:)](intervalwillstartwarning%28for_%29.md): Warns your app of an upcoming activity a specified time before the activity starts.
