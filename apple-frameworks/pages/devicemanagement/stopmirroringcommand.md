> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/stopmirroringcommand](https://developer.apple.com/documentation/devicemanagement/stopmirroringcommand)

# StopMirroringCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 7.0+ · macOS 10.10+

The command to stop mirroring the display to another device.

## Declaration

```
object StopMirroringCommand
```

## Properties

- `Command` — `StopMirroringCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Topics

### Objects

- [StopMirroringCommand.Command](stopmirroringcommand/command-data.dictionary.md): The command to stop mirroring the display to another device.

## See Also

### Commands and responses

- [StopMirroringResponse](stopmirroringresponse.md): A response from the device after it processes the command to stop mirroring the display to another device.
