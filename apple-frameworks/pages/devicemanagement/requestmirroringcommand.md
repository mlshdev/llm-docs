> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/requestmirroringcommand](https://developer.apple.com/documentation/devicemanagement/requestmirroringcommand)

# RequestMirroringCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 7.0+ · macOS 10.10+

The command to prompt the user to share their screen using AirPlay Mirroring.

## Declaration

```
object RequestMirroringCommand
```

## Properties

- `Command` — `RequestMirroringCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Topics

### Objects

- [RequestMirroringCommand.Command](requestmirroringcommand/command-data.dictionary.md): The command to prompt the user to share their screen using AirPlay Mirroring.

## See Also

### Commands and responses

- [RequestMirroringResponse](requestmirroringresponse.md): A response from the device after it processes the command to prompt the user to share their screen using AirPlay Mirroring.
