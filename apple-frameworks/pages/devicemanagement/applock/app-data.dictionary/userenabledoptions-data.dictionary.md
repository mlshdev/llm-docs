> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/applock/app-data.dictionary/userenabledoptions-data.dictionary](https://developer.apple.com/documentation/devicemanagement/applock/app-data.dictionary/userenabledoptions-data.dictionary)

# AppLock.App.UserEnabledOptions

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 7.0+ · tvOS 10.2+

The dictionary of user-editable options to set for the app.

## Declaration

```
object AppLock.App.UserEnabledOptions
```

## Properties

- `AssistiveTouch` — `boolean`: If `true`, the system allows the user to toggle AssistiveTouch.

  Available: iOS 7+ | iPadOS 7+  
  **Default:** `false`
- `InvertColors` — `boolean`: If `true`, the system allows the user to toggle Invert Colors.
  **Default:** `false`
- `VoiceControl` — `boolean`: If `true`, the system allows the user to toggle Voice Control.

  Available: iOS 13+ | iPadOS 13+  
  **Default:** `false`
- `VoiceOver` — `boolean`: If `true`, the system allows the user to toggle VoiceOver.
  **Default:** `false`
- `Zoom` — `boolean`: If `true`, the system allows the user to toggle Zoom.
  **Default:** `false`

## See Also

### Objects

- [AppLock.App.Options](options-data.dictionary.md): The dictionary of options to set for the app.
