> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/setrecoverylockcommand

# SetRecoveryLockCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 11.5+

The command to set or clear the Recovery Lock password.

## Declaration

```
object SetRecoveryLockCommand
```

## Properties

- `Command` — `SetRecoveryLockCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Topics

### Objects

- [SetRecoveryLockCommand.Command](setrecoverylockcommand/command-data.dictionary.md): The command to set or clear the Recovery Lock password.

## See Also

### Commands and responses

- [SetRecoveryLockResponse](setrecoverylockresponse.md): A response from the device after it processes the command to set or clear the Recovery Lock password.
