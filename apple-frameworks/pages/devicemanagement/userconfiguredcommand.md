> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/userconfiguredcommand](https://developer.apple.com/documentation/devicemanagement/userconfiguredcommand)

# UserConfiguredCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

The command to inform the device that it can continue past Setup Assistant and finish login.

## Declaration

```
object UserConfiguredCommand
```

## Properties

- `Command` — `UserConfiguredCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Topics

### Objects

- [UserConfiguredCommand.Command](userconfiguredcommand/command-data.dictionary.md): The command to inform the device that it can continue past Setup Assistant and finish login.

## See Also

### Commands and responses

- [UserConfiguredResponse](userconfiguredresponse.md): A response from the device after it processes the command to inform the device that it can continue past Setup Assistant and finish login.
