> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/settingscommand/command-data.dictionary/settings-data.dictionary/softwareupdatesettings-data.dictionary](https://developer.apple.com/documentation/devicemanagement/settingscommand/command-data.dictionary/settings-data.dictionary/softwareupdatesettings-data.dictionary)

# SettingsCommand.Command.Settings.SoftwareUpdateSettings

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 14.5+ (deprecated in 26.0) · iPadOS 14.5+ (deprecated in 26.0) · Mac Catalyst 14.5+ (deprecated in 26.0)

A dictionary that contains software update settings.

## Declaration

```
object SettingsCommand.Command.Settings.SoftwareUpdateSettings
```

## Properties

- `Item` — `string` (required): ~~A string that represents the type of updates that should appear in the Software Update pane in Settings. Supervised only.~~

  ~~Deprecated: iOS 26+ | iPadOS 26+~~
  Removed: iOS 27+ | iPadOS 27+  
  **Allowed values:** `SoftwareUpdateSettings`
- `RecommendationCadence` — `integer` (required): ~~This value defines how the system presents software updates to the user. When there’s more than one available update for the user, the system behaves as follows:~~

  ~~\- `0`: Presents both options to the user.~~ ~~\- `1`: Presents the lower numbered (oldest) software update version.~~ ~~\- `2`: Presents only the highest numbered (most recent) release available for the device.~~

  ~~This value has no effect when there’s only one available update; the system shows the single available update to the user regardless of the value of this setting.~~

  ~~Deprecated: iOS 26+ | iPadOS 26+~~
  Removed: iOS 27+ | iPadOS 27+  
  **Allowed values:** `0`, `1`, `2`

## See Also

### Objects

- [SettingsCommand.Command.Settings.AccessibilitySettings](accessibilitysettings-data.dictionary.md): A dictionary that contains settings for accessibility.
- [SettingsCommand.Command.Settings.AppAnalytics](appanalytics-data.dictionary.md): A dictionary that contains settings for sharing app analytics.
- [SettingsCommand.Command.Settings.ApplicationAttributes](applicationattributes-data.dictionary.md): A dictionary that contains the attributes to apply to the app.
- [SettingsCommand.Command.Settings.ApplicationConfiguration](applicationconfiguration-data.dictionary.md): A dictionary that contains the configurations to apply to the app.
- [SettingsCommand.Command.Settings.Bluetooth](bluetooth-data.dictionary.md): A dictionary that contains Bluetooth settings.
- [SettingsCommand.Command.Settings.DataRoaming](dataroaming-data.dictionary.md): A dictionary that contains data roaming settings.
- [SettingsCommand.Command.Settings.DefaultApplications](defaultapplications-data.dictionary.md): A dictionary that contains default application bundle identifiers for each default application type that can be set.
- [SettingsCommand.Command.Settings.DeviceName](devicename-data.dictionary.md): A dictionary that contains device name settings.
- [SettingsCommand.Command.Settings.DiagnosticSubmission](diagnosticsubmission-data.dictionary.md): A dictionary that contains diagnostic submission settings.
- [SettingsCommand.Command.Settings.HostName](hostname-data.dictionary.md): A dictionary that contains hostname settings.
- [SettingsCommand.Command.Settings.MDMOptions](mdmoptions-data.dictionary.md): A dictionary that contains settings about the organization operating the MDM server.
- [SettingsCommand.Command.Settings.MaximumResidentUsers](maximumresidentusers-data.dictionary.md): Deprecated. A dictionary that contains settings for maximum resident users.
- [SettingsCommand.Command.Settings.OrganizationInfo](organizationinfo-data.dictionary.md): A dictionary that contains settings about the organization operating the MDM server.
- [SettingsCommand.Command.Settings.PasscodeLockGracePeriod](passcodelockgraceperiod-data.dictionary.md): Deprecated. A dictionary that contains settings for the password lock grace period.
- [SettingsCommand.Command.Settings.PersonalHotspot](personalhotspot-data.dictionary.md): A dictionary that contains Personal Hotspot settings.
