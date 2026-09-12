> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/verifyfirmwarepasswordcommand](https://developer.apple.com/documentation/devicemanagement/verifyfirmwarepasswordcommand)

# VerifyFirmwarePasswordCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.13+

The command to verify the firmware password on a device.

## Declaration

```
object VerifyFirmwarePasswordCommand
```

## Properties

- `Command` — `VerifyFirmwarePasswordCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Topics

### Objects

- [VerifyFirmwarePasswordCommand.Command](verifyfirmwarepasswordcommand/command-data.dictionary.md): The command to verify the firmware password on a device.

## See Also

### Commands and responses

- [VerifyFirmwarePasswordResponse](verifyfirmwarepasswordresponse.md): A response from the device after it processes the command to verify the firmware password on a device.
