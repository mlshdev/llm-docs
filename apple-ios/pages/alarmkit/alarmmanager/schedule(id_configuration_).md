> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarmmanager/schedule(id:configuration:)](https://developer.apple.com/documentation/alarmkit/alarmmanager/schedule(id:configuration:))

# schedule(id:configuration:)

**Framework:** AlarmKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Schedules a new alarm.

## Declaration

```swift
func schedule<Metadata>(id: Alarm.ID, configuration: AlarmManager.AlarmConfiguration<Metadata>) async throws -> Alarm where Metadata : AlarmMetadata
```

## Parameters

- `id`: The alarm’s identifier.
- `configuration`: The configuration for the new alarm.

<a id="discussion"></a>

## Discussion

If scheduling a new alarm is successful, the function returns the [Alarm](../alarm.md) structure. If you provide a [countdownDuration](../alarm/countdownduration-swift.property.md), the system shows a countdown UI for the specified duration before the alarm alerts. If you provide a `schedule`, the alarm alerts at the scheduled time. If you provide both a `countdownDuration` and a [schedule](../alarm/schedule-swift.property.md), the system shows a countdown UI before the alarm alerts, possibly on a repeating schedule. Define the ID to encode it into your intent.

## See Also

### Scheduling an alarm

- [AlarmManager.AlarmConfiguration](alarmconfiguration.md): An object that contains all the properties necessary to schedule an alarm.
