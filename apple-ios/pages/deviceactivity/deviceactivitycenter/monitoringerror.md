> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/deviceactivity/deviceactivitycenter/monitoringerror](https://developer.apple.com/documentation/deviceactivity/deviceactivitycenter/monitoringerror)

# DeviceActivityCenter.MonitoringError

**Framework:** Device Activity  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Errors that may occur when starting to monitor an activity.

## Declaration

```swift
enum MonitoringError
```

## Topics

### Checking for Errors

- [DeviceActivityCenter.MonitoringError.excessiveActivities](monitoringerror/excessiveactivities.md): The calling process is monitoring too many activities.
- [DeviceActivityCenter.MonitoringError.intervalTooLong](monitoringerror/intervaltoolong.md): The activity’s schedule has an interval that is too long.
- [DeviceActivityCenter.MonitoringError.intervalTooShort](monitoringerror/intervaltooshort.md): The activity’s schedule has an interval that is too short.
- [DeviceActivityCenter.MonitoringError.invalidDateComponents](monitoringerror/invaliddatecomponents.md): The schedule’s date range is invalid.
- [DeviceActivityCenter.MonitoringError.unauthorized](monitoringerror/unauthorized.md): The calling process isn’t authorized to monitor device activity.

### Getting the Localized Message

- [errorDescription](monitoringerror/errordescription.md): A localized message that describes what error occurred.
- [recoverySuggestion](monitoringerror/recoverysuggestion.md): A localized message that describes how to recover from the failure.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [LocalizedError](https://developer.apple.com/documentation/foundation/localizederror)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
