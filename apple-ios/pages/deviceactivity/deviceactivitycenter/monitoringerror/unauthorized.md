> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/deviceactivity/deviceactivitycenter/monitoringerror/unauthorized

# DeviceActivityCenter.MonitoringError.unauthorized

**Framework:** Device Activity  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The calling process isn’t authorized to monitor device activity.

## Declaration

```swift
case unauthorized
```

<a id="discussion"></a>

## Discussion

See the `FamilyControls` framework for more details about authorization to access the user’s device activity.

## See Also

### Checking for Errors

- [DeviceActivityCenter.MonitoringError.excessiveActivities](excessiveactivities.md): The calling process is monitoring too many activities.
- [DeviceActivityCenter.MonitoringError.intervalTooLong](intervaltoolong.md): The activity’s schedule has an interval that is too long.
- [DeviceActivityCenter.MonitoringError.intervalTooShort](intervaltooshort.md): The activity’s schedule has an interval that is too short.
- [DeviceActivityCenter.MonitoringError.invalidDateComponents](invaliddatecomponents.md): The schedule’s date range is invalid.
