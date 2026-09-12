> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/managedmedialistcommand](https://developer.apple.com/documentation/devicemanagement/managedmedialistcommand)

# ManagedMediaListCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+

The command to get a list of the managed books on a device.

## Declaration

```
object ManagedMediaListCommand
```

## Properties

- `Command` — `ManagedMediaListCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Topics

### Objects

- [ManagedMediaListCommand.Command](managedmedialistcommand/command-data.dictionary.md): The command to get a list of the managed books on a device.

## See Also

### Commands and responses

- [ManagedMediaListResponse](managedmedialistresponse.md): A response from the device after it processes the command to get a list of the managed books on a device.
