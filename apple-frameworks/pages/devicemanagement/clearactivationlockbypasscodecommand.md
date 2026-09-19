> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/clearactivationlockbypasscodecommand

# ClearActivationLockBypassCodeCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 7.1+ · macOS 10.15+ · visionOS 2.0+

The command to clear the Activation Lock bypass code on a device.

## Declaration

```
object ClearActivationLockBypassCodeCommand
```

## Properties

- `Command` — `ClearActivationLockBypassCodeCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Mentioned In

- [Handling NotNow status responses](handling-notnow-status-responses.md)

## Topics

### Objects

- [ClearActivationLockBypassCodeCommand.Command](clearactivationlockbypasscodecommand/command-data.dictionary.md): The command to clear the Activation Lock bypass code on a device.

## See Also

### Commands and responses

- [ClearActivationLockBypassCodeResponse](clearactivationlockbypasscoderesponse.md): A response from the device after it processes the command to clear the Activation Lock bypass code on a device.
