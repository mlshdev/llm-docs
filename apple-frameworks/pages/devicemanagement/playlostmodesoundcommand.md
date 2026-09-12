> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/playlostmodesoundcommand](https://developer.apple.com/documentation/devicemanagement/playlostmodesoundcommand)

# PlayLostModeSoundCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 10.3+

The command to play the Lost Mode sound on a device that’s in Lost Mode.

## Declaration

```
object PlayLostModeSoundCommand
```

## Properties

- `Command` — `PlayLostModeSoundCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Topics

### Objects

- [PlayLostModeSoundCommand.Command](playlostmodesoundcommand/command-data.dictionary.md): The command to play the Lost Mode sound on a device that’s in Lost Mode.

## See Also

### Commands and responses

- [PlayLostModeSoundResponse](playlostmodesoundresponse.md): A response from the device after it processes the command to play the Lost Mode sound on a device that’s in Lost Mode.
