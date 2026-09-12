> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/disablelostmodecommand](https://developer.apple.com/documentation/devicemanagement/disablelostmodecommand)

# DisableLostModeCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 9.3+

The command to take the device out of Lost Mode.

## Declaration

```
object DisableLostModeCommand
```

## Properties

- `Command` — `DisableLostModeCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Topics

### Objects

- [DisableLostModeCommand.Command](disablelostmodecommand/command-data.dictionary.md): The command to take the device out of Lost Mode.

## See Also

### Commands and responses

- [DisableLostModeResponse](disablelostmoderesponse.md): A response from the device after it processes the command to take the device out of Lost Mode.
