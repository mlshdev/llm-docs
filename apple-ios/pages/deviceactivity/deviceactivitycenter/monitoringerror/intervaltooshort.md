> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/deviceactivity/deviceactivitycenter/monitoringerror/intervaltooshort

# DeviceActivityCenter.MonitoringError.intervalTooShort

**Framework:** Device Activity  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The activity’s schedule has an interval that is too short.

## Declaration

```swift
case intervalTooShort
```

<a id="discussion"></a>

## Discussion

The minimum interval length for monitoring device activity is fifteen minutes.

## See Also

### Checking for Errors

- [DeviceActivityCenter.MonitoringError.excessiveActivities](excessiveactivities.md): The calling process is monitoring too many activities.
- [DeviceActivityCenter.MonitoringError.intervalTooLong](intervaltoolong.md): The activity’s schedule has an interval that is too long.
- [DeviceActivityCenter.MonitoringError.invalidDateComponents](invaliddatecomponents.md): The schedule’s date range is invalid.
- [DeviceActivityCenter.MonitoringError.unauthorized](unauthorized.md): The calling process isn’t authorized to monitor device activity.
