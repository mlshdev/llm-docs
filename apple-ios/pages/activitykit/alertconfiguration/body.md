> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/activitykit/alertconfiguration/body](https://developer.apple.com/documentation/activitykit/alertconfiguration/body)

# body

**Framework:** ActivityKit  
**Kind:** Instance Property  
**Availability:** iOS 16.1+ · iPadOS 16.1+

The main text that appears on the alert for a Live Activity update on Apple Watch.

## Declaration

```swift
var body: LocalizedStringResource
```

<a id="discussion"></a>

## Discussion

Apple Watch displays this string briefly as part of the alert that appears when you update a Live Activity and choose to alert people about the update. Choose text that’s easy to read at a glance. For example, a pizza delivery app could use “Your order will arrive in 25 minutes.”

## See Also

### Configuring Live Activity alerts

- [init(title:body:sound:)](init%28title_body_sound_%29.md): Initializes a new alert configuration for a Live Activity update.
- [title](title.md): A short title that describes the purpose of the Live Activity update on Apple Watch.
- [sound](sound.md): The sound the system plays when the Live Activity alert appears on a person’s device.
- [AlertConfiguration.AlertSound](alertsound.md): An object that describes the sound to play for a Live Activity update alert.
