> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/deviceactivity/deviceactivitycenter/monitoringerror/invaliddatecomponents](https://developer.apple.com/documentation/deviceactivity/deviceactivitycenter/monitoringerror/invaliddatecomponents)

# DeviceActivityCenter.MonitoringError.invalidDateComponents

**Framework:** Device Activity  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The schedule’s date range is invalid.

## Declaration

```swift
case invalidDateComponents
```

<a id="discussion"></a>

## Discussion

The schedule’s start or end date components don’t match any future dates. Consider specifying a different calendar or different date components.

## See Also

### Checking for Errors

- [DeviceActivityCenter.MonitoringError.excessiveActivities](excessiveactivities.md): The calling process is monitoring too many activities.
- [DeviceActivityCenter.MonitoringError.intervalTooLong](intervaltoolong.md): The activity’s schedule has an interval that is too long.
- [DeviceActivityCenter.MonitoringError.intervalTooShort](intervaltooshort.md): The activity’s schedule has an interval that is too short.
- [DeviceActivityCenter.MonitoringError.unauthorized](unauthorized.md): The calling process isn’t authorized to monitor device activity.
