> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarmmanager/alarmconfiguration/timer(duration:attributes:stopintent:secondaryintent:sound:)](https://developer.apple.com/documentation/alarmkit/alarmmanager/alarmconfiguration/timer(duration:attributes:stopintent:secondaryintent:sound:))

# timer(duration:attributes:stopIntent:secondaryIntent:sound:)

**Framework:** AlarmKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Creates a configuration that behaves like a traditional timer.

## Declaration

```swift
static func timer(duration: TimeInterval, attributes: AlarmAttributes<Metadata>, stopIntent: (any LiveActivityIntent)? = nil, secondaryIntent: (any LiveActivityIntent)? = nil, sound: AlertConfiguration.AlertSound = .default) -> AlarmManager.AlarmConfiguration<Metadata>
```

## Parameters

- `duration`: The duration of the timer in seconds.
- `attributes`: The attributes to use when presenting the alert.
- `stopIntent`: The intent to execute when a person stops the timer.
- `secondaryIntent`: The intent to execute when a person taps the secondary button.
- `sound`: The sound to play when the alarm fires.

<a id="discussion"></a>

## Discussion

The timer starts immediately, runs for `duration` seconds, and then alerts. If you provide a secondary button with a behavior that indicates that the timer can repeat, the alert has a repeat button.

## See Also

### Configuring a countdown

- [init(countdownDuration:schedule:attributes:stopIntent:secondaryIntent:sound:)](init%28countdownduration_schedule_attributes_stopintent_secondaryintent_sound_%29.md): Creates a configuration that behaves like a countdown.
