> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/activationlockbypasscodecommand](https://developer.apple.com/documentation/devicemanagement/activationlockbypasscodecommand)

# ActivationLockBypassCodeCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 7.1+ · macOS 10.15+ · visionOS 2.0+

The command to get the code to bypass Activation Lock on a device.

## Declaration

```
object ActivationLockBypassCodeCommand
```

## Properties

- `Command` — `ActivationLockBypassCodeCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Mentioned In

- [Handling NotNow status responses](handling-notnow-status-responses.md)

## Topics

### Objects

- [ActivationLockBypassCodeCommand.Command](activationlockbypasscodecommand/command-data.dictionary.md): The command to get the code to bypass Activation Lock on a device.

## See Also

### Commands and responses

- [ActivationLockBypassCodeResponse](activationlockbypasscoderesponse.md): A response from the device after it processes the command to get the code to bypass Activation Lock on a device.
