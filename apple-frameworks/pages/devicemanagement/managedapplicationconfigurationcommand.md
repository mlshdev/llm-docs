> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/managedapplicationconfigurationcommand](https://developer.apple.com/documentation/devicemanagement/managedapplicationconfigurationcommand)

# ManagedApplicationConfigurationCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 7.0+ · macOS 10.15+ · tvOS 10.2+ · visionOS 1.1+ · watchOS 10.0+

The command to get app configurations from managed apps on a device.

## Declaration

```
object ManagedApplicationConfigurationCommand
```

## Properties

- `Command` — `ManagedApplicationConfigurationCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Topics

### Objects

- [ManagedApplicationConfigurationCommand.Command](managedapplicationconfigurationcommand/command-data.dictionary.md): The command to get app configurations from managed apps on a device.

## See Also

### Commands and responses

- [ManagedApplicationConfigurationResponse](managedapplicationconfigurationresponse.md): A response from the device after it processes the command to get app configurations from managed apps on a device.
