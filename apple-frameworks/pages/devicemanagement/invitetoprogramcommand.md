> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/invitetoprogramcommand](https://developer.apple.com/documentation/devicemanagement/invitetoprogramcommand)

# InviteToProgramCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 7.0+ · macOS 10.9+

The command to invite a user to join the Volume Purchase Program (VPP).

## Declaration

```
object InviteToProgramCommand
```

## Properties

- `Command` — `InviteToProgramCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Topics

### Objects

- [InviteToProgramCommand.Command](invitetoprogramcommand/command-data.dictionary.md): The command to invite a user to join the Volume Purchase Program (VPP).

## See Also

### Commands and responses

- [InviteToProgramResponse](invitetoprogramresponse.md): A response from the device after it processes the command to invite a user to join the Volume Purchase Program (VPP).
