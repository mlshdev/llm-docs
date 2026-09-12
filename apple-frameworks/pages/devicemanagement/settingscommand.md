> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/settingscommand](https://developer.apple.com/documentation/devicemanagement/settingscommand)

# SettingsCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 5.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.1+ · watchOS 10.0+

The command to configure settings on a device.

## Declaration

```
object SettingsCommand
```

## Properties

- `Command` — `SettingsCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Topics

### Objects

- [SettingsCommand.Command](settingscommand/command-data.dictionary.md): The command to configure settings on a device.

## See Also

### Commands and responses

- [SettingsResponse](settingsresponse.md): A response from the device after it processes the command to configure settings on a device.
