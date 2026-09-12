> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/deviceactivity/deviceactivitycenter/monitoringerror/intervaltoolong](https://developer.apple.com/documentation/deviceactivity/deviceactivitycenter/monitoringerror/intervaltoolong)

# DeviceActivityCenter.MonitoringError.intervalTooLong

**Framework:** Device Activity  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The activity’s schedule has an interval that is too long.

## Declaration

```swift
case intervalTooLong
```

<a id="discussion"></a>

## Discussion

The maximum interval length for monitoring device activity events is one week.

## See Also

### Checking for Errors

- [DeviceActivityCenter.MonitoringError.excessiveActivities](excessiveactivities.md): The calling process is monitoring too many activities.
- [DeviceActivityCenter.MonitoringError.intervalTooShort](intervaltooshort.md): The activity’s schedule has an interval that is too short.
- [DeviceActivityCenter.MonitoringError.invalidDateComponents](invaliddatecomponents.md): The schedule’s date range is invalid.
- [DeviceActivityCenter.MonitoringError.unauthorized](unauthorized.md): The calling process isn’t authorized to monitor device activity.
