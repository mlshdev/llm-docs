> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/clearrestrictionspasswordcommand](https://developer.apple.com/documentation/devicemanagement/clearrestrictionspasswordcommand)

# ClearRestrictionsPasswordCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+

The command to clear the Screen Time password and the restrictions on a device.

## Declaration

```
object ClearRestrictionsPasswordCommand
```

## Properties

- `Command` — `ClearRestrictionsPasswordCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Topics

### Objects

- [ClearRestrictionsPasswordCommand.Command](clearrestrictionspasswordcommand/command-data.dictionary.md): The command to clear the Screen Time password and the restrictions on a device.

## See Also

### Commands and responses

- [ClearRestrictionsPasswordResponse](clearrestrictionspasswordresponse.md): A response from the device after it processes the command to clear the Screen Time password and the restrictions on a device.
