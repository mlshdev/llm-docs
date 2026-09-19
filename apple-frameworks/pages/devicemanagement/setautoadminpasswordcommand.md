> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/setautoadminpasswordcommand

# SetAutoAdminPasswordCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.11+

The command to update the local administrator account password.

## Declaration

```
object SetAutoAdminPasswordCommand
```

## Properties

- `Command` — `SetAutoAdminPasswordCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Topics

### Objects

- [SetAutoAdminPasswordCommand.Command](setautoadminpasswordcommand/command-data.dictionary.md): The command to update the local administrator account password.

## See Also

### Commands and responses

- [SetAutoAdminPasswordResponse](setautoadminpasswordresponse.md): A response from the device after it processes the command to update the local administrator account password.
