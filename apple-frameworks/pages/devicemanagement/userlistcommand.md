> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/userlistcommand

# UserListCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 9.3+ · macOS 10.13+

The command to get a list of users with active accounts on a device.

## Declaration

```
object UserListCommand
```

## Properties

- `Command` — `UserListCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Mentioned In

- [Handling NotNow status responses](handling-notnow-status-responses.md)

## Topics

### Objects

- [UserListCommand.Command](userlistcommand/command-data.dictionary.md): The command to get a list of users with active accounts on a device.

## See Also

### Commands and responses

- [UserListResponse](userlistresponse.md): A response from the device after it processes the command to get a list of users with active accounts on a device.
