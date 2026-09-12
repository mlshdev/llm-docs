> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/settingscommand/command-data.dictionary/settings-data.dictionary/maximumresidentusers-data.dictionary](https://developer.apple.com/documentation/devicemanagement/settingscommand/command-data.dictionary/settings-data.dictionary/maximumresidentusers-data.dictionary)

# SettingsCommand.Command.Settings.MaximumResidentUsers

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 9.3+ (deprecated in 13.4) · iPadOS 9.3+ (deprecated in 13.4) · Mac Catalyst 9.3+ (deprecated in 13.4)

A dictionary that contains settings for maximum resident users.

## Declaration

```
object SettingsCommand.Command.Settings.MaximumResidentUsers
```

## Properties

- `Item` — `string` (required): A string that identifies this setting.

  Deprecated: iOS 13.4+ | iPadOS 13.4+  
  **Allowed values:** `MaximumResidentUsers`
- `MaximumResidentUsers` — `integer` (required): The maximum number of users that can use the device. If this value is greater than the value for the maximum possible number of users that the device supports, the MDM server uses that value instead.

  This setting requires that the device is in the `AwaitingConfiguration` phase before it receives the [DeviceConfiguredCommand](../../../deviceconfiguredcommand.md) message.

  When a device reaches the maximum number of resident users and a new user tries to sign in, the MDM server removes a synchronized user to make space for the new user. If there are no synchronized users, the new user sign-in fails. A synchronized user is a user that has completed syncing their data.

  Deprecated: iOS 13.4+ | iPadOS 13.4+

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
- [SettingsCommand.Command.Settings.OrganizationInfo](organizationinfo-data.dictionary.md): A dictionary that contains settings about the organization operating the MDM server.
- [SettingsCommand.Command.Settings.PasscodeLockGracePeriod](passcodelockgraceperiod-data.dictionary.md): Deprecated. A dictionary that contains settings for the password lock grace period.
- [SettingsCommand.Command.Settings.PersonalHotspot](personalhotspot-data.dictionary.md): A dictionary that contains Personal Hotspot settings.
- [SettingsCommand.Command.Settings.SharedDeviceConfiguration](shareddeviceconfiguration-data.dictionary.md): A dictionary that contains shared device configuration settings.
