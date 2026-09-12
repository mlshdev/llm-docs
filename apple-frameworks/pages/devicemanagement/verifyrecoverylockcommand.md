> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/verifyrecoverylockcommand](https://developer.apple.com/documentation/devicemanagement/verifyrecoverylockcommand)

# VerifyRecoveryLockCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 11.5+

The command to verify the device’s Recovery Lock password.

## Declaration

```
object VerifyRecoveryLockCommand
```

## Properties

- `Command` — `VerifyRecoveryLockCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Topics

### Objects

- [VerifyRecoveryLockCommand.Command](verifyrecoverylockcommand/command-data.dictionary.md): The command to verify the device’s Recovery Lock password.

## See Also

### Commands and responses

- [VerifyRecoveryLockResponse](verifyrecoverylockresponse.md): A response from the device after it processes the command to verify the device’s Recovery Lock password.
