> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarmmanager/alarmconfiguration](https://developer.apple.com/documentation/alarmkit/alarmmanager/alarmconfiguration)

# AlarmManager.AlarmConfiguration

**Framework:** AlarmKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An object that contains all the properties necessary to schedule an alarm.

## Declaration

```swift
struct AlarmConfiguration<Metadata> where Metadata : AlarmMetadata
```

<a id="overview"></a>

## Overview

Pass the schedule or countdown and any attributes you define to the `AlarmConfiguration` for the system to schedule. You can pass in an optional secondary intent that the system executes when a person taps a secondary button. This is only available after first unlock. You can also include custom sounds for your alarm.

The following example configures an alarm with a countdown duration.

```swift
let configuration = AlarmManager.AlarmConfiguration(
    countdownDuration: Alarm.CountdownDuration(preAlert: 10, postAlert: 10),
    schedule: nil,
    attributes: attributes,
    secondaryIntent: repeatIntent,
    alertConfiguration: AlertConfiguration(
        title: "Eggs are ready!",
        body: "Time to eat!",
        sound: .default))
```

## Topics

### Configuring a scheduled alarm

- [alarm(schedule:attributes:stopIntent:secondaryIntent:sound:)](alarmconfiguration/alarm%28schedule_attributes_stopintent_secondaryintent_sound_%29.md): Creates a configuration that behaves like a traditional alarm.

### Configuring a countdown

- [init(countdownDuration:schedule:attributes:stopIntent:secondaryIntent:sound:)](alarmconfiguration/init%28countdownduration_schedule_attributes_stopintent_secondaryintent_sound_%29.md): Creates a configuration that behaves like a countdown.
- [timer(duration:attributes:stopIntent:secondaryIntent:sound:)](alarmconfiguration/timer%28duration_attributes_stopintent_secondaryintent_sound_%29.md): Creates a configuration that behaves like a traditional timer.

### Initializers

- [init(countdownDuration:schedule:attributes:appEntityIdentifier:stopIntent:secondaryIntent:sound:)](alarmconfiguration/init%28countdownduration_schedule_attributes_appentityidentifier_stopintent_secondaryintent_sound_%29.md): Conforms when `Metadata` conforms to `AlarmMetadata`. Creates a configuration that behaves like a countdown.

### Type Methods

- [alarm(schedule:attributes:appEntityIdentifier:stopIntent:secondaryIntent:sound:)](alarmconfiguration/alarm%28schedule_attributes_appentityidentifier_stopintent_secondaryintent_sound_%29.md): Conforms when `Metadata` conforms to `AlarmMetadata`. Creates a configuration that behaves like a traditional alarm.
- [timer(duration:attributes:appEntityIdentifier:stopIntent:secondaryIntent:sound:)](alarmconfiguration/timer%28duration_attributes_appentityidentifier_stopintent_secondaryintent_sound_%29.md): Conforms when `Metadata` conforms to `AlarmMetadata`. Creates a configuration that behaves like a traditional timer.

## See Also

### Scheduling an alarm

- [schedule(id:configuration:)](schedule%28id_configuration_%29.md): Schedules a new alarm.
