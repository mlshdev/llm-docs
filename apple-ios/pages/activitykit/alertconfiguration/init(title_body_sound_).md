> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/activitykit/alertconfiguration/init(title:body:sound:)](https://developer.apple.com/documentation/activitykit/alertconfiguration/init(title:body:sound:))

# init(title:body:sound:)

**Framework:** ActivityKit  
**Kind:** Initializer  
**Availability:** iOS 16.1+ · iPadOS 16.1+

Initializes a new alert configuration for a Live Activity update.

## Declaration

```swift
init(title: LocalizedStringResource, body: LocalizedStringResource, sound: AlertConfiguration.AlertSound)
```

## Parameters

- `title`: The short title that describes the purpose of the Live Activity update.
- `body`: The main text of the alert for a Live Activity update.
- `sound`: The sound that the system plays when the alert appears on a person’s device.

## See Also

### Configuring Live Activity alerts

- [title](title.md): A short title that describes the purpose of the Live Activity update on Apple Watch.
- [body](body.md): The main text that appears on the alert for a Live Activity update on Apple Watch.
- [sound](sound.md): The sound the system plays when the Live Activity alert appears on a person’s device.
- [AlertConfiguration.AlertSound](alertsound.md): An object that describes the sound to play for a Live Activity update alert.
