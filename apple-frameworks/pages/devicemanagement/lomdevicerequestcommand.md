> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/lomdevicerequestcommand

# LOMDeviceRequestCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 11.0+

The command to send requests to a device using lights-out management (LOM).

## Declaration

```
object LOMDeviceRequestCommand
```

## Properties

- `Command` — `LOMDeviceRequestCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Topics

### Objects

- [LOMDeviceRequestCommand.Command](lomdevicerequestcommand/command-data.dictionary.md): The command to send requests to a device using lights-out management (LOM).

## See Also

### Commands and responses

- [LOMDeviceRequestResponse](lomdevicerequestresponse.md): A response from the device after it processes the command to send requests to a device using lights-out management (LOM).
