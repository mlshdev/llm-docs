> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/alarmkit/alarmmanager/alarmconfiguration/alarm(schedule:attributes:appentityidentifier:stopintent:secondaryintent:sound:)

# alarm(schedule:attributes:appEntityIdentifier:stopIntent:secondaryIntent:sound:)

**Framework:** AlarmKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates a configuration that behaves like a traditional alarm.

## Declaration

```swift
static func alarm(schedule: Alarm.Schedule? = nil, attributes: AlarmAttributes<Metadata>, appEntityIdentifier: EntityIdentifier? = nil, stopIntent: (any LiveActivityIntent)? = nil, secondaryIntent: (any LiveActivityIntent)? = nil, sound: AlertConfiguration.AlertSound = .default) -> AlarmManager.AlarmConfiguration<Metadata>
```

## Parameters

- `schedule`: The schedule for the alarm.
- `attributes`: The attributes to use when presenting the alert.
- `appEntityIdentifier`: The entity associated with the alarm.
- `stopIntent`: The intent to execute when a person taps the stop button.
- `secondaryIntent`: The intent to execute when a person taps the secondary button.
- `sound`: The sound to play when the alarm fires.

<a id="discussion"></a>

## Discussion

At the scheduled time, based on the `schedule` parameter you supply, the alarm alerts.
