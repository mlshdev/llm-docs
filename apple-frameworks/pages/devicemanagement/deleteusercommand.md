> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/deleteusercommand](https://developer.apple.com/documentation/devicemanagement/deleteusercommand)

# DeleteUserCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 9.3+ · macOS 10.13+

The command to delete a user’s account from a device.

## Declaration

```
object DeleteUserCommand
```

## Properties

- `Command` — `DeleteUserCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Mentioned In

- [Handling NotNow status responses](handling-notnow-status-responses.md)

## Topics

### Objects

- [DeleteUserCommand.Command](deleteusercommand/command-data.dictionary.md): The command to delete a user’s account from a device.

## See Also

### Commands and responses

- [DeleteUserResponse](deleteuserresponse.md): A response from the device after it processes the command to delete a user’s account from a device.
