> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/clearpasscodecommand](https://developer.apple.com/documentation/devicemanagement/clearpasscodecommand)

# ClearPasscodeCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · visionOS 1.1+ · watchOS 10.0+

The command to remove the passcode from a device.

## Declaration

```
object ClearPasscodeCommand
```

## Properties

- `Command` — `ClearPasscodeCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Mentioned In

- [Managing passcodes](managing-passcodes.md)
- [Handling NotNow status responses](handling-notnow-status-responses.md)

## Topics

### Objects

- [ClearPasscodeCommand.Command](clearpasscodecommand/command-data.dictionary.md): The command to remove the passcode from a device.

## See Also

### Commands and responses

- [ClearPasscodeResponse](clearpasscoderesponse.md): A response from the device after it processes the command to remove the passcode from a device.
