> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/applock/app-data.dictionary](https://developer.apple.com/documentation/devicemanagement/applock/app-data.dictionary)

# AppLock.App

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 6.0+ · tvOS 10.2+

The only app available for use on the iOS device.

## Declaration

```
object AppLock.App
```

## Properties

- `Identifier` — `string` (required): The app’s bundle identifier.
- `Options` — `AppLock.App.Options`: A dictionary of options that the user can’t change.

  Available: iOS 7+ | iPadOS 7+ | tvOS 10.2+
- `UserEnabledOptions` — `AppLock.App.UserEnabledOptions`: A dictionary of user-editable options.

  Available: iOS 7+ | iPadOS 7+ | tvOS 10.2+

## Topics

### Objects

- [AppLock.App.Options](app-data.dictionary/options-data.dictionary.md): The dictionary of options to set for the app.
- [AppLock.App.UserEnabledOptions](app-data.dictionary/userenabledoptions-data.dictionary.md): The dictionary of user-editable options to set for the app.
