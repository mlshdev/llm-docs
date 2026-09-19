> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/enablelostmodecommand

# EnableLostModeCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 9.3+

The command to enable Lost Mode on a device, which provides a message and phone number on the Lock Screen.

## Declaration

```
object EnableLostModeCommand
```

## Properties

- `Command` — `EnableLostModeCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Topics

### Objects

- [EnableLostModeCommand.Command](enablelostmodecommand/command-data.dictionary.md): The command to enable Lost Mode on a device, which provides a message and phone number on the Lock Screen.

## See Also

### Commands and responses

- [EnableLostModeResponse](enablelostmoderesponse.md): A response from the device after it processes the command to enable Lost Mode on a device, which provides a message and phone number on the Lock Screen.
