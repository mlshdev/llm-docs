> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/deviceconfiguredcommand](https://developer.apple.com/documentation/devicemanagement/deviceconfiguredcommand)

# DeviceConfiguredCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+ · macOS 10.11+ · tvOS 10.2+ · visionOS 2.0+

The command to inform the device that it can allow the user to continue in Setup Assistant.

## Declaration

```
object DeviceConfiguredCommand
```

## Properties

- `Command` — `DeviceConfiguredCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Topics

### Objects

- [DeviceConfiguredCommand.Command](deviceconfiguredcommand/command-data.dictionary.md): The command to inform the device that it can allow the user to continue in Setup Assistant.

## See Also

### Commands and responses

- [DeviceConfiguredResponse](deviceconfiguredresponse.md): A response from the device after it processes the command to inform the device that it can allow the user to continue in Setup Assistant.
