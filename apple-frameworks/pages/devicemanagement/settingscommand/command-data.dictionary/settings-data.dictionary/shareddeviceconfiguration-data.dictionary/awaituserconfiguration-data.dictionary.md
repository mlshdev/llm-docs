> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/settingscommand/command-data.dictionary/settings-data.dictionary/shareddeviceconfiguration-data.dictionary/awaituserconfiguration-data.dictionary](https://developer.apple.com/documentation/devicemanagement/settingscommand/command-data.dictionary/settings-data.dictionary/shareddeviceconfiguration-data.dictionary/awaituserconfiguration-data.dictionary)

# SettingsCommand.Command.Settings.SharedDeviceConfiguration.AwaitUserConfiguration

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

Enables the user configuration Setup Assistant workflow.

## Declaration

```
object SettingsCommand.Command.Settings.SharedDeviceConfiguration.AwaitUserConfiguration
```

## Properties

- `Enabled` — `boolean` (required): If `true`, the device stops at the Setup Assistant pane after user login. The user can’t use the device until it receives a [User Configured](../../../../user-configured-command.md) command.

## See Also

### Objects

- [SettingsCommand.Command.Settings.SharedDeviceConfiguration.PasscodePolicy](passcodepolicy-data.dictionary.md): A dictionary that contains passcode policies.
