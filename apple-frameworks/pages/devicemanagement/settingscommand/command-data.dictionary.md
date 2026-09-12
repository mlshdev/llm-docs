> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/settingscommand/command-data.dictionary](https://developer.apple.com/documentation/devicemanagement/settingscommand/command-data.dictionary)

# SettingsCommand.Command

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 5.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.1+ · watchOS 10.0+

The command to configure settings on a device.

## Declaration

```
object SettingsCommand.Command
```

## Properties

- `RequestRequiresNetworkTether` — `boolean`: If `true`, the device needs to be network-tethered to run the command.
  **Default:** `false`
- `RequestType` — `string` (required): The request type for this command.
  **Allowed values:** `Settings`
- `Settings` — `SettingsCommand.Command.Settings` (required): An array of dictionaries that contains the settings.

## Topics

### Objects

- [SettingsCommand.Command.Settings](command-data.dictionary/settings-data.dictionary.md): An array of dictionaries that contains the settings.
