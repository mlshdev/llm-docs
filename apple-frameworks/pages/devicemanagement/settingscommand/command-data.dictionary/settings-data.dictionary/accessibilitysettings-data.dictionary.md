> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/settingscommand/command-data.dictionary/settings-data.dictionary/accessibilitysettings-data.dictionary](https://developer.apple.com/documentation/devicemanagement/settingscommand/command-data.dictionary/settings-data.dictionary/accessibilitysettings-data.dictionary)

# SettingsCommand.Command.Settings.AccessibilitySettings

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · watchOS 10.0+

A dictionary that contains settings for accessibility.

## Declaration

```
object SettingsCommand.Command.Settings.AccessibilitySettings
```

## Properties

- `BoldTextEnabled` — `boolean`: If `true`, the system enables bold text.
  **Default:** `false`
- `GrayscaleEnabled` — `boolean`: If `true`, the system enables grayscale display.
  **Default:** `false`
- `IncreaseContrastEnabled` — `boolean`: If `true`, the system enables increase contrast.

  Available: iOS 16+ | iPadOS 16+  
  **Default:** `false`
- `Item` — `string` (required): Sets various accessibility settings. The system allows only keys with explicitly provided values.
  **Allowed values:** `AccessibilitySettings`
- `ReduceMotionEnabled` — `boolean`: If `true`, the system enables reduced motion.
  **Default:** `false`
- `ReduceTransparencyEnabled` — `boolean`: If `true`, the system enables reduced transparency.
  **Default:** `false`
- `TextSize` — `integer`: The accessibility text size apps that support dynamic text use. `0` is the smallest value, and `11` is the largest available.
  **Default:** `4`  
  **Allowed values:** `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`
- `TouchAccommodationsEnabled` — `boolean`: If `true`, the system enables touch accommodations.
  **Default:** `false`
- `VoiceOverEnabled` — `boolean`: If `true`, the system enables voiceover.
  **Default:** `false`
- `ZoomEnabled` — `boolean`: If `true`, the system enables zoom.
  **Default:** `false`

## See Also

### Objects

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
- [SettingsCommand.Command.Settings.SharedDeviceConfiguration](shareddeviceconfiguration-data.dictionary.md): A dictionary that contains shared device configuration settings.
