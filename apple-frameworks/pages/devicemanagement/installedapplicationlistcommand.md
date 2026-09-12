> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/installedapplicationlistcommand](https://developer.apple.com/documentation/devicemanagement/installedapplicationlistcommand)

# InstalledApplicationListCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 5.0+ · macOS 10.7+ · tvOS 10.2+ · visionOS 1.1+ · watchOS 10.0+

The command to get a list of the installed apps on a device.

## Declaration

```
object InstalledApplicationListCommand
```

## Properties

- `Command` — `InstalledApplicationListCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Mentioned In

- [Handling NotNow status responses](handling-notnow-status-responses.md)

## Topics

### Objects

- [InstalledApplicationListCommand.Command](installedapplicationlistcommand/command-data.dictionary.md): The command to get a list of the installed apps on a device.

## See Also

### Commands and responses

- [InstalledApplicationListResponse](installedapplicationlistresponse.md): A response from the device after it processes the command to get a list of the installed apps on a device.
