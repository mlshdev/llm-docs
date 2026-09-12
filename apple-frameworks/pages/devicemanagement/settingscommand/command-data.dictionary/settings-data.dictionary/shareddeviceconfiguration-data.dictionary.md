> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/settingscommand/command-data.dictionary/settings-data.dictionary/shareddeviceconfiguration-data.dictionary](https://developer.apple.com/documentation/devicemanagement/settingscommand/command-data.dictionary/settings-data.dictionary/shareddeviceconfiguration-data.dictionary)

# SettingsCommand.Command.Settings.SharedDeviceConfiguration

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+

A dictionary that contains shared device configuration settings.

## Declaration

```
object SettingsCommand.Command.Settings.SharedDeviceConfiguration
```

## Properties

- `AwaitUserConfiguration` — `SettingsCommand.Command.Settings.SharedDeviceConfiguration.AwaitUserConfiguration`: If enabled, the Shared iPad device enters Setup Assistant after the user triggers a login. The MDM server has a chance to configure the device and user. After configuration, the server needs to send a [User Configured](../../../user-configured-command.md) command to the user channel to unblock the login. This feature requires the device to have network access during the login process.

  Available: iOS 17+ | iPadOS 17+
- `Item` — `string` (required): A string that identifies this setting.

  Available: iOS 13.4+ | iPadOS 13.4+ | visionOS 26+  
  **Allowed values:** `SharedDeviceConfiguration`
- `ManagedAppleIDDefaultDomains` — `[string]`: A list of domains that the Shared iPad login screen displays. The user can pick a domain from the list to complete their Managed Apple Account.

  If this list contains more than 3 domains, the system picks 3 at random for display.

  Available: iOS 16+ | iPadOS 16+
- `OnlineAuthenticationGracePeriod` — `integer`: A grace period (in days) for Shared iPad online authentication. The Shared iPad only verifies the user’s passcode locally during login for users that already exist on the device. However, the system requires an online authentication (against Apple’s identity server) after the number of days specified by this setting.

  Setting this value to 0 enforces online authentication every time.

  Available: iOS 16+ | iPadOS 16+
- `PasscodePolicy` — `SettingsCommand.Command.Settings.SharedDeviceConfiguration.PasscodePolicy`: A dictionary that contains passcode policies.

  Available: iOS 17+ | iPadOS 17+
- `QuotaSize` — `integer`: The quota size, in megabytes (MB), for each user on the shared device, or if the quota size is too small, the minimum quota size. Available to Temporary Sessions Only guest users on iOS 17+.
- `ResidentUsers` — `integer`: The expected number of users. If this value is greater than the value for the maximum possible number of users that the device supports, the MDM server uses that value instead.
- `SkipLanguageAndLocaleSetupForNewUsers` — `boolean`: If `true`, the system picks the system language and locale automatically for the new Shared iPad user.

  Available: iOS 16.2+ | iPadOS 16.2+  
  **Default:** `false`
- `TemporarySessionOnly` — `boolean`: If `true`, the user only sees the Guest Welcome pane and can only log in as a guest user.

  If `false`, the user can sign in with a Managed Apple Account (the existing behavior).

  Available: iOS 14.5+ | iPadOS 14.5+  
  **Default:** `false`
- `TemporarySessionTimeout` — `integer`: The timeout, in seconds, for the temporary session. The temporary session logs out automatically after the specified period of inactivity. The minimum value is 30 seconds. Setting this value to `0` removes the timeout.

  Available: iOS 14.5+ | iPadOS 14.5+ | visionOS 26+
- `UserSessionTimeout` — `integer`: The timeout, in seconds, for the user session. The user session logs out automatically after the specified period of inactivity. The minimum value is 30 seconds. Setting this value to `0` removes the timeout.

  Available: iOS 14.5+ | iPadOS 14.5+

## Topics

### Objects

- [SettingsCommand.Command.Settings.SharedDeviceConfiguration.AwaitUserConfiguration](shareddeviceconfiguration-data.dictionary/awaituserconfiguration-data.dictionary.md): Enables the user configuration Setup Assistant workflow.
- [SettingsCommand.Command.Settings.SharedDeviceConfiguration.PasscodePolicy](shareddeviceconfiguration-data.dictionary/passcodepolicy-data.dictionary.md): A dictionary that contains passcode policies.

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
