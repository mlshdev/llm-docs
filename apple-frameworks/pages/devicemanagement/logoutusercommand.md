> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/logoutusercommand](https://developer.apple.com/documentation/devicemanagement/logoutusercommand)

# LogOutUserCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 9.3+

The command to force the current user to log out of a device.

## Declaration

```
object LogOutUserCommand
```

## Properties

- `Command` — `LogOutUserCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Topics

### Objects

- [LogOutUserCommand.Command](logoutusercommand/command-data.dictionary.md): The command to force the current user to log out of a device.

## See Also

### Commands and responses

- [LogOutUserResponse](logoutuserresponse.md): A response from the device after it processes the command to force the current user to log out of a device.
