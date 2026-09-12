> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/activitykit/alertconfiguration/alertsound](https://developer.apple.com/documentation/activitykit/alertconfiguration/alertsound)

# AlertConfiguration.AlertSound

**Framework:** ActivityKit  
**Kind:** Structure  
**Availability:** iOS 16.1+ · iPadOS 16.1+

An object that describes the sound to play for a Live Activity update alert.

## Declaration

```swift
struct AlertSound
```

## Topics

### Configuring the alert sound

- [named(\_:)](alertsound/named%28__%29.md): A function you use to configure a custom sound for a Live Activity update alert.
- [default](alertsound/default.md): A value that represents the system’s default alert sound.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring Live Activity alerts

- [init(title:body:sound:)](init%28title_body_sound_%29.md): Initializes a new alert configuration for a Live Activity update.
- [title](title.md): A short title that describes the purpose of the Live Activity update on Apple Watch.
- [body](body.md): The main text that appears on the alert for a Live Activity update on Apple Watch.
- [sound](sound.md): The sound the system plays when the Live Activity alert appears on a person’s device.
