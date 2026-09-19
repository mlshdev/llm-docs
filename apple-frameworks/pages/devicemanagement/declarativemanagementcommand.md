> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/declarativemanagementcommand

# DeclarativeManagementCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.1+ · watchOS 10.0+

The command to enable your server to support declarative management or trigger a declarative management synchronization operation on the device.

## Declaration

```
object DeclarativeManagementCommand
```

## Properties

- `Command` — `DeclarativeManagementCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Mentioned In

- [Integrating declarative management](integrating-declarative-management.md)

## Topics

### Objects

- [DeclarativeManagementCommand.Command](declarativemanagementcommand/command-data.dictionary.md): The command to enable your server to support declarative management or trigger a declarative management synchronization operation on the device.

## See Also

### Commands and responses

- [DeclarativeManagementResponse](declarativemanagementresponse.md): A response from the device after it processes the command to enable your server to support declarative management or trigger a declarative management synchronization operation on the device.
