> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/setfirmwarepasswordcommand](https://developer.apple.com/documentation/devicemanagement/setfirmwarepasswordcommand)

# SetFirmwarePasswordCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.13+

The command to change or clear the firmware password on a device.

## Declaration

```
object SetFirmwarePasswordCommand
```

## Properties

- `Command` — `SetFirmwarePasswordCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Topics

### Objects

- [SetFirmwarePasswordCommand.Command](setfirmwarepasswordcommand/command-data.dictionary.md): The command to change or clear the firmware password on a device.

## See Also

### Commands and responses

- [SetFirmwarePasswordResponse](setfirmwarepasswordresponse.md): A response from the device after it processes the command to change or clear the firmware password on a device.
