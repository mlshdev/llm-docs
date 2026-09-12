> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/devicelocationcommand](https://developer.apple.com/documentation/devicemanagement/devicelocationcommand)

# DeviceLocationCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 9.3+

The command to request the location of a device when in Lost Mode.

## Declaration

```
object DeviceLocationCommand
```

## Properties

- `Command` — `DeviceLocationCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Topics

### Objects

- [DeviceLocationCommand.Command](devicelocationcommand/command-data.dictionary.md): The command to request the location of a device when in Lost Mode.

## See Also

### Commands and responses

- [DeviceLocationResponse](devicelocationresponse.md): A response from the device after it processes the command to request the location of a device when in Lost Mode.
