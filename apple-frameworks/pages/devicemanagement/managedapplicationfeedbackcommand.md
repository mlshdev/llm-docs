> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/managedapplicationfeedbackcommand](https://developer.apple.com/documentation/devicemanagement/managedapplicationfeedbackcommand)

# ManagedApplicationFeedbackCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 7.0+ · macOS 11.0+ · tvOS 10.2+ · visionOS 1.1+

The command to get app feedback from a managed app on the device.

## Declaration

```
object ManagedApplicationFeedbackCommand
```

## Properties

- `Command` — `ManagedApplicationFeedbackCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Topics

### Objects

- [ManagedApplicationFeedbackCommand.Command](managedapplicationfeedbackcommand/command-data.dictionary.md): The command to get app feedback from a managed app on the device.

## See Also

### Commands and responses

- [ManagedApplicationFeedbackResponse](managedapplicationfeedbackresponse.md): A response from the device after it processes the command to get app feedback from a managed app on the device.
