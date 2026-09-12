> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/settingscommand/command-data.dictionary/settings-data.dictionary/dataroaming-data.dictionary](https://developer.apple.com/documentation/devicemanagement/settingscommand/command-data.dictionary/settings-data.dictionary/dataroaming-data.dictionary)

# SettingsCommand.Command.Settings.DataRoaming

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 5.0+

A dictionary that contains data roaming settings.

## Declaration

```
object SettingsCommand.Command.Settings.DataRoaming
```

## Properties

- `Enabled` — `boolean` (required): If `true`, enable data roaming, which also enables voice roaming. If `false`, disable data roaming. The device only applies this setting to the primary SIM.
- `Item` — `string` (required): A string that identifies this setting.
  **Allowed values:** `DataRoaming`

## See Also

### Objects

- [SettingsCommand.Command.Settings.AccessibilitySettings](accessibilitysettings-data.dictionary.md): A dictionary that contains settings for accessibility.
- [SettingsCommand.Command.Settings.AppAnalytics](appanalytics-data.dictionary.md): A dictionary that contains settings for sharing app analytics.
- [SettingsCommand.Command.Settings.ApplicationAttributes](applicationattributes-data.dictionary.md): A dictionary that contains the attributes to apply to the app.
- [SettingsCommand.Command.Settings.ApplicationConfiguration](applicationconfiguration-data.dictionary.md): A dictionary that contains the configurations to apply to the app.
- [SettingsCommand.Command.Settings.Bluetooth](bluetooth-data.dictionary.md): A dictionary that contains Bluetooth settings.
- [SettingsCommand.Command.Settings.DefaultApplications](defaultapplications-data.dictionary.md): A dictionary that contains default application bundle identifiers for each default application type that can be set.
- [SettingsCommand.Command.Settings.DeviceName](devicename-data.dictionary.md): A dictionary that contains device name settings.
- [SettingsCommand.Command.Settings.DiagnosticSubmission](diagnosticsubmission-data.dictionary.md): A dictionary that contains diagnostic submission settings.
- [SettingsCommand.Command.Settings.HostName](hostname-data.dictionary.md): A dictionary that contains hostname settings.
- [SettingsCommand.Command.Settings.MDMOptions](mdmoptions-data.dictionary.md): A dictionary that contains settings about the organization operating the MDM server.
- [SettingsCommand.Command.Settings.MaximumResidentUsers](maximumresidentusers-data.dictionary.md): Deprecated. A dictionary that contains settings for maximum resident users.
- [SettingsCommand.Command.Settings.OrganizationInfo](organizationinfo-data.dictionary.md): A dictionary that contains settings about the organization operating the MDM server.
- [SettingsCommand.Command.Settings.PasscodeLockGracePeriod](passcodelockgraceperiod-data.dictionary.md): Deprecated. A dictionary that contains settings for the password lock grace period.
- [SettingsCommand.Command.Settings.PersonalHotspot](personalhotspot-data.dictionary.md): A dictionary that contains Personal Hotspot settings.
- [SettingsCommand.Command.Settings.SharedDeviceConfiguration](shareddeviceconfiguration-data.dictionary.md): A dictionary that contains shared device configuration settings.
