> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontrollerhomebuttonsettingsmanager-258mu/opencontrollerhomebuttonsettings(for:)](https://developer.apple.com/documentation/gamecontroller/gccontrollerhomebuttonsettingsmanager-258mu/opencontrollerhomebuttonsettings(for:))

# openControllerHomeButtonSettings(for:)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Opens the Settings app to the screen in game controller settings where the user can change the controller shortcut action.

## Declaration

```swift
func openControllerHomeButtonSettings(for activity: GCControllerHomeButtonSettingsManager.SettingsCustomizationActivity) throws
```

<a id="discussion"></a>

## Discussion

This function returns immediately after attempting to open the Settings app.

> **Throws**

> An error if the Settings app could not be opened.
