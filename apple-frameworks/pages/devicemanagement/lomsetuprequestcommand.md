> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/lomsetuprequestcommand](https://developer.apple.com/documentation/devicemanagement/lomsetuprequestcommand)

# LOMSetupRequestCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 11.0+

The command to get information from a device to set up lights-out management (LOM).

## Declaration

```
object LOMSetupRequestCommand
```

## Properties

- `Command` — `LOMSetupRequestCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Topics

### Objects

- [LOMSetupRequestCommand.Command](lomsetuprequestcommand/command-data.dictionary.md): The command to get information from a device to set up lights-out management (LOM).

## See Also

### Commands and responses

- [LOMSetupRequestResponse](lomsetuprequestresponse.md): A response from the device after it processes the command to get information from a device to set up lights-out management (LOM).
