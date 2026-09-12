> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarmmanager/alarmconfiguration/init(countdownduration:schedule:attributes:stopintent:secondaryintent:sound:)](https://developer.apple.com/documentation/alarmkit/alarmmanager/alarmconfiguration/init(countdownduration:schedule:attributes:stopintent:secondaryintent:sound:))

# init(countdownDuration:schedule:attributes:stopIntent:secondaryIntent:sound:)

**Framework:** AlarmKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Creates a configuration that behaves like a countdown.

## Declaration

```swift
init(countdownDuration: Alarm.CountdownDuration? = nil, schedule: Alarm.Schedule? = nil, attributes: AlarmAttributes<Metadata>, stopIntent: (any LiveActivityIntent)? = nil, secondaryIntent: (any LiveActivityIntent)? = nil, sound: AlertConfiguration.AlertSound = .default)
```

## Parameters

- `countdownDuration`: The optional countdown duration. When set to a non-nil value, a countdown shows in the Lock Screen for the specified duration.
- `schedule`: The schedule that determines when the alarm alerts.
- `attributes`: The attributes of the alarm.
- `stopIntent`: The intent to execute when a person stops the countdown.
- `secondaryIntent`: The intent to execute when a person taps the secondary button.
- `sound`: The sound to play when the alarm fires.

## See Also

### Configuring a countdown

- [timer(duration:attributes:stopIntent:secondaryIntent:sound:)](timer%28duration_attributes_stopintent_secondaryintent_sound_%29.md): Creates a configuration that behaves like a traditional timer.
