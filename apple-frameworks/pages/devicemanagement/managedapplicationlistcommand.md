> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/managedapplicationlistcommand](https://developer.apple.com/documentation/devicemanagement/managedapplicationlistcommand)

# ManagedApplicationListCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 5.0+ · macOS 11.0+ · tvOS 10.2+ · visionOS 1.1+ · watchOS 10.0+

The command to get the status of all managed apps on a device.

## Declaration

```
object ManagedApplicationListCommand
```

## Properties

- `Command` — `ManagedApplicationListCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Topics

### Objects

- [ManagedApplicationListCommand.Command](managedapplicationlistcommand/command-data.dictionary.md): The command to get the status of all managed apps on a device.

## See Also

### Commands and responses

- [ManagedApplicationListResponse](managedapplicationlistresponse.md): A response from the device after it processes the command to get the status of all managed apps on a device.
