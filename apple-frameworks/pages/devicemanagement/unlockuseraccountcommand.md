> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/unlockuseraccountcommand](https://developer.apple.com/documentation/devicemanagement/unlockuseraccountcommand)

# UnlockUserAccountCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.13+

The command to unlock a user account that the system locked because of too many failed password attempts.

## Declaration

```
object UnlockUserAccountCommand
```

## Properties

- `Command` — `UnlockUserAccountCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Mentioned In

- [Handling NotNow status responses](handling-notnow-status-responses.md)

## Topics

### Objects

- [UnlockUserAccountCommand.Command](unlockuseraccountcommand/command-data.dictionary.md): The command to unlock a user account that the system locked because of too many failed password attempts.

## See Also

### Commands and responses

- [UnlockUserAccountResponse](unlockuseraccountresponse.md): A response from the device after it processes the command to unlock a user account that the system locked because of too many failed password attempts.
