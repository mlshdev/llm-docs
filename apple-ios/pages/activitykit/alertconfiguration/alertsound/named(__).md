> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/activitykit/alertconfiguration/alertsound/named(_:)

# named(\_:)

**Framework:** ActivityKit  
**Kind:** Type Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+

A function you use to configure a custom sound for a Live Activity update alert.

## Declaration

```swift
static func named(_ name: String) -> AlertConfiguration.AlertSound
```

## Parameters

- `name`: The name of the sound file to use for the alert. Choose a file that’s in your app’s main bundle or the `Library/Sounds` folder of your app’s data container.

## See Also

### Configuring the alert sound

- [default](default.md): A value that represents the system’s default alert sound.
