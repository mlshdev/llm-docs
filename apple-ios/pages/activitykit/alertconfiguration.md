> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/activitykit/alertconfiguration](https://developer.apple.com/documentation/activitykit/alertconfiguration)

# AlertConfiguration

**Framework:** ActivityKit  
**Kind:** Structure  
**Availability:** iOS 16.1+ · iPadOS 16.1+

A structure you use to configure an alert that appears when you update your Live Activity.

## Declaration

```swift
struct AlertConfiguration
```

## Mentioned In

- [Displaying live data with Live Activities](displaying-live-data-with-live-activities.md)

## Topics

### Configuring Live Activity alerts

- [init(title:body:sound:)](alertconfiguration/init%28title_body_sound_%29.md): Initializes a new alert configuration for a Live Activity update.
- [title](alertconfiguration/title.md): A short title that describes the purpose of the Live Activity update on Apple Watch.
- [body](alertconfiguration/body.md): The main text that appears on the alert for a Live Activity update on Apple Watch.
- [sound](alertconfiguration/sound.md): The sound the system plays when the Live Activity alert appears on a person’s device.
- [AlertConfiguration.AlertSound](alertconfiguration/alertsound.md): An object that describes the sound to play for a Live Activity update alert.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Updating a Live Activity

- [update(\_:)](activity/update%28__%29.md): Updates the dynamic content of the Live Activity.
- [update(\_:alertConfiguration:)](activity/update%28__alertconfiguration_%29.md): Updates the dynamic content of a Live Activity and alerts a person about the Live Activity update.
- [update(\_:alertConfiguration:timestamp:)](activity/update%28__alertconfiguration_timestamp_%29.md): Updates the dynamic content of a Live Activity and alerts a person about the Live Activity update.
