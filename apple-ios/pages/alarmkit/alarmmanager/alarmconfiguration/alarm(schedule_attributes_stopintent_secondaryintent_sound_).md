> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarmmanager/alarmconfiguration/alarm(schedule:attributes:stopintent:secondaryintent:sound:)](https://developer.apple.com/documentation/alarmkit/alarmmanager/alarmconfiguration/alarm(schedule:attributes:stopintent:secondaryintent:sound:))

# alarm(schedule:attributes:stopIntent:secondaryIntent:sound:)

**Framework:** AlarmKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Creates a configuration that behaves like a traditional alarm.

## Declaration

```swift
static func alarm(schedule: Alarm.Schedule? = nil, attributes: AlarmAttributes<Metadata>, stopIntent: (any LiveActivityIntent)? = nil, secondaryIntent: (any LiveActivityIntent)? = nil, sound: AlertConfiguration.AlertSound = .default) -> AlarmManager.AlarmConfiguration<Metadata>
```

## Parameters

- `schedule`: The schedule for the alarm.
- `attributes`: The attributes to use when presenting the alert.
- `stopIntent`: The intent to execute when a person taps the stop button.
- `secondaryIntent`: The intent to execute when a person taps the secondary button.
- `sound`: The sound to play when the alarm fires.

<a id="discussion"></a>

## Discussion

At the scheduled time, based on the `schedule` parameter you supply, the alarm alerts.
